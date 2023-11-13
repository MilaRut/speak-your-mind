import {iosVhFix} from './utils/ios-vh-fix';
import {initModal} from './modules/modal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModal();
  });
});
