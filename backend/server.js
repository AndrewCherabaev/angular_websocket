const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 4201});

function heartbeat() {
    this.isAlive = true;
}

let iterator;

wss.on('connection', function connection(ws) {

    ws.isAlive = true;
    ws.on('pong', heartbeat);

    ws.on('message', function incoming(message) {

    });

    iterator = setInterval(function () {
        wss.clients.forEach(function each(client) {
            if (client === ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    code: 'AAS1-ASDW-VNRH-34RF',
                    user_id: 1
                }));
            }
        });
    }, 10000);

});

wss.on('close', function () {
    clearInterval(iterator);
});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping('', false, true);
    });
}, 30000);