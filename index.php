<!DOCTYPE html>
<html>
<head>
    <title>Onward!</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
        google.load( "jquery", "1.4" );
    </script>
    <script type="text/javascript" src="js/showdown.js"></script>
    <script type="text/javascript" src="js/behaviors.js"></script>
    <script type="text/javascript" src="js/onward.js"></script>

</head>

<body>

<div id="debug"></div>

<header>
    <h1>Onward!</h1>
    <section id="action-buttons">
        <a id="start" class="rounded-button">Go!</a>
        <a id="pause" class="rounded-button">Pause</a>
        <a id="stop" class="rounded-button active">Stop!</a>
    </section>
    <section class="clear"></section>
</header>

<section class="container clear">
    <section id="stats">
        <span class="label">Current word count: <span id="current-words">0</span></span>
        <span class="label">Time elapsed: <span id="time-elapsed">0:00</span></span>
    </section>

	<section id="settings">
        <h3 id="settings" class="hoverable"><a>Settings</a></h3>
        <p>
            <input type="radio" name="which" id="which-number-of-words" checked="checked" />
            <span class="label">Number of words:</span> <input type="text" id="number-of-words" class="text" value="500" />
            <br />
            <input type="radio" name="which" id="which-number-of-minutes" />
            <span class="label">or Number of minutes you want to write:</span> <input type="text" id="number-of-minutes" class="text" value="10" />
        </p>
	</section>

	<section id="textbox">
		<textarea id="the-text" class="paused" disabled="true"></textarea>
        <p>
            <a href="javascript:;" id="export-as-html">Export as HTML</a>
            |
            <a href="javascript:;" id="export-as-text">Export as Text</a>
        </p>
	</section>


    <section id="html" style="display:none;"></section>
    <section id="close-template" class="close" style="display:none;"><a href="javascript:;">Close</a></section>
</section>

</body>
</html>
