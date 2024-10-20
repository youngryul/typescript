"use strict";
class Item {
}
class LocalStorage extends Item {
    constructor() {
        super(...arguments);
        this.storage = {};
    }
    setItem(key, value) {
        if (this.storage[key] !== undefined) {
            console.log("insert...");
            this.storage[key] = value;
        }
        else {
            console.log("update...");
            this.storage[key] = value;
        }
    }
    getItem(key) {
        return this.storage[key];
    }
    clearItem(key) {
        delete this.storage[key];
    }
    clear() {
        Object.keys(this.storage).forEach(key => delete this.storage[key]);
    }
}
// Test
const testStorage = new LocalStorage();
testStorage.setItem("A", 1234);
console.log("setItem", testStorage);
console.log("getItem", testStorage.getItem("A"));
testStorage.clearItem("A");
testStorage.setItem("A", "change");
testStorage.setItem("B", "1234");
testStorage.setItem("C", "test");
console.log("setItem", testStorage);
testStorage.clear();
console.log("clear", testStorage);
// test
const geo = navigator.geolocation;
geo.getCurrentPosition((position) => {
    console.log('위치:', position.coords.latitude, position.coords.longitude);
}, (error) => {
    console.error(`오류(${error.code}): ${error.message}`);
}, { enableHighAccuracy: true });
const watchId = geo.watchPosition((position) => {
    console.log('현재 위치:', position.coords.latitude, position.coords.longitude);
}, (error) => {
    console.error(`오류(${error.code}): ${error.message}`);
}, { enableHighAccuracy: true });
geo.clearWatch(watchId);
