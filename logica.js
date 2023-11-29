// Roles 
// 1: admin
// 2: clientes

function obtenerListaUsuario(){
    var listaUsuario= JSON.parse(localStorage.getItem('listaUsuariosLs'));
    if (listaUsuario == null) {
        listaUsuario=[
            //id , nombre, apellido , correo ,         contraseña, fecha_nac , rol
            ['1','Miguel','miranda','lunaAguirre0906@gmail.com','lu0406','2003-11-29','1'],
            ['2','Mauro','lima','lunacalle0505@gmail.com','vi0906','2000-12-04','2']
        ];
    }
    return listaUsuario;

}

function validarCredencial(pCorreo, pContraseña){
    var listaUsuario =obtenerListaUsuario();
    var bAcceso=false;

    for (var i=0; i<listaUsuario.length;i++){
        if (pCorreo == listaUsuario[i][3] && pContraseña == listaUsuario[i][4]) {
            bAcceso=true;
            sessionStorage.setItem('usuarioActivo',listaUsuario[i][1]+' '+listaUsuario[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuario[i][6]);
        }
    }
    return bAcceso;
}
