/* Estruturas de controle */

var array = [1,5,10,'Ignacio',true];

for(var i = 0; i < array.length; i++){
    console.log(array[i])
}

var i = 1;

while(i<=5){
    console.log('i = ', i);
    i++;
}

var num = 0;

do {
    console.log('num = ', num);
    num++;
} while(num < 4);

var hora = 15;

switch(hora){
    case 10:
        console.log('Bom dia!');
        break;
    case 15:
        console.log('Boa tarde!');
        break;
     case 20:
        console.log('Boa noite!');
        break;
    default:
        console.log('Saudação não programada!');
}