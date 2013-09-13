  var ToolsView = Backbone.View.extend( {
    el                  : '#tools',

    editor              : null,
    settings_button     : '#save-settings',
    settings_section    : 'section#settings',
    settings_modal      : '#settings-modal',

    events              : {
      'click #save-settings' : 'save_settings'
    },

    initialize: function ( editor ) {
      this.editor = editor;
    },
    save_settings: function ( ) {
      this.settings_section.hide( );
      // this.editor.start( );

      if ( Modernizr.localstorage ) {
        localStorage["min_words"]         = $( '#number-of-words' ).val( );
        localStorage["min_minutes"]       = $( '#number-of-minutes' ).val( );
        localStorage["disable_backspace"] = $( '#disable-backspace' ).prop( 'checked' ) ? 1 : 0;
        editor_view.autoSave( );
      }

      this.settings_modal.modal( 'hide' );
    }
  } );
