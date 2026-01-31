# Projects Related to DOM

# Project link 
[click here]https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html




# solution Code

## project 1

```javascript
console.log("prabin")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'purple'){
      body.style.backgroundColor = event.target.id;
    }
  })
});





```

## Project 2 solution

``` javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height )/ 10000)).toFixed(2)

    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  
});

```

## Project 03 solution
```javascript

const clock = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
  
let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
}, 1000)



```