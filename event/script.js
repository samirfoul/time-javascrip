// const monH1= document.querySelector('h1');
// monH1.addEventListener('mouseclick', ()=>{
// monH1.style.backgroundColor='yellow';
// });
// monH1.addEventListener('mouseout', ()=>{
// monH1.style.backgroundColor='';
// });


function giveColourdBackground(){

const monH1 = document.querySelector('h1');
let isClicked = false
monH1.addEventListener('click' ,  function(){
    if (isClicked == false){
        monH1.style.background='yellow';
        isClicked = true;
    } else {(isClicked==true) 
        monH1.style.background = '';
        isClicked = false; 
    }
    
});
}
giveColourdBackground();






function showHideParagraph(){   // on declare la function 
    const linkToclick = document.querySelector('.see-more');    // on declare la variable avec le query selecteur de css
    // const defaultButtonTexte = document.querySelector('.see-more').textContent;
    const defaultButtonTexte = linkToclick.innerTexte;
    const paragraph = document.querySelector ('.show-hide-para')
    let isDisplay=false;   // on declare une variable pour la condition 
            linkToclick.addEventListener('click', function(event){   // declaré addeventlistnner ( la function qu'on veut faire )
            event.preventDefault();
            if (isDisplay== false){// declare if 
                paragraph.style.display='block';
                linkToclick.textContent = 'cacher'
                isDisplay=true;
            }else{// declare else 
                paragraph.style.display='none'; // paragraphe c'est la const = paragraph 
                linkToclick.textContent = 'defaultButtonTexte';    // this c'est la meme ( linktoclick)
                isDisplay=false;
            }
        
    });
}
showHideParagraph();


// function showHideParagraph2(){
//     let isDisplay2 = false
//     const linkToclick2 = document.querySelector('.see-more2');
//     linkToclick2.addEventListener('click', function(event){
//         event.preventDefault;
//         if(isDisplay2== false){
//             document.querySelector('.show-hide-para2').
//             classList.add('open');
//             isDisplay2 = true
//         }else {
//             document.querySelector('.show-hide-para2').
//             classList.remove('open');
//             isDisplay2 = false;
//         }
//     })
// }
// showHideParagraph2();

// c'est la meme chose de ca =>


function showHideParagraph2(){
    const linkToclick2 = document.querySelector('.see-more2');
    linkToclick2.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('.show-hide-para2');
            classList.toggle('open');
            });
};
showHideParagraph2();


function changerImage(){
    const click3 = document.querySelector('.change-moi');
    let backToimage=false;
        click3.addEventListener('click', function(event) {
            event.preventDefault();
        document.querySelector('.image-to-change');
        document.querySelector('.image-to-change').setAttribute('src','/imgs/item-01.png');
            if(backToimage==false){
                click3.textContent='show-image'
                backToimage=true;
            }else {
                click3.textContent='back-to-image'
                backToimage=false;
                document.querySelector('.image-to-change').setAttribute('src','/imgs/item-03.png');
            }
    });
    
}

changerImage();


function showBurger(){
    const click4 = document.querySelector('button');
    const imgMenu = document.querySelector('button img');
    const menu = document.querySelector('ul');
    const menuBurger =imgMenu.getAttribute('src'); // getattribute pour  prandre selectioner l'image dans la source 
    let hide= false; 
    click4.addEventListener('click', function(event){
        event.preventDefault();
        if (hide==false){
            menu.style.display="block";
            hide=true; 
            imgMenu.setAttribute('src', '/logo/hamburger-on.png');
        }else {
            menu.style.display="none"; 
            hide= false; 
            imgMenu.setAttribute('src',menuBurger);
        }
    });

}
showBurger();