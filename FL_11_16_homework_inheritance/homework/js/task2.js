function create(proto, props) {
    function Func() {
        // empty
    }

    Func.prototype = proto;
    const obj = new Func();

    if (typeof props === 'object') {
        for (let prop in props) {
            if (Object.prototype.hasOwnProperty.call(props, prop)) {
                obj[prop] = props[prop];
            }
        }
    }
    return obj;
}
