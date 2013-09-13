var HeaderView = Backbone.View.extend( {
  el                  : '#header',

  header              : $( 'header' ),
  small_header        : $( '#header-smaller' ),

  events              : {
    'click header'          : 'hide_header',
    'click #header-smaller' : 'hide_small_header'
  },

  hide_header: function ( ) {
    parent = this;
    this.header.animate( { 'height': '0px' }, 500, function ( ) {
      $( this ).hide( );
      parent.small_header.animate( { 'height': '48px' }, 350 );
    } );

    localStorage["small_header"] = 'true';
  },
  hide_small_header: function ( ) {
    parent = this;
    this.small_header.animate( { 'height': '0px' }, 350, function ( ) {
      parent.header.show( ).animate( { 'height': '157px' } );
    } );

    localStorage["small_header"] = 'false';
  }
} );