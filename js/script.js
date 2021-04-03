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
  var gray__overlay = document.getElementById("gray__overlay");
      modal.classList.toggle("open__menu");
      gray__overlay.classList.toggle("gray__overlay");
});

document.getElementById("modal__arrow").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  var gray__overlay = document.getElementById("gray__overlay");
      modal.classList.toggle("open__menu");
      gray__overlay.classList.toggle("gray__overlay");
});

document.getElementById("submit").addEventListener("click", function() {
  var modal = document.getElementById("modal");
  var gray__overlay = document.getElementById("gray__overlay");
      modal.classList.toggle("open__menu");
      gray__overlay.classList.toggle("gray__overlay");
});

document.getElementsByClassName("order__button")[0].addEventListener("click", function() {
  var modal = document.getElementById("openModal");
      modal.classList.toggle("invisible__block");
      document.getElementById("close__modal").addEventListener("click", function() {
        var modal = document.getElementById("openModal");
            modal.classList.toggle("invisible__block");
      });
});

document.getElementsByClassName("order__button")[1].addEventListener("click", function() {
  var modal = document.getElementById("openModal");
      modal.classList.toggle("invisible__block");
      document.getElementById("close__modal").addEventListener("click", function() {
        var modal = document.getElementById("openModal");
            modal.classList.toggle("invisible__block");
      });
});

document.getElementsByClassName("order__button")[2].addEventListener("click", function() {
  var modal = document.getElementById("openModal");
      modal.classList.toggle("invisible__block");
      document.getElementById("close__modal").addEventListener("click", function() {
        var modal = document.getElementById("openModal");
            modal.classList.toggle("invisible__block");
      });
});

document.getElementsByClassName("order__button")[3].addEventListener("click", function() {
  var modal = document.getElementById("openModal");
      modal.classList.toggle("invisible__block");
      document.getElementById("close__modal").addEventListener("click", function() {
        var modal = document.getElementById("openModal");
            modal.classList.toggle("invisible__block");
      });
});

document.getElementsByClassName("order__button")[4].addEventListener("click", function() {
  var modal = document.getElementById("openModal");
      modal.classList.toggle("invisible__block");
      document.getElementById("close__modal").addEventListener("click", function() {
        var modal = document.getElementById("openModal");
            modal.classList.toggle("invisible__block");
      });
});

