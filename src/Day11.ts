// LocalStorage Api
interface MiniStorage<T> {
    [key:string]:T
}
abstract class Item<T> {

    abstract setItem(key:string, value:T):void;
    abstract getItem(key:string):T;
    abstract clearItem(key:string):void;
    abstract clear():void;

}

class LocalStorage<T> extends Item<T> {
    public storage: MiniStorage<T> = {}
    setItem(key:string, value:T) {
        if(this.storage[key] !== undefined){
            console.log("insert...")
            this.storage[key] = value
        }
        else {
            console.log("update...")
            this.storage[key] = value
        }
    }

    getItem(key: string): T {
        return this.storage[key];
    }

    clearItem(key: string) {
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


// Geolocation
interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface Position {
    coords: {
        latitude: number;
        longitude: number;
    };
    timestamp: number;
}

interface GeolocationError {
    code: number;
    message: string;
}

interface Geolocation {
    getCurrentPosition(successFn: (position: Position) => void): void;
    getCurrentPosition(successFn: (position: Position) => void, errorFn: (error: GeolocationError) => void): void;
    getCurrentPosition(successFn: (position: Position) => void, errorFn: (error: GeolocationError) => void, options: GeolocationOptions): void;

    watchPosition(successFn: (position: Position) => void): number;
    watchPosition(successFn: (position: Position) => void, errorFn: (error: GeolocationError) => void): number;
    watchPosition(successFn: (position: Position) => void, errorFn: (error: GeolocationError) => void, options: GeolocationOptions): number;

    clearWatch(id: number): void;
}

// test
if ("geolocation" in navigator) {
    const geo: Geolocation = navigator.geolocation;

    // 현재 위치 가져오기
    geo.getCurrentPosition(
        (position) => {
            console.log('위치:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
            console.error(`오류(${error.code}): ${error.message}`);
        },
        { enableHighAccuracy: true }
    );

    // 위치 감시 시작
    const watchId = geo.watchPosition(
        (position) => {
            console.log('현재 위치:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
            console.error(`오류(${error.code}): ${error.message}`);
        },
        { enableHighAccuracy: true }
    );

    // 위치 감시 중지
    geo.clearWatch(watchId);
} else {
    console.error("Geolocation API를 지원하지 않는 브라우저입니다.");
}
