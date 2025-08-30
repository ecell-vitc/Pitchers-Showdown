const BASE_URL = 'https://pitchers-showdown-server.onrender.com'

export async function fetchBusinessById(businessId) {
    const response = await fetch(`${BASE_URL}/api/business/${businessId}`);
    if (!response.ok) throw new Error("Failed to fetch business info");
    return response.json();
}

export const fetchTeam = fetchBusinessById;

export async function investInBusiness(businessId, amount, token) {
    return fetch(`${BASE_URL}/api/business/${businessId}`, {
    method: "POST",
    headers: {  "x-access-token": token, "Content-Type": "application/json" },
    body: JSON.stringify({ amt: amount }),
    });
}

export const investInTeam = ({ teamId, amount, token }) => investInBusiness(teamId, amount, token);
