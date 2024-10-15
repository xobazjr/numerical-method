const math = require('mathjs');

function linear_spline(x,y,n){

    for(let i=1;i<x.length;i++){
        let fx = y[i-1] + ((y[i] - y[i-1]) / (x[i] - x[i-1])) * (n - x[i-1]); // yi + ((y[i] - y[i-1]) / (x[i] - x[i-1])) * 4.5 - x[i-1] if i === 1
        if(n >= x[i-1] && n <= x[i]){
            return parseFloat(fx).toFixed(6);
        }
    }

    return null;
}

let x = [2,4,6,8,10];
let y = [9.5,8.0,10.5,39.5,72.5];
let n = 4.5;

console.log(linear_spline(x,y,n));