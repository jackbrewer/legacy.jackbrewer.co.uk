---

layout: post
title: Mapping A Hash Keyboard Button In OSX
scripts: 'hash-press.js'

---

When I switched to using a Mac, one of the very few problems I had was the lack of a hash key on my (UK) keyboard. For the average user, this probably isn't too much of an issue but for someone who codes, I can't live without it! <kbd>Alt</kbd> + <kbd>3</kbd> is slightly too awkward a shape to pull off frequently with one hand.</p>

To remedy my problem, i needed to find a donor key on my keyboard. The <kbd>§</kbd> key looked like the perfect candidate (I even had to google it to find out what it was!).

> The section sign (§, Unicode U+00A7, HTML entity &amp;sect;), also called the "double S", "sectional symbol" or signum sectionis, is a typographical character used mainly to refer to a particular section of a document, such as a legal code.

Well now you know too.

Now for the magic. If you don't already have it, you will need to create a `DefaultKeyBinding.dict` file here:

<pre class="prettyprint"><code class="plain">~/Library/KeyBindings/DefaultKeyBinding.dict</code></pre>

Once you have this file, open it and add:

<pre class="prettyprint"><code class="plain">{
  /* Map # to § key*/
  "§" = ("insertText:", "#");
}</code></pre>

Save that, restart your Mac and you will be the proud owner of a new hash key!