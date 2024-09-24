const math = require("mathjs");

function lagrange_interpolation(xy,x){
    let l = math.clone(xy);
    //where Li(x)
    for(let i=0;i<math.size(xy);i++){
        let temp = 1;
        for(let j=0;j<math.size(xy);j++){
            if(j!=i){
                temp *= (x - xy[j].x) / (xy[i].x - xy[j].x);
            }
        }
        l[i].x = temp;
    }

    let y = math.clone(xy);
    let temp = 0;
    //General Form f(x)
    for(let i=0;i<math.size(xy);i++){
        temp += l[i].x * xy[i].y;
    }

    return temp;
}

let x = 42000;

let linear_interpolation = [
    {x: 0, y: 9.81},
    {x: 80000, y: 9.5682}
]

let quadratic_interpolation = [
    {x: 0, y: 9.81},
    {x: 40000, y: 9.6879},
    {x: 80000, y: 9.5682}
]

let polynomial_interpolation = [
    {x: 0, y: 9.81},
    {x: 20000, y: 9.7487},
    {x: 40000, y: 9.6879},
    {x: 60000, y: 9.6879},
    {x: 80000, y: 9.5682}
]

console.log("linear interpolation = "+lagrange_interpolation(linear_interpolation,x).toFixed(6))
console.log("quadratic interpolation = "+lagrange_interpolation(quadratic_interpolation,x).toFixed(6))
console.log("polynomial interpolation = "+lagrange_interpolation(polynomial_interpolation,x).toFixed(6))