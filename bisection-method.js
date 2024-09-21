function f(x){
    return Math.pow(x,4) - 13;
}

function err(xnew,xold){
    return Math.abs((xnew - xold) / xnew) * 1.000000;
}

let xm,xl=1.5,xr=2.0,xnew=0,xold=0;

do{
    xold = xnew;
    xm = (xl + xr) / 2;
    if(f(xm) * f(xr) < 0){
        xl = xm;
    }else{
        xr = xm;
    }
    xnew = xm;
}while(err(xnew,xold) < 0.0000001);

console.log(xm.toFixed(6));