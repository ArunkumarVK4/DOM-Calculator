var container = document.createElement('div');
container.setAttribute('class','container');
document.body.append(container);

var cal = document.createElement('div');
cal.setAttribute('class','cal')
container.append(cal);

var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('placeholder','0');
cal.append(input);

// Clear Button
var clear1 = document.createElement('button');
clear1.setAttribute('onclick','Clear()');
clear1.innerHTML= 'CL';
cal.append(clear1);
// Delete Button
var dele = document.createElement('button');
dele.setAttribute('onclick','del()');
dele.innerHTML= 'DEL';
cal.append(dele);
// % button
var per2 = document.createElement('button');
per2.setAttribute('onclick','per1()');
per2.innerText = '%';
cal.append(per2)
// / Button
var div3 = document.createElement('button');
div3.setAttribute('onclick','div1()');
div3.innerText = '/';
cal.append(div3)
// 7 Button
var sev = vAdd('7');
// 8 Button
var eih = vAdd('8');
// 9 Button
var nin = vAdd('9');
// * Button
var sta4 = document.createElement('button');
sta4.setAttribute('onclick','mul1()');
sta4.innerText = '*';
cal.append(sta4)
// 4 Button
var equal = vAdd('4');
console.log(equal)
// 5 Button
var five = vAdd('5');
// 6 Button
var six = vAdd('6');
// - Button
var minus1 = document.createElement('button');
minus1.setAttribute('onclick','minus()');
minus1.innerText = '-';
cal.append(minus1)
// 1 Button
var one = vAdd(1);
// 2 Button
var two = vAdd(2);
// 3 Button
var three = vAdd(3);
// button +
var sec5 = document.createElement('button');
sec5.setAttribute('onclick','plu()');
sec5.innerText = '+';
cal.append(sec5)
// Button .
var do1 = document.createElement('button');
do1.setAttribute('onclick','do2()');
do1.innerText = '.';
cal.append(do1)


// 0 Button
var zero = vAdd(`${'0'}`);
// = Button
var equal = document.createElement('button');
equal.setAttribute('onclick','calculate()');
equal.setAttribute('class','eq');
equal.innerHTML= '=';
cal.append(equal);


function vAdd(value1){
    var value1 = add(`Display(${value1})`,value1);
    console.log(value1)
    return value1;
}

function add(value1,value2){
    var cre = document.createElement('button');
    cre.setAttribute('onclick',value1);
    cre.innerHTML=value2;
    cal.append(cre);
}

let inputGive = document.querySelector('input');

function Display(num){
    inputGive.value += num;
}
function calculate(){
    try {
        inputGive.value = eval(inputGive.value);
    } catch(err) {
        alert('invalid Input')
    }
}

function Clear(){
    inputGive.value = '';
}

function del(){
    inputGive.value = inputGive.value.slice(0,-1);
}

function plu(){
    inputGive.value += '+';
}

function minus(){
    inputGive.value += '-';
}

function mul1(){
    inputGive.value += '*';
}

function div1(){
    inputGive.value += '/';
}

function per1(){
    inputGive.value += '%';
}

function do2(){
    inputGive.value += '.';
}







