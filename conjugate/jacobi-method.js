const math = require("mathjs");

function jacobi_method(a,b,x){
    let xnew = math.clone(x); // xnew = [0,0,0,0]
    let xold = math.clone(xnew); // xold = [0,0,0,0]
    let err;
    let iteration = 0;

    do{
        for(let i=0;i<b.length;i++){
            let sum = b[i];

            for(let j=0;j<b.length;j++){
                if(j !== i){
                    sum -= a[i][j] * xold[j];
                }
            }

            xnew[i] = sum / a[i][i];
            err = (Math.abs((xnew[i] - xold[i]) / xnew[i])) * 1.000000;
        }

        xold = math.clone(xnew);
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

console.log("solution: "+"["+jacobi_method(a,b,x).xold+"]");
console.log("iteration: "+jacobi_method(a,b,x).iteration);