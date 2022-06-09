import Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

//Pegar todos os botões que existem com a class check
const checkButtons = document.querySectorAll(".actions a.check")

checkButtons.forEach( button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick) 
})
  

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  button.addEventListener("click",(event) => handleClick(event, false))
})

function handleClick(event, check = true){
const text = check ? "Marcar como lida " : "Excluir "

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem ceteza que deseja excluir esta pergunta?"
  modalButton.
  modal.open()
}