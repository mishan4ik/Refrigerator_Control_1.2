let electricity = document.querySelector(".block_electricity");
let Temp1 = document.querySelector(".block_temperature");
let Freezing1 = document.querySelector(".block_freezing");
let cooling1 = document.querySelector(".block_cooling");
let defrosting1 = document.querySelector(".block_defrosting");
let freshness1 = document.querySelector(".block_freshness")
let img_electricity1 = document.querySelector(".on_electricity");
let img_electricity2 = document.querySelector(".off_electricity");
let wifi = document.querySelector(".block_wifi"); 

electricity.onclick = function() {

    if(img_electricity1.style.display == ""){

        img_electricity1.style.display = "none"
        img_electricity2.style.display = "block";
        Temp1.style.pointerEvents='none';
        Freezing1.style.pointerEvents='none';
        cooling1.style.pointerEvents='none';
        defrosting1.style.pointerEvents='none';
        freshness1.style.pointerEvents='none';
        wifi.style.pointerEvents='none';
    }
    else{

        img_electricity1.style.display = ""
        img_electricity2.style.display = "none"
        Temp1.style.pointerEvents='auto';
        Freezing1.style.pointerEvents='auto';
        cooling1.style.pointerEvents='auto';
        defrosting1.style.pointerEvents='auto';
        freshness1.style.pointerEvents='auto';
        wifi.style.pointerEvents='auto';

    }


}