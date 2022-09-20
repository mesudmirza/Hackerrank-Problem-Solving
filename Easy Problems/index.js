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


// 18.Sales by Match
function sockMerchant(n, ar) {
    let sorted = ar.sort((a,b) => a-b);
    let count = 0;
    let total = 0;
    
    for (let i = 0; i <= n - 1; i += count) {
        if (ar[i] == ar[i+1]) {
            count = 2;
            total++;
        } else {
            count = 1;
        }
    }

    return total;
}


// 19.Between Two Sets
function getTotalX(a, b) {
    let allNumbers = [...a, ...b];
    let count = 0;
    
    for (let i = a[a.length - 1]; i <= b[0]; i += a[a.length - 1]) {
        let valid = allNumbers.every(item => {
            let max = Math.max(i, item);
            let min = Math.min(i, item);
            return max % min == 0;
        })
        
        if (valid) count++;
    }
    
    return count;
}


// 20.Migratory Birds
function migratoryBirds(arr) {
    let counts = {};

    arr.forEach(elem => {
        if (elem in counts) counts[elem]++;
        else counts[elem] = 1;
    })
    
    return parseInt(Object.keys(counts).reduce((a,b) => counts[a] >= counts[b] ? a : b)); 
}


// 21.Drawing Book
function pageCount(n, p) {
    let result = 0;
            
    if ((n - p) > p) {
        result = Math.floor(p / 2);
    } else {
        result = Math.floor((n - p) / 2);
    }
    
    if (((n - p) == 1) && !(n % 2) && p > 1) {
        result++;
    }
    
    return result;
}


// 22.Counting Valleys
function countingValleys(steps, path) {
    let level = 0;
    let valleys = 0;
    
    for (let i = 0; i < path.length; i++) {
        if (path[i] == 'U') level++;
        else if (path[i] == 'D') level--;
        
        if (level == 0 && path[i] == 'U') valleys++;
    }

    return valleys;
}


// 23.Cats and a Mouse
function catAndMouse(x, y, z) {
    let catA = Math.max(x - z, z - x);
    let catB = Math.max(y - z, z - y);
    
    if (catA > catB) return 'Cat B';
    else if (catA < catB) return 'Cat A';
    else return 'Mouse C';
}


// 24.The Hurdle Race
function hurdleRace(k, height) {
    let max = Math.max(...height);
    if (max > k) return max - k;
    else return 0;
}


// 25.Viral Advertising
function viralAdvertising(n) {
    let liked = Math.floor(5/2);
    let shared = liked * 3;
    let cumulative = liked;

    for (let i=1; i<n; i++) {
        cumulative = cumulative + Math.floor(shared/2);
        shared = Math.floor(shared/2) * 3;
    }

    return cumulative;
}
