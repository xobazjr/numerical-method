const math = require("mathjs");

function lagrange_interpolation(xy,x){
    //where Li(x)
    for(let i=0;i<math.size(xy);i++){
        let temp = 1;
        for(let j=0;j<math.size(xy);j++){
            if(j!=i){
                temp *= (x - xy[j].x) / (xy[i].x - xy[j].x);
            }
        }
        xy[i].l = temp;
    }

    let temp = 0;
    //General Form f(x)
    for(let i=0;i<math.size(xy);i++){
        temp += xy[i].l * xy[i].y;
    }

    return temp;
}

let x = 42000;

let point = [
    {x: 0, y: 9.81},
    {x: 20000, y: 9.7487},
    {x: 40000, y: 9.6879},
    {x: 60000, y: 9.6879},
    {x: 80000, y: 9.5682}
]

let linear_interpolation = [
    {x: point[0].x, y: point[0].y},
    {x: point[4].x, y: point[4].y}
]

let quadratic_interpolation = [
    {x: point[0].x, y: point[0].y},
    {x: point[2].x, y: point[2].y},
    {x: point[4].x, y: point[4].y}
]

let polynomial_interpolation = [
    {x: point[0].x, y: point[0].y},
    {x: point[1].x, y: point[1].y},
    {x: point[2].x, y: point[2].y},
    {x: point[3].x, y: point[3].y},
    {x: point[4].x, y: point[4].y}
]

console.log("linear interpolation = "+lagrange_interpolation(linear_interpolation,x).toFixed(6))
console.log("quadratic interpolation = "+lagrange_interpolation(quadratic_interpolation,x).toFixed(6))
console.log("polynomial interpolation = "+lagrange_interpolation(polynomial_interpolation,x).toFixed(6))