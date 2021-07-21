let grid = document.getElementsByClassName('grid-container')[0];
let player = 1;
let h1 = document.querySelector('.header').querySelector('h1');
let gridItems = document.getElementsByClassName('grid-item');
let count = 1;
let winner = false;
h1.innerHTML = 'Player '+ player;
grid.addEventListener('click',(e)=>{
    let gridItem = e.target
    if(gridItem.classList.contains('grid-item') && gridItem.innerHTML == ''){
        if(player === 1){
            gridItem.innerHTML = 'X';
            gridItem.classList.add('X');
            count++;
            checkWinner();
            player = 2;
        }else if(player === 2){
            gridItem.innerHTML = 'O';
            gridItem.classList.add('O');
            count++;
            checkWinner();
            player = 1;
        }
        setPlayer(player);
    }

    function checkWinner() {
        if(gridItems[0].textContent != ""){
            if(gridItems[0].textContent == gridItems[1].textContent
                && gridItems[0].textContent == gridItems[2].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[3].textContent != ""){
            if(gridItems[3].textContent == gridItems[4].textContent
                && gridItems[3].textContent == gridItems[5].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[6].textContent != ""){
            if(gridItems[6].textContent == gridItems[7].textContent
                && gridItems[6].textContent == gridItems[8].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[0].textContent != ""){
            if(gridItems[0].textContent == gridItems[3].textContent
                && gridItems[0].textContent == gridItems[6].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[1].textContent != ""){
            if(gridItems[1].textContent == gridItems[4].textContent
                && gridItems[1].textContent == gridItems[7].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[2].textContent != ""){
            if(gridItems[2].textContent == gridItems[5].textContent
                && gridItems[2].textContent == gridItems[8].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[0].textContent != ""){
            if(gridItems[0].textContent == gridItems[4].textContent
                && gridItems[0].textContent == gridItems[8].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(gridItems[2].textContent != ""){
            if(gridItems[2].textContent == gridItems[4].textContent
                && gridItems[2].textContent == gridItems[6].textContent){
                alert('Winner player '+player);
                setTimeout(function(){location.reload()}, 500);
                winner = true;
            }
        }
        if(count == 10 && !winner){
            alert("it's a tie");
            setTimeout(function(){location.reload()}, 500);
        }
    }

    function setPlayer(player) {
        h1.innerHTML = 'Player '+ player;
    }
});