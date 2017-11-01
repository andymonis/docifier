/*
 * docifier
 * auto-documentation library
 * ( this will be pulled out of the iotaa project and into a standalone project in time )
 * by andy monis
 * 2017
 */
( function(){

    window.docifier = docifier = {};

    /*
     * Setup internal functions
     */
    function platform( regex ){
        return regex.test( navigator.userAgent.toLowerCase() );
    };


    function width( _class ){
        document.getElementById( "docifier-controlled-width" ).setAttribute( "class", _class );
        document.getElementById( "docifier-controls-width" ).innerHTML = "width " + _class;
    }

    function docEl( el, parent ){
        parent = parent || el;

        let _parent = document.querySelector( parent );
        let _el = document.querySelector( el );
        let htmlSrc = _el.outerHTML;

        let codeEl = document.createElement( "p" );
        codeEl.setAttribute( 'class', 'is-code' );
        var codeSrc = document.createTextNode( htmlSrc );
        codeEl.appendChild( codeSrc );

        _parent.append( codeEl );
    }

    function init(){
        /*
         * Browser Sniffing
         */
        docifier.isDesktop = platform( /Windows/i ) || platform( /Macintosh/i ) || ( platform( /Linux/i ) && !platform( /Android/i ) );

        /*
         * Setup the docifier controls
         */
        let el = document.getElementById( 'docifier-controls' );
        el.innerHTML = `
            <div>
                <button id="is-320" class="btn">320px</button>
                <button id="is-480" class="btn">480px</button>
                <button id="is-640" class="btn">640px</button>
                <button id="is-800" class="btn">800px</button>
                <button id="is-960" class="btn">960px</button>
                <button id="is-full" class="btn">full</button>
            </div>
            <div>
                <p id="docifier-controls-width"></p>
            </div>
        `;

        /*
         * Attach docifier controls to functionality
         */
        let buttons = document.querySelectorAll( "#docifier-controls button" );
        for( let i=0; i<buttons.length; i++ ){
            buttons[ i ].addEventListener( 'click', ( evt ) => {
                width( evt.target.id );
            } );
        }

        // If descktop show scaled, if phone show full screen
        if( docifier.isDesktop ){
            width( "is-480" );
        } else {
            width( "is-full" );
        }

        // Call the after process handler
        docifier.after();
    }

    // declare api
    docifier._innerWidth = window.innerWidth;
    docifier.after = function(){};
    docifier.docEl = docEl.bind( this );

    window.addEventListener( 'load', init, true );
    window.addEventListener('resize', ( evt ) => {
        // Only reload if the width has changed. 
        // The height can change on mobile devices with virtual headers and keyboards 
        if( docifier._innerWidth !== evt.target.innerWidth ){
            // refresh the page to re layout the page for device ( i.e. emulating between desktop / mobile )
            window.location.href = window.location.href;
        }
    }, true);
})()
