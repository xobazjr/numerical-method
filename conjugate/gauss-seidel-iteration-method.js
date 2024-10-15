const math = require("mathjs");

function gauss_seidel_iteration_method(a,b,x){
    let xnew = math.clone(x); // xnew = [0,0,0,0]
    let xold = math.clone(xnew); // xold = [0,0,0,0]
    let err;
    let iteration = 0;

    do{
        for(let i=0;i<b.length;i++){
            let sum = b[i];
            xold = math.clone(xnew);

            for(let j=0;j<b.length;j++){
                if(j !== i){
                    sum -= a[i][j] * xnew[j];
                }
            }

            xnew[i] = sum / a[i][i];
            err = (Math.abs((xnew[i] - xold[i]) / xnew[i])) * 1.000000;
        }

        ++iteration;
    }while(err > 0.000001);

    return {xold,iteration}
}

let a = [
    [5,2,0,0],
    [2,5,2,0],
    [0,2,5,2],
    [0,0,2,5]
];

let b = [12,17,14,7];
let x = [0,0,0,0];

console.log("solution: "+"["+gauss_seidel_iteration_method(a,b,x).xold+"]");
console.log("iteration: "+gauss_seidel_iteration_method(a,b,x).iteration);