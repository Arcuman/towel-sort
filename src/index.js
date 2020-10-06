// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix)
        return result;
    let line = 0;
    for (let arr of matrix) {
        if (line % 2 == 0) {
            for (let i = 0; i < arr.length; i++) {
                result.push(arr[i]);
            }
        } else {
            for (let i = arr.length - 1; i >= 0; i--) {
                result.push(arr[i]);
            }
        }
        line++;
    }
    console.log(result);
    return result;
}
