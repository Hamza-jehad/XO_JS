let turn = 'x';
let title = document.querySelector('.title');
let squers = [];

function end(num1, num2, num3){
    title.innerHTML = `${squers[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num1).style.color = '#eeff00';

    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num2).style.color = '#eeff00';

    document.getElementById('item'+num3).style.background = '#000';
    document.getElementById('item'+num3).style.color = '#eeff00';

    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 3000);
    
}

function winner(){

    for(let i=1; i<10; i++){
        squers[i] = document.getElementById('item' + i).innerHTML;
    }

    if(squers[1] == squers[2] && squers[2]== squers[3] && squers[1] != ''){
        end(1,2,3);
    }
    else if(squers[4] == squers[5] && squers[5]== squers[6] && squers[5] != ''){
        end(4,5,6);
    }
    else if(squers[7] == squers[8] && squers[8]== squers[9] && squers[7] != ''){
        end(7,8,9);
    }
    else if(squers[1] == squers[4] && squers[4]== squers[7] && squers[7] != ''){
        end(1,4,7);
    }
    else if(squers[2] == squers[5] && squers[5]== squers[8] && squers[2] != ''){
        end(2,5,8);
    }
    else if(squers[3] == squers[6] && squers[6]== squers[9] && squers[9] != ''){
        end(3,6,9);
    }
    else if(squers[1] == squers[5] && squers[5]== squers[9] && squers[9] != ''){
        end(1,5,9);
    }
    else if(squers[3] == squers[5] && squers[5]== squers[7] && squers[7] != ''){
        end(3,5,7);
    }
}

function game(id){

    let element = document.getElementById(id);

    if(turn === 'x' && element.innerHTML == ''){

        element.innerHTML = 'X';
        element.style.color = '#4287c7';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O';
        element.style.color = '#58c742';
        turn = 'x';
        title.innerHTML = 'X';
    }

    winner();
}
