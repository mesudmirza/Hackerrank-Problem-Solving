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


// 10.Grading Students
function gradingStudents(grades) {
    return grades.map((n) => {
        if ((n % 5) >= 3 && n >= 38) {
            return n + (5 - (n % 5));
        } else {
            return n;
        }
    })
}


// 11.Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesLocation = apples.map(n => n + a);
    let orangesLocation = oranges.map(n => n + b);
    
    let countApples = applesLocation.filter(n => n >= s && n <= t).length;
    let countOranges = orangesLocation.filter(n => n >= s && n <= t).length;
    
    console.log(countApples);
    console.log(countOranges);
}


// 12.Number Line Jumps
function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2) return 'NO';

    if ((x2 - x1) % (v1 - v2) === 0) return 'YES';
    
    return 'NO';
}


// 13.Breaking the Records
function breakingRecords(scores) {
    let max = 0;
    let min = 0;
    let minScore = scores[0];
    let maxScore = scores[0];
    
    scores.forEach((score) => {
        if (score < minScore) {
            minScore = score;
            min++;
        } else if (score > maxScore) {
            maxScore = score;
            max++;
        }
    })

    return [max, min];
}


// 14.Time Conversion
function timeConversion(s) {
    let isAmOrPm = s.slice(-2);
    let hourString = s.slice(0,2);
    let hourNumber = Number(hourString);
    let timeWithoutHour = s.slice(2,8);
    
    if (isAmOrPm === 'PM') {
        hourNumber += 12;
        if (hourString === '12') {
            return `${hourString}${timeWithoutHour}`;
        }
        return `${hourNumber}${timeWithoutHour}`;
    } else {
        if (hourString === '12') {
            return `00${timeWithoutHour}`;
        }
        let time = s.slice(0,8);
        return time;
    }
}


// 15.Subarray Division
function birthday(s, d, m) {
    let count = 0;
    let sum = 0;

    s.forEach((num, indice) => {
        for(let i = indice; i < indice + m; i++){
            sum += s[i];
        }
        if (sum === d) count++;
    })

    return count;
}


// 16.Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
    let output = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                output.push([ar[i], ar[j]]);
            }
        }
    }

    return output.length;
}


// 17.Bill Division
function bonAppetit(bill, k, b) {
    let sum = 0;
    
    for (let i = 0; i < bill.length; i++) {
        sum += bill[i];
    }
    
    let total = (sum - bill[k]) / 2;
    
    if (b <= total) {
        console.log('Bon Appetit');
    } else {
        console.log(b - total);
    }
}
