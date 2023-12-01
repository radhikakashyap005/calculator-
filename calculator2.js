function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display').focus();
  };

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
    document.getElementById('display').focus();
  };

  function calculateResult() {
    event.preventDefault();
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    };

    if (event && event.key === "Enter") {
      event.preventDefault();
      document.getElementById(calculateResult).click();
      document.getElementById('display').focus();
    };
  };