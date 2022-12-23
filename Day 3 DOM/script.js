var res=localStorage.setItem("guvi");
var res=localStorage.setItem("pvt");
console.log(res);

//  localStorage.setItem("FirstName","geek");
//  localStorage.setItem("MiddleName","guvi");
//  localStorage.setItem("LastName","pvt");

//  var res=localStorage.getItem("MiddleName");
//   console.log(res);

//   var res=localStorage.removeItem("MiddleName");
//   console.log(res);

//   var res=localStorage.clear();
//   console.log(res);

// var div=document.createElement("div");
// div.innerHTML="this is div";
// div.addEventListener("mouseover", ()=> div.style.color="red");
// document.body.append(div);

function foo(){
    let res=prompt("enter the value");
    let span=document.createElement("span");
    span.innerHTML=res;
    span.style.color="green";
    span.style.fontSize="20px";
    document.body.append(span);

}

