let myPromise = new Promise(function(resolve, reject) {
  let randNum = Math.random();
  setTimeout(function() {
    if (randNum > 0.5) {
      resolve(randNum);
    } else {
      reject(randNum);
    }
  }, 1000);
});

myPromise
  .then(function(num) {
    console.log(`success: ${num}`);
  })
  .catch(function(num) {
    console.log(`fail: ${num}`);
  }).then(function() {
    console.log("complete");
  });

