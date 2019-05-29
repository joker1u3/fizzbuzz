const assert = require('assert');
const fizzbuzz = require('./fizzbuzz');

suite('fizzbuzz', function() {
  setup(function() {
    // ...
  });

  suite('#toString()', function() {
    test('should return raw number', function() {
      assert.equal(1, fizzbuzz.toString(1));
    });

    test('should return fizz', function() {
      assert.equal('fizz', fizzbuzz.toString(3));
      assert.equal('fizz', fizzbuzz.toString(13));

    });

    test('should return buzz', function() {
      assert.equal('buzz', fizzbuzz.toString(5));
      assert.equal('buzz', fizzbuzz.toString(51));
    });

    test('should return fizzbuzz', function() {
      assert.equal('fizzbuzz', fizzbuzz.toString(15));
      assert.equal('fizzbuzz', fizzbuzz.toString(53));
    });


  });
});