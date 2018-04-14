var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
   $('#check').on('click', function(){
    secondsLabel=sec;
    minutesLabel=min;
   });
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  var sec=pad(totalSeconds % 60);
  var min=pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function result(){
  var correctAnswer=Math.sqrt(34);
  correctAnswer=correctAnswer.toFixed(2);
  if(correctAnswer == document.getElementById('answer').value) {
    $("#wrongAnswer").css("display","none");
    $("#correctAnswer").show();
    $("#help").css("display","none");
    $("#helpTheory").css("display","none");
    $("#check").css("display","none");
    $("hr").show();
    $("#usedTheory").show();
    $("#submit").show();
    $("#solve").show();
  }
  else{
    $("#correctAnswer").css("display","none");
    $("#wrongAnswer").show();
  }
}

function theory(){
  if(document.getElementById("pitTh").checked == true && $(".theory:checked").length == 1)
  {
    $("#wrongTheory").css("display","none");
    $("#correctTheory").show();
    $("#usedTheory").css("display","none");
    $("#submit").css("display","none");
    $("#help").css("display","none");
    $("#exit").show();
  }
  else {
    $("#correctTheory").css("display","none");
    $("#wrongTheory").show();
    $("#help").show();
  }
}

$(document).ready(function() {
  $("#helpTheory").css("display","none");
  $("#solution").css("display","none");
  $("#solve").css("display","none");
  $("#checkAnswer").css("display","none");
  $("#usedTheory").css("display","none");
  $("#submit").css("display","none");
  $("hr").css("display","none");
  $("#checkTheory").css("display","none");
  $("#exit").css("display","none");
});

$('#help').on('click', function(){
  $("#helpTheory").show();
});

$('#check').on('click', function(){
  $("#checkAnswer").show();
}); 

$('#submit').on('click', function(){
  $("#checkTheory").show();
});

$('#solve').on('click', function(){
  $("#solution").show();
  $("#help").css("display","none");
  $("#solve").css("display","none");
  $("#check").css("display","none");
  $("#exit").show();
});