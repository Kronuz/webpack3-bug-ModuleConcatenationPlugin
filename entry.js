export { itWorks } from './vars';

const itWorks = require('./entry').itWorks;  // <-- Error HERE: __webpack_require__(null)

console.log(itWorks);
