---

layout: post
title: CSS iPhone Icon
extStylesheets: 'http://demos.jackbrewer.co.uk/css-iphone-icon/css/iphone.css'
extScripts: 'http://demos.jackbrewer.co.uk/css-iphone-icon/js/iphone.js'
demo: true
actions:
- demo: http://demos.jackbrewer.co.uk/css-iphone-icon
- source: https://github.com/jackbrewer/demos/tree/gh-pages/css-iphone-icon

---

<div class="example">
  <span class="iphone">iPhone</span>
</div>

This is the result of a long evening playing with box shadows and gradients – an iPhone icon made with CSS.

<p class="note">Make sure you hover for yet more outrageously complicated styling.</p>

You've probably seen similar experiments where people have used hundreds of empty `<div>` and `<span>` elements to recreate similar details to a pixel perfect level. I decided to take a different approach and write my optimal HTML first.

<pre class="prettyprint"><code class="html">&lt;span class="iphone"&gt;iPhone&lt;/span&gt;</code></pre>

That's all there is! Although limiting, I still managed to achieve a fairly impressive result using this one element and its `:before` and `:after` pseudo elements. The `<span>` element itself forms the iPhone body, the `:after` pseudo element handles the lock / home screen whilst the `:before` pseudo element forms the home button.

The bulk of the styling makes use of multiple background gradients, sizes and positions. Combine that with the fact that every CSS3 property is duplicated 5 times with various vendor prefixes and the overall CSS file length of 200 lines doesn't seem too crazy.


<div class="example">
  <span class="iphone zoom">iPhone</span>
</div>

Here is the exact same icon, this time scaled up three times to allow you to see the finer details.

There is a tiny amount of JavaScript in use on this demo – it updates the `:after` pseudo element's `content` property to ensure the icon is always displaying the correct time.

You may also notice at this zoom level that the icon is modelled on an iPhone 3GS – this demo has been living on my hard drive for a while!

**Disclaimer:** This is an experiment and was a great learning experience. I would never recommend using something this complicated or pointless on an actual site.
