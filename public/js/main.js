let divMots = document.querySelector('div#mots'); 
let divGril = document.querySelector('div#grille'); 

let numberofwords = parseInt(prompt("Entre le num de mots que tu va entrer pour le jeu. "));

let tabWord = []; 
let newWordTab = []; 


if(numberofwords >= 1){
    spannow = document.querySelector('span#nof'); 
    spannow.innerHTML = numberofwords; 
    for(i=0; i < numberofwords; i++){
        x=prompt(`entre le mot numéro ${i+1}`); 
        //tabWord[i]=x; 
        if(x != ""){
            tabWord.push(x); 
            divMots.innerHTML+=x+"<br/>";
            
        }else{
            x=prompt(`entre le mot numéro ${i+1}`); 
        }
    }
    preparegrille();
}else{
    alert('nombre incorrect..');
}

//console.log(tabWord); 

let divRow = divGril.querySelectorAll('div.row'); 
let divLet = document.querySelectorAll('div.lett'); 



function decomposemots(){
    let maxMots = tabWord.length; 
    console.log(`Il y a ${maxMots} a decomposer: `); 
    for(i=0; i < maxMots; i++){
        newWordTab[i]=tabWord[i].split('');
    }
}


function preparegrille(nCol=0,nLig=0){
    let posW = []; 

    for(h=0; h < numberofwords; h++){
        posW[h] = "ln"+randomPosition(); 
    }

    console.log(posW); 

    let chars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    decomposemots();
    let tabRows = []; 
    let tabCols = []; 

    if(nCol == 0 && nLig == 0){
        let randomPos = []; 

        for(i=1; i <= 15; i++){
            let prep = "<div class='row' id='n"+i+"'>"; //console.log(prep); 
            divGril.innerHTML+=prep; 

            for(j=1; j <= 15; j++){

                //let randomchar = Math.floor(Math.random() * chars.length); 
                //tabCols[j] = randomchar; 
                //tabRows[i] = tabCols[j];

                    //let b = randomPosition();
                                                                                        // chars.charAt(tabCols[j])
                    document.querySelector('div#n'+i).innerHTML+="<div class='let' id='ln"+i+j+"'>"+0+"</div>";  

                    /*
                    for(k=0; k<numberofwords; k++){
                        console.log(k); 
                        if( document.querySelector('#ln'+i+j).getAttribute('id') == posW[k] ) {
                            console.log(`${document.querySelector('#ln'+i+j).getAttribute('id')} - ${posW[k]} `)
                            document.querySelector('div#n'+i).innerHTML+="<div class='let' id='ln"+i+j+"'>"+posW[k].charAt(0)+"</div>";  
                        }
                        console.log(posW);
                       // posW // posW
                       //document.querySelector('div#n'+i).innerHTML+="<div class='let' id='ln"+i+j+"'>"+"25!"+"</div>";  
                    }

                    */

                    /*
                    for(k=0; k < numberofwords; k++){
                        let b = randomPosition();
                        console.log(b); 
                        let length = tabWord[k].length; 
                        if(k == b) document.querySelector('div#n'+i).innerHTML+="<div class='let' id='ln"+i+j+"'>"+tabWord[k].charAt(0)+"</div>";
                        console.log(tabWord[k].charAt(0)); 
                    }
                    */
                //console.log(tabCols);

            }
            divGril.innerHTML+="</div>";
        }
        //console.log(posW[k]);
        a=0;
        for(k=0; k<numberofwords; k++){
            let wordLength = tabWord[k].length; 
            console.log(`Le mot ${tabWord[k]} a ${wordLength} lettres;`);
            document.querySelector("#"+posW[k]).innerHTML=tabWord[k].charAt(0); 
            document.querySelector("#"+posW[k]).style.cssText="background-color:red;";

            console.log(posW[k]); 
            for(l=1; l<wordLength;l++){
                //tabWord[k] = tabWord[k].substring(1);
                posit = parseInt(posW[k].substring(2));

                let tabtemp = tabWord[k].split('');
                position = "ln"+(posit+l);
                console.log(`position: ${position} lettre : ${tabtemp[l]}`)
                //console.log();
                document.querySelector("#"+position).innerHTML=tabtemp[l];
                document.querySelector("#"+position).style.cssText="background-color:green;";

            }
        }


        //console.log(randpos);

        /*
       for(k=0; k < numberofwords; k++){
            let pos = randomPosition(); 
            console.log(`elemeent ${k} va dans ${pos}`);  
            document.querySelector('div#ln'+pos).style.cssText="background-color:red;";
            document.querySelector('div#ln'+pos).innerHTML=tabWord[k].charAt(0); 
       }
       */



        /*
        for(k=0; k < numberofwords; k++){
            console.log(k);
            randomPos[k]=Math.round(Math.random() * 100); 

            console.log(randomPos);
                //tempArray[k] = randomPos[k]; 
                console.log('div#ln'+randomPos[k]);

                document.querySelector('div#ln'+randomPos[k]).style.cssText="background-color:red;";
                document.querySelector('div#ln'+randomPos[k]).innerHTML=tabWord[k].charAt(0); 
                //document.querySelector('div#ln'+randomPos[k]).classList.add('opccuped'); 
        }

        */


    }
}

function randomPosition(){

    let rRow = (Math.round(Math.random() * 14) + 1).toString(); //9 si 11-19 + 110 / 21-29+210 etc ; 
    let rCol = (Math.round(Math.random() * 14) + 1).toString();
    let result = rRow+""+rCol; 

    return result;
}

/*
document.querySelectorAll('div.let').click(function(){
    alert('clock');
});

*/


const clickbutt = document.querySelectorAll("div.row div.let")

for (const button of clickbutt) {
  button.addEventListener('click', function(event) {
    let thisattr = this.getAttribute('id');
    alert(thisattr); 
  })
}

/*
butlet.addEventListener("click", check);

function check(){
    alert('click');
}

*/