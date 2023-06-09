//exemplo de map() js

 const numbers = [2, 4, 8, 16]
 
 const square = n => n * n

 const squaredNumber = numbers.map(square)

 //exemplo de um retorno de funçao 
 // (currying ou aplicaçao parcial de funçao)

 const pause = wait => fn => setTimeout(fn, wait)

 pause(600) ( () => console.log('waiting 600ms') )
 

 const wait200 = pause(200)

 const wait1000 = pause(1000)

 wait200 ( () => console.log('waiting 1000ms'))
 wait1000 ( () => console.log('waiting 1s'))