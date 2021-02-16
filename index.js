//jshint esversion:6

let slider = document.querySelector("input[type=range]");
let pageViews = document.querySelector(".pageviews p span");
let price = document.querySelector(".dollors");
let toggler = document.querySelector(".toggler");
let toggle = document.querySelector(".toggle");

let money = 16;

toggler.addEventListener("click", function() {
  toggle.classList.toggle("active");
  price.innerText = price.innerText = "$" + check(money) + ".00";
});

function check(money) {
  if (toggle.classList.contains("active")) {
    money = money * 0.75;
  }
  return money;
}

slider.onchange = function() {
  let value = slider.value;

  switch (value) {
    case "1":
      pageViews.innerText = "10K";
      money = 8;
      price.innerText = "$" + check(money) + ".00";
      break;
    case "2":
      pageViews.innerText = "50K";
      money = 12;
      price.innerText = "$" + check(money) + ".00";
      break;
    case "3":
      pageViews.innerText = "100K";
      money = 16;
      price.innerText = "$" + check(money) + ".00";
      break;
    case "4":
      pageViews.innerText = "500K";
      money = 24;
      price.innerText = "$" + check(money) + ".00";
      break;
    case "5":
      pageViews.innerText = "1M";
      money = 36;
      price.innerText = "$" + check(money) + ".00";
      break;
    default:
      console.log(value);
  }
};

slider.addEventListener('mousemove', function () {
  var x = (this.value - this.min) * 100 / (this.max - this.min);
  var color = "linear-gradient(90deg, rgb(165, 243, 235)"+ x +"%, rgb(234, 238, 251)"+ x +"%)";
  slider.style.background = color;
});
