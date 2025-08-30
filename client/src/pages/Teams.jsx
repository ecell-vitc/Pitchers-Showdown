import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Teams.css';

function Teams() {
  const [allTeams, setAllTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const teamsPerPage = 7;
  const navigate = useNavigate()

  // Fetch business teams from API
  useEffect(() => {
    const controller = new AbortController();
    
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://pitchers-showdown-server.onrender.com/api/business', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Teams data:', data);
        setAllTeams(data.teams || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
        if (error.name === 'AbortError') return;
        setLoading(false);
      }
    };

    fetchTeams();

    return () => {
      controller.abort();
    };
  }, []);

  // Make pagination
  const totalPages = Math.ceil(allTeams.length / teamsPerPage);
  const startIndex = (currentPage - 1) * teamsPerPage;
  const endIndex = startIndex + teamsPerPage;
  const currentTeams = allTeams.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Get business team color based on index 
  const getTeamColor = (index) => {
    const colors = [
      '#FF8C00', // Orange (Team 1)
      '#FF0000', // Red (Team 2)
      '#00FF00', // Green (Team 3)
      '#FF00FF', // Pink (Team 4)
      '#0000FF', // Blue (Team 5)
      '#87CEEB', // Light Blue (Team 6)
      '#7CFC00', // Lime Green (Team 7)
    ];
    return colors[index % colors.length];
  };

  // Navigation handling
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle team selection
  const handleTeamClick = (team) => {
    navigate(team.id)
  };

  if (loading) {
    return (
      <div className="teams-container">
        <div className="loading">Loading teams...</div>
      </div>
    );
  }

  return (
    <div className="teams-container">

      {/* Main Content */}
      <div className="teams-content">
        {/* Left Navigation Arrow */}
        <div className="nav-arrow left-arrow" onClick={goToPreviousPage}>
          <div className="arrow-icon">←</div>
        </div>

        {/* Teams Grid */}
        <div className="teams-grid">
          {/* Show 7 teams per page in 2-3-2 layout */}
          {currentTeams.map((team, index) => (
            
            <div
              key={team.id}
              className={`team-panel team-${(index % 7) + 1}`}
              style={{ backgroundColor: getTeamColor(index) }}
              onClick={() => handleTeamClick(team)}
            >
              <div className="team-number">Team {startIndex + index + 1}</div>
              <div className="team-name">{team.team_name}</div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <div className="nav-arrow right-arrow" onClick={goToNextPage}>
          <div className="arrow-icon">→</div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {generatePageNumbers().map(page => (
          <button
            key={page}
            className={`page-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="teams-footer">
        <a href="/logout" className="logout-link">
          Logout →
        </a>
      </footer>
    </div>
  );
}

export default Teams;
