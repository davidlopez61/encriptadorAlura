const inputText = document.querySelector(".input-text")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar() {
    const textoEncriptado= encriptar(inputText.value)
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none";
    inputText.value="";
}

function btnDesencriptar() {
    const textoDesencriptado= desencriptar(mensaje.value)
    inputText.value=textoDesencriptado;
    mensaje.style.backgroundImage="url('images/Muñeco.png')";
    mensaje.value="";
}
function btnCopiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    alert("texto copiado")
}

function encriptar(texto){
    let matrizCodigo = [["e","enter"],
                    ["i","imes"],
                    ["a","ai"],
                    ["o","ober"],
                    ["u","ufat"]];

    texto=texto.toLowerCase();

    for (let i = 0; i< matrizCodigo.length; i++) {      
        if(texto.includes(matrizCodigo[i][0])){
            texto=texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto;
}
function desencriptar(texto){
    let matrizCodigo = [["e","enter"],
                    ["i","imes"],
                    ["a","ai"],
                    ["o","ober"],
                    ["u","ufat"]];

    texto=texto.toLowerCase();

    for (let i = 0; i< matrizCodigo.length; i++) {      
        if(texto.includes(matrizCodigo[i][1])){
            texto=texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return texto;

}