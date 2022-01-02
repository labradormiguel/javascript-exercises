const repeatString = function (string, num) {

    let hey = '';
    let error = "ERROR";

    if (string == '') {

        return hey;

    } else if (num == 0) {

        return hey;
    }

    else if (num < 0) {

        return error;

    } else {

        for (let i = 0; i < num; i++) {

            hey += string;

        }

        return hey;

    }
};

// Do not edit below this line
module.exports = repeatString;
