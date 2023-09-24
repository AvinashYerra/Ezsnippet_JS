const day='monday';

switch(day){
    case 'monday':
    case 'tuesday': //similar to or log 1 if it is monday or tuesday
        console.log(1);
        break;
    default:
        console.log(2);
}

// difference between if-else and switch case : if checks only for once and does not for else where as switch checks next condition also so we will add break