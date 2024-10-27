function NewtonDividedMethods() {
    const x = 46348;
    const points = [
        { x: 0, y: 9.81 },
        { x: 20000, y: 9.7487 },
        { x: 40000, y: 9.6879 },
        { x: 60000, y: 9.6879 },
        { x: 80000, y: 9.5682 }
    ];

    const result = {
        result: 0,
        iterations: [],
        statusCode: 400
    };
    
    // Step 1: Initialize coefficients array
    let C = points.map((point) => point.y);
    
    // Step 2: Calculate divided differences
    for (let i = 1; i < points.length; i++) {
        for (let j = points.length - 1; j >= i; j--) {
            C[j] = (C[j] - C[j - 1]) / (points[j].x - points[j - i].x);
        }
    }
    
    // Step 3: Apply the Newton divided difference formula
    for (let i = 0; i < points.length; i++) {
        let sum = C[i];
        let MutiOfSubtract = [1];
        
        for (let j = 0; j < i; j++) {
            MutiOfSubtract.push(x - points[j].x);
            sum *= (x - points[j].x);
        }
        
        result.iterations.push({
            C: C[i],
            MutiOfSubtract: MutiOfSubtract,
            sum: sum
        });
        
        result.result += sum;
    }
    
    result.statusCode = 200;
    console.log(result);
    return result;
}

// Run the function
NewtonDividedMethods();