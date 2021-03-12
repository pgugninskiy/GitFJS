export function getSimple(num) {

    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime ?
            `${num} is simple` :
            `${num} isn't simple`;
    } else if (num > 1000 || num < 1) {
        result = `${num} isn't correct`;
    }
    return result;
}

export function getPifagor(a, b, c) {
    let result;
    if (a ** 2 + b ** 2 === c ** 2) {
        result = 'Это прямоугольный треугольник!';
    } else {
        result = 'Это не прямоугольный треугольник!';
    }
    return result;
}

export function getMaxNum(a, b, c) {
    let result;
    if (a > b) {
        if (a > c) {
            result = "max is a";
        } else {
            result = "max is c";
        }
    } else if (b > c) {
        result = "max is b";
    } else {
        result = "max is c";
    }
    return result;
}

export function evenNumber (n) {
  let result;
  if (n % 2 === 0) {
  result = 'Число ' + n + ' четное!';
} else {
  result = 'Число ' + n + ' нечетное!';
}
  return result;
}