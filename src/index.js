class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.value = [];
    this.value.push(initialValue);
    this.valueOf = function() {
      
      for (var i = this.value.length - 2; i > 0; i--) {
        if (this.value[i] === '^') {
          var buffer = this.value[i-1] ** this.value[i+1];
          this.value.splice(i-1, 3, buffer);
        }
      }

      for (i = 1; i < this.value.length; i++) {
        if (this.value[i] === '*') {
          buffer = this.value[i-1] * this.value[i+1];
          this.value.splice(i-1, 3, buffer);
          i--;
        } else if (this.value[i] === '/') {
          buffer = this.value[i-1] / this.value[i+1];
          this.value.splice(i-1, 3, buffer);
          i--;
        }
      }

      for (i = 1; i < this.value.length; i++) {
        if (this.value[i] === '-') {
          buffer = this.value[i-1] - this.value[i+1];
          this.value.splice(i-1, 3, buffer);
          i--;
        } else if (this.value[i] === '+') {
          buffer = this.value[i-1] + this.value[i+1];
          this.value.splice(i-1, 3, buffer);
          i--;
        }
      }      

      return this.value[0];
    }
  }

  add(number) {
    // your implementation
    this.value.push('+');
    this.value.push(number);
    return this;    
  }
  
  subtract(number) {
    // your implementation
    this.value.push('-');
    this.value.push(number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.value.push('*');
    this.value.push(number);
    return this;
  }

  devide(number) {
    // your implementation
    this.value.push('/');
    this.value.push(number);
    return this;
  }

  pow(number) {
    // your implementation
    this.value.push('^');
    this.value.push(number);
    return this;
  }
}

module.exports = SmartCalculator;
