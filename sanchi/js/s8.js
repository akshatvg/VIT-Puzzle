$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("farewell") || answer.includes("this") || answer.includes("here");
    if (result == true) {
        window.location.href = "s9.html";
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