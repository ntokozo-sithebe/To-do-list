let btnDel = document.querySelector('[data-delete]')
let groceries = document.querySelector('[data-list]')
let list = []

function list(){
    let input = document.querySelector('[data-input]').value
    
    list.push(input)
    localStorage.setItem('listItems', JSON.stringify(list))
    
}
document.querySelector('[data-add]').
addEventListener('click', list)

function remove(){
    list.pop(list)

    document.write(groceries)

}
