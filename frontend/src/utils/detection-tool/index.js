
class DetectionTool {

  constructor() {
    this.featureTests = {
      filereader: typeof FileReader != 'undefined',
      dragdrop: 'draggable' in document.createElement('span'),
      formData: !!window.FormData,
      progress: 'upload' in new XMLHttpRequest
    };
  }

  /**
   * Detects if any IE version is being used
   * userAgent => msie = bis IE10
   * userAgent => Trident = IE11
   *
   * @returns {*|boolean}
   * @constructor
   */
  isIE(v) {
    //return RegExp('msie' + (!isNaN(v)?('\\s'+v):''), 'i').test(navigator.userAgent) || (RegExp('Trident', 'i').test(navigator.userAgent) && navigator.userAgent.indexOf('rv:11.0') > -1);
    return RegExp('msie' + (!isNaN(v)?('\\s'+v):''), 'i').test(navigator.userAgent) || (RegExp('Trident', 'i').test(navigator.userAgent));
  }

  hasFeature(feature) {
    return this.featureTests[feature];
  }

}

angular.module('detection-tool', [])
  .factory('DetectionTool', new DetectionTool());
