let display= document.querySelector('#display');
let btnAC=document.querySelector('#btnAC');
let btnBRACKET=document.querySelector('#btnBRACKET');
let btnPERCENT=document.querySelector('#btnPERCENT');
let btnDIV=document.querySelector('#btnDIV');
let btn7=document.querySelector('#btn7');
let btn8=document.querySelector('#btn8');
let btn9=document.querySelector('#btn9');
let btnMULTIPLY=document.querySelector('#btnMULTIPLY');
let btn4=document.querySelector('#btn4');
let btn5=document.querySelector('#btn5');
let btn6=document.querySelector('#btn6');
let btnMINUS=document.querySelector('#btnMINUS');
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let btn3=document.querySelector('#btn3');
let btnPLUS=document.querySelector('#btnPLUS');
let btnSIN=document.querySelector('#btnSIN');
let btnCOS=document.querySelector('#btnCOS');
let btnTAN=document.querySelector('#btnTAN');
let btnSQU=document.querySelector('#btnSQU');
let btn0=document.querySelector('#btn0');
let btnDOT=document.querySelector('#btnDOT');
let btnCLEAR=document.querySelector('#btnCLEAR');
let btnEQUAL=document.querySelector('#btnEQUAL');



btn1.addEventListener('click', function(){
display.value+="1"
})
btn2.addEventListener('click', function(){
display.value+="2"
})
btn3.addEventListener('click', function(){
display.value+="3"
})
btn4.addEventListener('click', function(){
display.value+="4"
})
btn5.addEventListener('click', function(){
display.value+="5"
})
btn6.addEventListener('click', function(){
display.value+="6"
})
btn7.addEventListener('click', function(){
display.value+="7"
})
btn8.addEventListener('click', function(){
display.value+="8"
})
btn9.addEventListener('click', function(){
display.value+="9"
})
btn0.addEventListener('click', function(){
display.value+="0"
})
btnCLEAR.addEventListener('click', function(){
display.value=""
})
btnAC.addEventListener('click', function(){
display.value = display.value.slice(0,-1)
})

btnBRACKET.addEventListener('click', function(){
display.value+="()"
})
btnPERCENT.addEventListener('click', function(){
display.value+="%"
})
btnDOT.addEventListener('click', function(){
display.value+="."
})

btnPLUS.addEventListener('click', function(){
display.value+="+"
})

btnDIV.addEventListener('click', function(){
display.value+="/"
})
btnMULTIPLY.addEventListener('click', function(){
display.value+="*"
})
btnSQU.addEventListener('click', function(){
display.value+="**"
})
btnMINUS.addEventListener('click', function(){
display.value+="-"
})

btnEQUAL.addEventListener('click', function(){
try{
    let c = display.value;
    c = c.replace(/sin(\d+)/g, 
        "Math.sin($1*Math.PI/180)");
    c = c.replace(/cos(\d+)/g, 
        "Math.cos($1*Math.PI/180)");
    c = c.replace(/tan(\d+)/g, 
        "Math.tan($1*Math.PI/180)");
        c = c.replace(/\^/g, "**");
        display.value = eval(c);

//         let result=eval(c);
//         display.value=Number(result.toFixed(10));
}
catch(e){
    display.value="Error";
}
});



btnsin.addEventListener('click', function(){
display.value+= "sin";
});
btncos.addEventListener('click', function(){
display.value+= "cos";
});
btntan.addEventListener('click', function(){
display.value+= "tan";
});




