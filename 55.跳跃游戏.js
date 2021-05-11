// 跳跃游戏

function canJump(){
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0);
    memo[totalLength - 1] = 1;

    // 标记 0 表示未知， 1 表示通过 2 表示不通过
    function jump(position) {
        // 判断这条路是不是被标记过了
        if(memo[position] === 1) {
            return true;
        } else if (memo[position] === -1) {
            return false;
        }

        const maxJump = Math.min(position + nums[position], totalLength - 1);  // 防止越界
        // 当前数字是几就遍历几次
        for(let i = position + 1; i <= maxJump; i++) {
            const jumpResult = jump(i);
            if(jumpResult === true) {
                memo[position] = 1;
                return true;
            }
        }
        memo[position] = -1;
        return false;
    }
    let result = jump(0);
    return result;
}

canJump()


// 第二种方法(动态算法)
canJump1()

function canJump1() {
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0);
    memo[totalLength - 1] = 1;

    for(let i = totalLength-2; i >= 0; i++) {
        const maxJump = Math.min(i + nums[i] + totalLength - 1);
        for(let j = i + 1; j <= maxJump; j++) {
            memo[i] = 1
            break;
        }
    }

    if(memo[0] === 1) {
        return true;
    } else {
        return false;
    }
}

// 第三种方法贪心算法(优先)
canJump2()

function canJump2() {
    let maxJump = nums.length - 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= maxJump) {
            maxJump = i
        }
    }

    return maxJump === 0
}

