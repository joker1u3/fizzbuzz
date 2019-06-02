class Fizzbuzz2 {

  constructor(num) {
    this.rawNum = num;
  }

  toString() {
    if (this.relatedTo(3) && this.relatedTo(5)) return 'fizzbuzz';
    if (this.relatedTo(3)) return 'fizz';
    if (this.relatedTo(5)) return 'buzz';
    return this.rawNum;
  }

  relatedTo(num) {
    return this.rawNum % num === 0 || String(this.rawNum).includes(String(num));
  }

  test() {
    const t1 = this.rawNum % 3;
    const t2 = this.rawNum % 4;
    const t3 = this.rawNum % 5;
  }

}

module.exports = Fizzbuzz2;