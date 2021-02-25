function createEmptyObject() {
    return Object.create(null);
}

console.log(Object.getPrototypeOf(createEmptyObject()));