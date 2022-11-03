$(document).ready(function () {
  $("h1").css("color", "red");
});

$("h1").css("color", "red");

console.log($("h1").css("color"));

$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("h1").addClass("big-title ");
console.log($("h1").hasClass("big-title"));

$("h1").text("Bye");
$("button").text("Dont click me");
$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "red");
});

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "white";
  });
}

$("button").click(function () {
  $("h1").css("color", "red");
});

$("input").keypress(function () {
  console.log(event.key);
});

$(document).keypress(function () {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "white");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
$("button").remove();

$("button").on("click", function () {
  $("h1").slideUp();
});

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.6 });
});
