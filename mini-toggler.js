// mini toggler
(function() {
  // add trim method cross browser
  if (!String.prototype.trim) { String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g,'');}; }
  var togglers = document.querySelectorAll(".mini-toggler");
  for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener("click", function(e) {
      e.preventDefault();

      var hash = this.href.split('#'),
          id = hash[hash.length-1],
          toggle_content = document.getElementById(id),
          group = this.getAttribute("data-toggler-group");

      // if we have a data-toggler-group-attribute - toggle between them
      if (group) {
        var group_togglers = document.querySelectorAll("[data-toggler-group="+group+"]");
        for (var i = 0; i < group_togglers.length; i++) {
          if (group_togglers[i] == this) {
            continue;
          }
          // remove toggler active class
          group_togglers[i].className = group_togglers[i].className.replace("toggler-active", "").trim();
          
          // get the toggler content
          var hash = group_togglers[i].href.split('#'),
              id = hash[hash.length-1],
              group_toggler_content = document.getElementById(id);
          // remove toggler content active class 
          group_toggler_content.className = group_toggler_content.className.replace("active", "").trim();
        }
      }

      // add/remove class name
      if (toggle_content.className.indexOf("active") == -1) {
        this.className += " toggler-active";
        toggle_content.className += " active";
      } else {
        toggle_content.className = toggle_content.className.replace("active", "").trim();
        this.className = this.className.replace("toggler-active", "").trim();
      }
    });
  }
})();