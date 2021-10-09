"use strict";
var getAllValue = function () {
    var inputName = document.getElementById("name").value;
    var inputPhone = document.getElementById("phone").value;
    var inputAddress = document.getElementById("address").value;
    var inputPostcode = document.getElementById("postcode").value;
    if (inputName && inputPhone && inputAddress && inputPostcode) {
        var result_1 = "\n        Name : " + inputName + "\n        Phone : " + inputPhone + "\n        Address : " + inputAddress + "\n        Postcode : " + inputPostcode + "\n        ";
        var cb = navigator.clipboard;
        cb.writeText(result_1)
            .then(function () { return alert("\uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. " + result_1); });
        inputName = "";
        inputPhone = "";
        inputAddress = "";
        inputPostcode = "";
    }
    else {
        alert("모두입력해주세요.");
    }
};
