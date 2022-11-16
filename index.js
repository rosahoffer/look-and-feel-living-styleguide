let link = document.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', function(){
        link.classList.add(".active")
        console.log()
    })
})