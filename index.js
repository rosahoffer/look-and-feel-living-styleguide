document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        // checkt de ul voor active anchor elementen, 'this' is in dit geval de anchors
        var active = this.parentNode.parentNode.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        this.classList.add('active')
    })
})