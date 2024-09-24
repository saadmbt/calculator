let display = document.getElementById('display');
function add(num) {
    display.value+=num;
}
function remove() {
    display.value=" ";
}

function add1() {
    display.value+="(";
}
function add2() {
    display.value+=")";
}
function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
}catch(e){
    display.value="Error";
}
}