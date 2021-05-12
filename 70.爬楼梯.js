// 爬楼梯

let n = 3
function climbStairs(n) {
    let memo = []
    memo[1] = 1;
    memo[2] = 2;
    for(let i = 3; i <= n; i++) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }

    return memo[n];
}

climbStairs(n)