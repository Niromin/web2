const message = ": This is the best moment to have a look at this website !"

const fullMessage = addDateTime(message)

function addDateTime(message){
    const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15
    const date = dateTimeNow.toLocaleDateString();
    const hour = dateTimeNow.toLocaleString();

return date + ' ' + hour + ' ' + ': ' + message
}







alert(fullMessage);