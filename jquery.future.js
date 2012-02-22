/*!
 * jQuery.future
 * Copyright 2011, David Furfero, @furf
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
!function ($, future, fn, name, method) {

  fn = $.fn;

  // For every...
  for (name in fn) {

    // ...function in $.fn...
    if (fn.hasOwnProperty(name) && $.isFunction((method = fn[name]))) {

      // ...create a mapped function...
      future[name] = function (method) {

        // ...that wraps the original function...
        return function () {
          
          var args = arguments;

          // ...in a pipe...
          return this.pipe(function (collection) {
            
            // ...for execution...
            return method.apply(collection, args);
            
          // ... at a later time
          // (wrapping the promise around this is the deferred way to chain!)
          }).promise(this);
        };

      }(method);
    }
  }
  
  $.future = function (deferred) {

    // When the deferred is resolved...
    return $.when(deferred)

      // ...create a jQuery instance...
      .pipe($)

      // ...that will be used as the context for calls chained to the future
      .promise(future);
  };

}(jQuery, {});
