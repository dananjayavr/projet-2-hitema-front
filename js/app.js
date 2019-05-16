let matchCount = 0;
function game() {
    let mapFruit = {
        '1':['25px','25px'],
        '2':['25px','125px'],
        '3':['25px','225px'],
        '4':['25px','325px'],
        '5':['25px','425px'],
        '6':['25px','525px'],
        '7':['25px','625px'],
        '8':['25px','725px'],
        '9':['25px','825px'],
        '10':['25px','925px'],
        '11':['25px','1025px'],
        '12':['25px','1125px'],
        '13':['25px','1225px'],
        '14':['25px','1325px'],
        '15':['25px','1425px'],
        '16':['25px','1525px'],
        '17':['25px','1625px'],
        '18':['25px','1725px'],
    };

    // Helper functions
    function shuffle(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    let maxNum = 19;
    let arr = Array(maxNum).fill().map((e,i)=>i+1);
    arr.sort(function() {
        return .5 - Math.random();
    });


    let fruits1  = shuffle(arr.slice(1,12));
    let fruits2  = shuffle(arr.slice(1,12));
    let gameBoard = fruits1.concat(fruits2);


    for(let i = 1; i<gameBoard.length;i++) {
        $(`#${i}`).css({
            'background-image':'linear-gradient(rgba(187, 164 ,164 , 1), rgba(187, 164 ,164 , 1)), url(assets/cards.png)',
            'background-position': mapFruit[`${gameBoard[i]}`].join(' ')
        });
    }
    let matcher  = [];
    matchCount = 0;

    //$('.square').css({'border-top':'50px'});
    $('.square').bind('click',(function(e) {
        let initialPos = $(this).css('background-position');
        matcher.push($(this));
        $(this).css({
            'background-image':'url(assets/cards.png)',
            'background-position':initialPos
        });
        $(this).addClass('select');
        if(matcher.length===2) {
            if(matcher[0].css('background-position')===matcher[1].css('background-position')) {
                matchCount++;
                matcher[0].addClass('match');
                matcher[1].addClass('match');
            } else {
                $(this).addClass('select');
                function hide() {
                    $('.select:not(.match)').css({
                        'background-image': 'linear-gradient(rgba(187, 164 ,164 , 1), rgba(187, 164 ,164 , 1)), url(assets/cards.png)'
                    });
                }
                setTimeout(hide,1000);
            }
        }
        if(matcher.length>=2) {matcher.length=0;}
    }));
}
function countdown() {
    let i = 100;

    let counterBack = setInterval(function(){
        i--;
        if (i > 0){
            $('.progress-bar').css('width', i+'%');
        } else {
            clearInterval(counterBack);
        }

    }, 565);
}


$(document).ready(() => {
    $('#start').click(() => {
        game();
        countdown();
    })
},setTimeout(() => {
    alert(`Game Over! Your score: ${matchCount}`);
    $('#start').css('display','none');
    $('.control').html('<h2>Refresh to Restart</h2>');
},60000));

/*
$(document).ready(() => {game()},setTimeout(() => {
    alert(`Game Over! Your score: ${matchCount}`);
},60000));*/
