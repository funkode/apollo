
const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 500));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('c'), 500));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 1750));

p1.then(result => console.log(result));
p2.then(result => console.log(result));
p3.then(result => console.log(result)).catch(result => console.log('error: ', result));
p4.then(result => console.log(result));

Promise.all([p1,p2,p3,p4]).then(result => {
  console.log(result);
  console.log('all done');
}).catch(result => {
  console.log(result);
  console.log('one failed');
});


