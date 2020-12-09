$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("7") || answer.includes("seven");
    if (result == true) {
        window.location.href = "d8.html";
    }
    else if (answer === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submitStudBtn").trigger('click');
    }
});