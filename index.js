// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

$(document).ready(function () {
  startTime();
  $("#startMenu").hide();
  $("#start").click(function () {
    $("#startMenu").toggle();
    $(this).toggleClass("startClick");
  });

  $("#desktop").click(function () {
    $("#startMenu").hide();
    $("#start").removeClass("startClick").addClass("startRest");
  });

  $(".desktopIcon").dblclick(function () {
    alert($(this).text());
  });
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function changeColor(event) {
  const text = document.getElementById("text");
  const color = event.currentTarget.innerText;
  text.style.color = color;
}
function menuFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const welcome = document.querySelector(".welcome");
const hooty = document.querySelector(".hooty");

hooty.addEventListener("mouseover", () => {
  welcome.textContent = "Hello!";
});

hooty.addEventListener("mouseout", () => {
  welcome.textContent = "Welcome";
});
