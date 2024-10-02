const SERVER_URL = 'localhost:5000/api/'

export async function makeRequest(method, url, data, success, error) {
    const res = await fetch(SERVER_URL + url, {
        cache: 'no-store',
        method, mode: 'cors', headers: {
            'x-access-token': (localStorage.getItem('token') || ''),
            'content-type': (method == 'GET' ? '' : 'application/json')
        },
        body: (method == 'GET' ? null : JSON.stringify(data)),
    })

    if (!res.ok) return error(res.status)
    return success(res.json())
}