function f(x){
    return Math.pow(x,2) - 13;
}

function err(xnew,xold){
    return Math.abs((xnew - xold) / xnew) * 1.000000;
}

let x1,xl=1.5,xr=2.0,xnew=0,xold=0;

do{
    xold = xnew;
    x1 = ((xl*f(xr)) - (xr*f(xl))) / (f(xr) - f(xl));
    if(f(x1) * f(xr) > 0){
        xr = x1;
    }else{
        xl = x1;
    }
    xnew = x1;
}while(err(xnew,xold) < 0.000001);

console.log(x1.toFixed(6));