$(document).ready(function () {
  var greyScaleArray = [];
  var invertArray = [];
  var contrastArray = [];
  var increaseFontSizeArray = [];
  var decreaseFontSizeArray = [];
  var hideImageArray = [];
  var readableArray = [];
  var hyperlinkArray = [];
  var sepiaArray = [];

  //grey scale
  $("#Greyscale").click(function () {
    greyScaleArray.push(1);
    if (greyScaleArray.length == 1) {
      $("html").css({ filter: "grayscale(100%)" });
    } else {
      $("html").css({ filter: "grayscale(0%)" });
      greyScaleArray.length = 0;
    }
  });

  // invert
  $("#invert").click(function () {
    invertArray.push(1);
    if (invertArray.length == 1) {
      $("html").css({ filter: "invert(1)" });
    } else {
      $("html").css({ filter: "invert(0)" });
      invertArray.length = 0;
    }
  });

  //contrast
  $("#contrast").click(function () {
    contrastArray.push(1);
    if (contrastArray.length == 1) {
      $("html").css({ filter: "contrast(50)" });
    } else {
      $("html").css({ filter: "none" });
      contrastArray.length = 0;
    }
  });

  //increase text
  $("#increase").click(function () {
    var fontSize = $(".body").css("font-size");
    increaseFontSizeArray.push(parseInt(fontSize));
    if (increaseFontSizeArray.length == 1) {
      var incSize = increaseFontSizeArray[0];
      incSize += 5;
      $(".body").css("font-size", incSize);
      console.log(incSize);
    } else if (increaseFontSizeArray.length == 2) {
      var incSize = increaseFontSizeArray[1];
      incSize += 5;
      $(".body").css("font-size", incSize);
      console.log(incSize);
    } else if (increaseFontSizeArray.length == 3) {
      var incSize = increaseFontSizeArray[2];
      incSize += 5;
      $(".body").css("font-size", incSize);
      console.log(incSize);
    } else {
      $(".body").css("font-size", parseInt(increaseFontSizeArray[0]));
      increaseFontSizeArray.length = 0;
    }
  });

  //decrease text
  $("#decrease").click(function () {
    var fontSize = $(".body").css("font-size");
    decreaseFontSizeArray.push(parseInt(fontSize));
    if (decreaseFontSizeArray.length == 1) {
      var incSize = decreaseFontSizeArray[0];
      incSize -= 5;
      $(".body").css("font-size", incSize);
      console.log(incSize);
    } else if (decreaseFontSizeArray.length == 2) {
      var incSize = decreaseFontSizeArray[1];
      incSize -= 5;
      $(".body").css("font-size", incSize);
      console.log(incSize);
    } else {
      $(".body").css("font-size", parseInt(decreaseFontSizeArray[0]));
      decreaseFontSizeArray.length = 0;
    }
  });

  //hide images
  $("#hide-img").click(function () {
    hideImageArray.push(1);
    if (hideImageArray.length == 1) {
      $("img").css({ filter: "brightness(0) invert(0)" });
    } else {
      $("img").css({ filter: "none" });
      hideImageArray.length = 0;
    }
  });

  //readable
  $("#readable").click(function () {
    readableArray.push(1);
    if (readableArray.length == 1) {
      $("body").css({ "font-weight": "bolder" });
    } else {
      $("body").css({ "font-weight": "normal" });
      readableArray.length = 0;
    }
  });

  //sepia
  $("#sepia").click(function () {
    sepiaArray.push(1);
    if (sepiaArray.length == 1) {
      $("html").css({ filter: "sepia(1)" });
      console.log("sepia");
    } else {
      sepiaArray.length = 0;
      $("html").css({ filter: "sepia(0)" });
    }
  });

  //hyperlinks
  $("#hyperlinks").click(function () {
    hyperlinkArray.push(1);
    if (hyperlinkArray.length == 1) {
      $("a").css({ "font-weight": "bold", border: "2px solid yellow" });
      console.log("working");
    } else {
      $("a").css({ "font-weight": "normal", border: "none" });
      hyperlinkArray.length = 0;
    }
  });

  //on top remove class to avoid the spaceing of modal
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //   mybutton.style.display = "block";
    // } else {
    //   mybutton.style.display = "none";
    // }

    $("#myBtnn").click(function () {
      scrollTop = 0;
      console.log(scrollTop);
      window.scrollTo(0, 0);
    });
    if (scrollTop > 50) {
      $("#btnn").css({ display: "none" });
      console.log(scrollTop);
      // $("#exampleModal").addClass("accessiblity-btn");
    } else {
      // $("#exampleModal").removeClass("accessiblity-btn");
      $("#btnn").css({ display: "block" });
    }
  });

  //upload sales data
  $("#upload-sales-data").click(function (e) {
    e.preventDefault();
    var location = $("#text-house-location").val();
    var description = $("#properties-description").val();
    var name = $("#Names").val();
    var number = $("#Number").val();
    var email = $("#Email").val();

    if (
      location != null &&
      description != null &&
      name != null &&
      number != null &&
      email != null &&
      location != "" &&
      description != "" &&
      name != "" &&
      number != "" &&
      email != ""
    ) {
      $("#send-sales-data-btn").click();
    } else if (number.toString().length != 10) {
      alert("make sure you entered correct number " + number);
    } else {
      alert("Some fields are missing..");
    }

    //
  });

  //jquery for navigation to add a active class
  // $('').click(function(){
  //   $(this).addClass('active').siblings().removeClass()
  // });
});

//narrate function
var narrateArray = [];
function narrateText() {
  narrateArray.push(1);
  if (narrateArray.length == 1) {
    var text = document.querySelector("body");
    contents = text.textContent;
    var message = new SpeechSynthesisUtterance(contents);
    window.speechSynthesis.speak(message);
  } else {
    window.speechSynthesis.cancel();
    narrateArray.length = 0;
  }
  $("#gotoDetailsPage").click(function () {
    $(window).location.href = "somorepage.html";
    console.log("suman");
  });
}

//form simple validation
function formValidate() {
  var exampleFormControlInput = document.getElementById(
    "exampleFormControlInput2"
  ).value;
  exampleFormControlInput = exampleFormControlInput.trim();
  if (exampleFormControlInput == null || exampleFormControlInput == "") {
    alert("Seems your form filds are empty");
  } else {
    document.getElementById("login-button").click();
  }
}

function pageRedirectSeeALl() {
  window.location.href = "show_more_page.html";
}
document
  .querySelector(".gotoDetailsPage")
  .addEventListener("click", function () {
    window.location.href = "particular_Item.html";
  });
document
  .querySelector(".gotoDetailsPage1")
  .addEventListener("click", function () {
    window.location.href = "particular_Item.html";
  });
document
  .querySelector(".gotoDetailsPage2")
  .addEventListener("click", function () {
    window.location.href = "particular_Item.html";
  });
document
  .querySelector(".gotoDetailsPage3")
  .addEventListener("click", function () {
    window.location.href = "particular_Item.html";
  });
document
  .querySelector(".gotoDetailsPage4")
  .addEventListener("click", function () {
    window.location.href = "agencies_page.html";
  });

function sendMessages() {
  document.getElementById("login-send-messages").click();
}

function sendMessageForm() {
  document
    .getElementById("send-msg-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var message = document.getElementById("messages-info").value;
      message = message.trim();
      if (message != null && message != "") {
        document.getElementById("alert-messages").style.display = "block";
      }
    });
}

document.getElementById("send-msg-btn").addEventListener("click", function (e) {
  e.preventDefault();
  var message = document.getElementById("messages-info").value;
  message = message.trim();
  if (message != null && message != "") {
    document.getElementById("alert-messages").style.display = "block";
    document.getElementById("messages-info").value = "suman";
  }
});
