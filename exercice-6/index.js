'use strict'

/**
 * Check Phone Number
 * @param {String} phoneNumber
 * @return {boolean} isValid
 */
var checkPhoneNumber = function checkPhoneNumber(phoneNumber) {
    if (!phoneNumber.search(/^((\+)33|0)[1|6|7](\d{2}){4}$/g)) {
        return true;
    }

    return false;
}

console.log(checkPhoneNumber('0641831714'));
console.log(checkPhoneNumber('0141831714'));
console.log(checkPhoneNumber('0641831716'));
console.log(checkPhoneNumber('+33641781716'));
