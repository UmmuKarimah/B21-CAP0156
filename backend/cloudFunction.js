const fetch = require("node-fetch");
const TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3MTllYjk1N2Y2OTU2YjU4MThjMTk2OGZmMTZkZmY3NzRlNzA4ZGUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF6cCI6ImNsb3VkLWZ1bmN0aW9uLWFjY291bnRAY2Fwc3RvbmUtYjIxLWNhcDAxNTYuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJlbWFpbCI6ImNsb3VkLWZ1bmN0aW9uLWFjY291bnRAY2Fwc3RvbmUtYjIxLWNhcDAxNTYuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZXhwIjoxNjIyNjI0MjAyLCJpYXQiOjE2MjI2MjA2MDIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsInN1YiI6IjExNzg0OTk5MTMyNzA1NTAwMzM2MiJ9.nnRU_j4ljsdewG7SybcCiIURsvUwuMBXT17bAEh4fhwVLwL3ukL9mNlxvDNPdWKjFFQuCs2WRgZaQtBqWrm5mk5b81ugYb1G9EPDpahMVWxul6PR0A5NFQeDMRKvAUdA3mtrD04jvqAydSqRmINSu0A7DvABWkKpnZuB8A-lmQnQp5qgqm9pq823Nlzr7-4XA31gDIkP1t98IkYuKLZdWcGwN8RsXHcbaRiFuUfTbUd581OBIVs9HugNRAVqkHzcX4d6IQay-u9XefzgAF780U9BktO73HCpF5t54jPcUdFZpBT5PEJVogBb5bpttiUa8qLg7wjWkL-fG0KOJqnUSg';
const getSentiment = (comment) => {
    const body = {
        comment
    }
    return fetch("https://asia-southeast2-capstone-b21-cap0156.cloudfunctions.net/text-predictions", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
        .then(res => res.json())
        .then(json => json.status)
        .then(status => {
            return status == 'POSITIVE';
        }).catch(e => {
            console.error(e)
            return false
        });
}

module.exports = { getSentiment }