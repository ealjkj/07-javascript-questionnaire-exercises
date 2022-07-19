function fibonacci(n) {
    if(n === 1 || n === 0) return 1;
    else return fibonacci(n-1) + fibonacci(n-2);
}

function fibo(n) {
    const memo = {}; 
    return (function f(n) {
        if (n === 1 || n === 0) return 1;
        else {
            let ans;
            if(memo[n]) ans = memo[n];
            else {
                ans = f(n-1) + f(n-2);
                memo[n] = ans;
            } 
            return ans;
        } 
    })(n);
}

console.log(fibonacci(10));
console.log(fibo(10));
