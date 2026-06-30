window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();

// Stop any previous interval if exists
if (window.timer1MinInterval) {
    clearInterval(window.timer1MinInterval);
    window.timer1MinInterval = null;
}

// Reset timer to full 60 seconds whenever this slide is visited
player.SetVar("Time1MinRemaining", 60);
player.SetVar("countdownText", "01:00"); // optional: display full time immediately

// Start the timer AFTER 4 seconds (audio duration)
setTimeout(function() {

    function start1MinTimer() {

        function updateTimer() {
            var player = GetPlayer();
            var timeRemaining = player.GetVar("Time1MinRemaining");

            if (timeRemaining >= 0) {
                var minutes = Math.floor(timeRemaining / 60);
                var seconds = timeRemaining % 60;
                var timeString = 
                    String(minutes).padStart(2, '0') + ":" + 
                    String(seconds).padStart(2, '0');

                player.SetVar("countdownText", timeString);

                timeRemaining--;
                player.SetVar("Time1MinRemaining", timeRemaining);

            } else {
                player.SetVar("countdownText", "00:00");
                clearInterval(window.timer1MinInterval);
                window.timer1MinInterval = null;
            }
        }

        // First update immediately
        updateTimer();
        window.timer1MinInterval = setInterval(updateTimer, 1000);
    }

    start1MinTimer();

}, 4000); // 4000ms = 4 seconds

}

window.Script2 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script3 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script4 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

window.Script5 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script6 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script7 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

window.Script8 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script9 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script10 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

window.Script11 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script12 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script13 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

window.Script14 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script15 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script16 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

window.Script17 = function()
{
  var player = GetPlayer();

// ALWAYS reset timer when entering this scene
player.SetVar("TimeRemaining", player.GetVar("TimeStartValue"));

// stop any previous running timer
if (window.timerInterval) {
    clearInterval(window.timerInterval);
    window.timerInterval = null;
}

function startTimer() {

    function updateCountdown() {
        var player = GetPlayer();
        var timeRemaining = player.GetVar("TimeRemaining");

        if (timeRemaining >= 0) {

            var minutes = Math.floor(timeRemaining / 60);
            var seconds = timeRemaining % 60;
            var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

            player.SetVar("TimerText", formatted);

            timeRemaining--;
            player.SetVar("TimeRemaining", timeRemaining);

        } else {
            player.SetVar("TimerText", "00:00");
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }

    window.timerInterval = setInterval(updateCountdown, 1000);
}

startTimer();

}

};
