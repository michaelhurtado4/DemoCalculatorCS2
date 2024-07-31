var num = 0b000000000000;
document.getElementById("goButton").addEventListener("click", getCommands);
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function getCommands() {
    num = 0b000000000000;
    var input = document.getElementById('players').value;
    input = input.replace(/\n/g, ' ');
    input = input.replace(/,/g, '');
    var myArray = input.split(" ");
    console.log(myArray);
    for (let i = 0; i < myArray.length; i++) {
        if (isNumeric(myArray[i])) {
            var playerNum = myArray[i];
            var mask = 1 << (playerNum - 1);
            num |= mask;
        }
    }
    document.getElementById('results').innerHTML = 'tv_listen_voice_indices_h ' + num + ';tv_listen_voice_indices ' + num;
}