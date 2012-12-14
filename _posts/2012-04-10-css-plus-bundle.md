---

layout: post
title: CSS+ TextMate and Sublime Text Bundle
actions:
- download: https://github.com/jackbrewer/css-plus.tmbundle

postSummary: "<p>The <a href=\"https://github.com/jackbrewer/css-plus.tmbundle\">CSS+ bundle</a> is a project I've been working on for a while. It is a vast collection of CSS snippets and commands which has completely changed the way I write CSS.

<p>When I started using TextMate for development I was amazed by the simplicity and flexibility of its Bundle Editor. This, coupled with existing bundles such as Minimal Design's <a href=\"minimaldesign.net/downloads/tools/textmate-css-bundle\">mCSS bundle</a> inspired me to find ways to use it to speed up my general development. While the mCSS bundle is an amazing piece of work, I felt it could do so much more. With this in mind, I started my own bundle, with the view that I would never need to write a line of CSS by hand again.

---

<div class="example"></div>

The [CSS+ bundle](https://github.com/jackbrewer/css-plus.tmbundle) is a project I've been working on for a while. It is a vast collection of CSS snippets and commands which has completely changed the way I write CSS.

When I started using TextMate for development I was amazed by the simplicity and flexibility of its Bundle Editor. This, coupled with existing bundles such as Minimal Design's [mCSS bundle](minimaldesign.net/downloads/tools/textmate-css-bundle) inspired me to find ways to use it to speed up my general development. While the mCSS bundle is an amazing piece of work, I felt it could do so much more. With this in mind, I started my own bundle, with the view that I would never need to write a line of CSS by hand again

## Using the bundle

The CSS+ bundle contains (nearly) every line of CSS you will ever need to write, all mapped to Tab Triggers. All the shortcuts have been set up so you can write the first letter of each word in the line you want, then hit tab to expand the full line.

<pre class="prettyprint"><code class="css"><span class="nocode">c  -> </span>colour: <span class="hex">#fff</span><span class="nocode">;</span>
<span class="nocode">b  -> </span>border: 1px solid <span class="hex">#777</span><span class="nocode">;</span>
<span class="nocode">mt -> </span>margin-top: 10px;
<span class="nocode">ts -> </span>text-shadow: 1px 1px 2px <span class="hex">#000</span><span class="nocode">;</span></code></pre>


### [Multiple Choice](id:anchor)

You can also add the first letter of each word within values for extra control.

<pre class="prettyprint"><code class="css"><span class="nocode">db  -> </span>display: block;
<span class="nocode">di  -> </span>display: inline;
<span class="nocode">dib -> </span>display: inline-block;
<span class="nocode">dn  -> </span>display: none;</code></pre>

The value is optional for some properties and if omitted, a multiple choice drop-down appears to assist you in finishing the line.

<pre class="prettyprint"><code class="css"><span class="nocode">oa -></span> overflow: auto;
<span class="nocode">o  -></span> <span class="dropdown first selected">overflow: auto;  </span>
      <span class="dropdown">overflow: hidden;</span>
      <span class="dropdown last">overflow: scroll;</span></code></pre>

### Exceptions

As there are so many CSS properties available, there are some inevitable clashes. To avoid these, some properties use the first two letters of their initial word as their triggers. While this seems confusing, after a few uses it becomes second nature. It also avoids confusing multiple choice drop-downs with too many mixed values.

<pre class="prettyprint"><code class="css"><span class="nocode">fl  -> </span>float: ; /* f is reserved for font */
<span class="nocode">flr -> </span>float: right;
<span class="nocode">cl  -> </span>clear: ; /* c is reserved for color */
<span class="nocode">cll -> </span>clear: left;
<span class="nocode">bg  -> </span>background: ; /* b is reserved for border */
<span class="nocode">bga -> </span>background-image: url("<span class="code-highlight caret">image.png</span>");</code></pre>

## Tab Stops

If you write a line where the value is customisable, for example a colour or pixel value, the editable value will be automatically highlighted for you to edit.

<pre class="prettyprint"><code class="css"><span class="nocode">w -> </span>width: <span class="code-highlight caret">10px</span>;
<span class="nocode">c -> </span>color: <span class="code-highlight caret hex">#fff</span><span class="nocode">;</span></code></pre>

### Multiple Tab Stops

Some snippets have multiple tab stops to allow complete control. At each step, the value can be changed - or removed, with another tab press highlighting the next value. Pressing tab a final time will always leave you at the end of the line, ready to continue coding.

<pre class="prettyprint"><code class="css">/* Continue tabbing to move through all values*/
<span class="nocode">b -> </span>border: <span class="code-highlight caret">1px</span> solid <span class="hex">#777</span><span class="nocode">;</span>
<span class="nocode">  -> </span>border: 2px <span class="code-highlight caret">solid</span> <span class="hex">#777</span><span class="nocode">;</span>
<span class="nocode">  -> </span>border: 2px dashed <span class="code-highlight caret hex">#000</span><span class="nocode">;</span>
<span class="nocode">  -> </span>border: 2px dashed <span class="hex">#000</span><span class="nocode caret">;</span></code></pre>

### Nested Tab Stops

Another cool feature of the bundle is that some snippets contain nested tab stops. This means that, for example with background position, the default value of <code>0px</code> is automatically selected. This means you can write a percentage or keyword in its place. If instead, you press tab again, the selection changes to just the unit part, allowing you to change the pixel value without the need to type <code>px</code> each time.

<pre class="prettyprint"><code class="css">/* Continue tabbing to move through all values*/
<span class="nocode">bgp -> </span>background-position: <span class="code-highlight caret">0px</span> 0px;
<span class="nocode">    -> </span>background-position: <span class="code-highlight caret">0</span>px 0px;
<span class="nocode">    -> </span>background-position: 5<span class="code-highlight caret">px</span> 0px;
<span class="nocode">    -> </span>background-position: 5px <span class="code-highlight caret">0px</span>;
<span class="nocode">    -> </span>background-position: 5px top<span class="caret">;</span></code></pre>

## Pseudo Classes, Pseudo Elements and Attribute selectors

As well as speeding up writing properties and values, the CSS+ bundle helps with selectors.

<pre class="prettyprint"><code class="css"><span class="nocode">a:h     -> </span>a:hover
<span class="nocode">li:fc   -> </span>li:first-child
<span class="nocode">span:b  -> </span>span:before
<span class="nocode">span::b -> </span>span::before
<span class="nocode">[       -> </span>[<span class="code-highlight caret">attr</span>="value"]</code></pre>


## Special Values

Some properties can be triggered in multiple ways, to quickly reset values to empty or default values. As with the mCSS bundle, these can be triggered by repeating the final letter of the trigger.

<pre class="prettyprint"><code class="css"><span class="nocode">m  -> </span>margin: <span class="code-highlight caret">10px</span>;
<span class="nocode">mm -> </span>margin: 0<span class="caret">;</span>
<span class="nocode">l  -> </span>left: <span class="code-highlight caret">10px</span>;
<span class="nocode">ll -> </span>left: 0<span class="caret">;</span></code></pre>

## CSS3

I've tried to include as many CSS3 properties and selectors as possible, but with more frequently surfacing there are probably a couple missing. If you find any that don't appear in the CSS+ bundle, you can either <a href="https://github.com/jackbrewer/css-plus.tmbundle/issues">add an issue on GitHub</a> which I will fix, or fork the bundle and submit your own pull request.

All the CSS3 properties in this bundle are prefix free. This is a conscious choice, as many people already have their own ways of dealing with these, either by hand or through a service such as <a href="http://prefixr.com/">Prefixr</a>. I've created a separate <a href="https://github.com/jackbrewer/css-plus-vendor-prefixes.tmbundle">TextMate bundle</a> and <a href="https://github.com/jackbrewer/Sublime-Settings/blob/master/Snippets/CSS/Vendor%20Prefix.sublime-snippet">Sublime Text snippet</a> as my way of adding relevant prefixes.

## Use with TextMate

This bundle has a well organised menu structure, so for an overview of all the commands and snippets available, go to <em>Bundles -> CSS+</em> in the menu bar. The snippets are organised into groups, with each snippet listing its keyboard trigger for reference. At the bottom of the menu is an <em>'Update Bundle via Git'</em> option which will ensure your version of CSS+ is up to date.

I have also included a handy colour conversion command to speed up switching between colour formats. With your caret (text cursor) on the correct line, press <kbd>cmd</kbd> + <kbd>ctrl</kbd> + <kbd>c</kbd> to switch between Hex, RGB and RGBa formats. This command currently only works on lines which contain one colour.

## Use With Sublime Text

I switched from TextMate to Sublime Text a while ago, as it is a much more feature rich editor. One of the deciding factors for the switch was that Sublime supports TextMate bundles. That said, the support isn't flawless. The colour format command doesn't yet work and it sometimes has trouble if you delete a set of nested tab stops, with it still requiring that you tab through all of the removed tab stops before allowing you on to the next snippet.

Even with these drawbacks, the CSS+ bundle if definitely a must for anyone who writes CSS. Sublime also adds the advantage that users on Windows and Linux can make use of this normally OSX bundle.

## Download

The best way to get your hands on this bundle is to clone it using Git. This means you can easily update it when changes are made. Installation instructions, as well as a regular download version of the CSS+ bundle can be found on GitHub.
