function convertFromDecimal() {
    const decimalInput = document.getElementById("decimal").value;
    document.getElementById("binary").value = parseInt(decimalInput, 10).toString(2);
    document.getElementById("hexadecimal").value = parseInt(decimalInput, 10).toString(16);
    document.getElementById("octal").value = parseInt(decimalInput, 10).toString(8);
}

function convertFromBinary() {
    const binaryInput = document.getElementById("binary").value;
    document.getElementById("decimal").value = parseInt(binaryInput, 2).toString(10);
    document.getElementById("hexadecimal").value = parseInt(binaryInput, 2).toString(16);
    document.getElementById("octal").value = parseInt(binaryInput, 2).toString(8);
}

function convertFromHexadecimal() {
    const hexadecimalInput = document.getElementById("hexadecimal").value;
    document.getElementById("decimal").value = parseInt(hexadecimalInput, 16).toString(10);
    document.getElementById("binary").value = parseInt(hexadecimalInput, 16).toString(2);
    document.getElementById("octal").value = parseInt(hexadecimalInput, 16).toString(8);
}

function convertFromOctal() {
    const octalInput = document.getElementById("octal").value;
    document.getElementById("decimal").value = parseInt(octalInput, 8).toString(10);
    document.getElementById("binary").value = parseInt(octalInput, 8).toString(2);
    document.getElementById("hexadecimal").value = parseInt(octalInput, 8).toString(16);
}
