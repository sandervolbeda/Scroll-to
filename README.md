# Scroll-to
Created this easy scroll to code for one page websites.

## Step 1
Make sure your menu items are in href tag like below here

```html
<a href="#">Menu item 1</a>
<a href="#">Menu item 2</a>
<a href="#">Menu item 3</a>
<a href="#">Menu item 4</a>
<a href="#">Menu item 5</a>
```

## Step 2
Add IDs to the divs you want to scroll to like below

```html
<div id="services">
    Content here
</div>

<div id="about-us">
    Content here
</div>

<div id="team">
    Content here
</div>

<div id="testimonials">
    Content here
</div>

<div id="contact">
    Content here
</div>
```

## Step 3
Add the ID's to the menu items

```html
<a href="#services">Menu item 1</a>
<a href="#about-us">Menu item 2</a>
<a href="#team">Menu item 3</a>
<a href="#testimonials">Menu item 4</a>
<a href="#contact">Menu item 5</a>
```


## Step 4
Save this and check if you click on a menu item it goes to the section with the ID. If so, nice! Now you only have to add the jQuery to your script file.
Remember to include the jQuery library. Just like you link to the style sheet, you can also do this with a script file.

```html
<head>
<script src="jquery-3.3.1.min.js"></script>
</head>
```

You can download the the jQuery file from [jquery.com](http://jquery.com/download/) 

__OR__

You can use a [CDN from Google](https://developers.google.com/speed/libraries/) to include jQuery on your website. For example:

```html
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
```

Good luck!