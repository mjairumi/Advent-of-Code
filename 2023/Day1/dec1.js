var pattern = /([1-9]|one|two|three|four|five|six|seven|eight|nine)/gi
var pattern1 = /([1-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/gi
var p1 = /(one|two)/gi
var dic = {
    "one": 1,
    "eno": 1,
    "two": 2,
    "owt": 2,
    "three": 3,
    "eerht": 3,
    "four": 4,
    "ruof": 4,
    "five": 5,
    "evif": 5,
    "six": 6,
    "xis": 6,
    "seven": 7,
    "neves": 7,
    "eight": 8,
    "thgie": 8,
    "nine": 9,
    "enin": 9,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
}
document.getElementById('sub').addEventListener("click", () => {
    let inp = document.getElementById("inpID")
    let inpValue = inp.value
    let inpArr = inpValue.split("\n")
    let out = document.getElementById('outId')
    let ans = []

    for (let i = 0; i < inpArr.length; i++) {

        let temp = inpArr[i]
        let matchtemp = temp.match(pattern)

        let a = dic[matchtemp[0]]
        temp = temp.split("").reduce((x, y) => y+x, "")
        matchtemp = temp.match(pattern1)
        let b = dic[matchtemp[0]]
        ans.push(a*10+b)
    }
    let sum = 0
    for (let i = 0; i < ans.length; i++) {

        sum += ans[i]
    }
    out.innerHTML = sum


})