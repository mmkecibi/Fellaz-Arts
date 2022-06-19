export default {
  mounted() {


    $(document).ready(function(){
	
		
      $(".color1" ).click(function(){
        $("#colors" ).attr("href", "css/color/color1.css" );
        return false;
      });
        
      $(".color2" ).click(function(){
        $("#colors" ).attr("href", "css/color/color2.css" );
        return false;
      });
        
      $(".color3" ).click(function(){
        $("#colors" ).attr("href", "css/color/color3.css" );
        return false;
      });
        
      $(".color4" ).click(function(){
        $("#colors" ).attr("href", "css/color/color4.css" );
        return false;
      });	
      $(".color5" ).click(function(){
        $("#colors" ).attr("href", "css/color/color5.css" );
        return false;
      });	
      $(".color6" ).click(function(){
        $("#colors" ).attr("href", "css/color/color6.css" );
        return false;
      });	
      $(".color7" ).click(function(){
        $("#colors" ).attr("href", "css/color/color7.css" );
        return false;
      });	
      $(".color8" ).click(function(){
        $("#colors" ).attr("href", "css/color/color8.css" );
        return false;
      });
      $(".color9" ).click(function(){
        $("#colors" ).attr("href", "css/color/color9.css" );
        return false;
      });
      $(".color10" ).click(function(){
        $("#colors" ).attr("href", "css/color/color10.css" );
        return false;
      });
      $(".color11" ).click(function(){
        $("#colors" ).attr("href", "css/color/color11.css" );
        return false;
      });
      $(".color12" ).click(function(){
        $("#colors" ).attr("href", "css/color/color12.css" );
        return false;
      });
      
      
      $('.color-plate .color-plate-icon').on( "click", function(){
        $('.color-plate').toggleClass('active');
      });
      
 
    } );
    

// Easing JS //
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}n.easing.jswing=n.easing.swing;var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});



// Owl Carousel JS //
! function(a, b, c, d) {
  function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
          this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
      }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
          this._pipe.push({
              filter: c.filter,
              run: a.proxy(c.run, this)
          })
      }, this)), this.setup(), this.initialize()
  }

  function f(a) {
      if (a.touches !== d) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
      };
      if (a.touches === d) {
          if (a.pageX !== d) return {
              x: a.pageX,
              y: a.pageY
          };
          if (a.pageX === d) return {
              x: a.clientX,
              y: a.clientY
          }
      }
  }

  function g(a) {
      var b, d, e = c.createElement("div"),
          f = a;
      for (b in f)
          if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
      return [!1]
  }

  function h() {
      return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
  }

  function i() {
      return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
  }

  function j() {
      return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
  }

  function k() {
      return "ontouchstart" in b || !!navigator.msMaxTouchPoints
  }

  function l() {
      return b.navigator.msPointerEnabled
  }
  var m, n, o;
  m = {
      start: 0,
      startX: 0,
      startY: 0,
      current: 0,
      currentX: 0,
      currentY: 0,
      offsetX: 0,
      offsetY: 0,
      distance: null,
      startTime: 0,
      endTime: 0,
      updatedX: 0,
      targetEl: null
  }, n = {
      isTouch: !1,
      isScrolling: !1,
      isSwiping: !1,
      direction: !1,
      inMotion: !1
  }, o = {
      _onDragStart: null,
      _onDragMove: null,
      _onDragEnd: null,
      _transitionEnd: null,
      _resizer: null,
      _responsiveCall: null,
      _goToLoop: null,
      _checkVisibile: null
  }, e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      responsiveClass: !1,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      themeClass: "owl-theme",
      baseClass: "owl-carousel",
      itemClass: "owl-item",
      centerClass: "center",
      activeClass: "active"
  }, e.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
  }, e.Plugins = {}, e.Pipe = [{
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)]
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          var a = this._clones,
              b = this.$stage.children(".cloned");
          (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          var a, b, c = this._clones,
              d = this._items,
              e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
          for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          var a, b, c, d = this.settings.rtl ? 1 : -1,
              e = (this.width() / this.settings.items).toFixed(3),
              f = 0;
          for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          var b, c, d = (this.width() / this.settings.items).toFixed(3),
              e = {
                  width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                  "padding-left": this.settings.stagePadding || "",
                  "padding-right": this.settings.stagePadding || ""
              };
          if (this.$stage.css(e), e = {
                  width: this.settings.autoWidth ? "auto" : d - this.settings.margin
              }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                  return a > 1
              }).length > 0)
              for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
          else this.$stage.children().css(e)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current && this.reset(this.$stage.children().index(a.current))
      }
  }, {
      filter: ["position"],
      run: function() {
          this.animate(this.coordinates(this._current))
      }
  }, {
      filter: ["width", "position", "items", "settings"],
      run: function() {
          var a, b, c, d, e = this.settings.rtl ? 1 : -1,
              f = 2 * this.settings.stagePadding,
              g = this.coordinates(this.current()) + f,
              h = g + this.width() * e,
              i = [];
          for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
          this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
      }
  }], e.prototype.initialize = function() {
      if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
          var b, c, e;
          if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
      }
      this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
  }, e.prototype.setup = function() {
      var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
      c ? (a.each(c, function(a) {
          b >= a && a > d && (d = Number(a))
      }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
          return b.replace(/\b owl-responsive-\S+/g, "")
      }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
          property: {
              name: "settings",
              value: e
          }
      }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
          property: {
              name: "settings",
              value: this.settings
          }
      }))
  }, e.prototype.optionsLogic = function() {
      this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function(b) {
      var c = this.trigger("prepare", {
          content: b
      });
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
          content: c.data
      }), c.data
  }, e.prototype.update = function() {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
              return this[a]
          }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      this._invalidated = {}
  }, e.prototype.width = function(a) {
      switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
              return this._width;
          default:
              return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
  }, e.prototype.refresh = function() {
      if (0 === this._items.length) return !1;
      (new Date).getTime();
      this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
  }, e.prototype.eventsCall = function() {
      this.e._onDragStart = a.proxy(function(a) {
          this.onDragStart(a)
      }, this), this.e._onDragMove = a.proxy(function(a) {
          this.onDragMove(a)
      }, this), this.e._onDragEnd = a.proxy(function(a) {
          this.onDragEnd(a)
      }, this), this.e._onResize = a.proxy(function(a) {
          this.onResize(a)
      }, this), this.e._transitionEnd = a.proxy(function(a) {
          this.transitionEnd(a)
      }, this), this.e._preventClick = a.proxy(function(a) {
          this.preventClick(a)
      }, this)
  }, e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function() {
      return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
  }, e.prototype.eventsRouter = function(a) {
      var b = a.type;
      "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
  }, e.prototype.internalEvents = function() {
      var c = (k(), l());
      this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
          this.eventsRouter(a)
      }, this)), this.$stage.on("dragstart", function() {
          return !1
      }), this.$stage.get(0).onselectstart = function() {
          return !1
      }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
          this.eventsRouter(a)
      }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
  }, e.prototype.onDragStart = function(d) {
      var e, g, h, i;
      if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
      if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
      else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
      this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
          this.eventsRouter(a)
      }, this))
  }, e.prototype.onDragMove = function(a) {
      var c, e, g, h, i, j;
      this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
  }, e.prototype.onDragEnd = function(b) {
      var d, e, f;
      if (this.state.isTouch) {
          if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
          this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
      }
  }, e.prototype.removeClick = function(c) {
      this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
          a(c).off("click.preventClick")
      }, 300)
  }, e.prototype.preventClick = function(b) {
      b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
  }, e.prototype.getTransformProperty = function() {
      var a, c;
      return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
  }, e.prototype.closest = function(b) {
      var c = -1,
          d = 30,
          e = this.width(),
          f = this.coordinates();
      return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
          return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
      }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
  }, e.prototype.animate = function(b) {
      this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
          transform: "translate3d(" + b + "px,0px, 0px)",
          transition: this.speed() / 1e3 + "s"
      }) : this.state.isTouch ? this.$stage.css({
          left: b + "px"
      }) : this.$stage.animate({
          left: b
      }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
          this.state.inMotion && this.transitionEnd()
      }, this))
  }, e.prototype.current = function(a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (a = this.normalize(a), this._current !== a) {
          var b = this.trigger("change", {
              property: {
                  name: "position",
                  value: a
              }
          });
          b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
              property: {
                  name: "position",
                  value: this._current
              }
          })
      }
      return this._current
  }, e.prototype.invalidate = function(a) {
      this._invalidated[a] = !0
  }, e.prototype.reset = function(a) {
      a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function(b, c) {
      var e = c ? this._items.length : this._items.length + this._clones.length;
      return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
  }, e.prototype.relative = function(a) {
      return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function(a) {
      var b, c, d, e = 0,
          f = this.settings;
      if (a) return this._items.length - 1;
      if (!f.loop && f.center) b = this._items.length - 1;
      else if (f.loop || f.center)
          if (f.loop || f.center) b = this._items.length + f.items;
          else {
              if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
              for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                  (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
          } else b = this._items.length - f.items;
      return b
  }, e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function(a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function(a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function(b) {
      var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function(a) {
              return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
          };
      return b === d ? a.map(this._clones, function(a, b) {
          return f(b)
      }) : a.map(this._clones, function(a, c) {
          return a === b ? f(c) : null
      })
  }, e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function(b) {
      var c = null;
      return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
          return this.coordinates(b)
      }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
  }, e.prototype.duration = function(a, b, c) {
      return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function(c, d) {
      if (this.settings.loop) {
          var e = c - this.relative(this.current()),
              f = this.current(),
              g = this.current(),
              h = this.current() + e,
              i = 0 > g - h ? !0 : !1,
              j = this._clones.length + this._items.length;
          h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
              this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
          }, this), 30)
      } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
  }, e.prototype.next = function(a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function(a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.transitionEnd = function(a) {
      return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
  }, e.prototype.viewport = function() {
      var d;
      if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
      else if (b.innerWidth) d = b.innerWidth;
      else {
          if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
          d = c.documentElement.clientWidth
      }
      return d
  }, e.prototype.replace = function(b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
          return 1 === this.nodeType
      }).each(a.proxy(function(a, b) {
          b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(a, b) {
      b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
          content: a,
          position: b
      }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
          content: a,
          position: b
      })
  }, e.prototype.remove = function(a) {
      a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
          content: this._items[a],
          position: a
      }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: a
      }))
  }, e.prototype.addTriggerableEvents = function() {
      var b = a.proxy(function(b, c) {
          return a.proxy(function(a) {
              a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
          }, this)
      }, this);
      a.each({
          next: this.next,
          prev: this.prev,
          to: this.to,
          destroy: this.destroy,
          refresh: this.refresh,
          replace: this.replace,
          add: this.add,
          remove: this.remove
      }, a.proxy(function(a, c) {
          this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
      }, this))
  }, e.prototype.watchVisibility = function() {
      function c(a) {
          return a.offsetWidth > 0 && a.offsetHeight > 0
      }

      function d() {
          c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
      }
      c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
  }, e.prototype.preloadAutoWidthImages = function(b) {
      var c, d, e, f;
      c = 0, d = this, b.each(function(g, h) {
          e = a(h), f = new Image, f.onload = function() {
              c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
          }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
      })
  }, e.prototype.destroy = function() {
      this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
      for (var d in this._plugins) this._plugins[d].destroy();
      (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
          return !1
      })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
  }, e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
          case "<":
              return d ? a > c : c > a;
          case ">":
              return d ? c > a : a > c;
          case ">=":
              return d ? c >= a : a >= c;
          case "<=":
              return d ? a >= c : c >= a
      }
  }, e.prototype.on = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function(a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function(b, c, d) {
      var e = {
              item: {
                  count: this._items.length,
                  index: this.current()
              }
          },
          f = a.camelCase(a.grep(["on", b, d], function(a) {
              return a
          }).join("-").toLowerCase()),
          g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
              relatedTarget: this
          }, e, c));
      return this._supress[b] || (a.each(this._plugins, function(a, b) {
          b.onTrigger && b.onTrigger(g)
      }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
  }, e.prototype.suppress = function(b) {
      a.each(b, a.proxy(function(a, b) {
          this._supress[b] = !0
      }, this))
  }, e.prototype.release = function(b) {
      a.each(b, a.proxy(function(a, b) {
          delete this._supress[b]
      }, this))
  }, e.prototype.browserSupport = function() {
      if (this.support3d = j(), this.support3d) {
          this.transformVendor = i();
          var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
          this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
      }
      this.state.orientation = b.orientation
  }, a.fn.owlCarousel = function(b) {
      return this.each(function() {
          a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
      })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
  var c = function(b) {
      this._core = b, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
              if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                  for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                          this.load(b)
                      }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
          }, this)
      }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  c.Defaults = {
      lazyLoad: !1
  }, c.prototype.load = function(c) {
      var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
          var e, f = a(d),
              g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
          this._core.trigger("load", {
              element: f,
              url: g
          }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
              f.css("opacity", 1), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
              f.css({
                  "background-image": "url(" + g + ")",
                  opacity: "1"
              }), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this), e.src = g)
      }, this)), this._loaded.push(d.get(0)))
  }, c.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
  var b = function(c) {
      this._core = c, this._handlers = {
          "initialized.owl.carousel": a.proxy(function() {
              this._core.settings.autoHeight && this.update()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              this._core.settings.autoHeight && "position" == a.property.name && this.update()
          }, this),
          "loaded.owl.lazy": a.proxy(function(a) {
              this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
          }, this)
      }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  b.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
  }, b.prototype.update = function() {
      this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
  }, b.prototype.destroy = function() {
      var a, b;
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
  var d = function(b) {
      this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
          "resize.owl.carousel": a.proxy(function(a) {
              this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
          }, this),
          "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
              this._playing && this.stop()
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              var c = a(b.content).find(".owl-video");
              c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
          }, this)
      }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
          this.play(a)
      }, this))
  };
  d.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
  }, d.prototype.fetch = function(a, b) {
      var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
      if (!g) throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
      else {
          if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
          c = "vimeo"
      }
      d = d[6], this._videos[g] = {
          type: c,
          id: d,
          width: e,
          height: f
      }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, d.prototype.thumbnail = function(b, c) {
      var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function(a) {
              e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
          };
      return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
          type: "GET",
          url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
              f = a[0].thumbnail_large, l(f)
          }
      }))
  }, d.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
  }, d.prototype.play = function(b) {
      this._core.trigger("play", null, "video"), this._playing && this.stop();
      var c, d, e = a(b.target || b.srcElement),
          f = e.closest("." + this._core.settings.itemClass),
          g = this._videos[f.attr("data-video")],
          h = g.width || "100%",
          i = g.height || this._core.$stage.height();
      "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
  }, d.prototype.isInFullScreen = function() {
      var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
  }, d.prototype.destroy = function() {
      var a, b;
      this._core.$element.off("click.owl.video");
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
          "change.owl.carousel": a.proxy(function(a) {
              "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
              this.swapping = "translated" == a.type
          }, this),
          "translate.owl.carousel": a.proxy(function() {
              this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
      }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
      animateOut: !1,
      animateIn: !1
  }, e.prototype.swap = function() {
      if (1 === this.core.settings.items && this.core.support3d) {
          this.core.speed(0);
          var b, c = a.proxy(this.clear, this),
              d = this.core.$stage.children().eq(this.previous),
              e = this.core.$stage.children().eq(this.next),
              f = this.core.settings.animateIn,
              g = this.core.settings.animateOut;
          this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
              left: b + "px"
          }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
      }
  }, e.prototype.clear = function(b) {
      a(b.target).css({
          left: ""
      }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
  var d = function(b) {
      this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
          "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
              this.autoplay()
          }, this),
          "play.owl.autoplay": a.proxy(function(a, b, c) {
              this.play(b, c)
          }, this),
          "stop.owl.autoplay": a.proxy(function() {
              this.stop()
          }, this),
          "mouseover.owl.autoplay": a.proxy(function() {
              this.core.settings.autoplayHoverPause && this.pause()
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function() {
              this.core.settings.autoplayHoverPause && this.autoplay()
          }, this)
      }, this.core.$element.on(this.handlers)
  };
  d.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
  }, d.prototype.autoplay = function() {
      this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
          this.play()
      }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
  }, d.prototype.play = function() {
      return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
  }, d.prototype.stop = function() {
      b.clearInterval(this.interval)
  }, d.prototype.pause = function() {
      b.clearInterval(this.interval)
  }, d.prototype.destroy = function() {
      var a, c;
      b.clearInterval(this.interval);
      for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
  "use strict";
  var b = function(c) {
      this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
      }, this._handlers = {
          "prepared.owl.carousel": a.proxy(function(b) {
              this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "add.owl.carousel": a.proxy(function(b) {
              this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
          }, this),
          "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
              this._core.settings.dotsData && this._templates.splice(a.position, 1)
          }, this),
          "change.owl.carousel": a.proxy(function(a) {
              if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                  var b = this._core.current(),
                      c = this._core.maximum(),
                      d = this._core.minimum();
                  a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
              }
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              "position" == a.property.name && this.draw()
          }, this),
          "refreshed.owl.carousel": a.proxy(function() {
              this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
          }, this)
      }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  b.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls"
  }, b.prototype.initialize = function() {
      var b, c, d = this._core.settings;
      d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
          var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
          b.preventDefault(), this.to(c, d.dotsSpeed)
      }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
          this.prev(d.navSpeed)
      }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
          this.next(d.navSpeed)
      }, this));
      for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
  }, b.prototype.destroy = function() {
      var a, b, c, d;
      for (a in this._handlers) this.$element.off(a, this._handlers[a]);
      for (b in this._controls) this._controls[b].remove();
      for (d in this.overides) this._core[d] = this._overrides[d];
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, b.prototype.update = function() {
      var a, b, c, d = this._core.settings,
          e = this._core.clones().length / 2,
          f = e + this._core.items().length,
          g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
      if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
          for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
              start: a - e,
              end: a - e + g - 1
          }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
  }, b.prototype.draw = function() {
      var b, c, d = "",
          e = this._core.settings,
          f = (this._core.$stage.children(), this._core.relative(this._core.current()));
      if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
          if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
              for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
              this._controls.$indicators.html(d)
          } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
          this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
      }
      this._controls.$indicators.toggle(e.dots)
  }, b.prototype.onTrigger = function(b) {
      var c = this._core.settings;
      b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
      }
  }, b.prototype.current = function() {
      var b = this._core.relative(this._core.current());
      return a.grep(this._pages, function(a) {
          return a.start <= b && a.end >= b
      }).pop()
  }, b.prototype.getPosition = function(b) {
      var c, d, e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, b.prototype.next = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, b.prototype.prev = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, b.prototype.to = function(b, c, d) {
      var e;
      d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
  "use strict";
  var c = function(d) {
      this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": a.proxy(function() {
              "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
              this._hashes[c] = b.content
          }, this)
      }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
          var a = b.location.hash.substring(1),
              c = this._core.$stage.children(),
              d = this._hashes[a] && c.index(this._hashes[a]) || 0;
          return a ? void this._core.to(d, !1, !0) : !1
      }, this))
  };
  c.Defaults = {
      URLhashListener: !1
  }, c.prototype.destroy = function() {
      var c, d;
      a(b).off("hashchange.owl.navigation");
      for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
      for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);




/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});
//# sourceMappingURL=popper.min.js.map



    
    /*!
     * SlickNav Responsive Mobile Menu v1.0.10
     * (c) 2016 Josh Cope
     * licensed under MIT
     */
    !(function (e, t, n) {
      function a(t, n) {
        (this.element = t),
          (this.settings = e.extend({}, i, n)),
          this.settings.duplicate ||
            n.hasOwnProperty("removeIds") ||
            (this.settings.removeIds = !1),
          (this._defaults = i),
          (this._name = s),
          this.init();
      }
      var i = {
          label: "",
          duplicate: !0,
          duration: 200,
          easingOpen: "swing",
          easingClose: "swing",
          closedSymbol: "&#9658;",
          openedSymbol: "&#9660;",
          prependTo: "body",
          appendTo: "",
          parentTag: "a",
          closeOnClick: !1,
          allowParentLinks: !1,
          nestedParentLinks: !0,
          showChildren: !1,
          removeIds: !0,
          removeClasses: !1,
          removeStyles: !1,
          brand: "",
          animations: "jquery",
          init: function () {},
          beforeOpen: function () {},
          beforeClose: function () {},
          afterOpen: function () {},
          afterClose: function () {},
        },
        s = "slicknav",
        o = "slicknav",
        l = {
          DOWN: 40,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        };
      (a.prototype.init = function () {
        var n,
          a,
          i = this,
          s = e(this.element),
          r = this.settings;
        if (
          (r.duplicate ? (i.mobileNav = s.clone()) : (i.mobileNav = s),
          r.removeIds &&
            (i.mobileNav.removeAttr("id"),
            i.mobileNav.find("*").each(function (t, n) {
              e(n).removeAttr("id");
            })),
          r.removeClasses &&
            (i.mobileNav.removeAttr("class"),
            i.mobileNav.find("*").each(function (t, n) {
              e(n).removeAttr("class");
            })),
          r.removeStyles &&
            (i.mobileNav.removeAttr("style"),
            i.mobileNav.find("*").each(function (t, n) {
              e(n).removeAttr("style");
            })),
          (n = o + "_icon"),
          "" === r.label && (n += " " + o + "_no-text"),
          "a" == r.parentTag && (r.parentTag = 'a href="#"'),
          i.mobileNav.attr("class", o + "_nav"),
          (a = e('<div class="' + o + '_menu"></div>')),
          "" !== r.brand)
        ) {
          var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
          e(a).append(c);
        }
        (i.btn = e(
          [
            "<" +
              r.parentTag +
              ' aria-haspopup="true" role="button" tabindex="0" class="' +
              o +
              "_btn " +
              o +
              '_collapsed">',
            '<span class="' + o + '_menutxt">' + r.label + "</span>",
            '<span class="' + n + '">',
            '<span class="' + o + '_icon-bar"></span>',
            '<span class="' + o + '_icon-bar"></span>',
            '<span class="' + o + '_icon-bar"></span>',
            "</span>",
            "</" + r.parentTag + ">",
          ].join("")
        )),
          e(a).append(i.btn),
          "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a),
          a.append(i.mobileNav);
        var p = i.mobileNav.find("li");
        e(p).each(function () {
          var t = e(this),
            n = {};
          if (
            ((n.children = t.children("ul").attr("role", "menu")),
            t.data("menu", n),
            n.children.length > 0)
          ) {
            var a = t.contents(),
              s = !1,
              l = [];
            e(a).each(function () {
              return e(this).is("ul")
                ? !1
                : (l.push(this), void (e(this).is("a") && (s = !0)));
            });
            var c = e(
              "<" +
                r.parentTag +
                ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
                o +
                '_item"/>'
            );
            if (r.allowParentLinks && !r.nestedParentLinks && s)
              e(l)
                .wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>')
                .parent();
            else {
              var p = e(l).wrapAll(c).parent();
              p.addClass(o + "_row");
            }
            r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"),
              t.addClass(o + "_parent");
            var d = e(
              '<span class="' +
                o +
                '_arrow">' +
                (r.showChildren ? r.openedSymbol : r.closedSymbol) +
                "</span>"
            );
            r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()),
              e(l).last().after(d);
          } else 0 === t.children().length && t.addClass(o + "_txtnode");
          t
            .children("a")
            .attr("role", "menuitem")
            .click(function (t) {
              r.closeOnClick &&
                !e(t.target)
                  .parent()
                  .closest("li")
                  .hasClass(o + "_parent") &&
                e(i.btn).click();
            }),
            r.closeOnClick &&
              r.allowParentLinks &&
              (t
                .children("a")
                .children("a")
                .click(function (t) {
                  e(i.btn).click();
                }),
              t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) {
                e(i.btn).click();
              }));
        }),
          e(p).each(function () {
            var t = e(this).data("menu");
            r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
          }),
          i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
          i.mobileNav.attr("role", "menu"),
          e(t).mousedown(function () {
            i._outlines(!1);
          }),
          e(t).keyup(function () {
            i._outlines(!0);
          }),
          e(i.btn).click(function (e) {
            e.preventDefault(), i._menuToggle();
          }),
          i.mobileNav.on("click", "." + o + "_item", function (t) {
            t.preventDefault(), i._itemClick(e(this));
          }),
          e(i.btn).keydown(function (t) {
            var n = t || event;
            switch (n.keyCode) {
              case l.ENTER:
              case l.SPACE:
              case l.DOWN:
                t.preventDefault(),
                  (n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open")) ||
                    i._menuToggle(),
                  e(i.btn).next().find('[role="menuitem"]').first().focus();
            }
          }),
          i.mobileNav.on("keydown", "." + o + "_item", function (t) {
            var n = t || event;
            switch (n.keyCode) {
              case l.ENTER:
                t.preventDefault(), i._itemClick(e(t.target));
                break;
              case l.RIGHT:
                t.preventDefault(),
                  e(t.target)
                    .parent()
                    .hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
                  e(t.target).next().find('[role="menuitem"]').first().focus();
            }
          }),
          i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
            var n = t || event;
            switch (n.keyCode) {
              case l.DOWN:
                t.preventDefault();
                var a = e(t.target)
                    .parent()
                    .parent()
                    .children()
                    .children('[role="menuitem"]:visible'),
                  s = a.index(t.target),
                  r = s + 1;
                a.length <= r && (r = 0);
                var c = a.eq(r);
                c.focus();
                break;
              case l.UP:
                t.preventDefault();
                var a = e(t.target)
                    .parent()
                    .parent()
                    .children()
                    .children('[role="menuitem"]:visible'),
                  s = a.index(t.target),
                  c = a.eq(s - 1);
                c.focus();
                break;
              case l.LEFT:
                if (
                  (t.preventDefault(),
                  e(t.target)
                    .parent()
                    .parent()
                    .parent()
                    .hasClass(o + "_open"))
                ) {
                  var p = e(t.target).parent().parent().prev();
                  p.focus(), i._itemClick(p);
                } else
                  e(t.target)
                    .parent()
                    .parent()
                    .hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
                break;
              case l.ESCAPE:
                t.preventDefault(), i._menuToggle(), e(i.btn).focus();
            }
          }),
          r.allowParentLinks &&
            r.nestedParentLinks &&
            e("." + o + "_item a").click(function (e) {
              e.stopImmediatePropagation();
            });
      }),
        (a.prototype._menuToggle = function (e) {
          var t = this,
            n = t.btn,
            a = t.mobileNav;
          n.hasClass(o + "_collapsed")
            ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open"))
            : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")),
            n.addClass(o + "_animating"),
            t._visibilityToggle(a, n.parent(), !0, n);
        }),
        (a.prototype._itemClick = function (e) {
          var t = this,
            n = t.settings,
            a = e.data("menu");
          a ||
            ((a = {}),
            (a.arrow = e.children("." + o + "_arrow")),
            (a.ul = e.next("ul")),
            (a.parent = e.parent()),
            a.parent.hasClass(o + "_parent-link") &&
              ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
            e.data("menu", a)),
            a.parent.hasClass(o + "_collapsed")
              ? (a.arrow.html(n.openedSymbol),
                a.parent.removeClass(o + "_collapsed"),
                a.parent.addClass(o + "_open"),
                a.parent.addClass(o + "_animating"),
                t._visibilityToggle(a.ul, a.parent, !0, e))
              : (a.arrow.html(n.closedSymbol),
                a.parent.addClass(o + "_collapsed"),
                a.parent.removeClass(o + "_open"),
                a.parent.addClass(o + "_animating"),
                t._visibilityToggle(a.ul, a.parent, !0, e));
        }),
        (a.prototype._visibilityToggle = function (t, n, a, i, s) {
          function l(t, n) {
            e(t).removeClass(o + "_animating"),
              e(n).removeClass(o + "_animating"),
              s || p.afterOpen(t);
          }
          function r(n, a) {
            t.attr("aria-hidden", "true"),
              d.attr("tabindex", "-1"),
              c._setVisAttr(t, !0),
              t.hide(),
              e(n).removeClass(o + "_animating"),
              e(a).removeClass(o + "_animating"),
              s ? "init" == n && p.init() : p.afterClose(n);
          }
          var c = this,
            p = c.settings,
            d = c._getActionItems(t),
            u = 0;
          a && (u = p.duration),
            t.hasClass(o + "_hidden")
              ? (t.removeClass(o + "_hidden"),
                s || p.beforeOpen(i),
                "jquery" === p.animations
                  ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
                      l(i, n);
                    })
                  : "velocity" === p.animations &&
                    t.velocity("finish").velocity("slideDown", {
                      duration: u,
                      easing: p.easingOpen,
                      complete: function () {
                        l(i, n);
                      },
                    }),
                t.attr("aria-hidden", "false"),
                d.attr("tabindex", "0"),
                c._setVisAttr(t, !1))
              : (t.addClass(o + "_hidden"),
                s || p.beforeClose(i),
                "jquery" === p.animations
                  ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
                      r(i, n);
                    })
                  : "velocity" === p.animations &&
                    t.velocity("finish").velocity("slideUp", {
                      duration: u,
                      easing: p.easingClose,
                      complete: function () {
                        r(i, n);
                      },
                    }));
        }),
        (a.prototype._setVisAttr = function (t, n) {
          var a = this,
            i = t
              .children("li")
              .children("ul")
              .not("." + o + "_hidden");
          n
            ? i.each(function () {
                var t = e(this);
                t.attr("aria-hidden", "true");
                var i = a._getActionItems(t);
                i.attr("tabindex", "-1"), a._setVisAttr(t, n);
              })
            : i.each(function () {
                var t = e(this);
                t.attr("aria-hidden", "false");
                var i = a._getActionItems(t);
                i.attr("tabindex", "0"), a._setVisAttr(t, n);
              });
        }),
        (a.prototype._getActionItems = function (e) {
          var t = e.data("menu");
          if (!t) {
            t = {};
            var n = e.children("li"),
              a = n.find("a");
            (t.links = a.add(n.find("." + o + "_item"))), e.data("menu", t);
          }
          return t.links;
        }),
        (a.prototype._outlines = function (t) {
          t
            ? e("." + o + "_item, ." + o + "_btn").css("outline", "")
            : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
        }),
        (a.prototype.toggle = function () {
          var e = this;
          e._menuToggle();
        }),
        (a.prototype.open = function () {
          var e = this;
          e.btn.hasClass(o + "_collapsed") && e._menuToggle();
        }),
        (a.prototype.close = function () {
          var e = this;
          e.btn.hasClass(o + "_open") && e._menuToggle();
        }),
        (e.fn[s] = function (t) {
          var n = arguments;
          if (void 0 === t || "object" == typeof t)
            return this.each(function () {
              e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t));
            });
          if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var i;
            return (
              this.each(function () {
                var o = e.data(this, "plugin_" + s);
                o instanceof a &&
                  "function" == typeof o[t] &&
                  (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
              }),
              void 0 !== i ? i : this
            );
          }
        });
    })(jQuery, document, window);


// Jquery Steller JS //
;(function($, window, document, undefined) {

	var pluginName = 'stellar',
		defaults = {
			scrollProperty: 'scroll',
			positionProperty: 'position',
			horizontalScrolling: true,
			verticalScrolling: true,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			hideDistantElements: true,
			hideElement: function($elem) { $elem.hide(); },
			showElement: function($elem) { $elem.show(); }
		},

		scrollProperty = {
			scroll: {
				getLeft: function($elem) { return $elem.scrollLeft(); },
				setLeft: function($elem, val) { $elem.scrollLeft(val); },

				getTop: function($elem) { return $elem.scrollTop();	},
				setTop: function($elem, val) { $elem.scrollTop(val); }
			},
			position: {
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
			},
			margin: {
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
			},
			transform: {
				getLeft: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
				},
				getTop: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
				}
			}
		},

		positionProperty = {
			position: {
				setLeft: function($elem, left) { $elem.css('left', left); },
				setTop: function($elem, top) { $elem.css('top', top); }
			},
			transform: {
				setPosition: function($elem, left, startingLeft, top, startingTop) {
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}
			}
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function() {
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

			for (prop in style) {
				if (prefixes.test(prop)) {
					prefix = prop.match(prefixes)[0];
					break;
				}
			}

			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

			return function(property) {
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
			};
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem, x, y) {
				$elem.css({
					'background-position-x': x,
					'background-position-y': y
				});
			} :
			function($elem, x, y) {
				$elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem) {
				return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
				];
			} :
			function($elem) {
				return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
		);

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

			this._defineElements();
			this._defineGetters();
			this._defineSetters();
			this._handleWindowLoadAndResize();
			this._detectViewport();

			this.refresh({ firstLoad: true });

			if (this.options.scrollProperty === 'scroll') {
				this._handleScrollEvent();
			} else {
				this._startAnimationLoop();
			}
		},
		_defineElements: function() {
			if (this.element === document.body) this.element = window;
			this.$scrollElement = $(this.element);
			this.$element = (this.element === window ? $('body') : this.$scrollElement);
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},
		_defineGetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

			this._getScrollLeft = function() {
				return scrollPropertyAdapter.getLeft(self.$scrollElement);
			};

			this._getScrollTop = function() {
				return scrollPropertyAdapter.getTop(self.$scrollElement);
			};
		},
		_defineSetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
				setScrollLeft(self.$scrollElement, val);
			} : $.noop);

			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
				setScrollTop(self.$scrollElement, val);
			} : $.noop);

			this._setPosition = positionPropertyAdapter.setPosition ||
				function($elem, left, startingLeft, top, startingTop) {
					if (self.options.horizontalScrolling) {
						positionPropertyAdapter.setLeft($elem, left, startingLeft);
					}

					if (self.options.verticalScrolling) {
						positionPropertyAdapter.setTop($elem, top, startingTop);
					}
				};
		},
		_handleWindowLoadAndResize: function() {
			var self = this,
				$window = $(window);

			if (self.options.responsive) {
				$window.bind('load.' + this.name, function() {
					self.refresh();
				});
			}

			$window.bind('resize.' + this.name, function() {
				self._detectViewport();

				if (self.options.responsive) {
					self.refresh();
				}
			});
		},
		refresh: function(options) {
			var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

			if (!options || !options.firstLoad) {
				this._reset();
			}

			this._setScrollLeft(0);
			this._setScrollTop(0);

			this._setOffsets();
			this._findParticles();
			this._findBackgrounds();

			// Fix for WebKit background rendering bug
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
				$(window).load(function() {
					var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

					self._setScrollLeft(oldLeft + 1);
					self._setScrollTop(oldTop + 1);

					self._setScrollLeft(oldLeft);
					self._setScrollTop(oldTop);
				});
			}

			this._setScrollLeft(oldLeft);
			this._setScrollTop(oldTop);
		},
		_detectViewport: function() {
			var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

			this.viewportWidth = this.$viewportElement.width();
			this.viewportHeight = this.$viewportElement.height();

			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
		},
		_findParticles: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

			if (this.particles !== undefined) {
				for (var i = this.particles.length - 1; i >= 0; i--) {
					this.particles[i].$element.data('stellar-elementIsActive', undefined);
				}
			}

			this.particles = [];

			if (!this.options.parallaxElements) return;

			this.$element.find('[data-stellar-ratio]').each(function(i) {
				var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-elementIsActive')) {
					$this.data('stellar-elementIsActive', this);
				} else if ($this.data('stellar-elementIsActive') !== this) {
					return;
				}

				self.options.showElement($this);

				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
				if (!$this.data('stellar-startingLeft')) {
					$this.data('stellar-startingLeft', $this.css('left'));
					$this.data('stellar-startingTop', $this.css('top'));
				} else {
					$this.css('left', $this.data('stellar-startingLeft'));
					$this.css('top', $this.data('stellar-startingTop'));
				}

				positionLeft = $this.position().left;
				positionTop = $this.position().top;

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft;
				offsetTop = $this.offset().top - marginTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				// Add our object to the particles collection
				self.particles.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('position') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingPositionLeft: positionLeft,
					startingPositionTop: positionTop,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
					width: $this.outerWidth(true),
					height: $this.outerHeight(true),
					isHidden: false
				});
			});
		},
		_findBackgrounds: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

			this.backgrounds = [];

			if (!this.options.parallaxBackgrounds) return;

			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

			if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
			}

			$backgroundElements.each(function() {
				var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-backgroundIsActive')) {
					$this.data('stellar-backgroundIsActive', this);
				} else if ($this.data('stellar-backgroundIsActive') !== this) {
					return;
				}

				// Save/restore the original top and left CSS values in case we destroy the instance
				if (!$this.data('stellar-backgroundStartingLeft')) {
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
				} else {
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft - scrollLeft;
				offsetTop = $this.offset().top - marginTop - scrollTop;
				
				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				self.backgrounds.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('background-attachment') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingValueLeft: backgroundPosition[0],
					startingValueTop: backgroundPosition[1],
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,
					startingPositionTop: $this.position().top,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
				});
			});
		},
		_reset: function() {
			var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];
				startingPositionLeft = particle.$element.data('stellar-startingLeft');
				startingPositionTop = particle.$element.data('stellar-startingTop');

				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

				this.options.showElement(particle.$element);

				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}

			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
			}
		},
		destroy: function() {
			this._reset();

			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
			this._animationLoop = $.noop;

			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);
		},
		_setOffsets: function() {
			var self = this,
				$window = $(window);

			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

			if (typeof this.options.horizontalOffset === 'function') {
				this.horizontalOffset = this.options.horizontalOffset();
				$window.bind('resize.horizontal-' + this.name, function() {
					self.horizontalOffset = self.options.horizontalOffset();
				});
			} else {
				this.horizontalOffset = this.options.horizontalOffset;
			}

			if (typeof this.options.verticalOffset === 'function') {
				this.verticalOffset = this.options.verticalOffset();
				$window.bind('resize.vertical-' + this.name, function() {
					self.verticalOffset = self.options.verticalOffset();
				});
			} else {
				this.verticalOffset = this.options.verticalOffset;
			}
		},
		_repositionElements: function() {
			var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

			// First check that the scroll position or container size has changed
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;
			} else {
				this.currentScrollLeft = scrollLeft;
				this.currentScrollTop = scrollTop;
				this.currentWidth = this.viewportWidth;
				this.currentHeight = this.viewportHeight;
			}

			// Reposition elements
			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];

				fixedRatioOffset = (particle.isFixed ? 1 : 0);

				// Calculate position, then calculate what the particle's new offset will be (for visibility check)
				if (this.options.horizontalScrolling) {
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
				} else {
					newPositionLeft = particle.startingPositionLeft;
					newOffsetLeft = particle.startingOffsetLeft;
				}

				if (this.options.verticalScrolling) {
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
				} else {
					newPositionTop = particle.startingPositionTop;
					newOffsetTop = particle.startingOffsetTop;
				}

				// Check visibility
				if (this.options.hideDistantElements) {
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}

				if (isVisibleHorizontal && isVisibleVertical) {
					if (particle.isHidden) {
						this.options.showElement(particle.$element);
						particle.isHidden = false;
					}

					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {
					if (!particle.isHidden) {
						this.options.hideElement(particle.$element);
						particle.isHidden = true;
					}
				}
			}

			// Reposition backgrounds
			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				fixedRatioOffset = (background.isFixed ? 0 : 1);
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

				setBackgroundPosition(background.$element, bgLeft, bgTop);
			}
		},
		_handleScrollEvent: function() {
			var self = this,
				ticking = false;

			var update = function() {
				self._repositionElements();
				ticking = false;
			};

			var requestTick = function() {
				if (!ticking) {
					requestAnimFrame(update);
					ticking = true;
				}
			};
			
			this.$scrollElement.bind('scroll.' + this.name, requestTick);
			requestTick();
		},
		_startAnimationLoop: function() {
			var self = this;

			this._animationLoop = function() {
				requestAnimFrame(self._animationLoop);
				self._repositionElements();
			};
			this._animationLoop();
		}
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

	$[pluginName] = function(options) {
		var $window = $(window);
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
	};

	// Expose the scroll and position property function hashes so they can be extended
	$[pluginName].scrollProperty = scrollProperty;
	$[pluginName].positionProperty = positionProperty;

	// Expose the plugin class so it can be modified
	window.Stellar = Plugin;
}(jQuery, this, document));




/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃƒÂ¡n Sartorio  */
    !function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);






  }
}