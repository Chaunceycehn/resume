window.addEventListener('scroll',function(x){
    if (window.scrollY > 0) {
        topnavbar.classList.add('sticky')
    } else {
        topnavbar.classList.remove('sticky')
    }
})