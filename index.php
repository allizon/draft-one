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
    <script type="text/javascript" src="js/onward.js"></script>

</head>

<body>

<div id="debug"></div>

<header>
    <h1>Onward!</h1>
</header>

<section class="container">
    <div class="leftcol">
        <input type="radio" name="which" id="which-number-of-words" checked="checked" />
        <span class="label">Number of words:</span> <input type="text" id="number-of-words" class="text" value="500" />
        <br />
        <input type="radio" name="which" id="which-number-of-minutes" />
        <span class="label">or Number of minutes you want to write:</span> <input type="text" id="number-of-minutes" class="text" value="10" />
        <br />
        <input type="button" id="start" value="Go!" />
        <input type="button" id="pause" value="Pause" />
        <input type="button" id="stop" value="Stop!" />
    </div>
    <div class="rightcol">
        <span class="label">Current word count: <span id="current-words">0</span></span>
        <br />
        <span class="label">Time elapsed: <span id="time-elapsed">0:00</span></span>
    </div>

    <textarea id="the-text" class="paused" disabled="true"></textarea>

    <div class="not-full-screen">
        <p>
            <a href="javascript:;" id="export-as-html">Export as HTML</a>
        </p>
    </div>
</div>

    <div id="html" style="display:none;"></div>
    <div id="close-template" class="close" style="display:none;"><a href="javascript:;">Close</a></div>
</section>

</body>
</html>
