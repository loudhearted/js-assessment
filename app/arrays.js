exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // Simple solution: return arr.indexOf(item);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i
      }
    }
    return -1
  },

  sum: function(arr) {
    return arr.reduce(function(prevVal, currVal) {
      return prevVal + currVal
    }) 
  },

  remove: function(arr, item) {
    return arr.filter(element => element !== item)
  },

  removeWithoutCopy: function(arr, item) {
    const deleteFn = function (arr, item) {
      // Splice out the first found instance of item
      arr.splice(arr.indexOf(item), 1)

      // If the array still includes the item, recursively repeat the process
      if (arr.includes(item)) {
        return deleteFn(arr, item)
      } else {
        return arr
      }
    }

    return deleteFn(arr, item)
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    const newArr = arr1.concat(arr2)
    return newArr
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let counter = 0
    arr.forEach(function(element) {
      if (element === item) {
        counter++
      }
    })
    return counter
  },

  duplicates: function(arr) {
    // Function to count occurrences of an element in an array
    const elCounter = function(arr, item) {
      let counter = 0
      arr.forEach(function(element) {
        if (element === item) {
          counter++
        }
      })
      return counter
    }

    let duplicates = []
    arr.forEach(function(element) {
      if (elCounter(arr, element) > 1) {
        // If an element occurs more than once in the array, and it's not
        // already in the duplicates array, add it
        !(duplicates.includes(element)) && duplicates.push(element)
      }
    })

    return duplicates
  },

  square: function(arr) {
    return arr.map(x => Math.pow(x, 2))
  },

  findAllOccurrences: function(arr, target) {
    let indices = []
    arr.forEach(function(element, index) {
      if (element === target) {
        indices.push(index)
      }
    })
    return indices
  }
};
