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
// ICons
const simpelIcons =[
    'https://buurtcampusoost.duneyasaleh.com/public/image/stekjes_ruilen.png',
    'https://buurtcampusoost.duneyasaleh.com/public/image/noun-planting-plant.png',
    'https://rosahoffer.github.io/the-client-case/assets/doneren.png',
    'https://rosahoffer.github.io/the-client-case/assets/open.png',
    'https://joelle78.github.io/the-client-case/assets/plant.png',
    'https://joelle78.github.io/the-client-case/assets/growth.png',
    'https://joelle78.github.io/the-client-case/assets/trade.png',
    'https://joelle78.github.io/the-client-case/assets/excited.png',
    'https://joelle78.github.io/the-client-case/assets/heartbeat.png',
    'https://joelle78.github.io/the-client-case/assets/planet-earth.png',
    'https://joelle78.github.io/the-client-case/assets/support.png',
    'https://static.thenounproject.com/png/703781-200.png',
    'https://starpng.com/public/uploads/preview/black-instagram-logo-png-11574831789epgjpjrwg6.png',
    'https://e7.pngegg.com/pngimages/415/155/png-clipart-telephone-computer-icons-phone-icon-template-miscellaneous-service.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ28bkpZt4qwcuNfoBt1DwUJ1vRRaOru3uVA&usqp=CAU',
    'https://e7.pngegg.com/pngimages/982/97/png-clipart-computer-icons-camera-iphone-graphy-camera-photography-camera-icon.png'    

]


const iconsKader = document.getElementById('simpelIcon');

function fotoeen(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let mijnFoto = document.createElement('img');
    mijnFoto.src = url;
    mijnFoto.alt = 'ventie';
    item.append(mijnFoto);
    simpelIcon.append(item);
}
///met i-- kan ik beginnen van beneden naar boven 
for(let i=simpelIcons.length;  i>0; i--) {
    let num = Math.floor (Math.random()*simpelIcons.length)
fotoeen(simpelIcons[num] );
simpelIcons.splice(num,1)
}