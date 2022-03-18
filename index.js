const addForm = document.querySelector(".add");
const ulEl = document.querySelector(".todos");
const search=document.querySelector('.search input');


const generateTemolate = (newtodo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light"
        >
         <span>${newtodo}</span>
         <i class="fa-solid fa-trash-can delete"></i>
        </li>`;
  ulEl.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  //prevent refreshing page
  e.preventDefault();
  //get value from input in the form
  const newtodo = addForm.add.value.trim();

  if (newtodo.length!==0) {
    generateTemolate(newtodo);
    addForm.reset();
  }
});


ulEl.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



//search
const filterTodos=term=>{
    Array.from(ulEl.children).filter(item=>{
       return !item.textContent.toLowerCase().includes(term);
    })
    .forEach(todo=>{
      todo.classList.add('filtered');
    })

     Array.from(ulEl.children)
       .filter((item) => {
         return item.textContent.toLowerCase().includes(term);
       })
       .forEach((todo) => {
         todo.classList.remove("filtered");
       });
}
search.addEventListener('keyup',()=>{
    const term=search.value.toLowerCase().trim();
    filterTodos(term);
})