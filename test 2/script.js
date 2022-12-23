//var reds = document.getElementsByTagName("div");
//console.log(reds);
//for(var i=0;i<reds.length;i++){
  //  console.log(reds[i].innerHTML);
//}

/////////////////////////////////////////////////////////////////////

//var res=document.querySelectorAll(".main");
//console.log(res);
//for(var i=0;i<res.length;i++){
  //    console.log(res[i].innerHTML);
  //}

///////////////////////////////////////////////////////////////////

// var res=document.querySelector(".main");
//console.log(res);

///////////////////////////////////////////////////////////////

//let button=document.createElement("button");
//button.innerHTML="Click Me";
//button.addEventListener("click",foo);
//document.body.append(button);

//function foo(){
  //  let ele=document.createElement("span");
    //ele.innerHTML="Welcome to guvi";
    //ele.style.color="blue";
    //ele.style.fontSize="20px";
    //ele.style.display="block"
    //document.body.append(ele)
//}

///////////////////////////////////////////////////////////////


function createtabledata(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    
    function createtabel(tagname,attrname,attrvalue){
        var ele = document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        return ele;
        }

        function created(tagname,content){
            var ele = document.createElement(tagname);
            ele.innerHTML =content;
            return ele;
            }
        
            function createtabelrow(tagname){
                var ele=document.createElement(tagname);
                return ele;
                }

var table = createtabel("table","class","table");
var tablehead = createtabel("thead","class","thead-dark");
var tablerow1 = createtabelrow("tr");
var tableh1 = createtabledata("th","scope","col","First");
var tableh12 = createtabledata("th","scope","col","Middle");
var tableh13 = createtabledata("th","scope","col","Last");
var tablerow2 = createtabelrow("tr");
var tablebody = createtabelrow("tbody");
var tableh2 = created("td","mark");
var tableh22 = created("td","otto");
var tableh222 = created("td","@mdo");
table.append(tablehead);
tablehead.append(tablerow1);
tablerow1.append(tableh1,tableh12,tableh13);
table.append(tablebody);
tablebody.append(tablerow2);
tablerow2.append(tableh2,tableh22,tableh222);
document.body.append(table);