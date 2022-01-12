exports.convertTemp = function() {
    var temp = parseInt(document.getElementById("temp").value);
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var result = document.getElementById("result");
    let convertedTemp;

    if (from.value === "from-c") {
        if (to.value === "to-f") {
            convertedTemp = (temp * 9 / 5) + 32;
        } else if (to.value === "to-k") {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = "can not convert to the same degree"
        }

    }
    if (from.value === "from-f") {
        if (to.value === "to-c") {
            convertedTemp = (temp - 32) * 5 / 9;
        } else if (to.value === "to-k") {
            convertedTemp = (temp + 459.67) * 5 / 9;
        } else {
            convertedTemp = "can not convert to the same degree"
        }

    }
    if (from.value === "from-k") {
        if (to.value === "to-c") {
            convertedTemp = temp - 273.15;
        } else if (to.value === "to-f") {
            convertedTemp = (temp * 9 / 5) - 459.67;
        } else {
            convertedTemp = "can not convert to the same degree"
        }
    }

    result.value = convertedTemp;

}