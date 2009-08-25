<!DOCTYPE html>
<html>
<head>
	<title>Onward!</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />

	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script type="text/javascript">
		google.load( "jquery", "1.3.2" );
	</script>
	<script type="text/javascript" src="js/showdown.js"></script>

	<script type="text/javascript">
		var time_not_typing = 0;
		var time_elapsed = 0;
		var interval_id;
		var paused = false;
		var is_done = false;

		function reset ( ) {
			$( '#the-text' ).removeClass( 'warn' );
			$( '#the-text' ).removeClass( 'annoy-1' );
			$( '#the-text' ).removeClass( 'annoy-2' );
			$( '#the-text' ).removeClass( 'annoy-3' );
			$( '#the-text' ).removeClass( 'done' );
			$( '#the-text' ).removeClass( 'paused' );
		}

		function warn ( ) {
			reset( );
			$( '#the-text' ).addClass( 'warn' );
		}

		function annoy ( level ) {
			reset( );
			$( '#the-text' ).addClass( 'annoy-' + level );
		}

		function done ( ) {
			reset( );
			$( '#the-text' ).addClass( 'done' );
			is_done = true;
		}

		function pause ( ) { 
			if ( paused )
			{
				reset( );
				paused = false;
				interval_id = setInterval( updater, 1000 );
				$( '#the-text' ).removeClass( 'paused' ).attr( 'disabled', false );
			}
			else
			{
				paused = true;
				clearInterval( interval_id );
				$( '#the-text' ).addClass( 'paused' ).attr( 'disabled', true );
			}
		}

		function wordCount ( ) {
			var the_string = $( '#the-text' ).val( ).replace( '  ', ' ' );
			var word_count = the_string.split( ' ' ).length;
			$( '#current-words' ).text( word_count );
			return word_count;
		}

		function timeElapsed ( ) {
			++time_elapsed;
			minutes = ( time_elapsed % 60 );
			if ( minutes < 10 )
				minutes = '0' + minutes;

			time_elapsed_string = Math.floor( time_elapsed / 60 ) + ':' + minutes;
	  		$( '#time-elapsed' ).text( time_elapsed_string );
			return time_elapsed;
		}

		function updater ( ) {
			++time_not_typing;
			if ( time_not_typing >= 30)
				annoy( 3 );
			else if ( time_not_typing >= 20 )
				annoy( 2 );
			else if ( time_not_typing >= 15 )
				annoy( 1 );
			else if ( time_not_typing >= 10 )
				warn( );

			word_count = wordCount( );
			time_elapsed = timeElapsed( );

			if ( true == $( 'which-number-of-words' ).attr( 'checked' ) )
			{
				if ( word_count >= $( '#number-of-words' ).val( ) )
					done( );
			}
			else
			{
				if ( time_elapsed >= $( '#number-of-minutes' ).val( ) * 60 )
					done( );
			}
		}

		$( function ( ) {
			$( '#start' ).click( function ( ) {
				interval_id = setInterval( updater, 1000 );
				$( '#the-text' ).removeClass( 'paused' ).attr( 'disabled', false );
			} );

			$( '#pause' ).click( function ( ) {
				pause( );
			} );

			$( '#stop' ).click( function ( ) {
				reset( );
				clearInterval( interval_id );
			} );

			$( '#the-text' ).keydown( function ( e ) {
				var which = e.keyCode ? e.keyCode : e.which;

				switch ( which )
				{
					case 8:
						return false;
					case 27:
						pause( );
						break;
				}
					
				if ( !paused && !is_done )
				{
					reset( );
					time_not_typing = 0;
				}
			} );

			$( '#export-as-html' ).click( function ( ) {
				var converter = new Showdown.converter( );
				$( '#html' ).html( converter.makeHtml( $( '#the-text' ).val( ) ) );
				$close = $( '#close-template' ).clone( ).show( ).attr( 'id', 'close' );
				$( '#html' ).prepend( $close );
				$( '#html' ).show( );
			} );

			$( '.close a' ).live( 'click', function ( ) { 
				$( '#html, #manuscript' ).hide( );	
			} );
		} );
	</script>
</head>

<body>

<div id="debug"></div>

<div class="container">
	<h1>Onward!!</h1>
	<div class="leftcol">
		<input type="radio" name="which" id="which-number-of-words" checked="checked" />
		<span class="label">Number of words:</span> <input type="text" id="number-of-words" class="text" value="500" />
		<br />
		<input type="radio" name="which" id="which-number-of-minutes" />
		<span class="label">or Number of minutes you want to write:</span> <input type="text" id="number-of-minutes" class="text" value="10" />
		<br />
		<input type="button" id="start" value="Go!" />
		<input type="button" id="pause" value="Pause" />
		<input type="button" id="stop" value="Stop!" />
	</div>
	<div class="rightcol">
		<span class="label">Current word count: <span id="current-words">0</span></span>
		<br />
		<span class="label">Time elapsed: <span id="time-elapsed">0:00</span></span>
	</div>

	<textarea id="the-text" class="paused" disabled="true"></textarea>

	<div class="not-full-screen">
		<p>
			<a href="javascript:;" id="export-as-html">Export as HTML</a>
		</p>
	</div>
</div>

	<div id="html" style="display:none;"></div>
	<div id="close-template" class="close" style="display:none;"><a href="javascript:;">Close</a></div>
</div>

</body>
</html>