function createlabel(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.setAttribute(attrname1,attrvalue1); 
return ele;
    
}

function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
var foo =createlabel("label","for","FName","Firstname");
var br1 = createlinebreak("br");
var put =createinput("input","type","Fname","id","Firstname");
var br2 = createlinebreak("br");
var foo1 =createlabel("label","for","Mname","Middlename");
var br3 = createlinebreak("br");
var put1 =createinput("input","type","Mname","id","Middlename");
var br4 = createlinebreak("br");

var foo2 =createlabel("label","for","Lname","Lastname");
var br5 = createlinebreak("br");
var put2 =createinput("input","type","Lname","id","Lastname");
var br6 = createlinebreak("br");


var label =createlabel("label","for","emai","mail");
var linebreake1 = createlinebreak("br");
var input =createinput("input","type","email","id","email");
var linebreake2 = createlinebreak("br");
var labels =createlabel("label","for","pass","password");
var linebreake3 = createlinebreak("br");
var inputs =createinput("input","type","pass","id","password");
var linebreake4 = createlinebreak("br");

document.body.append(foo,br1,put,br2,foo1,br3,put1,br4,foo2,br5,put2,br6,label,linebreake1,input,linebreake2,labels,linebreake3,inputs,linebreake4);