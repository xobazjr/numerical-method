function sum(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum += x[i];
    }
    return sum;
}

function pow_sum(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum += Math.pow(x[i],2);
    }
    return sum;
}

function multiple_sum(x,y){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum += x[i] * y[i];
    }
    return sum;
}

function linear_regression(points,x,y){
    let a0,a1;

    a0 = (sum(y) * pow_sum(x) - multiple_sum(x,y) * sum(x)) / (points.length * pow_sum(x) - Math.pow(sum(x),2));
    a1 = (9 * multiple_sum(x,y) - sum(x) * sum(y)) / (9 * pow_sum(x) - Math.pow(sum(x),2));

    console.log("g(x) = "+parseFloat(a0).toFixed(6)+" + "+parseFloat(a1).toFixed(6)+"x");
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

let x = points.map(points => points.x)
let y = points.map(points => points.y)

linear_regression(points,x,y)


