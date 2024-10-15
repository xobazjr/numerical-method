const math = require('mathjs');

function pow_sum(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum += Math.pow(x[i],2);
    }
    return sum;
}

function linear_regression(points,x,y,fx){
    let A = [
        [points.length,math.sum(x)],
        [math.sum(x),pow_sum(x)]
    ];
    A = math.inv(A)

    let B = [math.sum(y),math.multiply(x,y)];

    let a = math.multiply(A,B);

    return "f("+fx+") = "+parseFloat(a[0]).toFixed(6)+" + "+parseFloat(a[1]).toFixed(6)+"x"+"\n"+
           "f("+fx+") = "+((a[0] + (a[1] * fx)).toFixed(6));
}

let points = [
    {x: 10, y: 5},
    {x: 15, y: 9},
    {x: 20, y: 15},
    {x: 30, y: 18},
    {x: 40, y: 22},
    {x: 50, y: 30},
    {x: 60, y: 35},
    {x: 70, y: 38},
    {x: 80, y: 43}
]

let x = points.map(points => points.x);
let y = points.map(points => points.y);
let fx = 65;

console.log(linear_regression(points,x,y,fx));