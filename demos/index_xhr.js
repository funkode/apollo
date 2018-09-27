

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:3020/widgets');
xhr.send();

// the following API using the above code and Promises

myFetch('http://localhost:3020/widgets')
  .then(widgets => console.log(widgets)); // this should output the array to the console