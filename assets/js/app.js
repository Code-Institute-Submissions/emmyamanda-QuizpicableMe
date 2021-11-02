var movies = [
    {
        id: 0,
        question: "“A queen is never late... everyone else is simply early.”",
        answers: {
            a: "THE PRINCESS DIARIES",
            b: "CLUELESS",
            c: "ICE PRINCESS",
            d: "BEAUTY AND THE BEAST",
        },
        correct: "THE PRINCESS DIARIES",
        letter: "a",
    },

    {
        id: 1,
        question: "“Come with me if you want to live”",
        answers: {
            a: "JURASSIC PARK",
            b: "STAR WARS",
            c: "WEEKEND AT BERNIES",
            d: "THE TERMINATOR",
        },
        correct: "THE TERMINATOR",
        letter: "d",
    },

    {
        id: 2,
        question: "“Stupid is as stupid does.”",
        answers: {
            a: "DUMB AND DUMBER",
            b: "FORREST GUMP",
            c: "BACK TO THE FUTURE",
            d: "THERE'S SOMETHING ABOUT MARY",
        },
        correct: "FORREST GUMP",
        letter: "b",
    },

    {
        id: 3,
        question: "“You shall not pass.”",
        answers: {
            a: "CATCH ME IF YOU CAN",
            b: "THE FELLOWSHIP OF THE RING",
            c: "HARRY POTTER AND THE GOBLET OF FIRE",
            d: "AIR FORCE ONE",
        },
        correct: "THE FELLOWSHIP OF THE RING",
        letter: "b",
    },

    {
        id: 4,
        question: "“Say hello to my little friend.”",
        answers: {
            a: "THE GODFATHER",
            b: "THE HOBBIT",
            c: "SCARFACE",
            d: "STEPBROTHERS",
        },
        correct: "SCARFACE",
        letter: "c",
    },

    {
        id: 5,
        question: "“Where is my super suit?”",
        answers: {
            a: "THE INCREDIBLES",
            b: "THE MASK",
            c: "SOUL",
            d: "THE AVENGERS",
        },
        correct: "THE INCREDIBLES",
        letter: "a",
    },

    {
        id: 6,
        question: "“Get to the choppa!”",
        answers: {
            a: "JURASSIC PARK",
            b: "TERMINATOR 2",
            c: "PREDATOR",
            d: "APOCALYPSE NOW",
        },
        correct: "PREDATOR",
        letter: "c",
    },

    {
        id: 7,
        question: "“I'm gonna make him an offer he can't refuse.”",
        answers: {
            a: "THE MASK",
            b: "THE GODFATHER",
            c: "DOG DAY AFTERNOON",
            d: "KILL BILL",
        },
        correct: "THE GODFATHER",
        letter: "b",
    },

    {
        id: 8,
        question: "“You're gonna need a bigger boat!”",
        answers: {
            a: "MOANA",
            b: "THE LITTLE MERMAID",
            c: "TITANIC",
            d: "JAWS",
        },
        correct: "JAWS",
        letter: "d",
    },

    {
        id: 9,
        question: "“Clever girl.”",
        answers: {
            a: "AVATAR",
            b: "CARRIE",
            c: "JURASSIC PARK",
            d: "CLUELESS",
        },
        correct: "JURASSIC PARK",
        letter: "c",
    },

    {
        id: 10,
        question: "“It's a trap!”",
        answers: {
            a: "STAR WARS: RETURN OF THE JEDI",
            b: "JUMANJI",
            c: "PULP FICTION",
            d: "THE JUNGLE BOOK",
        },
        correct: "STAR WARS: RETURN OF THE JEDI",
        letter: "a",
    },

    {
        id: 11,
        question: "“You're killing me, Smalls.”",
        answers: {
            a: "THE GOONIES",
            b: "THE SANDLOT",
            c: "SLEEPAWAY",
            d: "A LEAGUE OF THEIR OWN",
        },
        correct: "THE SANDLOT",
        letter: "b",
    },

    {
        id: 12,
        question: "“Wilsonnnn!!!”",
        answers: {
            a: "HONEY, I SHRUNK THE KIDS",
            b: "BASEketball",
            c: "CASTAWAY",
            d: "JUMANJI",
        },
        correct: "CASTAWAY",
        letter: "c",
    },

    {
        id: 13,
        question: "“Inconceivable!”",
        answers: {
            a: "BACK TO THE FUTURE",
            b: "THE PRINCESS BRIDE",
            c: "THE LABYRINTH",
            d: "HOCUS POCUS",
        },
        correct: "THE PRINCESS BRIDE",
        letter: "a",
    },

    {
        id: 14,
        question: "“You talkin' to me?”",
        answers: {
            a: "TAXI DRIVER",
            b: "THE MATRIX",
            c: "PSYCHO",
            d: "CASABLANCA",
        },
        correct: "TAXI DRIVER",
        letter: "a",
    },

    {
        id: 15,
        question: "“Frankly, my dear, I don’t give a damn.”",
        answers: {
            a: "WALL STREET",
            b: "THE WIZARD OF OZ",
            c: "GONE WITH THE WIND",
            d: "LOVE STORY",
        },
        correct: "GONE WITH THE WIND",
        letter: "c",
    },

    {
        id: 16,
        question: "“Carpe Diem. Seize the day, boys. Make your lives extraordinary.”",
        answers: {
            a: "DEAD POET SOCIETY",
            b: "THE GRADUATE",
            c: "FIELD OF DREAMS",
            d: "SOME LIKE IT HOT",
        },
        correct: "DEAD POET SOCIETY",
        letter: "a",
    },
]

//Variables 
var right = 0;
var wrong = 0;
var unanswered = 0;
var qCount = 0;
var myTimer, letter, num, timeLeft, y;

$(document).on(' touchstart click', '.playGame', function(e){
    e.stopPropagation(); 
    e.preventDefault();
    // Movie quotes questions randomizes
    movies.sort(function() { return 0.5 - Math.random() });
    $(this).hide();
    $('.questionBox, .answerBox, #numCount, #countDown, #quotes').show();
    $('#results').hide();
    currentQuestion(qCount);
    
});

function currentQuestion(count){
    $('#numCount').html("Q. No. " + (qCount+1) + " / 10")
    $('.options').removeClass('rightAnswer wrongAnswer');

    $('.options').addClass('hov');

    y = true;

    
    if (count < (movies.length/2)){
        timeLeft = 10;
        $('#countDown').removeClass('rightHeader wrongHeader').css('color', '#000000');
        $('#countDown').text("Time Remaining: " + timeLeft + ' seconds');
        myTimer = setInterval(countdown, 1000);
        $('#quotes').html(movies[count].question);
        $('#a').html(movies[count].answers.a);
        $('#b').html(movies[count].answers.b);
        $('#c').html(movies[count].answers.c);
        $('#d').html(movies[count].answers.d);
        letter = movies[count].letter;

    }
    
    else{
        $('#numCount, #countDown, #quotes, .answerBox').hide();
        $('#results, #playAgain').show();
        $("#playAgain").css('display', 'flex');
        $('#rightNum').html(right);
        $('#wrongNum').html(wrong);
        $('#unNum').html(unanswered);
        // randomizes the array of movies
        movies.sort(function() { return 0.5 - Math.random() });

        qCount = 0;
        unanswered = 0;
        right = 0;
        wrong = 0;
    }
}


function countdown() {
    if (timeLeft == 1) {
        clearTimeout(myTimer);
        $('#countDown').text("Time's Up!");
        $('.options').removeClass('hov');
        noAnswerSelected();

    } else {
        
        timeLeft--;
        $('#countDown').text("Time Remaining: " + timeLeft + ' seconds');
        
        if(timeLeft <= 5){
            $('#countDown').css('color', '#e30404'); 
        }

    }
}


function noAnswerSelected(){ 
    y = false;
    $("#"+letter).addClass('rightAnswer');
    unanswered ++;
    qCount++;
    setTimeout(function(){
        currentQuestion(qCount)
    }, 4000);
}


$(document).on(' touchstart click', '.options', function (e){
    e.stopPropagation(); 
    e.preventDefault();
    $('.options').removeClass('hov');
    clearTimeout(myTimer);


    if(y){

        if($(this).attr('id') == letter){
            y = false;
            $('#countDown').text("That's Right!").addClass('rightHeader');
            $("#"+letter).addClass('rightAnswer');
            right ++;
            qCount++;
            setTimeout(function(){
                currentQuestion(qCount)
            }, 4000);
        }
        else{
            y = false;
            $('#countDown').text("Nope. That's Wrong.").addClass('wrongHeader');
            $("#"+letter).addClass('rightAnswer');
            $(this).addClass('wrongAnswer');
            wrong ++;
            qCount++
            setTimeout(function(){
                currentQuestion(qCount)
            }, 4000);
        }
    } 
});