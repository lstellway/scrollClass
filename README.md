# scrollClass
jQuery plugin that adds specified classes to an element based on scroll behavior.



## Install with Bower

```bower install --save scrollClass```



## Usage

Include jQuery

```<script type="text/javascript" src="//code.jquery.com/jquery-3.0.0.min.js"></script>```

Include scrollClass

```<script type="text/javascript" src="./dist/scrollClass.min.js"></script>```



## Options

  - **target** ([jQuery Object](http://api.jquery.com/Types/#jQuery)) [Default: `$(this)`]
    - The targeted element to change classes.
  - **offset** ([number](http://api.jquery.com/Types/#Number)) [Default `100`]
    - _number_ - The number of pixels offset from the top of the document that determines when the CSS class passed in the **class** option will be toggled.
  - **downClass** ([string](http://api.jquery.com/Types/#String)) [Default `"progressing"`]
    - The class toggled on to the target element when the user is scrolling downward.
  - **upClass** ([string](http://api.jquery.com/Types/#String)) [Default `"regressing"`]
    - The class toggled on to the target element when the user is scrolling upward.
