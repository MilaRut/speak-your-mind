import {iosVhFix} from './utils/ios-vh-fix';
import {initSlider} from './modules/slider';
import {initTabs} from './modules/tabs';
import {initSubtabs} from './modules/subtabs';
import {showDropdownList} from './modules/dropdown';
import {setLangBtn} from './modules/lang-switcher';
import {showPassword} from './modules/show-password';
import {switchReadonly} from './modules/readonly-switch';
import {setUtilsBtns} from './modules/utils-btns';
import {validateTextarea} from './modules/textarea';
import {showTextInput} from './modules/select-other';
import {setActiveItem} from './modules/clients-list';
import {setSessionStatus, initActionsBtns} from './modules/clients-btns';
import {initModal} from './modules/modal';
import {setClientCard} from './modules/client-card';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    setLangBtn();
    initSlider();
    initTabs();
    initSubtabs();
    showDropdownList();
    showPassword();
    switchReadonly();
    setUtilsBtns();
    validateTextarea();
    showTextInput();
    setActiveItem();
    setSessionStatus();
    initActionsBtns();
    initModal();
    setClientCard();
  });
});
