// code your solution here
function superbowlWin(record) {
    let result = record.find(record => record.result === "W")
    if (result) {
        return result.year
    } else {
        return undefined
    }
}
