
const getAllValue = () => {
    let inputName: String = (<HTMLInputElement>document.getElementById("name")).value;
    let inputPhone: String = (<HTMLInputElement>document.getElementById("name")).value;
    let inputAddress: String = (<HTMLInputElement>document.getElementById("name")).value;
    let inputPostcode: String = (<HTMLInputElement>document.getElementById("name")).value;
    
    if (inputName && inputPhone && inputAddress && inputPostcode) {
        let result = `
        Name : ${inputName}
        Phone : ${inputPhone}
        Address : ${inputAddress}
        Postcode : ${inputPostcode}
        `
        const cb = navigator.clipboard;
        cb.writeText(result)
            .then(() => alert(`복사되었습니다. ${result}`));
        inputName = ""
        inputPhone = ""
        inputAddress = ""
        inputPostcode = ""
    }
    else {
        alert("모두입력해주세요.")
    }
    

}



