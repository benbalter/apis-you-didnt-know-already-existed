jQuery( document ).ready( function($) { 
	$.each( $('.step'), function( k, v ) {
		document.getElementById( $(v).attr('id') ).addEventListener( "impress:stepenter", function(){
			
			notes = $('.active').find('.notes');

			if ( notes ) {
				console.log( '---' );
			 	$.each( notes, function( k, note) {  
					console.log( $(note).html() );
				});
			}
			
		})
	})
});
