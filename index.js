let input = document.getElementById('task')
let btn = document.getElementById('btn')
let listUL= document.querySelector('.listUL')
let compliteUL = document.querySelector('.compliteUL')
 
btn.addEventListener('click', addTask)

function addTask(e){
    e.preventDefault()

    let inputV = input.value
    uncompliteUL(inputV)
    input.value = ''
}

function uncompliteUL(livalue){
    let liitem = document.createElement('li')
    liitem.classList = 'item'

    let checkbox = document.createElement('input')
    checkbox.classList = 'check'
    checkbox.type = 'checkbox'

    let label = document.createElement('label')
    label.classList = 'label'
    label.innerText = livalue

    
    liitem.appendChild(checkbox)
    liitem.appendChild(label)
    listUL.appendChild(liitem)
    
    selectuncomplite(liitem, compliteTask)
    return liitem

}

function selectuncomplite(item, checkboxClick){
  let catchcheckbox =  item.querySelector('.check')
  catchcheckbox.onchange = checkboxClick
}

function compliteTask(){
    let item = this.parentNode
    let removecheckbox = item.querySelector('.check')
    removecheckbox.remove()
    
    let btn = document.createElement('button')
    btn.classList = 'delate'
    btn.innerText = 'Delate'
    
    item.appendChild(btn)
    compliteUL.appendChild(item)

    selectdelatebtn(item, delateTask)
}

function delateTask(){
    let itemli = this.parentNode
    let ul = itemli.parentNode
    ul.removeChild(itemli)
    
}

function selectdelatebtn(item, delatebtn){
     let delate = item.querySelector('.delate')
     delate.onclick = delatebtn
}

for(let i = 0 ; i < listUL.children.length; i++){
    selectuncomplite(listUL.children[i], compliteTask)
}
for(let i = 0 ; i < compliteUL.children.length; i++){
    selectdelatebtn(compliteUL.children[i], delateTask)
}