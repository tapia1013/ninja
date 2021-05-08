const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')



const generateTemplate = (todo) => {
  // generate html template
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
  `;

  list.innerHTML += html
}


addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // .trim() removes spaces from start and end
  const todo = addForm.add.value.trim()
  // console.log(todo);


  if (todo.length) {
    // generate template
    generateTemplate(todo)
    addForm.reset()
  }
})


// delete todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
})


//filter
const filterTodos = (term) => {
  console.log(Array.from(list.children));
  //   Array.from(list.children)
  //     .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  //     .forEach((todo) => todo.classList.add('filtered'))

  //   Array.from(list.children)
  //     .filter(todo => todo.textContent.toLowerCase().includes(term))
  //     .forEach(todo => todo.classList.remove('filtered'))

  const li = [...list.children];

  li.filter(todo => !todo.textContent.toLowerCase().includes(term)).forEach(todo => todo.classList.add('filtered'))
  li.filter(todo => todo.textContent.toLowerCase().includes(term)).forEach(todo => todo.classList.remove('filtered'))

}


// keyup
search.addEventListener('keyup', () => {
  const term = search.value.toLowerCase();
  filterTodos(term)
})








