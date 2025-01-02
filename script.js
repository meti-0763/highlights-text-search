let allText = document.querySelector(`#paragraph`).innerText
let allp = document.querySelector(`#paragraph`)


let input = document.querySelector(`#text-to-search`)

input.addEventListener('input' ,()=> {
    search()
})

function search (){
let rgx = new RegExp(input.value, 'g');
    
allp.innerHTML = allText.replace(rgx,item => `<mark>${item}</mark>`);

}

search()