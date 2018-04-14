canvas = document.getElementById("canvas");
scene = canvas.getContext("2d");
var x = 0, y = 0, size = 900;
function load() {
    if ( x < size && y < size ) {
        var red = Math.floor( Math.random() * 255 );
        var green = Math.floor( Math.random() * 255 );
        var blue = Math.floor( Math.random() * 255 );
        scene.fillStyle = "rgb("+red+","+green+","+blue+")";
        scene.fillRect(x, y, 1, 1);
        x ++;
    } else if ( x >= size && y < size ) {
        x = 0;
        y ++;
    } else if ( x >= size && y >= size ) {

    }
}
//var inter = setInterval(load, 1);
function i() {
    for ( var i = 0; i < size * size; i ++ ) {
        load();
    }
}
i();