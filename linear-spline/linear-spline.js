const math = require("mathjs")

function linear_spline(points,x){
    let m = math.clone(points)
    for(let i=1;i<math.size(points);i++){
        m[i-1].slope = (points[i].y - points[i-1].y) / (points[i].x - points[i-1].x);
    }
    
    for(let i=1;i<math.size(points);i++){
        if(x >= points[i-1].x && x <= points[i].x){
            return points[i-1].y + m[i-1].slope * (x - points[i-1].x)
        }
    }

    return null
}

let points = [
    {x: 2,y: 9.5},
    {x: 4,y: 8.0},
    {x: 6,y: 10.5},
    {x: 8,y: 39.5},
    {x: 10,y: 72.5}
]

let x=4.5

console.log(linear_spline(points,x))
