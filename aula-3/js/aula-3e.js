var bt1 = document.getElementById('botao');

bt1.addEventListener('click', function(){
    console.log('Você clicou no botão!');
})

bt1.addEventListener('mouseover', function(){
    console.log('Foi detectado o cursor do mouse sobre o botão!');
})

bt1.addEventListener('mouseout', function(){
    console.log('O cursor do mouse não está mais sobre o botão!');
})

