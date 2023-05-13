const ulItem = document.querySelector('.shopping-items');
const completed = document.querySelector('.completed');
const completedItem = completed.querySelector('.shopping-items')
const clear = document.querySelector('.clear');
const hiddenDiv = document.querySelector('.hidden');

class Ui{
    todoAdder(eventEl,parentEl){   
        if(eventEl.key === 'Enter'){
           
       
            if( !eventEl.target.value)return;
            const newLi =document.createElement('li')
            const newItem = eventEl.target.value;
            newLi.innerHTML = `<input type="checkbox"><span>${newItem}</span>`;
            
            parentEl.append(newLi)
            eventEl.target.value = ''
        }

    }
    todoClearAll(parentEl){
        
        parentEl.querySelectorAll('li').forEach(li => {
            removedLi.push(li)
            li.remove()
            completedProgress= 0
            completed.style.display = 'none';
            clear.setAttribute('disabled','')
            clear.style.opacity= '.2';
        });
        return removedLi 
        
    }
    todoUndo(parentEl){
        const removedNodes = removedLi
        console.log(removedNodes)
        removedNodes.forEach(node=>{
            parentEl.append(node)
            console.log(node)
        })

    }
    todoChecklist(eventEl,parentEl,checked){
        if(eventEl.target.type === 'checkbox' ){
            const btn = eventEl.target.parentElement.lastElementChild;
            if(eventEl.target.checked && checked){
                eventEl.target.nextElementSibling.style.textDecoration = 'line-through' ;
                eventEl.target.nextElementSibling.style.opacity = '.5';
                parentEl.prepend(eventEl.target.parentElement)
                completedProgress+=1
                document.querySelector('.clear').style.opacity= '.9';
                document.querySelector('.clear').removeAttribute('disabled')
                completed.style.display = 'block';
            }
            else{
                parentEl.prepend(eventEl.target.parentElement)
                
                if(completedProgress<=1){
                    completed.style.display = 'none';
                    clear.style.opacity= '.2';
                    clear.setAttribute('disabled','')
                    completedProgress = 0;
                }else{
                    completedProgress-=1;
                    
                }
                
                eventEl.target.nextElementSibling.style.textDecoration = 'none' ;
                eventEl.target.nextElementSibling.style.opacity = '.9'
            }
        }

    }
    hidden(element1,element2){
        if(element1.childElementCount>0 || element2.childElementCount>0){
            hiddenDiv.style.display = 'none'
        }else{hiddenDiv.style.display = 'block'};
    }
    
}
const removedLi= []
let completedProgress = 0

document.querySelector('.item').addEventListener('keypress',function(e){
    const ui = new Ui;

    ui.todoAdder(e,ulItem)
    ui.hidden(ulItem,completedItem)
})

document.querySelector('button.clear').addEventListener('click',function(e){
    const ui = new Ui;

    ui.todoClearAll(completedItem)
    ui.hidden(ulItem,completedItem)
})

document.querySelector('.shopping-items').addEventListener('click',function(e){
    const ui = new Ui;
    ui.todoChecklist(e,completedItem,true)
})

completedItem.addEventListener('click',function(e){
    const ui = new Ui;

    ui.todoChecklist(e,ulItem,false)
})

