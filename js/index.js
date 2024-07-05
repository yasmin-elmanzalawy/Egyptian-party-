const navWidth = $(".innerNav").outerWidth(true);
let isOpen = false;
$("#sideNav").css({ left: -navWidth });
$("#sideNav #settingsIcon").on("click", function () {
  if (!isOpen) {
    $("#sideNav").animate({ left: "0px" }, 500);
    isOpen = true;
  }
});
$("#sideNav #closeIcon").on("click", function () {
  if (isOpen) {
    $("#sideNav").animate({ left: -navWidth }, 500);
    isOpen = false;
  }
});

// singers section start

$(".singerTitle").on("click", function () {
  $(this).next().slideToggle("slow");
});

// singers section end

// count down start
$("#countDown")
  .css({ "backgroud-color": "red" })
  .countdown("2025/12/31", function (event) {
    $("#days").text(event.strftime("%D days"));
    $("#hours").text(event.strftime("%H hr"));
    $("#minutes").text(event.strftime("%M m"));
    $("#seconds").text(event.strftime("%S s"));
  });
// count down end

// textarea count start
$("#message").css({'height':'150px'}).on("keyup", function () {
  $("#countnumber").text($(this).val().length);
  let x = $(this).val().length;
  if (x > 100) {
    $("#errorMsg").removeClass("d-none").addClass("d-block");
  } else {
    $("#errorMsg").removeClass("d-block").addClass("d-none");
  }
});
// textarea count end
