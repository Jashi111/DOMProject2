// Variables
var slides = document.querySelectorAll('.slide');
//console.log(slides);
let rbtn = document.querySelectorAll('.rad-btn');
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');
let slideInt; //for store on going timer
let intTime = 5000;

//Iterate all radio navigation button
rbtn.forEach(function(item, index){
    //Click Event for Button
    item.addEventListener('click', function(){
        manButtonNav();
    });
});

// Click Events for Arrows
//RightArrow
rightArrow.addEventListener('click', function(e){
    e.preventDefault();  //stop bydefault actione of the anchorTag
    nextSlide();
    clrInterval();
});
//leftArrow
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();  
})

// Function for radio Navigation
function manButtonNav(index){
    for(let i = 0; i < slides.length; i++){
        //Set Slide andradio Navigaton Button
        if(i !== index){
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
    }
    clrInterval();
}

// Function for the Next slide
function nextSlide(){
    let curr = document.querySelector('.curr');
    let active = document.querySelector('.active');
    console.log(active)
//remove the curr and active classes from current slide
    curr.classList.remove('curr');
    active.classList.remove('active')
//Add the curr and active classes to next slide
if (curr.nextElementSibling){
    curr.nextElementSibling.classList.add('curr');
    active.nextElementSibling.classList.add('active');    
}else{
    slides[0].classList.add('curr');
    rbtn[0].classList.add('active');
}
}
// Function for the Previous Slide
function prevSlide(){
    let curr = document.querySelector('.curr');
    let active = document.querySelector('.active');
    console.log(active)
//remove the curr and active classes from current slide
    curr.classList.remove('curr');
    active.classList.remove('active')
//Add the curr and active classes to next slide
if (curr.previousElementSibling){
    curr.previousElementSibling.classList.add('curr');
    active.previousElementSibling.classList.add('active');    
}else{
    slides[slides.length - 1].classList.add('curr');
    rbtn[rbtn.length -1].classList.add('active');
}
}
// functione for clear Interval
function clrInterval(){
    clrInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

//Automatic slide Navigation
slideInt = setInterval(nextSlide, intTime); //nextSlide function execute after every 5000mS 