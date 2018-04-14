canvas = document.getElementById("canvas");
scene = canvas.getContext("2d");
var x = 0, y = 0, size = 1000;
hue = Math.floor( Math.random() * 360 ), saturation = Math.floor( Math.random() * 100 ) + "%", lightness = Math.floor( Math.random() * 100 ) + "%";
scene.fillStyle = "hsl("+hue+","+saturation+","+lightness+")";
var max = 1;
function load() {
    var n = Math.floor( Math.random() * max + 1 );//////////////////////////////////////////////1
    if ( n > max - 1 ) {//////////////////////////////////////////////////////////////////////////////1
        hue = Math.floor( Math.random() * 360 );
        saturation = Math.floor( Math.random() * 100 ) + "%";
        lightness = Math.floor( Math.random() * 100 ) + "%";
        scene.fillStyle = "hsl("+hue+","+saturation+","+lightness+")";
    } else if ( n <= max - 1 && n > max * 0.2 ) { /////////////////////////////////////////////////////////2
        lightness = Math.floor( Math.random() * 100 ) + "%";
        scene.fillStyle = "hsl("+hue+","+saturation+","+lightness+")";
    }
    if ( x < size && y < size ) {
        scene.fillRect(x, y, 1, 1);
        x ++;
    } else if ( x >= size && y < size ) {
        x = 0;
        y ++;
    } else if ( x >= size && y >= size ) {
        console.log("End");
    }
}
function create() {
    for ( var i = 0; i < size * size; i ++ ) {
        load();
    }
}
create();
//red = Math.floor( Math.random() * 255 );
//green = Math.floor( Math.random() * 255 );
//blue = Math.floor( Math.random() * 255 );