class Operaciones {

    verificarCuenta(nombre, password) {
        let bandera = false;
        for (let index = 0; index < arregloCuentas.length; index++) {
            const element = arregloCuentas[index];
            if ((element.nombre == nombre) && (element.password == password)) {
                temporal = index;
                bandera = true;
            }
        }
        return bandera;
    }

    verificarSaldo(temporal) {
        document.getElementById("saldo").value = ("$." + arregloCuentas[temporal].saldo)
    }

    agregarSaldo(temporal, saldo) {
        if ((arregloCuentas[temporal].saldo + saldo) > 990) {
            alert("El saldo no puede exceder el monto total de $.990.00. No se agrego el saldo.");
            alertify.error('Error al Acreditar Saldo a la Cuenta. Intente nuevamente...');
        }
        else {
            arregloCuentas[temporal].saldo += saldo;
            alertify.success('Has Acreditado Exitosamente a la Cuenta la cantidad de: $.'+saldo);
        }
    }

    quitarSaldo(temporal, saldo) {
        if ((arregloCuentas[temporal].saldo - saldo) < 10) {
            alert("El saldo de la cuenta no puede ser inferior a $.10.00. No se debito saldo.");
            alertify.error('Error al Debitar Saldo a la Cuenta. Intente nuevamente...');
        }
        else {
            arregloCuentas[temporal].saldo -= saldo;
            alertify.success('Has Debitado la cantidad de: $.'+saldo+' de la cuenta Exitosamente...');
        }
    }

}