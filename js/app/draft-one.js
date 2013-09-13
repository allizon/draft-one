var converter = new Showdown.converter( );

function zclip ( element ) {
	var clip = new ZeroClipboard( $( element ) );
	clip.on( 'mousedown', function ( client, args ) {
		var raw_text = $( '#the-text ').val( );
		var html_text = converter.makeHtml( raw_text );

		if ( $( this ).attr( 'id' ) == 'export-text' ) {
			client.setText( raw_text );
		} else {
			client.setText( html_text );
		}

		$( '#textbox' ).trigger( 'editor:text-copied' );
	} );
	clip.on( 'noflash', function ( client, args ) {
		$( '#clipboard-buttons' ).hide( );
	} );
	clip.on( 'wrongflash', function ( client, args ) {
		$( '#clipboard-buttons' ).hide( );
	} );
	return clip;
}

var app = {

};

$( function ( ) {
	var text_clip = zclip( '#export-text' );
	var html_clip = zclip( '#export-html' );

	app.header_view = new HeaderView( );
	app.tools_view  = new ToolsView( );
	app.stats_view  = new StatsView( );
	app.editor_view = new EditorView( );

	// ALl of these functiosn should get moved into the EditorView
	$( '#open-about' ).click( function ( ) {
		$( '#about' ).animate( { 'height': '450px' }, 500 );
	} );

	$( '#close-about' ).click( function ( ) {
		$( '#about' ).animate( { 'height': '0px' }, 350 );
		localStorage["hide_about"] = "true";
	} );

	$( document ).on( 'click', 'section#close button.close', function ( ) {
		$( '#html, #manuscript' ).hide( );
	} );

	$( '#continue' ).click( function ( ) {
		$( '#success-modal' ).modal( 'hide' );
		editor_view.start( );
	} );

	$( 'header' ).click( function ( ) {
		// $( '#about' ).hide( );
		$( 'header' ).animate( { 'height': '0px' }, 500, function ( ) {
			$( this ).hide( );
			$( '#header-smaller' ).animate( { 'height': '48px' }, 350 );
		} );

		localStorage["small_header"] = 'true';
	} );

	$( '#header-smaller' ).click( function ( ) {
		$( this ).animate( { 'height': '0px' }, 350, function ( ) {
			$( 'header' ).show( ).animate( { 'height': '157px' } );
		} );

		localStorage["small_header"] = 'false';
	} );

	// $( '#save-settings' ).click( function ( ) {
	// 	$( 'section#settings' ).hide( );
	// 	editor_view.start( );

	// 	if ( Modernizr.localstorage ) {
	// 		localStorage["min_words"] = $( '#number-of-words' ).val( );
	// 		localStorage["min_minutes"] = $( '#number-of-minutes' ).val( );
	// 		localStorage["disable_backspace"] = $( '#disable-backspace' ).prop( 'checked' ) ? 1 : 0;
	// 		editor_view.autoSave( );
	// 	}

	// 	$( '#settings-modal' ).modal( 'hide' );
	// } );

	if ( Modernizr.localstorage ) {
		$( '#the-text' ).val( localStorage["text"] );
		$( '#number-of-words' ).val( localStorage["min_words"] || 500 );
		$( '#number-of-minutes' ).val( localStorage["min_minutes"] || 10 );

		var prop_checked = ( 1 == localStorage["disable_backspace"] ) ? true : false;
		$( '#disable-backspace' ).prop( 'checked', prop_checked );

		if ( localStorage["small_header"] == 'true' ) {
			$( 'header' ).hide( );
			$( '#header-smaller' ).css( { 'height': '48px' } ).show( );
		}

		if ( localStorage["hide_about"] == 'true' ) {
			$( '#about' ).hide( );
		}
	} else {
		$( '#number-of-words' ).val( 500 );
		$( '#number-of-minutes' ).val( 10 );
		$( '#disable-backspace' ).prop( 'checked', false );
	}
} );
