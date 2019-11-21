
export const setSessionItem = (key, value) => window.sessionStorage.setItem(key, JSON.stringify(value))

export const getSessionItem = (key) => JSON.parse(window.sessionStorage.getItem(key))