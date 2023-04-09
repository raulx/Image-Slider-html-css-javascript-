let slider = document.querySelector('.slider');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right')

let currentIndex = 0

function moveLeft(){
    if(currentIndex > 1){
        currentIndex = 0
        slider.style.transform = "translateX(0)"
    }
    else{
        currentIndex += 1
        slider.style.transform = `translateX(${-currentIndex * 800}px)`
    }
    
}

leftBtn.addEventListener('click',()=>{
    moveLeft()
})
