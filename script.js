function insert(num) {
    var numero=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=numero+num;
}
function clean(){
document.getElementById('resultado').innerHTML="";
}
function back(){
     var reultado=document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML=resultado.substeing(0,resultado.length-1);
    }
function calcular(){
    var resultado= document.getElementById('resultado').innerHTML;
if(reultado){
    document.getElementById('resultado').innerHTML=eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML="nada para calcular"
}
}
