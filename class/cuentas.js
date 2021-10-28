class Cuentas {
    constructor(nombre, saldo, password) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.password = password
    }

    agregarCuenta() {
        let cuentaNueva = {
            nombre: this.nombre,
            saldo: this.saldo,
            password: this.password
        };
        arregloCuentas.push(cuentaNueva);
    }

    mostrarCuentas() {
        for (let index = 0; index < arregloCuentas.length; index++) {
            const element = arregloCuentas[index];

            let html = "";
            html += "<tr>";
            html += "   <td>" + (index + 1) + "</td>";
            html += '   <td> <span role="button" onclick="verificarPassword('+index+'), showAceptar()">' + element.nombre + '</span></td>';
            html += "</tr>";
            document.getElementById("registros").insertAdjacentHTML('beforeend', html);
        }       
    }

    ocultarCuentas() {
      document.getElementById("registros").innerHTML='';     
    }

}
