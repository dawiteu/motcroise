let divMots = document.querySelector('div#mots'); 
let divGril = document.querySelector('div#grille'); 

let numberofwords = parseInt(prompt("Entre le num de mots que tu va entrer pour le jeu. "));

let tabWord = [];  // tableau avec les mots que luser va entrer 
let newWordTab = [];  // tableau avec les mots decomposes en lettres ; 

let tabPlacesUsedByScript = []; // on stock ici les position utiliseer par le script, genre le l1n10 = rangee 1 case derniere; etc 
let tabLetterUsedByScript = []; // pas encore d utiliter ;

//let tableRecPlacesLetters = [];


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
    let mathLetterColid;
    for(h=0; h < numberofwords; h++){
        posW[h] = randomPosition(); 
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
                let randomchar = Math.floor(Math.random() * chars.length); 
                document.querySelector('div#n'+i).innerHTML+="<div class='let' id='l"+i+"n"+j+"'>"+chars.charAt(randomchar)+"</div>";  
            }
            divGril.innerHTML+="</div>";
        }
        for(k=0; k<numberofwords; k++){
            mathLetterColid = 0; // sur la boucle de chaque mot, si different de 0, on va deplacer le mot ;; 
            console.log(mathLetterColid);

            if(mathLetterColid > 0){
                console.log(`La position pour le mot ${posW[k]} est deja utiliserr ${mathLetterColid} fois ! !!!! `); 
            }
            let wordLength = tabWord[k].length; 
            //console.log(tabWord[k]);
            //console.log(`Le mot ${tabWord[k]} a ${wordLength} lettres; Il commencera ${posW[k]}`);

            document.querySelector("#"+posW[k]).innerHTML=tabWord[k].charAt(0);  // !!!!!!!!!!!!!!!!!!!!!!! ca en commentaire ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; 
            document.querySelector("#"+posW[k]).style.cssText="background-color:red;";

            tabPlacesUsedByScript.push(posW[k]);

            if(checkSiDejaUt(posW[k])){
                console.log(`${posW[k]} deja utiliser !! `); 
                mathLetterColid++; 
            }
            spittedpos = posW[k].split('n'); // on divise l id en deux au niveau du n ( l1n15 = ligne 1 case 15 ; )

            let tabtemp = tabWord[k];
            spittedpos[0] = spittedpos[0].substring(1);
            spittedpos[0] = parseInt(spittedpos[0]);
            spittedpos[1] = parseInt(spittedpos[1]);

            let placementdumot = Math.floor(Math.random() * (100 - 1));  // ici on test si cest 0-50 lemot est horizontalement, isnon verticalement ; 
            
            if(placementdumot >= 0 && placementdumot <= 50){
                if(tabtemp.length + spittedpos[1] <= 15){ // faut changer sur 20 ou 25 
                    for(m=1; m<tabtemp.length;m++){
                        spittedpos[1] = spittedpos[1]+1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 
                                // tabPlacesUsedByScript ;;; !!!!!!!!!!!!!!!!!
                        
                            if( checkSiDejaUt(position) ){
                                console.log(`${position} deja utiliser !! `); 
                                mathLetterColid++; 
                            }
                            tabPlacesUsedByScript.push(position);
                        console.log(`position: ${position} lettre : ${tabtemp[m]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[m];
                        document.querySelector("#"+position).style.cssText="background-color:green;";
                    }
                }else{
                    for(m=1; m<tabtemp.length;m++){
                        spittedpos[1] = spittedpos[1]-1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 
                                        // tabPlacesUsedByScript ;; !!!!!!!!!
                        
                            if( checkSiDejaUt(position) ){
                                console.log(`${position} deja utiliser !! `); 
                                mathLetterColid++; 
                            }
                            tabPlacesUsedByScript.push(position);
                        console.log(`position: ${position} lettre : ${tabtemp[m]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[m];
                        document.querySelector("#"+position).style.cssText="background-color:blue;";
                    }
                }
            }else if(placementdumot >= 51 && placementdumot <= 100){
                if((wordLength + spittedpos[0])-1 <= 15){
                    for(n=1; n < wordLength; n++){
                        spittedpos[0] = spittedpos[0]+1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 

                        
                            if( checkSiDejaUt(position) ){
                                console.log(`${position} deja utiliser !! `); 
                                mathLetterColid++; 
                            }
                            tabPlacesUsedByScript.push(position);
                        console.log(`position: ${position} lettre : ${tabtemp[n]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[n];
                        document.querySelector("#"+position).style.cssText="background-color:cyan;";   
                    }
                }else{
                    for(n=1; n < wordLength; n++){
                        spittedpos[0] = spittedpos[0]-1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 

                        
                            if( checkSiDejaUt(position) ){
                                console.log(`${position} deja utiliser !! `); 
                                mathLetterColid++; 
                            }
                            tabPlacesUsedByScript.push(position);
                        console.log(`position: ${position} lettre : ${tabtemp[n]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[n];
                        document.querySelector("#"+position).style.cssText="background-color:#ccc;";   
                    }
                }    
            }
                /*
                if(tabtemp.length + spittedpos[1] <= 15){ // faut changer sur 20 ou 25 
                    for(m=1; m<tabtemp.length;m++){
                        spittedpos[1] = spittedpos[1]+1;
                        position = spittedpos[0]+"n"+spittedpos[1]; 
                                // tabPlacesUsedByScript ;;; !!!!!!!!!!!!!!!!!
                        console.log(`position: ${position} lettre : ${tabtemp[m]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[m];
                        document.querySelector("#"+position).style.cssText="background-color:green;";
                    }
                }else{
                    for(m=1; m<tabtemp.length;m++){
                        spittedpos[1] = spittedpos[1]-1;
                        position = spittedpos[0]+"n"+spittedpos[1]; 
                                        // tabPlacesUsedByScript ;; !!!!!!!!!
                        console.log(`position: ${position} lettre : ${tabtemp[m]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[m];
                        document.querySelector("#"+position).style.cssText="background-color:blue;";
                    }
                }*/
                // test

                /*
                if((wordLength + spittedpos[0])-1 <= 15){
                    for(n=1; n < wordLength; n++){
                        spittedpos[0] = spittedpos[0]+1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 

                        tabPlacesUsedByScript.push(position);

                        console.log(`position: ${position} lettre : ${tabtemp[n]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[n];
                        document.querySelector("#"+position).style.cssText="background-color:cyan;";   
                    }
                }else{
                    for(n=1; n < wordLength; n++){
                        spittedpos[0] = spittedpos[0]-1;
                        position = "l"+spittedpos[0]+"n"+spittedpos[1]; 

                        tabPlacesUsedByScript.push(position);

                        console.log(`position: ${position} lettre : ${tabtemp[n]}`);
                        document.querySelector("#"+position).innerHTML=tabtemp[n];
                        document.querySelector("#"+position).style.cssText="background-color:#ccc;";   
                    }
                }
                */

                //endtest
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
    console.log(tabPlacesUsedByScript);
    console.log(`Nombre de croisements: ${mathLetterColid}`);
}

 
function checkSiDejaUt(pos){
    return tabPlacesUsedByScript.includes(pos);
}
function randomPosition(){

    let rRow = (Math.round(Math.random() * 14) + 1).toString(); //9 si 11-19 + 110 / 21-29+210 etc ; 
    let rCol = (Math.round(Math.random() * 14) + 1).toString();
    let result = "l"+rRow+"n"+rCol; 

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