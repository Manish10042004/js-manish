const myArray = []
// %DebugPrint(myArr)

// continious/packed, Holey

// SMI(small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// PACKES_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKES_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKES_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(Object.prototype, 10)

// holes are vey expensive in js


const arrthree = [1,2,3,4,5]
console.log(arrthree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '13' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]

arrSix.push(NaN) // PACKED_DOUBLE
arrSix.push(Infinity) // PACKED_DOUBLE


// for, for-of, forEach