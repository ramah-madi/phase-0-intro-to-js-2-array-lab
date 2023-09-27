// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
   cats.push(name) 
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCat = [...cats, name]
    return newCat
}

function prependCat(name) {
    const firstApendCat = [name, ...cats]
    return firstApendCat
}

function removeLastCat() {
    const removeLast = cats.slice(0, cats.length -1)
    return removeLast
}

function removeFirstCat() {
    const removeFirst = cats.slice(1)
    return removeFirst
}