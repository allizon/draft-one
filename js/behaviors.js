// behaviors.js
$( function ( ) { 

    // Generic behavior to add hover states to any element
    $( '.hoverable' ).mouseover( function ( ) { 
        $( this ).addClass( 'hover' );
    } ).mouseout( function ( ) { 
        $( this ).removeClass( 'hover' );
    } );

} )
