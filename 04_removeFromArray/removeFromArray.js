const removeFromArray = function (array, ...numero) {

    for (let i = 0; i < numero.length; i++) {

        let busqueda = array.indexOf(numero[i]);

        if (busqueda >= 0)

            array.splice(busqueda, 1);

    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
