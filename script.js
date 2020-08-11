// console.log("hello world",4+5,"how r u");
// // alert("hii");
// console.warn("this is warning");
// console.error("this is error");
var str = "This is string";

var marks = {
    ravi:63,
    ramesh:55,
    sagar:69
}
//console.log(marks);
var demo = [1,2,"hii",4,5];
//console.log(demo);

var arr = [1,2,3,4,5,6,7];
 

//console.log(arr);
// arr.pop();

//console.log(arr.length);

// for(var i = 0;i<arr.length;i++)
//      {
//         console.log(arr[i]);
//      }
 let alem=document.getElementById('click'); 
// console.log(alem);

let alem2=document.getElementsByClassName('container');
// console.log(alem2);

 alem2[0].classList.add("bg-primary");
 alem2[0].classList.add("text");

  let tn= document.getElementsByTagName('div');
// //  console.log(tn);

  createdElement=document.createElement('p');
  createdElement.innerText="This is created para";

  tn[0].appendChild(createdElement);

 
//  createdElement2=document.createElement('b');
//  createdElement2.innerText="This is created bold";

//  tn[0].replaceChild(createdElement2,createdElement);

  sel=document.querySelector('.container');
//  //console.log(sel);
  sel=document.querySelectorAll('.container');
//  //console.log(sel);
//  function clicked()
//  {
//      console.log("button was clicked");
//  }

//  window.onload = function()
//  {
//      console.log('the document was loaded');
//  }

//  firstcontainer.addEventListener('click',function()
//  {
//      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b> ";
//      console.log('click on container');
//  })

//  firstcontainer.addEventListener('mouseover',function()
//  { 
//      console.log('mouse on container');
//  })

//  firstcontainer.addEventListener('mouseout',function()
//  { 
//      console.log('mouse out of container');
//   })
// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
//  firstcontainer.addEventListener('mouseup',function()
//  { 
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//      console.log('mouse up when click on container');
//  })

//  firstcontainer.addEventListener('mousedown',function()
//  { 
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b> "
//      console.log('mouse down when click on container');
//  })

//Arrow function
// function sum(a,b)
// {
//     return a+b;
// }

// sum = (a,b)=>
// {
//     return a+b;
// }

// logkaro = ()=>
// {    
//     document.querySelectorAll('.container')[1].innerHTML ="<b> set interval fired</b>"
//     console.log("I am your log..");
// }

// clr = setInterval(logkaro,5000);
//clr =setTimeout(logkaro,5000);

//JSON
// obj = {name:"vikram",age:24};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);

// parsed =JSON.parse(`{"name":"vikram","age":24,"a":{"this":"that"}}`);
// console.log(parsed );

a=07;
console.log(`this is my ${a}`);