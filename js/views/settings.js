var SettingsView = Backbone.View.extend( {
  el                      : '#settings-modal',
  input_number_of_words   : $( '#number-of-words' ),
  input_number_of_minutes : $( '#number-of-minutes' ),
  input_disable_backspace : $( '#disable-backspace' ),

  events : {
    'click button#save-settings' : 'save_settings',
  },

  initialize: function ( ) {
    this.render( );
    this.$el.modal( 'show' );
  },
  save_settings: function ( ) {
    if ( Modernizr.localstorage ) {
      localStorage["min_words"]         = this.input_number_of_words.val( );
      localStorage["min_minutes"]       = this.input_number_of_minutes.val( );
      localStorage["disable_backspace"] = this.input_disable_backspace.prop( 'checked' ) ? 1 : 0;
      app.editor_view.autoSave( );
    }

    this.$el.modal( 'hide' );
    delete this;
  }
} );