player1_name = localStorage.getItem("player 1");
player2_name = localStorage.getItem("player 2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    letter1 = word.charAt(1);
    console.log(letter1);
    letter2_index = Math.floor(word.length / 2);
    letter2 = word.charAt(letter2_index);
    console.log(letter2);
    letter3_index = word.length - 1;
    letter3 = word.charAt(letter3_index);
    console.log(letter3);
    remove1 = word.replace(letter1, "_");
    remove2 = remove1.replace(letter2, "_");
    remove3 = remove2.replace(letter3, "_");
    console.log(remove3);
    l1 = "<h4 id='word_display'>Q. " + remove3 + "</h4>";
    l2 = "<br>Answer : <input type='text' id='input_check_box'>";
    l3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = l1 + l2 + l3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";



}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer is " + answer);
    if (answer == word) {
        if (answerTurn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("point").innerHTML=player1_name+" got a point!";
            function point() {
                document.getElementById("point").innerHTML="";
            }
            setTimeout(point,5000);
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            document.getElementById("point").innerHTML=player2_name+" got a point!";
            function point() {
                document.getElementById("point").innerHTML="";
            }
            setTimeout(point,5000);
    }
}

    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}