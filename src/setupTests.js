// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import Enzyme, { configure, shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'

// global.MutationObserver = class {
//     constructor(callback) { }
//     disconnect() { }
//     observe(element, initObject) { }
//     takeRecords() { return [] }
// };
// global.document.getSelection = function () { }

// configure({ adapter: new Adapter() })

export { shallow, mount, render };
export default Enzyme;
