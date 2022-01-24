function forEach(listOfNumbers, callbackFunction){
    let sizeOfList = listOfNumbers.length

    for(let index=0; index < sizeOfList; index++){
        let currentValue = listOfNumbers[index]
        callbackFunction(currentValue, index, listOfNumbers)
    }
}

const listOfNumbers = [1,2,3,4]
forEach(listOfNumbers, currentValue => console.log(currentValue))