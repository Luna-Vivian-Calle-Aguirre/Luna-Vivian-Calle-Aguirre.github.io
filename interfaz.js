document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var sCorreo='';
    var SContraseña='';
    var bAcceso = false;

    sCorreo=document.querySelector('#txtCorreo').value;
    SContraseña=document.querySelector('#txtContraseña').value;
    bAcceso = validarCredencial(sCorreo,SContraseña);
    console.log(bAcceso);
    
    if (bAcceso == true) {
        ingresar();
    }
    
}
function ingresar(){
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href='oficial.html';
            
            break;
        case '2':
            window.location.href='admin.html';
        break;
    
        default:
            window.localStorage.href='index.html'
            break;
    }
}