/**
 * @author Thomas J Bradley <https://thomasjbradley.ca>
 * @copyright © 2018 Thomas J Bradley
 * @license MIT
 */

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});
