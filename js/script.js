let input_1 = document.querySelector('.input_1')
let result_1 = document.querySelector('.result_1')
let go_1 = document.querySelector('.go_1')
let err1 = document.querySelector('.err1')


let counterNum_1 = 0;

go_1.addEventListener('click',()=>{
if( input_1.value ==''){
    err1.innerHTML = 'please enter a value'
}else{
     result_3.innerHTML =''
let counterFun_1 = (()=>{
    err1.innerHTML =''
    counterNum_1++
   result_1.innerHTML = counterNum_1
   if(counterNum_1 == input_1.value) {
       clearInterval(stop_1) 
        input_1.value=''
    } 
})
let stop_1 = setInterval(()=>{
    counterFun_1()
},100)
}
})

// -----counter_2----
let input_2 = document.querySelector('.input_2')
let result_2 = document.querySelector('.result_2')
let go_2 = document.querySelector('.go_2')
let err2 = document.querySelector('.err2')

let counterNum_2 = 0;

go_2.addEventListener('click',()=>{
if( input_2.value ==''){
    err2.innerHTML = 'please enter a value'
}else{
let counterFun_2 = (()=>{
    err2.innerHTML =''
    counterNum_2++
   result_2.innerHTML = counterNum_2
   if(counterNum_2 == input_2.value) {
       clearInterval(stop_2) 
        input_2.value=''
    } 
})
let stop_2 = setInterval(()=>{
    counterFun_2()
},100)
}
})

// ----counter 3----
let input_3 = document.querySelector('.input_3')
let result_3 = document.querySelector('.result_3')
let go_3 = document.querySelector('.go_3')
let err3 = document.querySelector('.err3')

let counterNum_3 = 0;

go_3.addEventListener('click',()=>{
if( input_3.value ==''){
    err3.innerHTML = 'please enter a value'
}else{
let counterFun_3 = (()=>{
    err3.innerHTML =''
    counterNum_3++
   result_3.innerHTML = counterNum_3
   if(counterNum_3 == input_3.value) {
       clearInterval(stop_3) 
       input_3.value =''
    } 
})
let stop_3 = setInterval(()=>{
    counterFun_3()
},100)
}
})




// ---counter 4----
// let ending = document.querySelectorAll('.ending')

// ending.forEach((items)=>{
//     let counterNum2 =0
//  let counter2fun = ()=>{
//     counterNum2++
//     items.innerHTML= counterNum2
//     if(counterNum2== items.dataset.mango){
//           clearInterval(thamo)
//     }
// }
// let thamo = setInterval(()=>{
//     counter2fun()
// },1000)

// })


