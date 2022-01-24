function reduce(listOfNumbers, callbackFunction){
    accumulator = 0
    sizeOfList = listOfNumbers.length

    if (sizeOfList < 1){
        throw new Error("reduce method cannot be executed on an empty array")
    }
    
    for (let index=0; index<sizeOfList; index++){
        currentValue = listOfNumbers[index]
        accumulator = callbackFunction(accumulator, currentValue, index, listOfNumbers)
    }
    return accumulator
}

const listOfNumbers = [1,2,3,4]
let result = reduce(listOfNumbers, (accumulator,currentValue) => accumulator + currentValue)
console.log(result)