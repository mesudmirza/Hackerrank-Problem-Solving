// HACKERRANK Easy Problems

// 1.Solve Me First
function solveMeFirst(a, b) {
    return a + b; 
}


// 2.Simple Array Sum
function simpleArraySum(arr) {
    let sum = 0;

    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// 3.Compare the Triplets
function compareTriplets(a, b) {
    let points = [0, 0];
    
    for (let i=0; i<a.length; i++) {
        if (a[i] > b[i]) points[0]++;
        if (a[i] < b[i]) points[1]++;
    }
    
    return points;
}


// 4.A Very Big Sum
function aVeryBigSum(arr) {
    let sum = 0;
    
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}
