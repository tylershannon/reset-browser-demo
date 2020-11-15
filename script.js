var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 seconds

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
        document.getElementById("still-there").classList.add("hidden");
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).click(function (e) {
        idleTime = 0;
    });

});

$('#courtforms').on('click', function(e) {
    //e.preventDefault();
    alert('test');
  });
jQuery.get('text.txt', function(data) {
      document.getElementById("readme").innerHTML = data;
});
function logBackIn() {
  document.getElementById("refresh").classList.add("hidden");
}
function newSession() {
  document.getElementById("refresh").classList.add("hidden");
}


function timerIncrement() {
    //console.log(idleTime);
    idleTime = idleTime + 1;
    if (idleTime > 20) { // 20 minutes
        //window.location.reload();
        document.getElementById("still-there").classList.add("hidden");
        document.getElementById("refresh").classList.remove("hidden");
    }
    if (idleTime > 10 & idleTime < 21) {
        //window.location.reload();
        document.getElementById("still-there").classList.remove("hidden");
        var remaining = 20-idleTime;
        document.getElementById("countdown").innerHTML = `Your session will log out in ${remaining} seconds`
    }
}

function resetTimer() {
  idleTime = 0
}
