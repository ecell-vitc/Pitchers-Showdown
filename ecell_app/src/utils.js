export default async function makeRequest(method, url, data) {
    return await fetch('http://localhost:5000' + url, {
        cache: 'no-store',
        method, mode: 'cors', headers: {
            'x-access-token': (localStorage.getItem('token') || ''),
            'content-type': (method == 'GET' ? '' : 'application/json')
        },
        body: (method == 'GET' ? null : JSON.stringify(data)),
    }).then(res => res.json()).catch(err => { alert('An unexpected error occurred!'); return {} })
}