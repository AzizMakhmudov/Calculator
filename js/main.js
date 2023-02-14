function getData() {
  let today = new Date();
  let now = today.toLocaleTimeString();
  document.querySelector("[data-time-notice]").innerHTML = now;

  window.setTimeout(arguments.callee, 1000);
  return now;
}

getData();

$(".tdnn").click(function () {
  $(".calculator").toggleClass("light");
  $(".moon").toggleClass("sun");
  $(".tdnn").toggleClass("day");
});

$(".calc-btn").on("click", function () {
  if ($(this).attr("data-role") != "operator") {
    $(".display").val($(".display").val() + $(this).val());
  } else {
    if ($(".display").val() != "") {
      $(".display").val($(".display").val() + $(this).val());
    }
  }
});

$(".clear-btn").on("click", function () {
  $(".display").val("");
});

$(".calculate-btn").on("click", function () {
  var expression = $(".display").val();
  $(".display").val(eval(expression));
});

$(document).ready(function () {
  $("#only_num").keydown(function (event) {

    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||

      (event.keyCode == 65 && event.ctrlKey === true) ||

      (event.keyCode >= 35 && event.keyCode <= 39)) {

      return;
    } else {

      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();

      }
    }
  });
});