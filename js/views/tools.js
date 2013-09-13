var ToolsView = Backbone.View.extend( {
  el             : '.toolbar',
  editor         : null,
  btn_start      : $( 'a.start' ),
  btn_pause      : $( 'a.pause' ),
  btn_stop       : $( 'a.stop' ),
  btn_settings   : $( 'a.settings' ),
  btn_export     : $( 'a.export' ),

  events: {
    'click a.start'    : 'start_editor',
    'click a.settings' : 'show_settings',
  },

  initialize: function ( ) {

  },
  start_editor: function ( ) {
    app.editor_view.start( );
  },
  show_settings: function ( ) {
    new SettingsView( );
  },
} );
