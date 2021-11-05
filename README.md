# 1534
Mi prime proyecto 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    
        <title> Dibujando con Canvas  </title>
    </head>
    <body>
        <h1>Dibujo en Canvas </h1>
        <p>
        Cuantas lineas quieres dibujar <br>
        <input type = "text" id="texto_lineas" />
        <input type="button" value="A darle" id= "botoncito"/>
        </p>
        
        <canvas width="300" height="300" id="dibujito"></canvas>
        <p> Asi queda tu dibujo</p>
        <script src="dibujo.js"> </script>

    </body>
</html>

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
