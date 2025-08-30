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
    <div className="investment-popup-bg" onClick={onClose}>
        <div
        className="investment-popup-bubble"
        onClick={e => e.stopPropagation()}
        >
        <h2>{team ? team.name : "Loading..."}</h2>
        <div className="description">
            {team
            ? team.description || (
                <>
                    team description team description team description
                    <br />
                    team description team descriptionteam description
                </>
                )
            : ""}
        </div>
        <form
            className="investment-popup-form"
            onSubmit={e => {
            e.preventDefault();
            handleInvest();
            }}
        >
            <input
            type="number"
            min="1"
            max={team && investor ? Math.min(team.remaining_amount, investor.purse) : undefined}
            placeholder="Enter Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            disabled={loading}
            autoFocus
            />
            <button
            type="submit"
            disabled={!isValidAmount() || loading}
            >
            {loading ? "Investing..." : "Invest"}
            </button>
        </form>
        {team && (
            <div className="remaining-amount-label">
            Remaining Amount: {team.remaining_amount}/-
            </div>
        )}
        {error && (
            <div className="error-message" style={{ marginTop: 8 }}>
            {error}
            </div>
        )}
        <button
            type="button"
            className="investment-popup-close-btn"
            onClick={onClose}
            disabled={loading}
        >
            &larr; Close
        </button>
        </div>
    </div>
    );
}
