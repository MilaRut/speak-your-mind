import {iosVhFix} from './utils/ios-vh-fix';
import {setWrapperClass} from './modules/wapper';
import {loadLanguage} from './modules/localisation';
import {setLangBtn} from './modules/lang-switcher';
import {setName} from './modules/setName';
import {logOut} from './modules/logout';
import {initSlider} from './modules/slider';
import {initTabs} from './modules/tabs';
import {showDropdownList} from './modules/dropdown';
import {showPassword} from './modules/show-password';
import {switchReadonly} from './modules/readonly-switch';
// import {validateTextarea} from './modules/textarea';
import {showTextInput} from './modules/select-other';
// import {setActiveItem} from './modules/clients-list';
import {initActionsBtns} from './modules/clients-btns';
import {initModal} from './modules/modal';
import {setClientCard} from './modules/client-card';
import {initSwiper} from './modules/my-swiper';
import {setChoiceBtn} from './modules/pickdate';
// import {showClientProfile} from './modules/admin';
import {initScheduleDropdown, expandList} from './modules/schedule';
import {redirectToProfile} from './modules/redirect-profile';
// TODO: delete
import {setUtilsBtns} from './modules/utils-btns';
// END TODO

const savedLanguage = localStorage.getItem('language') || 'en';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {


  // Utils
  // ---------------------------------

  iosVhFix();
  setWrapperClass();
  loadLanguage(savedLanguage);
  logOut();
  setLangBtn();
  setName();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initSlider();
    initTabs();
    showDropdownList();
    showPassword();
    switchReadonly();
    // validateTextarea();
    showTextInput();
    // setActiveItem();
    initActionsBtns();
    initModal();
    setClientCard();
    initSwiper();
    setChoiceBtn();
    // showClientProfile();
    expandList();
    initScheduleDropdown();
    // TODO: delete
    setUtilsBtns();
    // END TODO
    redirectToProfile();
  });
});
