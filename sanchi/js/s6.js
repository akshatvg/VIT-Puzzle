$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("vit hack") || answer.includes("hack") || answer.includes("hackathon") || answer.includes("runner up") || answer.includes("win") || answer.includes("won") || answer.includes("vit");
    if (result == true) {
        window.location.href = "san7.html";
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