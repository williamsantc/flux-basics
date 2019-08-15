let _callbacks = [];

class Dispatcher {

    constructor() {
        this._lastID = 1;
    }

    register(callback) {
        let id = `callback_${this._lastID++}`;
        _callbacks[id] = callback;
        return id;
    }

    dispatch(action) {
        /* ... */
        for (var id in _callbacks) {
            _callbacks[id](action);
        }
        /* ... */
    }
}

module.exports = new Dispatcher();

