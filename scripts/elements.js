NICEV1.Elements = (function () {
  'use strict';

  function init() {
    NICEV1.Elements.Template = document.getElementById('nice-app');
    NICEV1.Elements.Loader = document.getElementById('showbox');
    
  }

  return {
    init: init
  };
}());