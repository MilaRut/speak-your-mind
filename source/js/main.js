import {iosVhFix} from './utils/ios-vh-fix';
import {initSlider} from './modules/slider';
import {initTabs} from './modules/tabs';
import {showDropdownList} from './modules/dropdown';
import {setLangBtn} from './modules/lang-switcher';
import {showPassword} from './modules/show-password';
import {switchReadonly} from './modules/readonly-switch';
// TODO: delete
import {setUtilsBtns} from './modules/utils-btns';
// END TODO
import {validateTextarea} from './modules/textarea';
import {showTextInput} from './modules/select-other';
import {setActiveItem} from './modules/clients-list';
import {setSessionStatus, initActionsBtns} from './modules/clients-btns';
import {initModal} from './modules/modal';
import {setClientCard} from './modules/client-card';
import {setTimeValue} from './modules/inputs-value';
import {renderSchedule, markScheduleSlots, saveState} from './modules/schedule';
import {initSwiper} from './my-swiper';
import {setChoiceBtn} from './modules/pickdate';

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
    showDropdownList();
    showPassword();
    switchReadonly();
    // TODO: delete
    setUtilsBtns();
    // END TODO
    validateTextarea();
    showTextInput();
    setActiveItem();
    setSessionStatus();
    initActionsBtns();
    initModal();
    setClientCard();
    setTimeValue();
    renderSchedule();
    saveState();
    markScheduleSlots();
    initSwiper();
    setChoiceBtn();
  });
});
