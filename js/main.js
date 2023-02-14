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

