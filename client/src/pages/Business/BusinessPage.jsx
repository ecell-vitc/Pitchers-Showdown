import React, { useState, useEffect } from "react";
import InvestorPopup from "../../components/InvestorPopup";
import { useParams } from "react-router-dom";
import { fetchBusinessById } from "../../../lib/api";

export default function BusinessPage() {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [error, setError] = useState("");
    const investorId = 1;

    useEffect(() => {
    async function loadBusiness() {
        try {
        const teamData = await fetchBusinessById(teamId);
        setTeam(teamData);
        setError("");
        } catch {
        setError("Failed to load business info.");
        }
    }
    loadBusiness();
    }, [teamId]);

    if (!investorId) {
    return <p>Please log in to invest.</p>;
    }

    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "55px" }}>
        <div style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 4px 24px rgba(44,62,80,0.09)", minWidth: "380px", maxWidth: "90vw", padding: "2.2rem 2.5rem", margin: "0 auto" }}>
        {team ? (
            <>
            <h1 style={{ margin: 0, fontWeight: 600, fontSize: "1.4rem" }}>Team {team.name}</h1>
            <a href={team.presentation_link} target="_blank" rel="noreferrer" style={{ color: "#3559e0" }}>
                Presentation
            </a>
            <p style={{ color: "green", margin: "7px 0 18px 0", fontWeight: 500 }}>
                Remaining Amount: {team.remaining_amount} Lakhs
            </p>
            <div style={{ background: "#f5f6fa", borderRadius: 7, padding: "1.1em 1.45em", marginTop: "22px", fontWeight: 500 }}>
                <div style={{ marginBottom: 6, fontSize: "1.07rem", color: "#22223b" }}>Investment Form</div>
                <InvestorPopup
                teamId={teamId}
                investorId={investorId}
                isOpen={popupOpen}
                onClose={() => setPopupOpen(false)}
                />
                <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                <input
                    type="number"
                    min="1"
                    placeholder="Enter Amount"
                    style={{
                    flex: 1,
                    padding: "0.6em 0.7em",
                    fontSize: "1rem",
                    border: "1px solid #e0e0e0",
                    borderRadius: 4,
                    outline: "none",
                    background: "#fff"
                    }}
                    disabled
                />
                <button
                    style={{
                    marginLeft: 14,
                    background: "#3559e0",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    padding: "0.54em 1.3em",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer"
                    }}
                    disabled
                >
                    Invest
                </button>
                </div>
            </div>
            </>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    </div>
    );
}
