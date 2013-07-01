<?php
$ENV = $_SERVER['SERVER_NAME'] == 'dev.draft-one.com' ? 'dev' : 'prod';
?>
<!DOCTYPE html>
<html>
<head>
	<title>DraftOne | Get your first draft out of your head!</title>
	<link rel="stylesheet/less" type="text/css" href="css/style.less?ts=<?= time() ?>" />

	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

	<link href='http://fonts.googleapis.com/css?family=Coda:400,800' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700' rel='stylesheet' type='text/css'>

	<script type="text/javascript" src="js/less.min.js"></script>
	<script type="text/javascript" src="js/showdown.js"></script>
	<script type="text/javascript" src="js/modernizr.js"></script>
	<script type="text/javascript" src="js/underscore-min.js"></script>
	<script type="text/javascript" src="js/backbone-min.js"></script>
	<script type="text/javascript" src="js/ZeroClipboard.min.js"></script>
	<script type="text/javascript" src="js/onward.js"></script>
<?php if ( $ENV == 'prod' ): ?>
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-273478-15']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
<?php endif; ?>
</head>

<body>

<header id="header" title="Click the header to minimize it for more writing space!">
	<h1>
		DraftOne
		<p>Keeping your writing feet<br>to the metaphorical fire.</p>
	</h1>
	<section class="clear"></section>
</header>

<section id="header-smaller">
	<section class="container">
		DraftOne
	</section>
</section>

<section id="about">
	<section class="container">
		<h2><a id="open-about">Hey, so just what is this "DraftOne" thing, anyway? &raquo;</a></h2>
		<p class="column">
			Designed specifically to make you just keep moving forward when working
			on <a href="http://nanowrimo.org" target="_blank">National Novel Writing Month</a>
			&mdash; though you can use it any time, of course &mdash;
			<strong>DraftOne</strong> gives you a quiet space in which to write but gently hassles you if
			your fingers stop typing.
			<br /><br />
			DraftOne was inspired by <a href="http://writeordie.com/#Web+App" target="_blank">Dr. Wicked's Write or Die!</a>,
			which helped me out tremendously during NaNoWriMo 2008.
			I owe him a debt of gratitude for helping me get that thing done, and I hope that DraftOne can help you
			get your own projects finished!
		</p>
		<p class="column">
			Under the <strong>Settings</strong> menu, you can set a goal for yourself &mdash; either a target number of minutes or number of
			words. Once you hit that goal, <strong>DraftOne</strong> will happily let you know that you've succeeded!
			And if you need the extra help, you can even <em>turn off the backspace key</em> so that you have no choice
			but to keep moving ahead.
		</p>
		<p class="clear center emphasis">
			It's not about perfection &mdash; it's about getting that first draft <em>done</em>.
		</p>
		<p class="clear center">
			<a id="close-about" href="#">Got it! Thanks! Now LET ME WRITE!</a>
		</p>
	</section>
</section>

<section class="app container clear">
	<section id="stats">
		<span class="label">Current word count: <span id="current-words">0</span></span>
		<span class="label">Time elapsed: <span id="time-elapsed">0:00</span></span>
	</section>

	<section id="textbox" class="clearfix">
		<section id="action-buttons">
			<div class="leftcol">
				<button id="start" class="rounded">Go!</button>
				<button id="pause" class="rounded">Pause</button>
				<button id="start-over" class="rounded">Start Over</button>
			</div>
			<div class="rightcol">
				<button id="settings" class="hoverable rounded">Settings</button>
			</div>
		</section>

		<textarea id="the-text" class="paused" disabled="true"></textarea>
		<p class="left">
			The editor allows <a href="http://daringfireball.net/projects/markdown/">Markdown formatting</a> if that's your thing.
			|
			<a href="javascript:;" data-clipboard-target="html" id="export-as-text">Export as Formatted Text</a>
			|
			<a href="javascript:;" data-clipboard-target="html" id="export-as-html">Export as Raw HTML</a>
			<br>
		</p>
	</section>
</section>

<section id="drawer" style="display:none;">
	the copied text should go here...
</section>

<section id="goal-complete" style="display:none;">
	<h3>Congratulations!</h3>
	<p>You hit your goal! Well done, you!</p>
	<button id="continue" class="rounded">Continue This Session</button>
	<p class="emphasis">Remember to save your work<br />to a word processor or text editor!</p>
	<!-- br />
	<button id="start-new-session" class="rounded">Start New Session</button -->
</section>

<footer>
	<section class="container">
		<p class="left">
		</p>
		<p class="right">
			&copy; 2012 Allen Holt. Follow me on <a href="http://twitter.com/allenholt/" target="_blank">Twitter</a> if you feel like it.<br />
			Got feedback, comments or bug reports? <a href="mailto:ajholt@gmail.com?Subject=DraftOne">Send 'em my way.</a><br />
			You can check out this project on <a href="https://github.com/mr-terrific/draft-one" target="_blank">GitHub</a> if that's the kind of thing you're into.
		</p>
	</section>
</footer>

<section id="settings">
	<h3>Settings</h3>
	<p>
		<input type="radio" name="which" id="which-number-of-words" checked="checked">
		<span class="label">Number of words:</span> <input type="text" id="number-of-words" class="text" value="500" />
		<br>
		<input type="radio" name="which" id="which-number-of-minutes" />
		<span class="label">or Number of minutes you want to write:</span> <input type="text" id="number-of-minutes" class="text" value="10">
	</p>
	<p>
		<input type="checkbox" name="disable-backspace" id="disable-backspace"> <span class="label">Disable backspacing/deleting</span><br>
		<i>Disabling backspacing certainly makes you keep going forward, but can also be annoying as hell. Fair warning.</i>
	</p>

	<p>
		<button id="save-settings">Save and Close</button>
	</p>
</section>

<input type="hidden" id="export" value="text to coyp" />
<section id="html" style="display:none;"></section>
<section id="close-template" class="close" style="display:none;">
	<button class="rounded copy" id="copy">Copy to Clipboard</button>
	<button class="rounded close">Close</button>
</section>

</body>
</html>
