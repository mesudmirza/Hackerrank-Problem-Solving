// HACKERRANK Easy Problems

// 1.Solve Me First
function solveMeFirst(a, b) {
    return a + b; 
}


// 2.Simple Array Sum
function simpleArraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// 3.Compare the Triplets
function compareTriplets(a, b) {
    let points = [0, 0];
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) points[0]++;
        if (a[i] < b[i]) points[1]++;
    }
    
    return points;
}


// 4.A Very Big Sum
function aVeryBigSum(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}


// 5.Diagonal Difference
function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - i - 1];
    }
    
    return Math.abs(leftDiagonal - rightDiagonal);
}


// 6.Plus Minus
function plusMinus(arr) {
    let len = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let i = 0; i < len; i++) {
        if (arr[i]>0) {
            positive += 1;
        } else if (arr[i]<0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }
    
    console.log((positive/len).toFixed(6));
    console.log((negative/len).toFixed(6));
    console.log((zero/len).toFixed(6));
}


// 7.Staircase
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let text = '';
        for (let j = 0; j < n; j++) {
            if (i+j>n-2) {
                text += '#';
            } else {
                text += ' ';
            }
        }
        console.log(text);
    }
}


// 8.Mini-Max Sum
function miniMaxSum(arr) {
    const min = Math.min(...arr); 
    const max = Math.max(...arr); 
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const minSum = sum - max;
    const maxSum = sum - min;
    console.log(minSum, maxSum);
}


// 9.Birthday Cake Candles
function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let count = 0;
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) count += 1;
    }
    
    return count;
}