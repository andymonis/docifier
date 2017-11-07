# docifier
Simple HTML &amp; JS documentation library for creating live documentation. Useful for styling client projects.

## Getting Started

Example usage: -
* Create a html page
* Create and Style the html components
* Docifier the elements to produce onscreen documentation of the code used to create the look.

The benefit to this process is that it shows exactly how each element was created, without having documentation drift out of date with the code used.

Below is an example of some simple styling used in a project of mine.

```html
    <div id="text">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
            This is a regular paragraph with formating for the iotaa project,
            this should wrap around with some sensible line spacing.
        </p>
    </div>
```

docifier.after() is called when the page is fully loaded, then tell docifier which element to docify.

```js
<script>
    docifier.after = () => {
        docifier.docEl( '#text > *:nth-child(1)', '#text' );
        docifier.docEl( '#text > *:nth-child(2)', '#text' );
        docifier.docEl( '#text > *:nth-child(3)', '#text' );
        docifier.docEl( '#text > *:nth-child(4)', '#text' );
    };
</script>
```

Docifier then simply at the HTML used in the element and outputs this information inline on the page.

## Scaling

Docifier provides a few tools for scaling the display. Its a rudimentary system which allows the developer to see what the resultant html looks like on different sized screens.

The latest Chrome does a very good job of this with its responses dev tools, but as developers we ( sometimes ) have to work with browsers that don't support the developer as much.

I find a mix of the Docifier scaling and Chrome dev tools does a pretty good job.

## Why?

Personally I find a stencil of all controls used in a project particularly useful for showing clients. It allows a look to be defined and agreed.

Then developers can work from this with the HTML examples specified, cutting ambiguity, whilst also allowing testing to be performed. 

## Scaffold Example

A basic scaffold html below, can be used to start a project.

```html
<!doctype html>
<html>
    <head>
        <title>Stencil</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="HandheldFriendly" content="true" >
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link rel="stylesheet" href="<link to>/docifier.css">
        <script src="<link to>/docifier.js"></script>

        <script>
            docifier.after = () => {

            };
        </script>
    </head>
    <body>
        <div id="docifier-controls"><!-- Required for docifier controls to be added --></div>
        <h1 class="docifier-h1">DOCIFIER Test</h1>
        <p class="docifier-p">
            Some explanation
        </p>

        <div id="docifier-controlled-width">

        </div>
    </body>
</html>

```
