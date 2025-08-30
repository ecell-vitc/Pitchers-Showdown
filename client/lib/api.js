export async function fetchBusinessById(businessId) {
    const response = await fetch(`/api/business/${businessId}`);
    if (!response.ok) throw new Error("Failed to fetch business info");
    return response.json();
}

export const fetchTeam = fetchBusinessById;

export async function fetchInvestor(investorId) {
    const response = await fetch(`/api/investor/${investorId}`);
    if (!response.ok) throw new Error("Failed to fetch investor info");
    return response.json();
}

export async function investInBusiness(businessId, amount) {
    const response = await fetch(`/api/business/${businessId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error("Investment failed");
    return response.json();
}

export const investInTeam = ({ teamId, amount }) => investInBusiness(teamId, amount);
