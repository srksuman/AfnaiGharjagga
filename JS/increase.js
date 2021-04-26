// $(window).on("load",function(){
// $(".loader").fadeOut(1000);
// });
$(document).ready(function () {
  $("#Increase").click(function () {
    setFontSize("increase");
  });

  $("#Decrease").click(function () {
    setFontSize("decrease");
  });

  $("#Reset").click(function () {
    // setFontSize('reset');

    // $("body").removeClass("body");
    $(".body").css({ "filter": "grayscale(0%)" });
    $(".boldFontweight").css({ "font-weight": "normal" });
    $(".body").css({ "background": "whitesmoke" });
    $(".fontIncDecREset").css("font-size", "17px");
    $(".body").css({ "filter": "invert(0)" });
    $("a").css({ "font-weight": "normal", "border": "none" });
    $("img").css({ "filter": "brightness(1) invert(0)" });
    $(".changeColor").css({"filter": "brightness(55%)"});
    // $("#accessility").css({    "position": "fixed",
    //     "bottom": "0px",
    //     "left": "0px",
    //     "z-index": "999999"});
    // $(".changeC").css({"color":"white","filter": "brightness(100%)"});
  });

  function setFontSize(flag) {
    var content = $(".fontIncDecREset");
    var FontSize = parseInt(content.css("font-size"));

    if (flag == "increase") FontSize += 2;
    else if (flag == "decrease") FontSize -= 2;
    else FontSize = 17;
    // $("body").removeClass("body");
    // $('.body').css({"filter": "grayscale(0%)"})
    // $('.boldFontweight').css({"font-weight":"normal"});
    // $('.body').css({"background": "whitesmoke"})

    content.css("font-size", FontSize);
  }

  $("#Grey").click(function () {
    greyScaleFunction();
  });
  function greyScaleFunction() {
    $(".body").css({ filter: "grayscale(100%)" });
    // $("body").removeClass("body");
  }
  $("#readablefonts").click(function () {
    $(".boldFontweight").css({ "font-weight": "bold" });
  });

  $("#invert").click(function () {
    $(".body").css({ "filter": "invert(1)" });
  });

  $("#hyperlinks").click(function () {
    $("a").css({ "font-weight": "bold", border: "2px solid yellow" });
  });

  $("#hide-img").click(function () {
    $("img").css({ "filter": "brightness(0) invert(0)" });
  });
});
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

function myFunction() {
  var node = document.querySelector("#test");
  var stopId = document.querySelector("#stopID").value;
  console.log(stopId);
  document.getElementById("stopID").value = ++stopId;
  if (stopId == 2) {
    textContent = node.textContent;
    var msg = new SpeechSynthesisUtterance();
    console.log(textContent);
    msg.text = textContent;
    window.speechSynthesis.speak(msg);
  } else {
    stopId = 1;
    document.getElementById("stopID").value = "1";
    window.speechSynthesis.cancel();
    // break;
    console.log(stopId);
  }

  // window.speechSynthesis.cancel();
}

// When the user scrolls down 20px from the top of the document, show the button
// var mybutton = document.getElementById("myBtnn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
