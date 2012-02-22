jQuery.future lets you travel back to the future to chain jQuery instance methods to an instance that hasn't been born yet.

```javascript
jQuery(function ($) {

  var elem = $.Deferred();
    
  $.future(elem.promise())
    .text('hello, world!')
    .css('color', 'green')
    .hide()
    .appendTo('#content')
    .fadeIn(3000)
    .text('goodbye, world!')
    .css('color', 'red')
    .fadeOut(3000);
    
  setTimeout(function () {
    elem.resolve('<div class="future"/>');
  }, 1500);
  
});
```

Why would you want to do this? Only future time travelers can tell.

http://timetraveler.ytmnd.com/