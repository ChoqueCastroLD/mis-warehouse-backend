const client = io('http://localhost:3000');

client._emit = client.emit;

client.emit = (event, payload) => new Promise((resolve, reject) => {
    client._emit(event, payload, (res) => {
        if (res.status === true)
            resolve(res);
        else
            reject(res);
    })
});