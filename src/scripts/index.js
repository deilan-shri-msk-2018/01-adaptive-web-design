var container = document.querySelector('#container');
var template = document.querySelector('#template')
  .content.querySelector('.Item');

var fragment = document.createDocumentFragment();
window.data.forEach(function (item) {
  var node = template.cloneNode(true);
  window.renderItem(item, node);
  fragment.appendChild(node);
})
container.appendChild(fragment);