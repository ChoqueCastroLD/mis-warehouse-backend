const { loadEvents, listEvents } = require('../util/utilEvents');

const events = {
    superuser: require('../events/superuser'),
    warehouse: require('../events/warehouse'),
    //goods: require('../events/goods')
}

listEvents(events);

module.exports = (socket) => loadEvents(events, socket);