---

layout: post
title: Animated CSS Progress Bar
extStylesheets: 'http://demos.jackbrewer.co.uk/animated-css-progress-bar/css/progress-bar.css'
demo: true
actions:
- demo: http://demos.jackbrewer.co.uk/animated-css-progress-bar
- source: https://github.com/jackbrewer/demos/tree/gh-pages/animated-css-progress-bar

---

There are countless examples of people making progress bars using nothing but CSS – this one is different.

There are no images, the HTML is extremely minimal and the animation is handled by a pseudo element. Unfortunately this means it's **only animated in Firefox** for now.

<div class="example">
	<div role="progressbar">85% Complete</div>
	<style contenteditable="true">[role="progressbar"]:after {
  width: 85%;
}</style>
</div>

<p class="note">The CSS above is interactive &mdash; change the width value in Firefox to see the animation in action.</p>

This is the only example I have seen so far that makes use of a negative background-position to animate the colour of the bar from red, through orange and yellow, to green &mdash; depending on the amount of progress made.

For those of you who don't want to wake the slumbering beast that is Firefox, here are a few more examples of the colour changing goodness that you are missing.

<div class="example">
	<div role="progressbar" data-value="0" >0% Complete</div>
	<div role="progressbar" data-value="25">25% Complete</div>
	<div role="progressbar" data-value="50">50% Complete</div>
	<div role="progressbar" data-value="75">75% Complete</div>
	<div role="progressbar" data-value="100">100% Complete</div>
</div>

I've hard-coded *non-animated* widths on these to illustrate how the progress bar looks at various stages of its transition, at 0%, 25%, 50%, 75% and 100% progress.

## Pros

The markup is beautiful! No wrapping or empty elements.

<pre class="prettyprint"><code class="html">&lt;div role="progressbar"&gt;85% Complete&lt;/div&gt;</code></pre>

Switching the `<div role="progressbar">` for a `<progress value="85%" max="100%">` would make this semantically better but browser support for styling progress elements is extremely poor at the moment.

An actual implementation of this would also need some method of updating the value(s) within the markup.

## Cons

This is a prototype that is not yet ready to be unleashed on the world. I have set up this demo to animate using CSS transitions whereas a real implementation would probably need some JavaScript interaction to dynamically calculate the user's actual progress. Using JS to handle the animation would also negate some of the browser compatibility issues which the `:after` pseudo element causes.

I could also have increased browser support for this demo by using extra markup instead of pseudo elements but this goes against what I was trying to achieve.
