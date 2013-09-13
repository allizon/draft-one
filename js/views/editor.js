var EditorView = Backbone.View.extend( {
  el                  : '#app',
  textarea            : $( '#the-text' ),
  time_elapsed_label  : $( '#time-elapsed' ),
  word_count_label    : $( '#current-words' ),
  goal_complete       : $( '#goal-complete' ),
  continue            : $( 'button#continue' ),
  start_new_session   : $( 'button#start-new-session' ),
  is_done             : false,
  is_paused           : false,
  interval_id         : null,
  time_not_typing     : 0,
  time_elapsed        : 0,
  interval_id         : null,
  paused              : false,
  is_done             : false,

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
    console.log('rendering')
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
    this.interval_id = setInterval( this.updater, 1000 );
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
  },
  updater: function ( ) {
    this.time_not_typing++;
    this.time_elapsed++;

    if ( !this.is_done ) {
      if ( this.time_not_typing >= 40 ) {
        $( '#textbox' ).trigger( 'editor:annoy', 3 );
      }
      else if ( this.time_not_typing >= 30 ) {
        $( '#textbox' ).trigger( 'editor:annoy', 2 );
      }
      else if ( this.time_not_typing >= 20 ) {
        $( '#textbox' ).trigger( 'editor:annoy', 1 );
      }
      else if ( this.time_not_typing >= 10 ) {
        $( '#textbox' ).trigger( 'editor:warn' );
      }

      if ( true == $( '#which-number-of-words' ).prop( 'checked' ) ) {
        if ( this.wordCount( ) >= $( '#number-of-words' ).val( ) ) {
          $( '#textbox' ).trigger( 'editor:done' );
        }
      } else {
        if ( this.time_elapsed >= $( '#number-of-minutes' ).val( ) * 60 ) {
          $( '#textbox' ).trigger( 'editor:done' );
        }
      }
    }

    // autosave every 10 seconds
    if ( 0 == this.time_elapsed % 10 ) {
      $( '#textbox' ).trigger( 'editor:autosave' );
    }

    this.render( );
  }
} );
