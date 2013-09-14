var EditorView = Backbone.View.extend( {
  el                  : '.editor',
  text_editor         : null,
  is_done             : false,
  is_paused           : false,
  interval_id         : null,
  time_not_typing     : 0,
  time_elapsed        : 0,
  interval_id         : null,

  events: {
    // 'keydown #the-text'       : 'keydown',
    'editor:warn'             : 'warn',
    'editor:annoy'            : 'annoy',
    'editor:done'             : 'done',
    'editor:autosave'         : 'autoSave',
    'editor:text-copied'      : 'copy_success'
  },

  initialize: function ( ) {
    // Still not sure why this wasn't generated at initialization time --
    // was it not yet created? This should already be inside a doc.ready function...
    this.text_editor = this.$( '#the-text' );

    app.stats_view.set_word_count( 1000 );
  },
  // render: function ( ) {
    // this.time_elapsed_label.text( this.timeElapsedString( ) );
    // this.word_count_label.text( this.wordCount( ) );
    // return this;
  // },
  reset: function ( ) {
    this.text_editor.removeClass( 'warn annoy-1 annoy-2 annoy-3 done paused' ).prop( 'readonly', false );
  },
  warn: function ( ) {
    this.reset( );
    this.text_editor.addClass( 'warn' );
  },
  annoy: function ( e, level ) {
    this.reset( );
    this.text_editor.addClass( 'annoy-' + level );
  },
  start: function ( ) {
    this.is_paused = false;
    clearInterval( this.interval_id ); // just in case
    this.interval_id = window.setInterval( this.updater( this ), 1000 );
    console.log( 'inside start' );
    this.reset( );
  },
  pause: function ( ) {
    this.is_paused = true;
    clearInterval( this.interval_id );
    this.text_editor.addClass( 'paused' ).prop( 'readonly', true );
    this.autoSave( );
  },
  start_over: function ( ) {
    this.reset( );
    this.is_paused = false;
    this.is_done = false;
    this.pause( );
    this.time_elapsed = 0;
    this.text_editor.val( '' );
    this.render( );
  },
  done: function ( ) {
    this.reset( );
    this.pause( );
    this.text_editor.addClass( 'done' );
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
        // this.pause( );
        break;
    }

    // if ( !this.is_paused && !this.is_done ) {
    //   this.reset( );
    //   this.time_not_typing = 0;
    // }
  },
  autoSave: function ( ) {
    localStorage["text"] = this.text_editor.val( );
  },
  wordCount: function ( ) {
    var the_string = this.text_editor.val( ).replace( '  ', ' ' );
    return the_string.split( ' ' ).length;
  },
  timeElapsedString: function ( ) {
    var minutes = ( this.time_elapsed % 60 );
    if ( minutes < 10 ) {
      minutes = '0' + minutes;
    }

    return Math.floor( this.time_elapsed / 60 ) + ':' + minutes;
  },
  updater: function ( editor ) {
    editor.time_not_typing++;
    editor.time_elapsed++;

    if ( !editor.is_done ) {
      if ( editor.time_not_typing >= 40 ) {
        editor.texbox.trigger( 'editor:annoy', 3 );
      }
      else if ( editor.time_not_typing >= 30 ) {
        editor.textbox.trigger( 'editor:annoy', 2 );
      }
      else if ( editor.time_not_typing >= 20 ) {
        editor.textbox.trigger( 'editor:annoy', 1 );
      }
      else if ( editor.time_not_typing >= 10 ) {
        editor.textbox.trigger( 'editor:warn' );
      }

      // if ( true == $( '#which-number-of-words' ).prop( 'checked' ) ) {
      //   if ( editor.wordCount( ) >= $( '#number-of-words' ).val( ) ) {
      //     editor.textbox.trigger( 'editor:done' );
      //   }
      // } else {
      //   if ( this.time_elapsed >= $( '#number-of-minutes' ).val( ) * 60 ) {
      //     editor.textbox.trigger( 'editor:done' );
      //   }
      // }
    }

    // autosave every 10 seconds
    if ( 0 == editor.time_elapsed % 10 ) {
      editor.textbox.trigger( 'editor:autosave' );
    }
  }
} );
