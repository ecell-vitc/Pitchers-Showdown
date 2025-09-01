import React, { useState, useEffect } from "react";
import "../styles/InvestorPopup.css"
import { useParams } from "react-router-dom";
import { fetchBusinessById, investInTeam } from "../../lib/api";
import useAuthStore from "../../lib/store";

export default function BusinessPage() {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);

    const token = useAuthStore(store => store.auth.user)
    const balance = useAuthStore(store => store.balance)
    const { setBalance } = useAuthStore()
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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

    const isValidAmount = () => {
        if (!amount) return false;
        const num = Number(amount);
        return num <= balance;
    };

    async function handleInvest() {
        setError("");
        if (!isValidAmount()) {
            setError("Please enter a valid amount within your purse and team's remaining amount.");
            return;
        }
        setLoading(true);
        try {
            const res = await investInTeam({ teamId, amount: Number(amount), token });
            const data = await res.json()
            console.log(data)
            if (!res.ok) { setError(data.error); return; }

            setAmount("");
            alert("Investment successful");
            setBalance(balance - amount)
        } catch {
            setError("Investment failed. Try again.");
        } finally {
            setLoading(false);
        }   
    }

    return (
    <div className="flex flex-col justify-center items-center h-screen">
        {team ? (
            <>
            <div className="investment-popup-bg">
                <div
                className="investment-popup-bubble"
                onClick={e => e.stopPropagation()}
                >
                <h1 className="text-black" style={{ margin: 0, fontWeight: 600, fontSize: "1.4rem" }}>Team {team.team_name}</h1>
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
                    max={balance}
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
                    Remaining Amount: {balance}/-
                    </div>
                )}
                {error && (
                    <div className="error-message" style={{ marginTop: 8 }}>
                    {error}
                    </div>
                )}
                </div>
            </div>
            </>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
}
