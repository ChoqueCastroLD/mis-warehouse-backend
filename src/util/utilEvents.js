/** Try to Parse data if possible */
function fixData(data) {
    if(typeof data === "string"){
        try {
            return JSON.parse(data);
        } catch (error) {}
    }
    return data;
}

/** Load events object into socket */
function loadEvents(events, socket) {
    for (const key in events) {
        for (const method in events[key]) {
            const fn = events[key][method];
            const event = key+":"+method;
            socket.on(event, (d, response) => {
                socket.event = event;

                socket.getSession = (prop) => {socket.handshake.session[prop]; socket.handshake.session.save()}
                socket.setSession = (prop, value) => {socket.handshake.session[prop] = value; socket.handshake.session.save()}

                fn( socket, fixData(d) )
                .then( r => {
                    response({status: true, data: r});
                })
                .catch( err => {
                    console.log("error ", err);

                    if(err.stack)
                        err = err.toString();
                    response({status: false, error: err || 'Internal Server Error'});
                } );
            });
        }
    }
    
}
/** list events */
function listEvents(events) {
    console.log("Cargando eventos disponibles: ");
    for (const key in events) {
        for (const method in events[key]) {
            const event = key+":"+method;
            console.log("\t > ", event);
        }
    }
}

/** Export Utilities */
module.exports = {
    loadEvents,
    listEvents
};