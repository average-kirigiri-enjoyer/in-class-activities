// TODO: Add a comment explaining role of the index.js file and import statements
// importing functions from other script files & adding event listeners to the appropriate elements

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
