const math = require("mathjs");

function lagrange_interpolation(xi,yi,x){
    let l = math.clone(xi);
    //where Li(x)
    for(let i=0;i<math.size(xi);i++){
        let temp = 1;
        for(let j=0;j<math.size(xi);j++){
            if(j!=i){
                temp *= (x - xi[j]) / (xi[i] - xi[j]);
            }
        }
        l[i] = temp;
    }

    let y = math.clone(yi);
    let temp = 0;
    //General Form f(x)
    for(let i=0;i<math.size(yi);i++){
        y[i] = l[i] * yi[i];
        temp += y[i];
    }console.log("y = "+temp.toFixed(6));
}

let xi = [0,20000,40000,60000,80000];
let yi = [9.81,9.7487,9.6879,9.6879,9.5682];
let x = 42000;

lagrange_interpolation(xi,yi,x) 