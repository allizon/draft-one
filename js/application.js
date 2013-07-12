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

$( function ( ) {
	var text_clip = zclip( '#export-text' );
	var html_clip = zclip( '#export-html' );

	var EditorView = Backbone.View.extend( {
		el: '#app',
		textarea: $( '#the-text' ),
		time_elapsed_label: $( '#time-elapsed' ),
		word_count_label: $( '#current-words' ),
		goal_complete: $( '#goal-complete' ),
		continue: $( 'button#continue' ),
		start_new_session: $( 'button#start-new-session' ),
		is_done: false,
		is_paused: false,
		interval_id: null,
		time_not_typing: 0,
		time_elapsed: 0,
		interval_id: null,
		paused: false,
		is_done: false,

		events: {
			'click button#start'      : 'start',
			'click button#pause'      : 'pause',
			'click button#start-over' : 'start_over',
			'keydown #the-text'       : 'keydown',
			'editor:warn'             : 'warn',
			'editor:annoy'            : 'annoy',
			'editor:done'             : 'done',
			'editor:autosave'         : 'autoSave',
			'editor:text-copied'      : 'copy_success'
		},

		render: function ( ) {
			this.time_elapsed_label.text( this.timeElapsedString( ) );
			this.word_count_label.text( this.wordCount( ) );
			return this;
		},
		reset: function ( ) {
			this.textarea.removeClass( 'warn annoy-1 annoy-2 annoy-3 done paused' ).prop( 'disabled', false );
		},
		warn: function ( ) {
			this.reset( );
			this.textarea.addClass( 'warn' );
		},
		annoy: function ( e, level ) {
			this.reset( );
			this.textarea.addClass( 'annoy-' + level );
		},
		start: function ( ) {
			this.is_paused = false;
			clearInterval( this.interval_id ); // just in case
			this.interval_id = setInterval( updater, 1000 );
			this.reset( );
		},
		pause: function ( ) {
			this.is_paused = true;
			clearInterval( this.interval_id );
			this.textarea.addClass( 'paused' ).prop( 'disabled', true );
			this.autoSave( );
		},
		start_over: function ( ) {
			this.reset( );
			this.is_paused = false;
			this.is_done = false;
			this.pause( );
			this.time_elapsed = 0;
			this.textarea.val( '' );
			this.render( );
		},
		done: function ( ) {
			this.reset( );
			this.pause( );
			this.textarea.addClass( 'done' );
			this.is_done = true;
			$( '#success-modal' ).modal( 'show' );
		},
		copy_success: function ( ) {
			$( '#text-copied-modal' ).modal( 'show' );
		},
		keydown: function ( e ) {
			var which = e.keyCode ? e.keyCode : e.which;

			switch ( which ) {
				case 8:
					if ( $( '#disable-backspace' ).prop( 'checked' ) ) {
						return false;
					}
					break;
				case 27:
					this.pause( );
					break;
			}

			if ( !this.is_paused && !this.is_done ) {
				this.reset( );
				this.time_not_typing = 0;
			}
		},
		autoSave: function ( ) {
			localStorage["text"] = this.textarea.val( );
		},
		wordCount: function ( ) {
			var the_string = this.textarea.val( ).replace( '  ', ' ' );
			return the_string.split( ' ' ).length;
		},
		timeElapsedString: function ( ) {
			var minutes = ( this.time_elapsed % 60 );
			if ( minutes < 10 ) {
				minutes = '0' + minutes;
			}

			return Math.floor( this.time_elapsed / 60 ) + ':' + minutes;
		}
	} );


	var editor_view = new EditorView( );

	function updater ( ) {
		editor_view.time_not_typing++;
		editor_view.time_elapsed++;

		if ( !editor_view.is_done ) {
			if ( editor_view.time_not_typing >= 40 ) {
				$( '#textbox' ).trigger( 'editor:annoy', 3 );
			}
			else if ( editor_view.time_not_typing >= 30 ) {
				$( '#textbox' ).trigger( 'editor:annoy', 2 );
			}
			else if ( editor_view.time_not_typing >= 20 ) {
				$( '#textbox' ).trigger( 'editor:annoy', 1 );
			}
			else if ( editor_view.time_not_typing >= 10 ) {
				$( '#textbox' ).trigger( 'editor:warn' );
			}

			if ( true == $( '#which-number-of-words' ).prop( 'checked' ) ) {
				if ( editor_view.wordCount( ) >= $( '#number-of-words' ).val( ) ) {
					$( '#textbox' ).trigger( 'editor:done' );
				}
			} else {
				if ( editor_view.time_elapsed >= $( '#number-of-minutes' ).val( ) * 60 ) {
					$( '#textbox' ).trigger( 'editor:done' );
				}
			}
		}

		// autosave every 10 seconds
		if ( 0 == editor_view.time_elapsed % 10 ) {
			$( '#textbox' ).trigger( 'editor:autosave' );
		}

		editor_view.render( );
	}

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

	$( '#save-settings' ).click( function ( ) {
		$( 'section#settings' ).hide( );
		editor_view.start( );

		if ( Modernizr.localstorage ) {
			localStorage["min_words"] = $( '#number-of-words' ).val( );
			localStorage["min_minutes"] = $( '#number-of-minutes' ).val( );
			localStorage["disable_backspace"] = $( '#disable-backspace' ).prop( 'checked' ) ? 1 : 0;
			editor_view.autoSave( );
		}

		$( '#settings-modal' ).modal( 'hide' );
	} );

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
