<?php
$ENV = $_SERVER['SERVER_NAME'] == 'dev.draft-one.com' ? 'dev' : 'prod';
?>
<!DOCTYPE html>
<html lang="en-us">
<head>
	<title>DraftOne | Get your first draft out of your head!</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.min.css" />
	<link rel="stylesheet/less" type="text/css" href="css/style.less?ts=<?= time() ?>" />

	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

	<link href='http://fonts.googleapis.com/css?family=Sonsie+One' rel='stylesheet' type='text/css'>
 	<link href='http://fonts.googleapis.com/css?family=Coda:400,800' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700' rel='stylesheet' type='text/css'>

	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/less.min.js"></script>
	<script type="text/javascript" src="js/showdown.js"></script>
	<script type="text/javascript" src="js/modernizr.js"></script>
	<script type="text/javascript" src="js/underscore-min.js"></script>
	<script type="text/javascript" src="js/backbone-min.js"></script>
	<script type="text/javascript" src="js/ZeroClipboard.min.js"></script>
	<script type="text/javascript" src="js/application.js"></script>
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
		<div class="container centered relative">
			<div class="row">
				<div class="span8"><h1>DraftOne</h1></div>
				<div class="span4">
					<div class="subhead">
						Keeping your writing feet<br>to the metaphorical fire.</div>
					</div>
			</div>
		</div>
	</header>

	<section id="header-smaller">
		<div class="container centered">
			<div class="row">
				<div class="span12 text-center">DraftOne</div>
			</div>
		</div>
	</section>

	<section id="about">
		<div class="container">
			<div class="row">
				<h2><a id="open-about">Hey, so just what is this "DraftOne" thing, anyway? &raquo;</a></h2>
			</div>
			<div class="row pushdown">
				<div class="span4 offset2">
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
				</div>
				<div class="span4">
						Under the <strong>Settings</strong> menu, you can set a goal for yourself &mdash; either a target number of minutes or number of
						words. Once you hit that goal, <strong>DraftOne</strong> will happily let you know that you've succeeded!
						And if you need the extra help, you can even <em>turn off the backspace key</em> so that you have no choice
						but to keep moving ahead.
				</div>
				<div class="span2">&nbsp;</div>
			</div>
			<div class="row pushdown">
				<div class="span8 offset2">
					<p class="center emphasis">
						It's not about perfection &mdash; it's about getting that first draft <em>done</em>.
					</p>
					<p class="clear center">
						<a id="close-about" href="#">Got it! Thanks! Now LET ME WRITE!</a>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="app" class="app">
		<div class="container">
      <div class="row">
        <div class="span4 offset2">
          <button id="start" class="btn btn-success"><i class="icon-play"></i> Go!</button>
          <button id="pause" class="btn"><i class="icon-pause"></i> Pause</button>
          <button id="start-over" class="btn"><i class="icon-repeat"></i> Start Over</button>
        </div>
        <div class="span4 text-right">
          <a href="#settings-modal" class="btn" data-toggle="modal"><i class="icon-wrench"></i> Settings</a>
          <div class="btn-group">
            <a role="button" class="btn dropdown-toggle" data-toggle="dropdown" id="clipboard-menu"><i class="icon-download-alt"></i> Copy to Clipboard</a>
            <ul class="dropdown-menu text-left">
              <li><a id="export-text" class="clipboard" data-clipboard-text="">As plain text</a></li>
              <li><a id="export-html" class="clipboard" data-clipboard-text="">As HTML</a></li>
            </ul>
          </div>
        </div>
        <div class="span2">&nbsp;</div>
      </div>
      <hr>
      <div class="row center">
        <div id="stats">
          <div class="span2 offset4 text-center">
            <span>Current word count:<br><span id="current-words">0</span></span>
          </div>
          <div class="span2 text-center">
            <span>Time elapsed:<br><span id="time-elapsed">0:00</span></span>
          </div>
          <div class="span4">&nbsp;</div>
        </div>
      </div>
      <div class="row">
				<div id="textbox" class="span12 center">
          <textarea id="the-text" class="paused" disabled="true"></textarea>
          <p>
            The editor allows <a href="http://daringfireball.net/projects/markdown/">Markdown formatting</a> if that's your thing.
          </p>
				</div>
			</div>
		</div>
	</section>

	<section id="goal-complete" style="display:none;">
		<h3>Congratulations!</h3>
		<p>You hit your goal! Well done, you!</p>
		<button id="continue" class="rounded">Continue This Session</button>
		<p class="emphasis">Remember to save your work<br />to a word processor or text editor!</p>
		<!-- br />
		<button id="start-new-session" class="rounded">Start New Session</button -->
	</section>

	<footer id="footer">
		<div class="container centered">
			<div class="row">
				<div class="span4 offset1">
					&copy; <?= date('Y') ?> <a href="http://allenholt.com/">Allen Holt</a>.<br>
          Follow me on <a href="http://twitter.com/allenholt/" target="_blank">Twitter</a> if you feel like it.
				</div>
        <div class="span2">&nbsp;</div>
				<div class="span4 text-right">
					Got feedback, comments or bug reports?<br><a href="mailto:ajholt@gmail.com?Subject=DraftOne">Send 'em my way.</a>
          <br><br>
					You can check out this project on <a href="https://github.com/mr-terrific/draft-one" target="_blank">GitHub</a> if that's the kind of thing you're into.
				</div>
        <div class="span1">&nbsp;</div>
			</div>
		</div>
	</footer>

	<div id="settings-modal" class="modal hide fade">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h3>Settings</h3>
		</div>
		<div class="modal-body">
      <form class="form-horizontal">
        <div class="control-group">
          <label class="control-label">
            <input type="radio" name="which" id="which-number-of-words" checked="checked">
            Number of words you want to write
          </label>
          <div class="controls">
            <input type="text" id="number-of-words" placeholder="500" class="input-medium" />
          </div>
        </div>
        <p class="text-center"><b>OR</b></p>
        <div class="control-group">
          <label class="control-label">
            <input type="radio" name="which" id="which-number-of-minutes">
            Number of minutes you want to write
          </label>
          <div class="controls">
            <input type="text" id="number-of-minutes" placeholder="10" class="input-medium" />
          </div>
        </div>
        <hr>
        <label class="checkbox inline">
          <input type="checkbox" name="disable-backspace" id="disable-backspace"> Disable backspacing/deleting
          <div class="alert">
            <strong>Warning!</strong> Disabling backspacing certainly makes you keep going forward, but can also be annoying as hell. Just so you know.
          </div>
        </label>
      </form>
		</div>
		<div class="modal-footer">
			<p>
				<button class="btn btn-primary" id="save-settings">Save Changes</button>
			</p>
		</div>
	</div>

	<div id="settings-modal" class="modal hide fade">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h3>Congratulations!</h3>
		</div>
		<div class="modal-body"></div>
		<div class="modal-footer"></div>
	</div>

  <div id="text-copied-modal" class="modal hide fade">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
      <h3>Woo hoo!</h3>
    </div>
    <div class="modal-body">Your text should now be all up in your clipboard. Paste away.</div>
    <div class="modal-footer"></div>
  </div>

  <input type="hidden" id="export" value="text to coyp" />
  <section id="html" style="display:none;"></section>
  <section id="close-template" class="close" style="display:none;">
  	<button class="rounded copy" id="copy">Copy to Clipboard</button>
  	<button class="rounded close">Close</button>
  </section>

</body>
</html>
