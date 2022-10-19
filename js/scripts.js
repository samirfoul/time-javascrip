let compteur = 0 ; // initialisation par 0 
function affichedansXseconde(){
    let time1 = setTimeout(
        function(){
            console.log('hello ' + compteur);
            let newDiv = document.createElement('div');
            document.querySelector("body").append(newDiv);
            if (compteur==10){
                clearTimeout(time1);
            }
            else{
            compteur++; // compteur = compteur + 1 ; 
            affichedansXseconde()
        }
        },500
        )
} 
affichedansXseconde();

// fonction récursive  (appele a chque fois la meme function )
// setTimeout (function(){

// }, 1000)


let compteur2=0;
function afficheAvecSetInterval(){
    let time2= setInterval(
    ()=>{
        if(compteur2==10){
            clearInterval(time2);
        }
        else{
            compteur2++;
            let newDiv=document.createElement('div');
            document.querySelector('body').append(newDiv);
        }
    },500)
    
}
afficheAvecSetInterval();