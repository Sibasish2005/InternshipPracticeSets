// 8. Write a function to find the minimum number of operations to transform one array into another.
function minOperations(arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;

    // Create a 2D DP array
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (arr1[i - 1] === arr2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No operation needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // Delete
                    dp[i][j - 1],    // Insert
                    dp[i - 1][j - 1] // Replace
                );
            }
        }
    }

    console.log("Minimum operations to convert arr1 to arr2:", dp[m][n]);
    return dp[m][n];
}

// Example
const arr1 = [1, 3, 5, 7];
const arr2 = [1, 4, 5, 9];
minOperations(arr1, arr2);