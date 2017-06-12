import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {
	searchBoxOpen = false;
  
  constructor() {}

  
  
}


/*
<script>
			(function() {
				var wtSearch = document.getElementById( 'wt-search' ),
					//input = wtSearch.querySelector( 'input.wt-search-input' ),
					input = wtSearch.querySelector( 'a.foo' ),
					ctrlClose = wtSearch.querySelector( 'span.wt-search-close' ),
					isOpen = isAnimating = false,
					// show/hide search area
					toggleSearch = function(evt) {
						// return if open and the input gets focused
						if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

						var offsets = wtSearch.getBoundingClientRect();
						if( isOpen ) {
							classie.remove( wtSearch, 'open' );

							// trick to hide input text once the search overlay closes 
							// todo: hardcoded times, should be done after transition ends
							if( input.value !== '' ) {
								setTimeout(function() {
									classie.add( wtSearch, 'hideInput' );
									setTimeout(function() {
										classie.remove( wtSearch, 'hideInput' );
										input.value = '';
									}, 300 );
								}, 500);
							}
							
							input.blur();
						}
						else {
							classie.add( wtSearch, 'open' );
						}
						isOpen = !isOpen;
					};

				// events
				input.addEventListener( 'focus', toggleSearch );
				ctrlClose.addEventListener( 'click', toggleSearch );
				// esc key closes search overlay
				// keyboard navigation events
				document.addEventListener( 'keydown', function( ev ) {
					var keyCode = ev.keyCode || ev.which;
					if( keyCode === 27 && isOpen ) {
						toggleSearch(ev);
					}
				} );


				/***** for demo purposes only: don't allow to submit the form *****/
				/*wtSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
			})();
		</script>
    */