
exports.getCurrentDate = () => {
    const array = new Date().toLocaleDateString().split('.')
    return new Date(array[2], parseInt(array[1]) - 1, parseInt(array[0]) + 1);
}