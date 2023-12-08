export const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

export const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('')
    }, 2500);
}

export const isValidEmail = (value) => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    return regex.test(value)
}