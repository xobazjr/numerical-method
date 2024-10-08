const math = require('mathjs'); //import math.js

function polynomial_regression(x,y,fx){
    let sumx2=0,sumx3=0,sumx4=0,sumxy=0,sumx2y=0,n=x.length;

    for(let i=0;i<n;i++){ 
        sumx2 += Math.pow(x[i],2);
        sumx3 += Math.pow(x[i],3);
        sumx4 += Math.pow(x[i],4);
        sumxy += x[i] * y[i];
        sumx2y += Math.pow(x[i],2) * y[i];
    }

    let A = [
        [n, math.sum(x),sumx2],
        [math.sum(x),sumx2,sumx3],
        [sumx2,sumx3,sumx4],
    ]
    A = math.inv(A); //matrix inverse

    let B = [math.sum(y),sumxy,sumx2y]; 

    let a = math.multiply(A,B); //multiply matrix A and B

    return "f(x) = "+parseFloat(a[0]).toFixed(6)+" + "+parseFloat(a[1]).toFixed(6)+"x"+" + "+parseFloat(a[2]).toFixed(6)+"x^2"+"\n"+
           "f("+fx+") = "+parseFloat((a[0] + a[1] * fx + a[2] * Math.pow(fx,2))).toFixed(6);
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

console.log(polynomial_regression(x,y,fx));