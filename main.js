var UserScore = 0;
var ComputerScore = 0;
const obj = [
    './images/hand-100.png',
    './images/hand-rock-100.png',
    './images/hand-scissors-100.png'
];
console.log();
$(document).ready(function () {

    $('#hand').click(function () {
        console.log($("#hand"));
        $('.selected-action').attr('src', obj[0]);
        $('.selected-action');
        let ran = findRandomAndCompare(0);
        $('.selected-action-computer').removeClass('rotation-90neg');
        if (ran == 2) {
            $('.selected-action-computer').addClass('rotation-90neg');
        }
        $('.selected-action-computer').attr('src', obj[ran]);

        $('#user-score').html(UserScore);
        $('#computer-score').html(ComputerScore);
    });
    $('#rock').click(function () {
        $('.selected-action').attr('src', obj[1]);
        $('.selected-action');
        let ran = findRandomAndCompare(1);
        $('.selected-action-computer').removeClass('rotation-90neg');
        if (ran == 2) {
            $('.selected-action-computer').addClass('rotation-90neg');
        }
        $('.selected-action-computer').attr('src', obj[ran]);
        $('#user-score').html(UserScore);
        $('#computer-score').html(ComputerScore);

    });
    $('#scissor').click(function () {
        $('.selected-action').attr('src', obj[2]);
        $('.selected-action');
        let ran = findRandomAndCompare(2);
        $('.selected-action-computer').removeClass('rotation-90neg');
        if (ran == 2) {
            $('.selected-action-computer').addClass('rotation-90neg');
        }
        $('.selected-action-computer').attr('src', obj[ran]);
        $('#user-score').html(UserScore);
        $('#computer-score').html(ComputerScore);
    });


    $('#reset').click(function(){
        UserScore=0;
        ComputerScore=0;
        $('#user-score').html(UserScore);
        $('#computer-score').html(ComputerScore);
    });



});


function findRandomAndCompare(index) {
    let Randomindex = Math.floor(Math.random() * 3);
    console.log(index, " ", Randomindex);
    if (index == 0 && Randomindex == 1) {
        UserScore++;
    }
    else if (index == 1 && Randomindex == 2) {
        UserScore++;
    }
    else if (index == 2 && Randomindex == 0) {
        UserScore++;
    }
    else if (Randomindex != index) {
            ComputerScore++;
        
    }
    return Randomindex;
}
