let xmin=0,xmax=0;

function f(x){
    return 43 * x - 180;
}

for(let x=0;x<10;x++){
    if(f(x) * f(x+1) < 0){
        xmin = x;
        xmax = x + 1;
    }
}

for(xmin;xmin<xmax;xmin += 0.000001){
    if(f(xmin) * f(xmin + 0.000001) < 0){
        console.log(xmin.toFixed(6));
        break;
    }
}