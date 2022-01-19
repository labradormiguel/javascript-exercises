const leapYears = function (anyo) {

    if (anyo % 100 == 0 && anyo % 400 != 0) {

        return false
    }

    else if (anyo % 4 == 0 || anyo % 100 == 0) {

        return true

    }

    else {

        return false

    }

};

// Do not edit below this line
module.exports = leapYears;
