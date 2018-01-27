exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, itemForSearch) {
    let itemIndex = -1;
    arr.find((item, index) => {
      if (item === itemForSearch) {
        itemIndex = index;
        return true;
      }
    });
    return itemIndex;
  },

  sum: function(arr) {
    return arr.reduce((acc, next) => {
      return acc + next;
    }, 0);
  },

  remove: function(arr, itemForRemove) {
    return arr.filter((item) => item !== itemForRemove);
  },

  removeWithoutCopy: function(arr, itemForRemove) {
    for (let index = arr.length; index; index--) {
      if (arr[index] === itemForRemove) {
        arr.splice(index, 1);
      }
    }
    return arr;
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
