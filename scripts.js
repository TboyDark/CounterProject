let counterContainer = document.getElementById("counterContainer")
let counter = document.createElement('div')
counter.className = 'display'
let add = document.createElement('button')
add.className = 'add'
let substraction = document.createElement('button')
substraction.className = 'substract'
add.innerHTML = '+'
substraction.innerHTML = '-'
counter.innerHTML = 0
counterContainer.append(counter, add, substraction)

let result = 0
document.addEventListener('click', function(){
    add.onclick = function(){
        result += 1;
        counter.innerHTML = result;
    }
    substraction.onclick = function(){
        result -= 1;
        counter.innerHTML = result;
    }
}, true);