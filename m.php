<!DOCTYPE html>
<html>
<head>
    <title>Markdown Converter</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
        google.load( "jquery", "1.4" );
    </script>
    <script type="text/javascript" src="js/showdown.js"></script>
    <script type="text/javascript" src="js/behaviors.js"></script>
    <script type="text/javascript" src="js/convert.js"></script>

</head>

<body class="convert">

<section class="container clear">
    <section id="close-template" class="close"><a href="javascript:;">Close</a></section>
    <section id="textbox">
        <p>
            <a href="javascript:;" id="export-as-html">Export as HTML</a>
            |
            <a href="javascript:;" id="export-as-text">Export as Text</a>
        </p>
        <textarea id="the-text"></textarea>
    </section>

    <section id="html" style="display:none;"></section>
    <section id="close-template" class="close" style="display:none;"><a href="javascript:;">Close</a></section>
</section>

</body>
</html>
