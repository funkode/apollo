

// setTimeout(() => {
//     console.log('a');
//     setTimeout(() => {
//         console.log('b');
//         setTimeout(() => {
//             console.log('c');
//         }, 500);
//     }, 1000);
// }, 2000);

// Modify the code so that all four setTimeouts are called in the first task (do not change the timeout delays) and when all four have executed their callback function call the "allDone" function
// hint you can add code in and around the setTimeouts to solve this

let counter = 0;

const allDone = () => {
  console.log('all done');
};

counter++;
setTimeout(() => {
  console.log('a');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 1000);

counter++;
setTimeout(() => {
  console.log('b');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 500);

counter++;
setTimeout(() => {
  console.log('c');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 700);

counter++;
setTimeout(() => {
  console.log('d');
  counter--;
  if (counter === 0) {
    allDone();
  }
}, 3000);

console.log('made it here');

