/*
 * jQuery FlexSlider v1.8
 * http://flex.madebymufffin.com
 *
 * Copyright 2011, Tyler Smith
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
 
/* Browser Resets */
.flex-container a:active,
.flexslider a:active {outline: none;}
.slides,
.flex-control-nav,
.flex-direction-nav {margin: 0; padding: 0; list-style: none;} 

/* FlexSlider Necessary Styles
*********************************/ 
.flexslider {width: 100%; margin: 0; padding: 0;}
.flexslider .slides > li {display: none;} /* Hide the slides before the JS is loaded. Avoids image jumping */
.flexslider .slides img {max-width: 100%; display: block;}
.flex-pauseplay span {text-transform: capitalize;}

/* Clearfix for the .slides element */
.slides:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;} 
html[xmlns] .slides {display: block;} 
* html .slides {height: 1%;}

/* No JavaScript Fallback */
/* If you are not using another script, such as Modernizr, make sure you
 * include js that eliminates this class on page load */
.no-js .slides > li:first-child {display: block;}


/* FlexSlider Default Theme
*********************************/
.flexslider {background: #fff; position: relative; zoom: 1;}
.flexslider .slides {zoom: 1;}
.flexslider .slides > li {position: relative;}
/* Suggested container for "Slide" animation setups. Can replace this with your own, if you wish */
.flex-container {zoom: 1; position: relative;}

/* Caption style */
/* IE rgba() hack */
.flex-caption {width: 40%; position: absolute; right: 0; bottom: 0; background: #000; color: #fff; font-size: 12px; padding: 25px; opacity:0.8; filter:alpha(opacity=80); }

/* Direction Nav */
.flex-direction-nav li a {width: 38px; height: 38px; margin: -19px 0 0; display: block; background: url(../images/flex-slider/bg_direction_nav_custom.png) no-repeat 0 0; position: absolute; top: 50%; cursor: pointer; text-indent: -9999px;}
.flex-direction-nav li .next {background-position: -38px 0; right: 20px;}
.flex-direction-nav li .prev {left: 20px;}
.flex-direction-nav li .disabled {opacity: .3; filter:alpha(opacity=30); cursor: default;}

/* Control Nav */
.flex-control-nav { position: absolute; left: 20px; bottom: 15px; text-align: center;}
.flex-control-nav li {margin: 0 0 0 5px; display: inline-block; zoom: 1; *display: inline;}
.flex-control-nav li:first-child {margin: 0;}
.flex-control-nav li a {width: 13px; height: 13px; display: block; background: url(../images/flex-slider/bg_control_nav_custom.png) no-repeat 0 0; cursor: pointer; text-indent: -9999px;}
.flex-control-nav li a:hover {background-position: 0 -13px;}
.flex-control-nav li a.active {background-position: 0 -26px; cursor: default;}