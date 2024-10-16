// Call Signatures
type oneFunction = {
    <T> (arr: T[]): T
    <T> (arr: T[]): number
}

type twoFunction = {

    <T> (arr: T[], item: T): T[]
    <T> (arr: T[], item: T[]): T[]
}

type findFunction = {
    <T> (arr:T[], item: T): number | null
}

type sliceFunction = {
    <T> (arr: T[], start: number, end?: number): T[]
}

// Function
const last:oneFunction = (arr) => {
    return arr[arr.length - 1]
}

const prepend:twoFunction = (arr, item) => {
    if( typeof item !== "object") {
        arr.unshift(item)
    }

    return arr
}

const mix:twoFunction = (arr, arr2) => {
    if( Array.isArray(arr2)) {
        arr = [...arr, ...arr2]
    }

    return arr
}

const count:oneFunction = (arr) => {
    return arr.length
}

const findIndex:findFunction = (arr, item) => {
    if( arr.indexOf(item) !== -1 ){
        return arr.indexOf(item)
    }
    else {
        return null
    }
}

const slice:sliceFunction = (arr, start, end) => {
    if(end === undefined){
        return arr.slice(start)
    }
    else {
        return arr.slice(start, end)
    }
}


// Test
const arrTest = [1, "2", 3, "4", "5"]
const newArr = ["새로운", "배열", "생성"]

console.log("last Test : " + last(arrTest))
console.log("prepend Test : " + prepend(arrTest, "추가"))
console.log("mix Test : " + mix(arrTest, newArr))
console.log("count Test : " + count(arrTest))
console.log("findIndex Test :" + findIndex(arrTest, "4"))
console.log("slice start Test : " + slice(arrTest, 1))
console.log("slice start end Test : " + slice(arrTest, 1, 4))
