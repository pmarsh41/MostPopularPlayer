< script src = "http://pmarsh41.github.io/jwplayer/jwplayer.js" > < /script> < script > jwplayer.key = "iZaBV7cW7mBl61yIWCTK3IUeA1jqZjIUo28r0w=="; < /script >

;
(function(exports) {
    ///Bookmark, Line 74///
    "use strict";
    //Constructor Code

    var playerInstance = jwplayer('container');
    //jwplayer('container').pause(); // BAD! :(
    playerInstance.pause(); // Good :)
}),
var playerInstance = jwplayer('container');

playerInstance.on('complete', function(e) {
    setElement('complete', "Thanks for Watching");

});
