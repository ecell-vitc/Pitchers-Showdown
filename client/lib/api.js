export async function investInBusiness(businessId, amount) {
    const response = await fetch(`/api/business/${businessId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error("Investment failed");
    return response.json();
}
