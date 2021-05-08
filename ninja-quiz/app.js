const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(e);

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  })

  console.log(score);

  // show result on page
  scrollTo(0, 0)
  result.querySelector('span').textContent = `${score}%`
  // remove class of d-none
  result.classList.remove('d-none')


  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`

    if (output === score) {
      clearInterval(timer)
    } else {
      output++;
    }
  }, 10);

})





// window object
// console.log('hello');


// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if (i === 5) {
//     // stop setinterval
//     clearInterval(timer)
//   }
// }, 1000);



