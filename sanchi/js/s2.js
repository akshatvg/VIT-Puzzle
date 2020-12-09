$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("wells fargo") || answer.includes("wells") || answer.includes("fargo") || answer.includes("internship") || answer.includes("help") || answer.includes("internship help") || answer.includes("wellsfargo") || answer.includes("wels");
    if (result == true) {
        window.location.href = "sa3.html";
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