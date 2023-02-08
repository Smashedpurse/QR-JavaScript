const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    if(formulario.link.value == ""){
        alert("Add a valid URL")
    }else{
        QR.makeCode(formulario.link.value)
    }       
});