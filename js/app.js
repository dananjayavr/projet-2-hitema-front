$(document).ready(() => {

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

    /*let x = 25;

    for(let i = 1; i<$('.square').length;i++) {
        if(x<=1800) {
            $(`#${i}`).css({
                'background-image':'url(assets/cards.png)',
                'background-position':`30px ${x}px`,
            });
            x+=100;
        }
    }*/

    let x = 25;
    for(let i = 1; i<$('.square').length;i++) {
        if(x<=1800) {
            $(`#${i}`).css({
                'background-image':'url(assets/cards.png)',
                'background-position': mapFruit['1'].join(' ')
            });
            x+=100;
        }
    }

    for (let [key, value] of Object.entries(mapFruit)) {
        console.log(key, value);
    }
    //console.log(mapFruit['m'].join(' '))
});