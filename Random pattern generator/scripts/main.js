var canvas = document.getElementById("canvas");
scene = canvas.getContext("2d");

var x = 0, y = 0, size = 900;
var pattern_size = 10; //     <----------------------- you can alter it between 0 and 100 (smaller number = bigger patterns)
var top_row = [];
var current_row = [];

var main = {

    generate: function() {

        if ( x < size && y < size ) { 
            scene.fillRect(x, y, 1, 1);
            x ++;
        } else if ( x >= size && y < size ) {
            x = 0;
            y ++;
            top_row = current_row;
            current_row = [];
        }

    },

    roll_color: function() {

        var red = Math.floor( Math.random() * 255 );
        var green = Math.floor( Math.random() * 255 );
        var blue = Math.floor( Math.random() * 255 );

        var color = "rgb("+red+","+green+","+blue+")";
        scene.fillStyle = color;
        current_row.push(color);

    },

    roll_direction: function() {

        function vertical_shift() {
            scene.fillStyle = top_row[x];
            current_row.push(top_row[x]);
        }
        function horizontal_shift() {
            scene.fillStyle = current_row[x-1];
            current_row.push(current_row[x-1]);
        }

        var roll = Math.floor( Math.random() * 2 + 1 );

        if ( roll == 1 ) {

            vertical_shift();

        } else {

            horizontal_shift();

        }
    },

    roll_for_change: function() {

        var roll = Math.random() * 100;

        if ( roll < pattern_size || top_row.length == 0 ) {

            this.roll_color();

        } else {

            this.roll_direction();

        }

    },

    iterate: function() {
        for ( var i = 0; i < size * size; i ++ ) {
            this.roll_for_change();
            this.generate();
        }
    }
}