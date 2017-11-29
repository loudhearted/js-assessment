exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // Find whether the bit is set (1) or unset (0) by shifting all bits to the
    // right, save for our desired bit
    const sigBit = num >> (bit - 1)
    // Then, check the value by comparing it against 1; if the sigBit is 1,
    // 1 will be returned, else, 0 will be returned
    return sigBit & 1
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    return num.toString(2).padStart(8, '0')
  },

  multiply: function(a, b) {
    return Number((a * b).toPrecision(2))
  }
};
