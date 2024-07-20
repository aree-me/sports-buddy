const display = document.getElementById("display");
function todisplay(value){
  display.value += value;
}
function cleardisplay(){
  display.value="";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    // alert(error)
    display.value="Error"
  }
}