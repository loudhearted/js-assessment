exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.err('firing count')

    console.log(start)

    setTimeout(function() {

    }, 100)

    return {
      cancel: function() {
        clearTimeout()
      }
    }
  }
};
