let imgs = document.querySelectorAll('.header-slider ul img');
let prev_btn = document.querySelector('.control-prev');
let next_btn = document.querySelector('.control-next');

let n=0;
function changeslide(){
    for (let i = 0; i < imgs.length; i++) {
          imgs[i].style.display='none';  
    }
    imgs[n].style.display='block';  
}
changeslide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
changeslide();

})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
changeslide();

})

let scrollcontainer=document.querySelectorAll('.products');
for(const item of scrollcontainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}