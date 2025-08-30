import React, { useEffect, useState } from "react";
import { fetchTeam, fetchInvestor, investInTeam } from "../../lib/api";
import "../styles/InvestorPopup.css";

export default function InvestorPopup({ teamId, investorId, isOpen, onClose }) {
    const [team, setTeam] = useState(null);
    const [investor, setInvestor] = useState(null);
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
    if (!isOpen) return;

    async function fetchData() {
        try {
        const teamData = await fetchTeam(teamId);
        const investorData = await fetchInvestor(investorId);
        setTeam(teamData);
        setInvestor(investorData);
        setError("");
        } catch {
        setError("Failed to load data.");
        }
    }
    fetchData();
    }, [isOpen, teamId, investorId]);

    const isValidAmount = () => {
    if (!amount) return false;
    const num = Number(amount);
    return team && investor && num > 0 && num <= investor.purse && num <= team.remaining_amount;
    };

    async function handleInvest() {
    setError("");
    if (!isValidAmount()) {
        setError("Please enter a valid amount within your purse and team's remaining amount.");
        return;
    }
    setLoading(true);
    try {
        const updatedData = await investInTeam({
        teamId,
        investorId,
        amount: Number(amount),
        });
        setTeam(updatedData.team);
        setInvestor(updatedData.investor);
        setAmount("");
        alert("Investment successful");
        onClose();
    } catch {
        setError("Investment failed. Try again.");
    } finally {
        setLoading(false);
    }
    }

    if (!isOpen) return null;

    return (
    <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h2>{team ? team.name : "Loading..."}</h2>
        {team && (
            <>
            <a href={team.presentation_link} target="_blank" rel="noreferrer">
                Presentation
            </a>
            <p style={{ color: "green" }}>
                Remaining Amount: {team.remaining_amount} Lakhs
            </p>
            </>
        )}
        {investor && (
            <p style={{ color: "blue" }}>
            Your Purse: {investor.purse} Lakhs
            </p>
        )}
        <div className="investment-form">
            <input
            type="number"
            min="1"
            max={team ? Math.min(team.remaining_amount, investor?.purse) : undefined}
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
            />
            <button
            disabled={!isValidAmount() || loading}
            onClick={handleInvest}
            >
            {loading ? "Investing..." : "Invest"}
            </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="close-btn" onClick={onClose} disabled={loading}>
            Close
        </button>
        </div>
    </div>
    );
}
