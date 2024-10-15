const math = require('mathjs');

function interpolation_and_extrapolation_i(points,n){
    let sum = 0;

    for(let i=0;i<points.length;i++){
        let term = points[i].y;
        let xi = points[i].x;
        for(let j=0;j<points.length;j++){
            if(j != i){
                term *= (n - points[j].x) / (xi - points[j].x);
            }
        }
        sum += term;
    }
    return parseFloat(sum).toFixed(6);
}

let x = [0,20000,40000,60000,80000];
let y = [9.81,9.7487,9.6879,9.6879,9.5682];
let n = 46348;

let linear_interpolation = [
    {x: x[0],y: y[0]},
    {x: x[4],y: y[4]}
];

let quadratic_interpolation = [
    {x: x[0],y: y[0]},
    {x: x[2],y: y[2]},
    {x: x[4],y: y[4]}
];

let polynomial_interpolation = [
    {x: x[0],y: y[0]},
    {x: x[1],y: y[1]},
    {x: x[2],y: y[2]},
    {x: x[3],y: y[3]},
    {x: x[4],y: y[4]}
]

console.log(interpolation_and_extrapolation_i(linear_interpolation,n));
console.log(interpolation_and_extrapolation_i(quadratic_interpolation,n));
console.log(interpolation_and_extrapolation_i(polynomial_interpolation,n));