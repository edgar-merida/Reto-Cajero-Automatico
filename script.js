var arregloCuentas = [
    { nombre: "Francisco Merida", saldo: 900, password: '1234' },
    { nombre: "Diana Castillo", saldo: 490, password: '2021' },
    { nombre: "Andrea Santiago", saldo: 25, password: 'hello' }
];

var temporal;

function mostrarDatos() {
    let mostrarCuenta = new Cuentas();
    mostrarCuenta.mostrarCuentas();
}

function ocultaDatos() {
    let quitarDatos = new Cuentas();
    quitarDatos.ocultarCuentas();
}

function agregarDatos() {
    let nombre = prompt("Ingrese el Nombre de la Cuenta");
    let saldo;
    do {
        saldo = parseFloat(prompt("Ingrese el Saldo de la Cuenta. No debe ser Mayor a $.990 ni Menor a $.10"));
    } while (saldo > 990 || saldo < 10);
    let password = prompt("Ingrese el nuevo password de la cuenta");
    let confirmacion = prompt("Confirmar el password ingresado")
    if (password == confirmacion) {
        alert("Pasword Guardado con Exito... Presione Enter para Crear la Cuenta");
        let nuevaCuenta = new Cuentas(nombre, saldo, password);
        nuevaCuenta.agregarCuenta();
        nuevaCuenta.ocultarCuentas();
        nuevaCuenta.mostrarCuentas();
        alertify.success('Cuenta Registrada Exitosamente');
        console.table(arregloCuentas);
    }
    else {
        alert
            ("Los passwords ingresados No coinciden. La cuenta No fue creada.");
        alertify.error('Error al crear la Cuenta. Intente nuevamente...')
    }
}

function verificarPassword(index) {
    temporal = index;
    let cuenta = new Cuentas();
    cuenta.ocultarCuentas();
    borrarPass();
    hideBot1();
    showPass();
    let html = "";
    html += 'Ingrese la contraseña de: ' + arregloCuentas[index].nombre;
    document.getElementById("registros2").insertAdjacentHTML('beforeend', html);
    showAceptar()
}

function nuevaFuncion() {
    let nombre = arregloCuentas[temporal].nombre;
    let password = document.getElementById("floatingPassword").value;
    let operacion = new Operaciones(nombre, password);
    let bandera = operacion.verificarCuenta(nombre, password);
    if (bandera == false) {
        alert("Contraseña Incorrecta...");
        alertify.error('Error al ingresar a la Cuenta. Intente nuevamente...');
        let cuenta = new Cuentas();
        cuenta.mostrarCuentas();
        hideBots();
        hideAceptar();
        showBot1();
        hidePass();
    }
    else {
        alertify.success('Has ingresado Exitosamente a la cuenta: ' + arregloCuentas[temporal].nombre);
        showSaldo();
        hideAceptar();
        pedirSaldo();
        showBots();
        hideBot1();
        showSalir();
    }
}

function pedirSaldo() {
    let pedirSaldo = new Operaciones();
    pedirSaldo.verificarSaldo(temporal);
}

function sumarSaldo() {
    let sumarSaldo = new Operaciones();
    let saldo = parseFloat(prompt("Ingrese el valor de Saldo para Acreditar: "));
    sumarSaldo.agregarSaldo(temporal, saldo);
    sumarSaldo.verificarSaldo(temporal);
}

function retirarSaldo() {
    let restarSaldo = new Operaciones();
    let saldo = parseFloat(prompt("Ingrese el valor de Saldo a Retirar: "));
    restarSaldo.quitarSaldo(temporal, saldo);
    restarSaldo.verificarSaldo(temporal);
}

function borrarPass() {
    document.getElementById("registros2").innerHTML = '';
    document.getElementById("floatingPassword").innerHTML = '';
}

function salir() {
    mostrarDatos();
    hideSalir();
    hideSaldo();
    hidePass();
    hideAceptar();
    showBot1();
    hideBots();
    borrarPass();
}

function showBots() {
    document.getElementById("bot2").style.display = "";
    document.getElementById("bot3").style.display = "";
}
function hideBot1() {
    document.getElementById("bot1").style.display = "none";
}
function hideBots() {
    document.getElementById("bot2").style.display = "none";
    document.getElementById("bot3").style.display = "none";
}
function showBot1() {
    document.getElementById("bot1").style.display = "";
}
function showAceptar() {
    document.getElementById("aceptar").style.display = "";
}
function hideAceptar() {
    document.getElementById("aceptar").style.display = "none";
}
function showSaldo() {
    document.getElementById("label").style.display = "";
    document.getElementById("saldo").style.display = "";
}
function hideSaldo() {
    document.getElementById("label").style.display = "none";
    document.getElementById("saldo").style.display = "none";
}
function hidePass() {
    document.getElementById("pass").style.display = "none";
}
function showPass() {
    document.getElementById("pass").style.display = "";
}
function showSalir() {
    document.getElementById("botSalir").style.display = "";
}
function hideSalir() {
    document.getElementById("botSalir").style.display = "none";
}

console.table(arregloCuentas);
mostrarDatos();



