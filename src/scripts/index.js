var container = document.querySelector('#container');
var template = document.querySelector('#template').content;
var itemTemplate = template.querySelector('.Item');

var fragment = document.createDocumentFragment();
window.data.forEach(function(item) {
  var node = itemTemplate.cloneNode(true);
  node.querySelector('.Item-Title').textContent = item.title;
  node.querySelector('.Item-Image img').src = item.image;
  if(item.description) {
    var descriptionFragment = getDescriptionFragment(item.description);
    node.querySelector('.Item-Description').appendChild(descriptionFragment);
  } else {
    var descriptionEl = node.querySelector('.Item-Description');
    descriptionEl.parentNode.removeChild(descriptionEl);
  } 

  fragment.appendChild(node);
})
container.appendChild(fragment);

function getDescriptionFragment(description) {
  var fragment = document.createDocumentFragment();
  description.split('\n').forEach(function(paragraph){
    var paragraphEl = document.createElement('p');
    paragraphEl.textContent = paragraph;
    fragment.appendChild(paragraphEl);
  });
  return fragment;
}