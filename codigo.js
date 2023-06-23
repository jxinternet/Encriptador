function limpiar(){
let textarea=document.querySelector("#textareainput");
textarea.value="";
hideImageTextSubt();
showImageTextSubt();
}
document.getElementById("limpiar").onclick=limpiar;
//limpia textareainput

function verificarvacio(){
let textarea=document.querySelector("#textareainput");
if ( textarea.value.trim()==""){ 
    textarea.value="";
    textarea.focus();
    return true;
}
return false;
}

//funcion que verifica el espacio vacio
//se verifica y retorna "True" o "False"

function verificaralfanumerico(){
    let textareavalue=document.querySelector("#textareainput").value;
    let resultadoPatron=textareavalue.match(/[^A-Za-z0-9\s]/g);
    if(resultadoPatron){
    return true;}
return false;
}
//funcion que verifica si hay un caracter no alfanumerico
//retorna "True" o "False"

function encriptar(){
    let textareavalue=document.querySelector("#textareainput").value;
    let resultadoPatron=textareavalue.replace(/[aeiou]/g, (e)=>
    {if(e=="a"){return "ai";};
    if(e=="e"){return "enter";};
    if(e=="i"){return "imes";};
    if(e=="o"){return "ober";};
    if(e=="u"){return "ufat";};  
});


return resultadoPatron;
}
//funcion que encripta las vocales y retorna el string encriptado

function desencriptar(){
    let textareavalue=document.querySelector("#textareainput").value;
    let resultadoPatron=textareavalue.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (e)=>
    {if(e=="ai"){return "a";};
    if(e=="enter"){return "e";};
    if(e=="imes"){return "i";};
    if(e=="ober"){return "o";};
    if(e=="ufat"){return "u";};  
});

return resultadoPatron;
}

function hideImageTextSubt(){
    document.querySelector(".espacioblanco img").style.display="none";
    document.querySelector("#titulo").style.display="none";
    document.querySelector("#subtitulo").style.display="none";
    document.querySelector(".espacioblanco").style["justify-content"]="space-between";
    document.querySelector("#textareaoutput").style.display="block";
    document.querySelector("#copiar").style.display="block";

}

//funcion que esconde la imagen, titulo y subtitulo del contenedor derecho

function showImageTextSubt(){
    document.querySelector(".espacioblanco img").style.display="block";
    document.querySelector("#titulo").style.display="block";
    document.querySelector("#subtitulo").style.display="block";
    document.querySelector(".espacioblanco").style["justify-content"]="center";
    document.querySelector("#textareaoutput").style.display="none";
    document.querySelector("#copiar").style.display="none";

}
//funcion que muestra la imagen, titulo y subtitulo del contenedor derecho


async function copiar(){
    let textareavalue=document.querySelector("#textareaoutput").value;

    try {
        await navigator.clipboard.writeText(textareavalue);
        let tooltip = document.querySelector(".tooltiptext");
        tooltip.innerHTML = "Texto copiado al portapapeles";
      } catch (err) {
        console.error('Error en la copia', err);
      }


}

function fueraFunc() {
    var tooltip =  document.querySelector(".tooltiptext");
    tooltip.innerHTML = "Copiar al portapapeles";
  }




function ejecucionencriptar(){
if(verificarvacio()){
    alert("Has ingresado vacio");
}
if(verificarvacio()==0 && verificaralfanumerico()==1){
    alert("Has ingresado un caracter no alfanumerico");
}
if(verificarvacio()==0 && verificaralfanumerico()==0){
    let encripatado=encriptar();
    hideImageTextSubt();
    let textareaoutput=document.querySelector("#textareaoutput");
    textareaoutput.value=encripatado;
}

}


function ejecuciondesencriptar(){
    if(verificarvacio()){
        alert("Has ingresado vacio");
    }
    if(verificarvacio()==0 && verificaralfanumerico()==1){
        alert("Has ingresado un caracter no alfanumerico");
    }
    if(verificarvacio()==0 && verificaralfanumerico()==0){
        let desencriptado=desencriptar();
        hideImageTextSubt();
        let textareaoutput=document.querySelector("#textareaoutput");
        textareaoutput.value=desencriptado;
    }
     
}

document.getElementById("encriptar").onclick=ejecucionencriptar;
document.getElementById("desencriptar").onclick=ejecuciondesencriptar;
document.getElementById("copiar").onclick=copiar;
document.getElementById("copiar").onmouseout=fueraFunc;