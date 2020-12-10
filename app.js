onload = () => {
    for(let i = 0; i < 9; i++ ){
        document.getElementById('game').innerHTML+='<div class="block"></div>'
    }
    let Turn = 0
    function restart(){
        document.getElementById('game').innerHTML = ''
        for(let i = 0; i < 9; i++ ){
            document.getElementById('game').innerHTML+='<div class="block"></div>'
        }
    }
    const x = '<img src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png">'
    const b = '<img src="https://pngimg.com/uploads/circle/circle_PNG44.png">'
    document.getElementById('game').onclick = function(event){
        if(event.target.className === 'block'){
            if(Turn % 2 === 0){
                event.target.innerHTML = b
            }else{
                event.target.innerHTML = x
            }
            Turn++
            checkWinner()
        }
    }
    function checkWinner(){
        const allblock = document.getElementsByClassName('block');
            if (allblock[0].innerHTML === x && allblock[1].innerHTML === x && allblock[2].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[3].innerHTML === x && allblock[4].innerHTML === x && allblock[5].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[6].innerHTML === x && allblock[7].innerHTML === x && allblock[8].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[0].innerHTML === x && allblock[3].innerHTML === x && allblock[6].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[1].innerHTML === x && allblock[4].innerHTML === x && allblock[7].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[2].innerHTML === x && allblock[5].innerHTML === x && allblock[8].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[0].innerHTML === x && allblock[4].innerHTML === x && allblock[8].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[2].innerHTML === x && allblock[4].innerHTML === x && allblock[6].innerHTML === x){
                alert('Cross won!')
                restart()
            }else if(allblock[0].innerHTML === b && allblock[1].innerHTML === b && allblock[2].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[3].innerHTML === b && allblock[4].innerHTML === b && allblock[5].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[6].innerHTML === b && allblock[7].innerHTML === b && allblock[8].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[0].innerHTML === b && allblock[3].innerHTML === b && allblock[6].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[1].innerHTML === b && allblock[4].innerHTML === b && allblock[7].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[2].innerHTML === b && allblock[5].innerHTML === b && allblock[8].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[0].innerHTML === b && allblock[4].innerHTML === b && allblock[8].innerHTML === b){
                alert('Zero won!')
                restart()
            }else if(allblock[2].innerHTML === b && allblock[4].innerHTML === b && allblock[6].innerHTML === b){
                alert('Zero won!')
                restart()
            }
    }
}