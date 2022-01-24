function filter(listOfNumbers, callbackFunction){
    const resultArray = []
    let sizeOfList = listOfNumbers.length

    for(let index=0; index < sizeOfList; index++){
        let currentValue = listOfNumbers[index]
        if (callbackFunction(currentValue, index, listOfNumbers)){
            resultArray.push(currentValue)
        }
    }
    return resultArray
}

const listOfNumbers = [1,2,3,4]
let result = filter(listOfNumbers, currentValue => currentValue % 2 == 0)
console.log(result)