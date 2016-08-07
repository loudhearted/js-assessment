exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    arr.forEach((item) => {
      sum = sum + item;
    });
    return sum;
  },

  remove: function(arr, item) {
    let newArray = [];
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] != item) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
