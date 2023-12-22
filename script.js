//ESTO AGREGA A LA PANTALLA EL BOTON DE LA CALCULADORA QUE AGREGUEMOS//
function agregar(valor){
    document.getElementById('pantalla').value+=valor;
}
//ESTO BORRA LA PANTALLA//
function borrar(){
    document.getElementById('pantalla').value='';
}
//CALCULA EL RESULTADO //
function calcular(){
    const valorPantalla= document.getElementById('pantalla').value;
    const resultado=eval(valorPantalla);
    document.getElementById('pantalla').value=resultado;
}