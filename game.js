


var BtnColours = ["green", "red", "yellow", "blue"];
var started = false;
var pattern = [];
var level = 0,i = 0;
var userclickedpattern = [];

$("h1").click(function(){
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

