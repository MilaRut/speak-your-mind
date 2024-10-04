const isTherapist = localStorage.getItem('is_therapist');
const wrapper = document.querySelector('.wrapper');

function setWrapperClass() {
  if (isTherapist === null || isTherapist === '') {
    wrapper.classList = 'wrapper';
  }

  if (isTherapist === 'false') {
    wrapper.classList.add('client');
    if (wrapper.classList.contains('therapist')) {
      wrapper.classList.remove('therapist');
    }
  } else if (isTherapist === 'true') {
    wrapper.classList.add('therapist');
    if (wrapper.classList.contains('client')) {
      wrapper.classList.remove('client');
    }
  }
}

export {setWrapperClass};
