function check(array, start, end, row) {
    start--
    end++
    let Row = array.length
    let str = array[row]
    let Col = str.length
    for (let r = row - 1; r <= row + 1; r++) {
        for (let i = start; i <= end; i++) {

            if (((i > -1 && i < Col) && (r > -1 && r < Row))) {
                if (array[r][i].match(/([0-9]|\.)/)) {

                    continue
                }
                console.log("Hellp")
                return true
            }



        }
    }
    return false
}
var obj = {}
function check2(array, start, end, row, num) {
    start--
    end++
    let Row = array.length
    let str = array[row]
    let Col = str.length
    let out = false
    for (let r = row - 1; r <= row + 1; r++) {
        for (let i = start; i <= end; i++) {

            if (((i > -1 && i < Col) && (r > -1 && r < Row))) {
                if (array[r][i].match(/([0-9]|\.)/)) {

                    continue
                }
                if (array[r][i].match(/\*/g)) {
                    let key = r.toString() + ' ' + i.toString()
                    if (key in obj) {
                        obj[key].push(num)
                    }
                    else {
                        obj[key] = [num]
                    }
                }
            }



        }
    }
    return true
}
function convertToNumber(inpArr, row, start) {
    let str = inpArr[row]

    let idx = start
    let nums = 0
    while (idx < str.length) {
        if (str[idx].match(/([0-9])/g)) {
            nums = nums * 10 + parseInt(str[idx])
            idx++
        }
        else {
            break
        }
    }
    idx--
    return [idx, nums]

}

function part1(inpArr) {
    let sum = 0
    for (let i = 0; i < inpArr.length; i++) {
        j = 0
        while (j < inpArr[i].length) {
            if (inpArr[i][j].match(/([0-9])/g)) {
                let numStart = j
                let row = i
                let [numEnd, num] = convertToNumber(inpArr, i, j)
                if (check(inpArr, numStart, numEnd, row)) {
                    sum += num
                }
                j = numEnd
            }

            j++
        }
    }
    
    return sum
}

function part2(inpArr) {
    let sum = 0
    for (let i = 0; i < inpArr.length; i++) {
        j = 0
        while (j < inpArr[i].length) {
            if (inpArr[i][j].match(/([0-9])/g)) {
                let numStart = j
                let row = i
                let [numEnd, num] = convertToNumber(inpArr, i, j)
                if (check2(inpArr, numStart, numEnd, row, num)) {
                    sum += num
                }
                j = numEnd
            }

            j++
        }
        
    }
    sum = 0
    for (let key in obj) {
        
        if (obj[key].length === 2) {
            let product = 1
            for (let j = 0; j < obj[key].length; j++) {
                product = product*obj[key][j]
            }
            sum += product
        }
    }
    return sum

}
document.getElementById('sub').addEventListener("click", () => {
    let inp = document.getElementById("inpID")
    let inpValue = inp.value
    let inpArr = inpValue.split("\n")
    let out = document.getElementById('outId')
    let ans = 0


    out.innerHTML = part2(inpArr)
})

