(function () {
  window.removeNode = function (node) {
    node.parentNode.removeChild(node);
  }
})();