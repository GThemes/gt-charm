/*GainTime v3.0.0 - CourageousWarrior - Modern*/
var header = document.getElementById('menu');

var el = document.scrollingElement || document.documentElement;
if (el.scrollTop >= 5) {
    header.classList.add("fixed")
    header.classList.remove("transparent")
}
document.addEventListener("scroll", function() {
    if (el.scrollTop >= 5) {
      header.classList.remove("transparent")
      header.classList.add("fixed")
    } else {
      header.classList.remove("fixed")
      header.classList.add("transparent")
    }
});
