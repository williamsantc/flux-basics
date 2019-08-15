const FOOAT = require('./action-types/foo-actions-types');
const BARAT = require('./action-types/bar-action-types');
const Dispatcher = require('./dispatcher');
const FOOACTIONS = require('./actions/foo-actions');
const BARACTIONS = require('./actions/bar-actions');

let foo = 0

let bar = 1


const fooStore = (action) => {
    switch (action.type) {
        case FOOAT.INCREMENT:
            foo++;
            /* should update view here */
            break;
        case FOOAT.DECREMENT:
            foo--;
            /* should update view here */
            break;
        case FOOAT.ADD:
            foo += action.payload
            /* should update view here */
            break;
    }
}

const barStore = (action) => {
    switch (action.type) {
        case BARAT.SUBTRACT:
            bar -= action.payload;
            /* should update view here */
            break;
        case BARAT.MULTIPLY:
            bar *= action.payload;
            /* should update view here */
            break;

    }
}
Dispatcher.register(fooStore);
Dispatcher.register(barStore);