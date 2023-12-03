let pattern1 = /(?<red>[0-9]+ red)|(?<green>[0-9]+ green)|(?<blue>[0-9]+ blue)/g
let pattern = new RegExp(/(?<red>[0-9]+ red)|(?<green>[0-9]+ green)|(?<blue>[0-9]+ blue)/g)
function preProcessing(inpArr, ans) {
    for (let i = 0; i < inpArr.length; i++) {
        let matchResults2 = inpArr[i].match(pattern1)
        let ot = { 'red': 0, 'blue': 0, 'green': 0 }
        for (let j = 0; j < matchResults2.length; j++) {
            let str = matchResults2[j]
            let num = parseInt(str.match(/([0-9]+)/g))
            if (str.match(/(red)/g)) {
                ot.red = Math.max(ot.red, num)
            }
            else if (str.match(/(green)/g)) {
                ot.green = Math.max(ot.green, num)
            }
            else if (str.match(/(blue)/g)) {
                ot.blue = Math.max(ot.blue, num)
            }
        }
        ans.push(ot)
    }
    return ans
}
function part1(ans) {
    let sum = 0
    let ttblue = 14
    let ttgreen = 13
    let ttred = 12
    for (let i = 0; i < ans.length; i++) {
        let game = ans[i]
        if (game.red <= ttred && game.blue <= ttblue && game.green <= ttgreen) {
            sum += i
        }
    }
    return sum


}
function part2(ans) {
    let sum = 0
    for (let i = 1; i < ans.length; i++){
        let game = ans[i]
        sum += game.red*game.blue*game.green
    }
    return sum
}
document.getElementById('sub').addEventListener("click", () => {
    let inp = document.getElementById("inpID")
    let inpValue = inp.value
    let inpArr = inpValue.split("\n")
    let out = document.getElementById('outId')
    let ans = [{ 'red': 0, 'blue': 0, 'green': 0 }]
    ans = preProcessing(inpArr, ans)
    // out.innerHTML = part1(ans)
    out.innerHTML = part2(ans)
})





// class Dec2Solution {
//     constructor(input) {
//         this.input = input;
//     }
//     parseInput() {
//         let obj = []
//     }
//     solve() {
//         let pattern = /Game ([0-9]+): (((([0-9]+ (red)|(green)|(blue))(,)?)*);)*/g

//     }
// }