
const youngMan = new Promise(function youngLady(resolve, reject) {

  setTimeout(() => {
    console.log('young lady saying yes!');
    resolve('yes! I love him so much!');
  }, 2000);

});

youngMan
  .then((result) => {
    console.log(result);
    console.log('yay she said yes!');
    // return new Promise((resolve, reject) => {
    //   console.log('find a place to get married!');
    //   setTimeout(() => {
    //     // resolve('found a place, the backyard...');        
    //     reject('could not find place, it was not meant to be...');
    //   }, 2000);
    // });

    //return "let's do it in the living";

    return Promise.reject('no');
  })
  .then(result => {
    console.log(result);
    return new Promise(resolve => {
      console.log('find some wedding clothes...');
      setTimeout(() => {
        resolve('we found some wedding clothes');
      }, 2000);
    });
  })
  .then(result => {
    console.log(result);
    console.log("let's get married...");
  })
  .catch((result) => {
    console.log(result);
    console.log('she said no, time to sign up for Match.com');
  });

console.log('waiting...');

