export default  {

    get(key) {
        return localStorage[key];
    },

    set(key, value) {
        localStorage[key] = value;
    },

    remove(key) {
        localStorage.removeItem(key);
    },

    getJSON(key) {

        var value = this.get(key);
        try {
            return value != undefined ? JSON.parse(value) : null;
        } catch (e) {
            throw `unable to convert key "${key}" with value "${value}" to JSON`;
        }
    },

    setJSON(key, json) {
        var savedValue = JSON.stringify(json);
        this.set(key, savedValue);
    }
};