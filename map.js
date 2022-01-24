function map(listOfNumbers, callbackFunction){
    let sizeOfList = listOfNumbers.length
    const resultList = []

    for(let index=0; index < sizeOfList; index++){
        let returnedNumber = callbackFunction(listOfNumbers[index], index, listOfNumbers)
        resultList.push(returnedNumber)
    }
    return resultList
}


const listOfNumbers = [1,2,3,4]
let result = map(listOfNumbers, currentValue => currentValue*3)
console.log(result)

