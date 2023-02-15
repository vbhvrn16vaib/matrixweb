var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60 )};

var elementToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementToShow.forEach( function(element){
        let vs = isElementViewport(element)
        if(vs){
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();


function isElementViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

