const sumAll = function (...args) {

    let contador = 0;
    let error = "ERROR";

    if (typeof args[0] != "number" || typeof args[1] != "number") {

        return error;

    } else if (args[0] < 0 || args[1] < 0) {

        return error;

    } else {

        if (args[0] < args[1]) {

            for (let i = args[0]; i <= args[1]; i++) {

                contador = contador + i;

            }

        } else {

            for (let i = args[0]; i >= args[1]; i--) {

                contador = contador + i;

            }
        }

        return contador;
    }
};

// Do not edit below this line
module.exports = sumAll;
