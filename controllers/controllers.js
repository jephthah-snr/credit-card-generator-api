const Bootcamp = require('../models/Bootcamp');


exports.getAllUsers = (req, res, next) => {
    function cc_gen() {
        var pos;
        var str = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var sum = 0;
        var final_digit = 0;
        var t = 0;
        var len_offset = 0;
        var len = 0;
        var issuerIndex = Math.floor(Math.random() * 3);
        var issuers = ['Mastercard', 'Visa', 'American Express', 'Discover'];
        var issuer = issuers[issuerIndex];
        var CVV = (Math.floor(Math.random() * 9) + 1 + "")
            .concat(Math.floor(Math.random() * 9) + 1 + "")
            .concat(Math.floor(Math.random() * 9) + 1 + "");
        var exp_year = new Date().getFullYear() + Math.floor(Math.random() * 4) + 1;
        var exp_month = Math.floor(Math.random() * 12) + 1
    
        switch (issuer) {
            case "Visa":
                str[0] = 4;
                pos = 1;
                len = Math.random() > .5 ? 16 : 13;
                break;
            case "Mastercard":
                str[0] = 5;
                t = Math.floor(Math.random() * 5) % 5;
                str[1] = 1 + t; // Between 1 and 5.
                pos = 2;
                len = 16;
                break;
            case "American Express":
                str[0] = 3;
                t = Math.floor(Math.random() * 4) % 4;
                str[1] = 4 + t; // Between 4 and 7.
                pos = 2;
                len = 15;
                CVV = CVV.concat(Math.floor(Math.random() * 9) + 1 + "");
                break;
            case "Discover":
                str[0] = 6;
                str[1] = 0;
                str[2] = 1;
                str[3] = 1;
                pos = 4;
                len = 16;
                break;
        }
    
        while (pos < len - 1)
            str[pos++] = Math.floor(Math.random() * 10) % 10;
    
        // Calculate the Luhn checksum of the values thus far.
        len_offset = (len + 1) % 2;
        for (pos = 0; pos < len - 1; pos++) {
            if ((pos + len_offset) % 2) {
                t = str[pos] * 2;
                if (t > 9) {
                    t -= 9;
                }
                sum += t;
            } else {
                sum += str[pos];
            }
        }
    
        // Choose the last digit so that it causes the entire string to pass the checksum.
        final_digit = (10 - (sum % 10)) % 10;
        str[len - 1] = final_digit;
        t = str.join('');
        t = t.substr(0, len);
    
        return {
            cc: t,
            cvv: CVV,
            issuer: issuer,
            exp_year: exp_year,
            exp_month: exp_month
        }
    }
    
    console.log('you aredit card datails are as follows:', cc_gen())
    res.status(200).json(cc_gen())
}

exports.getUser = (req, res, next) => {
    res.status(200).send(`the GET/:id route works just fine!!${req.params.id}`)
}

exports.addUser = (req, res, next) => {
    console.log(req.body.json)
    res.status(200).json('your data is serverd, if you get {} without ant data it means there was an error serving the data')
}

exports.editUser = (req, res, next) => {
    res.status(200).send(`the PUT route works just fine!!`)
}

exports.deleteUser = (req, res, next) => {
    res.status(200).send(`the DELETE route works just fine!!`)
}
