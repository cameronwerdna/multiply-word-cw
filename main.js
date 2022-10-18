function modifyMultiply (str,loc,num) {
      return (str.split(' ')[loc]+'-').repeat(num).slice(0, -1)
    } 


console.log(modifyMultiply('hey there this is the string', 2, 5)) // => this-this-this-this-this
console.log(modifyMultiply('how do you want this string repeated?', 1, 2)) // => do-do