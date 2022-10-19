const imgCarousel = [
"imgs/item-00.png",
"imgs/item-01.png",
"imgs/item-02.png",
"imgs/item-03.png",
"imgs/item-04.png",
"imgs/item-05.png",
"imgs/item-06.png",
"imgs/item-07.png",
"imgs/item-08.png",
"imgs/item-09.png",
];

function caRousel (){
    let indice = 0; 
    let carouselGo = setInterval(function(){
        if(indice > imgCarousel.length -1 ){
            indice=0;
        }
        document.querySelector('#image-to-change').setAttribute('src', imgCarousel[indice]);
        indice++;
    },500);
}
caRousel ();


