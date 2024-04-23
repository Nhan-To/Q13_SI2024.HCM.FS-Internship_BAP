function reverseNLetters(S, N){
    if (N <= 0 || N >= S.length) return
    let reversed = ""
    for (let i = 0; i < N; i++){
        reversed += S[N - i - 1]
    }
    reversed += S.slice(N, S.length)
    return reversed
}

let S = "Testing"
let N = 10

console.log(reverseNLetters(S, N))