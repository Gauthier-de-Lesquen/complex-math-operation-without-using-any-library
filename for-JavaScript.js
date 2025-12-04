function sqrt(s) { //calculating square root using babylonian algorythm
    let x = s / 2;
    for (let i = 0; i < 30; i++) {
        x = (x + s / x) / 2;
    }
    return x;
}

function nthrt(n, s) { //calculating nth root using babylonian algorythm
    let x = s / 2;
    for (let i = 0; i < 30; i++) {
        x = ((n - 1) * x + s / x**(n - 1)) / n;
    }
    return x;
}

function factorial(n) { //calculating the factorial of n
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function sum(startTable, end, expr) { //calculating sigma sum
    let [start, varName] = startTable;
    start = parseInt(start);
    let total = 0;

    const fn = new Function(varName, `return ${expr};`);
    for (let n = start; n <= end; n++) {
        total += fn(n);
    }

    return total;
}

function product(startTable, end, expr) { //calculating pi product
    let [start, varName] = startTable;
    start = parseInt(start);
    let total = 1;

    const fn = new Function(varName, `return ${expr};`);
    for (let n = start; n <= end; n++) {
        total *= fn(n); 
    }

    return total;
}

function exp(x, terms = 30) { //exponential with Taylor series
    let s = 1;
    let num = 1;
    let den = 1;
    for (let n = 1; n <= terms; n++) {
        num *= x;
        den *= n;
        s += num / den;
    }
    return s;
}

function ln(a, iterations = 30) { //natural logarythm
    let x = a - 1;
    for (let i = 0; i < iterations; i++) {
        x = x - (exp(x) - a) / exp(x);
    }
    return x;
}

function sin(x, terms = 15) {
    let s = 0;
    let num = x;
    let den = 1;
    let sign = 1;

    for (let n = 1; n <= 2 * terms; n += 2) {
        s += sign * num / den;
        num *= x * x;
        den *= (n + 1) * (n + 2);
        sign = -sign;
    }
    return s;
}

function cos(x, terms = 15) {
    let s = 1;
    let num = 1;
    let den = 1;
    let sign = -1;

    for (let n = 2; n <= 2 * terms; n += 2) {
        num *= x * x;
        den *= (n - 1) * n;
        s += sign * num / den;
        sign = -sign;
    }
    return s;
}

function tan(x) {
    return sin(x) / cos(x);
}

function gcd(a, b){ //Greatest Common Divisor
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) { //Least Common Multiple
    return Math.floor(a * b / gcd(a, b));
}

