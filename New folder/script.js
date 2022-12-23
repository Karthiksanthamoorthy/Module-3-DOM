//var ele= document.createElement("div");
//ele.innerHTML=`<span class="main1">this is span</span>`;
//ele.setAttribute("class","main")
//document.body.append(ele);

//var ele = document.createElement("div");
//ele.setAttribute("class","main");

//var ele1 = document.createElement("span");
///ele1.setAttribute("class","main1");
//ele1.innerHTML="this is span";
//document.body.append(ele);
//ele.append(ele1);

//ele.setAttribute("class","main");

//var span= document.createElement("span");
//span.setAttribute("class","main1");
//span.innerHTML="this is a elements";
//ele.append(span); 
//document.body.append(ele);

// var ele=document.createElement("div");
// ele.setAttribute("class","container");

// var div=document.createElement("div");
// div.setAttribute("class","row");

// var div1=document.createElement("div");
// div1.setAttribute("class","column");
// div1.innerHTML="this is elee";

// var div2=document.createElement("div");
// div2.setAttribute("class","column");
// div2.innerHTML="this is element";


// document.body.append(ele);
// ele.append(div);
// div.append(div1,div2);

function foo(){
    var res=document.getElementById("email").value;
    var res1=document.getElementById("pass").value;
     console.log(res,res1);
     if(res==="abc@guvi.in" && res1==="123"){
         console.log("valid user");
     }
     else{
         console.log("invalid user");
     }  
    

    }