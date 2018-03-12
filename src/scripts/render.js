(function () {
  var ITEM_CLASS_NAME = 'Item';
  var SIZES_CLASS_MAP = {
    's': 'Size_Small',
    'm': 'Size_Medium',
    'l': 'Size_Large'
  };

  var IMAGE_SIZES_MAP = {
    's': {
      width: 224,
      height: 182
    },
    'm': {
      width: 344,
      height: 180
    },
    'l': {
      width: 464,
      height: 243
    }
  }

  window.renderItem = function (item, node) {
    renderCommon(item, node);
    renderTitle(item, node);
    renderImage(item, node);
    renderDescription(item, node);
    renderChannelName(item, node);
  }

  function renderCommon(item, node) {
    var className = ITEM_CLASS_NAME + '_' + SIZES_CLASS_MAP[item.size];
    node.classList.add(className);
  }

  function renderTitle(item, node) {
    var titleEl = node.querySelector('.Item-Title');
    titleEl.textContent = item.title;
    titleEl.style.color = item.titleColor;
  }

  function renderImage(item, node) {
    var imageEl = node.querySelector('.Item-Image img');
    if (item.image) {
      var imageUrl = item.image.split('.')[0] + '@2x' + '.png';
      imageEl.src = imageUrl;
      imageEl.width = IMAGE_SIZES_MAP[item.size].width;
      imageEl.height = IMAGE_SIZES_MAP[item.size].height;
    } else {
      removeNode(imageEl);
    }
  }

  function renderDescription(item, node) {
    var descriptionEl = node.querySelector('.Item-Description');
    if (item.description) {
      var fragment = document.createDocumentFragment();
      renderDescriptionParagraphs(item.description, descriptionEl);
      descriptionEl.appendChild(fragment);
    } else {
      removeNode(node.querySelector('.Item-Content'));
      removeNode(descriptionEl);
    }
  }

  function renderChannelName(item, node) {
    var channelNameEl = node.querySelector('.Item-ChannelName');
    if (item.channelName) {
      channelNameEl.textContent = item.channelName;
    } else {
      removeNode(channelNameEl);
    }
  }

  function renderDescriptionParagraphs(description, node) {
    node.innerHTML = description.split('\n').join('<br>');
    // description.split('\n').forEach(function (paragraph) {
    //   var paragraphEl = document.createElement('p');
    //   paragraphEl.textContent = paragraph;
    //   node.appendChild(paragraphEl);
    // });
  }
})();