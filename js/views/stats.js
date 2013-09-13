var StatsView = Backbone.View.extend( {
  el                  : '.stats',
  events              : {

  },

  initialize: function ( ) {

  },
  set_word_count: function ( wc ) {
    this.$( '.current-words' ).html( wc );
  },
  set_time_elapsed: function ( t ) {
    this.$( '.time-elapsed' ).html( t );
  }
} );