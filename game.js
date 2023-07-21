
// $("h1").css("color", "red");

// var arr = ["green", "red", "yellow", "blue"];
// var pattern = [];

// function generateRandomNum(){
//     x = x * 4;
//     var x = Math.floor(Math.random()* 4);
//     // x = x * 4;
//     // x = Math.floor(x);
//     // return x;
// }


// var num = 1;
// // console.log($("h1").html());
// if($("h1").html() == "Game Over, Press any key to restart" || $("h1").html() == "Press A Key to Start" ){
//     console.log("true");
// document.addEventListener("keydown", function () {
//     // if($("h1").html == "Game Over, Press any key to restart")
//     // {
//     //     num = 1;
//     //     return ;
//     // }
//     console.log("Key pressed");
//     // while( $("h1").html() != "Game Over, Press any key to restart"){
//         $("h1").html("Level "+ num); 
//         // console.log("blaaaaaaaaa");
//         // var x = Math.random();
//         // x = x * 4;
//         // x = Math.floor(x);
        
//         // alert(x);
        
//     var num_random = generateRandomNum();
//     console.log(num_random); 
//     // console.log(arr[2]);
//     // var pattern = [];
//     pattern.push(num_random);
//     var i = 0;
//     while (i < pattern.length && $("h1").html != "Game Over, Press any key to restart") {
//         console.log("blaaaaaaaaa");
//     // for(var j = 0; j<4; j++)
//     // {
//         $("button").click(function () {
//         if(this.classList[1] == arr[pattern[i]]){
//         console.log("yes");
//         }
//         // $("h1").html("Level "+ ++num); 
//         else{
//         $("h1").html("Game Over, Press any key to restart"); 
//         }
//         });
//         if($("h1").html == "Game Over, Press any key to restart")
//         break;
//     // }
//     i++;
//     }
//     num++;
// // }
// });
// }

// // else{
// //     num = 1;
// // }


var BtnColours = ["green", "red", "yellow", "blue"];
var started = false;
var pattern = [];
var level = 0,i = 0;
var userclickedpattern = [];

$("h1).click(function(){
    if(!started)
    {
        started = true;
        nextSequence();
    }
});

function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var R_N = Math.floor(Math.random()* 4);
    var R_C = BtnColours[R_N];
    pattern.push(R_N);
    $("#"+R_C).fadeIn(100).fadeOut(100).fadeIn(100);
    makesound(R_C);
    // checkSequence();
}

// function checkSequence(){
//     if(i == pattern.length)
//         {
//             console.log("bdha");
//             i = 0;
//             nextSequence();
//         }
//     else{
//     $(".btn").click(function(){
//         // console.log(this.classList[1]);
//         // console.log(BtnColours[pattern[i]]);
//         // console.log(pattern.length);
        
//         if(this.classList[1] == BtnColours[pattern[i]])
//         {
//             console.log("Enter");
//             console.log(i);
//             i++;
//             $("#"+this.classList[1]).fadeIn(100).fadeOut(100).fadeIn(100);
//             checkSequence();
//         }
//         else{
//             i = 0;
//             gameover();
            
//         }
//     });
// }
// }

$(".btn").click(function(){
    userclickedpattern.push(this.classList[1]);
    animate(this.classList[1]);
    makesound(this.classList[1]);
    checkSequence(userclickedpattern.length-1);
});

function checkSequence(currentLevel){
        if(BtnColours[pattern[currentLevel]] == userclickedpattern[currentLevel])
        {
            if(currentLevel == pattern.length-1)
            {
                userclickedpattern = [];
                setTimeout(function(){
                    nextSequence();
                },1000);
                
            }
        }
        else
        {
            makesound("wrong");
            animatebackground();
            gameover();
        }
}



function gameover(){
    $("#level-title").text("Game Over, Click here to Restart");
    userclickedpattern = [];
    pattern = []; 
    started = false;
    level = 0;
}

function makesound(btnname){
    var audio = new Audio("sounds/" +btnname +".mp3");
    audio.play();
}

function animate(currentcolorclicked){
    $("#" + currentcolorclicked).addClass("pressed");
  setTimeout(function () {
    $("#" + currentcolorclicked).removeClass("pressed");
  }, 100);
}

function animatebackground(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

}

