const assert = require('assert');
const Fizzbuzz = require('./fizzbuzz2');

function check(input ,output) {
  assert.equal((new Fizzbuzz(input)).toString(), output);
}

suite('Fizzbuzz', () => {
  suite('#toString()', () => {
    test('should show raw string', () => {
      check(2, 2);
    });

    test('should show fizz', () => {
      check(3, 'fizz');
      check(31, 'fizz');
    });

    test('should show buzz', () => {
      check(5, 'buzz');
      check(52, 'buzz');
    });

    test('should show fizzbuzz', () => {
      check(15, 'fizzbuzz');
      check(53, 'fizzbuzz');
    });
  })
})