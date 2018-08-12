var checkboxID = 0;
var verbose = document.querySelectorAll('[class^=v-]');

verbose.forEach(function(el) {
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = checkboxID;

  parentEl = el.parentElement;

  var label = document.createElement('label');
  label.htmlFor = checkboxID;

  if (el.previousSibling) {
    label.innerHTML = el.previousSibling.data;
    parentEl.replaceChild(label, el.previousSibling);
  }

  parentEl.insertBefore(checkbox, el);

  checkboxID += 1;
});
