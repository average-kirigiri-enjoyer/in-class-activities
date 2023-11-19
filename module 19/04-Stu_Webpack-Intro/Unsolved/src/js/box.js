// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// 'export' exports the following function, allowing other script files to access it

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
