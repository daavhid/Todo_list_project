// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple',
//     'indigo',
//     'violet'
// ]

// const changeColor = function(e){
//     const test = document.querySelector('.test');
//     test.style.backgroundColor = this.style.backgroundColor;
//     console.log(e)
// }
// const translate = function(){
//     this.style.transform = 'translatey(40px'
// }
// const section = document.querySelector('#boxes .container');
// console.log(section)
// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color
//     box.classList.add('box')
//     section.append(box)
//     box.style.transition = '1s all'
//     box.addEventListener('click',changeColor)
//     box.addEventListener('mouseover',translate)
//     box.addEventListener('mouseleave',function(){
//         this.style.transform = 'translatey(0)'
//     })
// }

// document.body.addEventListener('keypress',function(e){
//     console.log(e)
// })

const inputItem = document.querySelector('.item');
const ulItem = document.querySelector('.shopping-items');
const btn = document.querySelector('button.clear')
const hiddenDiv = document.querySelector('.hidden');






// const allLis = document.querySelectorAll('li');

// inputItem.addEventListener('keypress',function(e){
//     if(e.key === 'Enter'){
       
//         if( this.value === ''){
//             console.log('invalid token')
//         }else{
//             const newItem = this.value;
//             for(let li of allLis){
//                 if(li.innerText.toLowerCase() === newItem.toLowerCase()){
//                     // li.setAttribute('id','#remove')
//                     // console.log(li)
//                     li.remove()
//                 }
//             }
//             // newLi.innerText = newItem;
//             // newLi.classList.add('liItem')
//             // ulItem.append(newLi)
//             this.value = ''
//         }
//     }
// })
const hidden = (element)=>{
    if(element.childElementCount>0){
        hiddenDiv.style.display = 'none'
        console.log('hii')
    }else{hiddenDiv.style.display = 'block'};
}


function listAdder(eventEl,parentEl){
    eventEl.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
       
            if( !this.value)return;
            const newLi =document.createElement('li')
            const newItem = this.value;
            newLi.innerHTML = `<input type="checkbox"><span>${newItem}</span> <button class="btn todo-btn">remove</button>`;
            parentEl.append(newLi)
            this.value = ''
            hidden(parentEl)
            clickRemoverBtn(parentEl)
            checkList()

        }
    })
}

function clickRemoverBtn(parentEl){
    const removedNodes = []
    parentEl.addEventListener('click',function(e){
        if(e.target.className === 'btn todo-btn'){
            removedNodes.push(e.target.parentElement)
            e.target.parentElement.remove()
            // console.log(removedNodes)
            hidden(parentEl)
            undo(parentEl,removedNodes)
        }
        
    })   
}
function undo(parentEl,removedNodes){
        const btn = document.querySelector('.undo')
        
        btn.addEventListener('click',function(){
       
            console.log( parentEl,removedNodes)
            
            removedNodes.forEach(node=>{
                parentEl.append(node)
                hidden(parentEl)
            })
        } ) 
} 

btn.addEventListener('click',function(){
    const allLis= ulItem.querySelectorAll('li');
    const lis =[]
    allLis.forEach((li)=>{
        lis.push(li)
        li.remove()
        console.log(li,lis)
        undo(ulItem,lis)
    })
    hidden(ulItem)
    
})

function checkList(){
    const allInputs = document.querySelectorAll('li input');
    for(let input of allInputs){
        
        input.addEventListener('click',function(){
            const btn = input.nextElementSibling.nextElementSibling
            if(input.checked){
                console.log('checked',btn);
                input.nextElementSibling.style.textDecoration = 'line-through' ;
                input.nextElementSibling.style.opacity = '.5'
                btn.style.zIndex = '1';
                btn.style.opacity = '.9'

            }
            else{
                console.log('unchecked', input)
                input.nextElementSibling.style.textDecoration = 'none';
                btn.style.zIndex = '-1';
                btn.style.opacity = '.2'
                input.nextElementSibling.style.opacity = '.8'
            }
        })
    }   
}





listAdder(inputItem,ulItem)


// //set local Storage
// localStorage.setItem('name',"david")

// //set session Storage
// // sessionStorage.setItem('name','beth')

// console.log(JSON.parse("Hello"));

