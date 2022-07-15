// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (arr) => {
    let length = arr.length
    let processed = arr[length-1]
    if (length%2 === 0) { //If the length is even...
      for (let i=length-2; i>-1; i--) { //for for evens
        if (i%2 === 0) { //The position has to be even...
          if ((arr[i]*2) > 9) {
            processed += (arr[i]*2)-9
          } else {
            processed += arr[i]*2
          }
        } else {
          processed += arr[i]
        }
      }
    } else if (length%2 !== 0) { //If the length is odd...
      for (let i=length-2; i>-1; i--) { //for for odds
        if (i%2 !== 0) { //The position has to be odd...
          if ((arr[i]*2) > 9) {
            processed += (arr[i]*2)-9
          } else {
            processed += arr[i]*2
          }
        } else {
          processed += arr[i]
        }
      }
    }
    if (processed % 10 === 0) { return true } else { return false }
}

console.log("This one is: "+validateCred(valid4)) //Should print: "This one is: true"
console.log("This one is: "+validateCred(valid2)) //Should print: "This one is: true"
console.log("This one is: "+validateCred(invalid5)) //Should print: "This one is: false"
console.log("This one is: "+validateCred(invalid1)) //Should print: "This one is: false"

let invalidCards = []
const findInvalidCards = (arr) => {
  invalidCards = arr.filter((nested) => {
    return validateCred(nested)
  })
}
findInvalidCards(batch)
console.log("All invalid card numbers: ")
console.log(invalidCards)

let invalidCardCompanies = []

function idInvalidCardCompanies(arr) {
  invalidCardCompanies = arr.map((nested) => {
    let company
    switch(nested[0]) {
      case 3: company = "Amex (American Express)"; break;
      case 4: company = "Visa"; break;
      case 5: company = "Mastercard"; break;
      case 6: company = "Discover"; break;
    }
    return company
  })
  console.log("Non-processed array: "+invalidCardCompanies)
  invalidCardCompanies = [...new Set(invalidCardCompanies)];
}

console.log("All invalid card companies: ")
idInvalidCardCompanies(invalidCards)
console.log(invalidCardCompanies)









/*
const validateCred = (arr) => {
  if (arr) {
    let length = arr.length
    console.log("A length do arr: "+arr.length)
    let processed = []
    processed.push(arr[length-1])
    console.log("O processed inicialmente: "+processed) //1ª log


    if (length%2 === 0) { //If the length is even...
      for (let i=length-2; i>-1; i--) { //for for evens
        if (i%2 === 0) { //The position has to be even to be...
          let doubled = (arr[i]*2) //Doubled
          if (doubled > 9) {
            doubled = doubled-9
            processed.push(doubled)
          } else {
            processed.push(doubled)
          }
        } else {
          processed.push(arr[i])
        }
      }
    } else if (length%2 !== 0) { //If the length is odd...
      for (let i=length-2; i>-1; i--) { //for for odds
        if (i%2 !== 0) { //The position has to be odd
          let doubled = (arr[i]*2)
          if (doubled > 9) {
            doubled = doubled-9
            processed.push(doubled)
          } else {
            processed.push(doubled)
          }
        } else {
          processed.push(arr[i])
        }
      }
    }

    console.log("O processed completo: "+processed+". E sua length: "+processed.length)

    processed = processed.reduce((accumulator, value) => {
      return accumulator + value;}, 0);
    console.log("O processed somado: "+processed)

    console.log("O mod: "+processed%10)
    if (processed % 10 === 0) {
      return true
    } else {
      return false
    }

  } else {
    return "Insert an valid array"
  }
}
*/

