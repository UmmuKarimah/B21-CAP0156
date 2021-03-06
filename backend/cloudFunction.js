const fetch = require("node-fetch");
const getSentiment = (comment) => {
    const body = {
        comment
    }
    return fetch('https://asia-southeast2-capstone-b21-cap0156.cloudfunctions.net/text-predictions-public', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
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

const getClustering = (reportCase) => {
    const body = {
        case: reportCase
    }
    return fetch('https://asia-southeast2-capstone-b21-cap0156.cloudfunctions.net/clustering-public', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => json.Group)
        .catch(e => {
            console.error(e)
        });
}

module.exports = { getSentiment, getClustering };