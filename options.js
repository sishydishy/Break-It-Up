
function turnoff(isDeactivated) {
  options.style.color = isDeactivated ? 'graytext' : 'black';
  options.frequency.disabled = isDeactivated; 
}

window.addEventListener('load', function() {

  options.isActivated.checked = JSON.parse(localStorage.isActivated);

  options.frequency.value = localStorage.frequency;


  if (!options.isActivated.checked) { turnoff(true); }

  options.isActivated.onchange = function() {
    localStorage.isActivated = options.isActivated.checked;
    turnoff(!options.isActivated.checked);
  };

  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };
});
