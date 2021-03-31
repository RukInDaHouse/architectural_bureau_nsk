var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.getElementById("modal__button").addEventListener("click", function() {
  var modal = document.getElementById("modal");
      modal.classList.toggle("open__menu");
});

document.getElementById("modal__arrow").addEventListener("click", function() {
  var modal = document.getElementById("modal");
      modal.classList.toggle("open__menu");
});