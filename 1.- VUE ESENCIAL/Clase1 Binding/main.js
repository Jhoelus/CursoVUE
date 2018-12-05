// Binding con java Script puro

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

/*
input.addEventListener('keyup', function(){
    h1.innerHTML = input.value
})
*/

// input.addEventListener('keyup', () =>
//     h1.innerHTML = input.value                  
// )

new Vue({
    el: "main",
    data: {
        msg: "Hi..."
    }
});