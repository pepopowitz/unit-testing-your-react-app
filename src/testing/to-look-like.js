import htmlLooksLike from 'html-looks-like';
import { shallow } from 'enzyme';

export default function toLookLike(actual, expected) {
  let expectedAsString = expected;
  if (typeof expected === 'object') {
    // assume it is a jsx object.
    expectedAsString = shallow(expected).html();
  }

  let actualAsString = actual;
  // if (typeof actual === 'object') {
  //   // assume it is a jsx object.
  //   actualAsString = actual.html();
  // }

  try {
    htmlLooksLike(actualAsString, expectedAsString);
    return {
      message: 'expected html to look like',
      pass: true,
    };
  } catch (ex) {
    return {
      message: () => ex.message,
      pass: false,
    };
  }
}
