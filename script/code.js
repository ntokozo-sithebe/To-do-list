// let groceries = document.querySelector('[data-groceries]')
let btnAdd = document.querySelector('[data-add]')
let btnSort = document.querySelector('[data-sort]')

let list = [ ]

function addList(){
    
    let input = document.querySelector('[data-input]')

    list.push(input)
    localStorage.setItem('listItems', JSON.stringify(list))
    displayList()
}

btnAdd.addEventListener('click', addList)


function displayList(){
    
    let groceries = document.querySelector('[data-grocy]')
    
    let theList = JSON.parse(localStorage.getItem('listItems'))
    if(theList){
        groceries.innerText = " "
        theList.forEach(list =>{
            groceries.innerHTML +=`<ul> ${list}</ul>`
        })
    }else{
        groceries.innerHTML = 'Try Again';

    }
}
displayList()




// Check you LS





























// let btnDelItems = document.querySelector('[data-delete]')
// for (i = 0; i < list.length; i++){
//     btnDelItems[i].addEventListener('click', remove)
// }



// function remove(btnDelItems){

//     let clicked = true
//     if(clicked){
//         list.pop(theList)
//         localStorage.getItem('listItems', JSON.stringify(list)).innerHTML -= `<ul>$[groceries}</ul>`
        
//     }
    

// }
//document.querySelector('[data-delete]').addEventListener('click', remove)

// function displaytheList(){
//     let thelist = JSON.parse(localStorage.getItem('groceries'))
//     if(list){
//         groceries.innerHTML= ""
//         displaytheList.forEach(list=>{
//             groceries.innerHTML += 
//             `<ul>$[groceries}</ul>`
//         })



//     }
// }
// displaytheList




// don't forget to sort your array 