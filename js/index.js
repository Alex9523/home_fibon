function fibonachi(stop) {
    let next;
    let previous = 1;
    let number = 1;
    for (let i = 0; i < stop - 2; i++) {
        let temp;

        next = previous + number;

        temp = number;
        number = next;
        previous = temp;

    }
    return number;
}

let numberMethod1 = prompt('Enter number. Method 1', 0);
document.write(fibonachi(numberMethod1) + "<br>");


function fibon(stop) {
    let next;
    let previous = 1;
    let number = 1;
    let arrFibon = [1, 1];
    for (let i = 0; i < stop - 1; i++) {
        let temp;
        next = previous + number;
        arrFibon.push(next);
        temp = number;
        number = next;
        previous = temp;

    }
    return arrFibon[stop - 1];
}

let numberMethod2 = prompt('Enter number. method 2', 0);
document.write(fibonachi(numberMethod2) + "<br>");