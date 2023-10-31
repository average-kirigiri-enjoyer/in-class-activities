window.onload = () => {
  // function to block the stack for x number of milliseconds
  setTimeout(() =>
  {
    console.log('TEST');
    document.querySelector('form button').classList.remove('display-none');
  }, 8000);
};