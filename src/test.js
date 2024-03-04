function add(num1, num2) {
    console.log(num1);
    return num1 + num2;
}
console.log(add(1, 1));
add(1, 1);
function combine(input1, input2) {
    console.log(typeof input1)
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "number" && typeof input2 === "string") {
        return input1 + input2;
    }
}
console.log(combine(1, 2));
