function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function() {
  $("#subj").children().css("display","none");
  $("#tasksHardness").children().css("display","none");
});

$('a').on('click', function(){
  var target = $(this).attr('rel');
  $("#"+target).show().siblings("div").hide();
    $("#indexImage1").css("display","none");
});
