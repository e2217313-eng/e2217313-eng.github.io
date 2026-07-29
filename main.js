let day = new Date().getDay();

if(day == 0){

    document.getElementById("today").innerHTML =
    "本日は休診です";

}
else if(day == 6){

    document.getElementById("today").innerHTML =
    "本日は午前のみ診療です(12:30まで)";

}
else{

    document.getElementById("today").innerHTML =
    "本日診療中です(19:30まで)";

}


function send(){

    alert("送信しました！お問い合わせありがとうございます。");

}