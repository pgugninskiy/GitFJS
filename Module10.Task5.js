let arr1 = [1,2,"a","b","!"];
console.log(arr1.length);
arr1.forEach(function(item) {
    console.log(item);
});

// Всё верно, но переменные index и array в методе forEach никак не используются, поэтому можно их не объявлять