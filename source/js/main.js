import {iosVhFix} from './utils/ios-vh-fix';
import {setWrapperClass} from './modules/wapper';
import {loadLanguage} from './modules/localisation';
import {setLangBtn} from './modules/lang-switcher';
import {setName} from './modules/set-name';
import {logOut} from './modules/logout';
import {initSlider} from './modules/slider';
import {initTabs} from './modules/tabs';
import {showDropdownList} from './modules/dropdown';
import {showPassword} from './modules/show-password';
import {switchReadonly} from './modules/readonly-switch';
// import {validateTextarea} from './modules/textarea';
import {showTextInput} from './modules/select-other';
import {initActionsBtns} from './modules/clients-btns';
import {initModal} from './modules/modal';
import {setClientCard} from './modules/client-card';
import {initSwiper} from './modules/my-swiper';
import {setChoiceBtn} from './modules/pickdate';
import {initScheduleDropdown, expandList} from './modules/schedule';
import {redirectToProfile} from './modules/redirect-profile';
import {setUtilsBtns} from './modules/utils-btns';
import {uploadUserPhoto} from './modules/upload-user-photo';
import {initAdminAlerts} from './modules/amin-alerts';
import {showUploadedFiles} from './modules/uploaded-list';
import {setIndicator} from './modules/indicator';
import {formatCardInputs, sendCard} from './modules/add-card';
import {formatCardInputsUpdate, sendCardUpdate} from './modules/update-card';
import {initDocActivation} from './modules/doc-activatation';
import {downloadFullInfo} from './modules/full-doc-info';

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
  initAdminAlerts();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    setName();
    initSlider();
    initTabs();
    showDropdownList();
    showPassword();
    switchReadonly();
    // validateTextarea();
    showTextInput();
    initActionsBtns();
    initModal();
    setClientCard();
    initSwiper();
    setChoiceBtn();
    expandList();
    initScheduleDropdown();
    setUtilsBtns();
    redirectToProfile();
    uploadUserPhoto();
    showUploadedFiles();
    setIndicator();
    // TODO объединить похожие функции
    formatCardInputs();
    sendCard();
    formatCardInputsUpdate();
    sendCardUpdate();
    // END TODO
    initDocActivation();
    downloadFullInfo();
  });
});
