let cont = document.querySelector('container');
let layer = document.querySelector('layer');

cont.onscroll = function(){
    let x = cont.scrollTop;

    layer[0].style.top = x + 'px';
}
