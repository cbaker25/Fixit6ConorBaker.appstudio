var petName = [ 'Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Sadie', 'Marge', 'Sam']
console.log(petName);
var removedItem = petName.splice(pos, 5);
console.log(petName)
var removedName = petName.splice(pos, 3);
console.log(petName)
var newName = petName.unshift('Nancy')
console.log(petName)
var newName2 = petName.push('Dan')
console.log(petName)
var addReilly = petName.push('Reilly')
console.log(petName)
var pos = petName.indexOf('Reilly')
console.log(petName)
var pos = petName.indexOf('Cindy')
console.log(petName)
var withMarmaduke = [petName+', Marmaduke']
console.log(withMarmaduke) 

let x=petName.shift()
alert(x)
petName.unshift('Barney') 
alert(petName) 
let allPets = petName.concat([Ted, Fred, Jed, Ned, Ed, Zed])
alert(allPets)
let y= allPets.shift()
alert(y) 
let pets= allPets.join()
alert(pets) 
allPets.unshift('Agnes') 
alert(allPets) 


