// en javascript estamos dando un programacion de dibujo por medio de las cordenadas X, Y. en las cueles nos ayudan a trasar un dibujo 
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorclick);

var d = document.getElementById("dibujito");    
var lienzo = d.getContext("2d");
var ancho = d.width; 

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial); 
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

function dibujoPorclick()
{
 
 var lineas = parseInt(texto.value);
 var l = 0; 
 var yi, xf; 
 var xi, yf;
 var espacio = ancho / lineas; 
  // ciclos es la repiticion de las instrucciones o de tareas con un numero limitado de veces miestras algo sea verdad. 

 while(l < lineas)
 { 
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * l;
    yf = espacio * (l+1); 
    dibujarLinea("blue ", xi, 0, 300, yf);
    dibujarLinea("red ", 0, yi, xf, 300);
    console.log("lineas" + l);
    l = l + 1 ; 
 }
 dibujarLinea("yellow", 1, 1, 1, 299);
 dibujarLinea("yellow", 1, 299, 299, 299);
 dibujarLinea("yellow", 1, 0, 299, 0);
 dibujarLinea("yellow", 299, 0, 299, 299);

    
    
}