// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector("#reset");
// let turn0 = true;
// const winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,4,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6]
// ];
// boxes.forEach((box) => {
//     box.addEventListener("click",()=>{
//         if(turn0){
//             box.style.color="red";
//             box.innerText="O";
//             turn0=false;
//         }
//         else{
//             box.innerText="X";
//             turn0=true;
//         }
//         box.disabled = true;

//         checkWinner();
//     });
// });

// const checkWinner=()=>{
//     for(let patter of winPatterns){
//         let pos1 = boxes[patter[0]].innerText;
//         let pos2 = boxes[patter[1]].innerText;
//         let pos3 = boxes[patter[2]].innerText;

//         if(pos1 !="" && pos2 !="" && pos3 !=""){
//             if(pos1 === pos2 && pos2 === pos3){
//                 console.log("winner",pos1);
//             }
//         }
//     }
// };

//SET TIMEOUT IS A METHOD
/*PROMISES:
PROMISES ARE USED TO AVOID CALLBACK HELL
PROMISES ARE EITHER RESOLVED OR REJECTED

FUNCTION -> PROMISE -> SETTIMEOUT
 THE PROMISE CAN THEN BE RESOLVED,REJECTED OR PENDING

promise.then()                          promise.catch()
->if promise is fulfilled               ->if promise rejected
*/




// function getData(dataID,getData){
//     setTimeout(()=>{
//         console.log("data",dataID)
//         if(getData){
//             getData();
//         }
//     },1000)
// }

// getData(12,()=>{
//     getData(13,()=>{
//         getData(14);
//     });
// });

// function hello(){
//     setTimeout(()=>{
//         console.log("hello");
//     },3000);
// }

// hello();

// function hey(){
//     console.log("yo no");
// }

// function  getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },4000);
//     })
//  }

//  let p1= getData(12);
//  p1
//  .then(()=>{
//     return getData(13)
//  })
//     .then(()=>{
//         getData(14);
//     })


//ASYN AWAIT
// function hello(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(200,data)
//             resolve("success")
//         },1000)
//     })
// }
// (async function h(){
//     await hello(1);
//     await hello(2);
// })();



// function async(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },1000)
//     })
// }

// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success2");
//         },4000)
//     })
// }


// let a1 = async();
// a1.then((res)=>{
//     async2().then()
// })


// const URL= "https://cat-fact.herokuapp.com/facts";
// const btn = document.querySelector("#btn");
// const para = document.querySelector("#info");

// API WITH ASYNC AWAIT
// const func1 = async ()=>{
//     console.log("getting data")
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     para.innerText = data[3].text;
// }
// btn.addEventListener("click",func1);

// PROMISES USED TO WORK WITH API
// function facts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// async function fact(){
//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     para.innerText = data[0].text;
// }

// btn.addEventListener("click",fact)



//CURRENCY CONVERTER
