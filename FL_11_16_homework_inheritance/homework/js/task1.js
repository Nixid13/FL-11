function assign(targetItem) {

    if (targetItem === undefined || targetItem === null) {
        throw new Error('Could not convert to object');
    }
    let targetObj = Object(targetItem);
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined && arguments[i] !== null) {
            for (let prop in arguments[i]) {
                if (Object.prototype.hasOwnProperty.call(arguments[i], prop)) {
                    targetObj[prop] = arguments[i][prop];
                }
            }
        }
    }
    return targetObj;
}
