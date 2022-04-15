

function tirar(){
    var numero = Math.floor(Math.random() * 37);
    document.getElementById("resultadoNumero").innerHTML = "Numero: " + numero + "<br>";
    console.log(numero)

// ----------------------------------------------Coloraizacion--------------------------------------------------------------
    if(true){document.getElementById(0).style.backgroundColor = "rgb(0, 138, 30)";}
    if(true){
        let varParBackgroundColor;
        for (let i = 2; i <= 36; i=i+2) {
            varParBackgroundColor = i;
            document.getElementById(varParBackgroundColor).style.backgroundColor = "rgb(10, 10, 10)";
        }
        let varParColor;
        for (let i = 2; i <= 36; i=i+2) {
            varParColor = i;
            document.getElementById(varParColor).style.color = "rgb(255, 255, 255)";
        }  
    }
    if(true){
        let varInpar;
        for (let i = 1; i <= 35; i=i+2) {
            varInpar = i;
            document.getElementById(varInpar).style.backgroundColor = "rgb(200, 20, 20)";
        } 
    }

    if(true){
        let celesteTotal;
        for (let i = 120; i <= 131; i++) {
            celesteTotal = i;
            document.getElementById(celesteTotal).style.backgroundColor = "rgb(0, 177, 162)";
        }
    }
    
    if(true){
        let violet;
        for (let i = 150; i <= 152; i++) {
            violet = i;
            document.getElementById(violet).style.backgroundColor = "rgb(80, 0, 172)";
        }
    }

    
 
    if (numero <= 12 && numero != 0) {
        let celeste1;
        for (let i = 120; i <= 123; i++) {
            celeste1 = i;
            document.getElementById(celeste1).style.backgroundColor = "rgb(96, 233, 221)";
        }  
    }
    else if (numero <= 24 && numero > 12) {
        let celeste2;
        for (let i = 124; i <= 127; i++) {
            celeste2 = i;
            document.getElementById(celeste2).style.backgroundColor = "rgb(96, 233, 221)";
        }  
    }
    else if(numero <= 36 && numero > 24) {
        let celeste3;
        for (let i = 128; i <= 131; i++) {
            celeste3 = i;
            document.getElementById(celeste3).style.backgroundColor = "rgb(96, 233, 221)";
        }
        
    }else{}

    if (numero == 1||numero ==4||numero ==7||numero ==10||numero ==13||numero ==16||numero ==19||numero ==22||numero ==25||numero ==28||numero ==31||numero ==34 && numero != 0) {
        document.getElementById(150).style.backgroundColor = "rgb(201, 153, 255)";
    }
    else if (numero == 2||numero ==5||numero ==8||numero ==11||numero ==14||numero ==17||numero ==20||numero ==23||numero ==26||numero ==29||numero ==32||numero ==35 && numero != 0) {
        document.getElementById(151).style.backgroundColor = "rgb(201, 153, 255)";
    }
    else if (numero == 3||numero ==6||numero ==9||numero ==12||numero ==15||numero ==18||numero ==21||numero ==24||numero ==27||numero ==30||numero ==33||numero ==36 && numero != 0) {
        document.getElementById(152).style.backgroundColor = "rgb(201, 153, 255)";
    }else{

    }
   

    
  if(numero == document.getElementById(numero).value){document.getElementById(numero).style.backgroundColor = "rgb(253, 200, 100)"}
  if(numero == document.getElementById(numero).value){document.getElementById(numero).style.color = "rgb(0, 0, 0)"}


//------------------------------------------------------- Paridad ------------------------------------------------------------


if(numero == 0){
    document.getElementById("resultadoParidad").innerHTML = "El numero es cero<br>";
}
else if(numero % 2 == 0){
    document.getElementById("resultadoParidad").innerHTML = "El numero es par<br>";
}
else{
    document.getElementById("resultadoParidad").innerHTML = "El numero es impar<br>";
}




if(numero >= 1 && numero <=12){
    document.getElementById("resultadoTriada").innerHTML = "Primera Docena<br>";
}
else if(numero > 12 && numero <=24)
{
    document.getElementById("resultadoTriada").innerHTML ="Segunda Docena<br>";
}
else if(numero > 24)
{
    document.getElementById("resultadoTriada").innerHTML ="Tercera Docena<br>";
}
else{
    document.getElementById("resultadoTriada").innerHTML ="Te dije que es cero<br>";
}	
//----------------------------------------------- Apuesta ------------------------------------------------------------




//----------------------------------------------- Reniciar ------------------------------------------------------------
}
function restart(){
    location.reload()

}
let acumuladorDinero = 0;
function agregarDinero(){
    acumuladorDinero= acumuladorDinero + parseInt(prompt("Ingrese el dinero que desee apostar: "));
    console.log(acumuladorDinero)

    document.getElementById("visualizacionDeDinero").innerHTML = `Tenés: $${acumuladorDinero}`;

return acumuladorDinero;

}

let acumuladorApuesta = 0;
function agregarApuesta(){
    acumuladorApuesta= acumuladorApuesta + parseInt(document.getElementsByClassName("Apuestas").value);
    console.log(acumuladorApuesta)

    document.getElementById("visualizacionDeApuesta").innerHTML = `Apostas: $${acumuladorApuesta}`;

return acumuladorApuesta;
}
var checkbox = document.getElementById('primeraColumna');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
       alert('Apostas la Primera Columna: 1°');
       document.getElementsByClassName("primeraColumna").style.backgroundColor = "rgb(0, 119, 255);";


    }
});





    



