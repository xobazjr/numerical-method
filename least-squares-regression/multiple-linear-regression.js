const math = require('mathjs');

function multiple_linear_regression(x1,x2,x3,y,fx){
    let A = [
        [x1.length,math.sum(x1),math.sum(x2),math.sum(x3)],
        [math.sum(x1),math.multiply(x1,x1),math.multiply(x1,x2),math.multiply(x1,x3)],
        [math.sum(x2),math.multiply(x1,x2),math.multiply(x2,x2),math.multiply(x2,x3)],
        [math.sum(x3),math.multiply(x1,x3),math.multiply(x2,x3),math.multiply(x3,x3)]
    ]

    let B = [math.sum(y),math.multiply(x1,y),math.multiply(x2,y),math.multiply(x3,y)];
    
    A = math.inv(A); //matrix inverse

    let a = math.multiply(A,B); //multiply matrix A and B

    return "f(x) = "+parseFloat(a[0]).toFixed(6)+" + "+parseFloat(a[1]).toFixed(6)+"x1"+" + "+parseFloat(a[2]).toFixed(6)+"x2"+" + "+parseFloat(a[3]).toFixed(6)+"x3";
}

let points = [
    {x1: 1,x2: 0,x3: 1,y: 4},
    {x1: 0,x2: 1,x3: 3,y: -5},
    {x1: 2,x2: 4,x3: 1,y: -6},
    {x1: 3,x2: 2,x3: 2,y: 0},
    {x1: 4,x2: 1,x3: 5,y: -1},
    {x1: 2,x2: 3,x3: 3,y: -7},
    {x1: 1,x2: 6,x3: 4,y: -20},
]

let x1 = points.map(points => points.x1);
let x2 = points.map(points => points.x2);
let x3 = points.map(points => points.x3);
let y = points.map(points => points.y);
let fx = 65;

console.log(multiple_linear_regression(x1,x2,x3,y,fx));