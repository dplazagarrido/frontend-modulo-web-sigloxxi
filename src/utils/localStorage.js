
export const setItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const getItem = (key) => JSON.parse(window.localStorage.getItem(key))