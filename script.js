var currentVideoTexture = 0;
var currentVideo = 0;
var videoTextures = [];
var videos = [];
var skies;

var onVideoTextureEnd = function() {

	// THIS FUNCTION STARTS NEXT FLAT VIDEO

	// HIDE LAST 360 VIDEo
	skies[ currentVideo ].setAttribute( 'visible', false );

	// INCREMENT UP THE VIDEO COUNTER
	currentVideo ++;

	// START THE NEXT VIDEO
	if( currentVideo >= videos.length ) currentVideo = 0;
	videos[ currentVideo ].style.display = 'block';	
	videos[ currentVideo ].play();

}


var onVideoEnd = function() {

	// THIS FUNCTION STARTS NEXT 360 VIDEO

	// HIDE LAST VIDEO
	videos[ currentVideo ].style.display = 'none';

	// INCREMEMNT UP THE VIDEO TEXTURE
	currentVideoTexture ++;

	// START NEXT 360 VIDEO
	if( currentVideoTexture >= skies.length ) currentVideoTexture = 0;
	skies[ currentVideoTexture ].setAttribute( 'visible', true );	
	videoTextures[ currentVideoTexture ].play();

}

window.onload = function() {

	skies = document.getElementsByClassName( 'video' );
	videos = document.getElementsByClassName( 'flat-video' );

	for( var i = 0; i < skies.length; i++ ) {

		skies[ i ].setAttribute( 'visible', false );

	}

	for( var i = 0; i < videos.length; i++ ) {

		var video = videos[ i ];
		video.style.display = 'none';
		video.addEventListener( 'ended', onVideoEnd, false );

	}

	skies[ 0 ].setAttribute( 'visible', true );	
	videoTextures[ 0 ].play();	
}
