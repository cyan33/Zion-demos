export function removeMultiElementFromArray(arr, ...indexes) {
    indexes.sort((a, b) => b - a);  // decendent

    for (let i = 0; i< indexes.length; i++) {
        arr.splice(indexes[i], 1);
    }

    return arr;
}
