jQuery(document).ready(function(e){e("#nav-stick").affix({offset:{top:1}});var n=e("#cd-menu-trigger"),s=e(".sliding-content"),i=e("header");n.on("click",function(o){o.preventDefault(),n.toggleClass("is-clicked"),i.toggleClass("lateral-menu-is-open"),s.toggleClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body").toggleClass("overflow-hidden")}),e("#cd-lateral-nav").toggleClass("lateral-menu-is-open"),e("html").hasClass("no-csstransitions")&&e("body").toggleClass("overflow-hidden")}),s.on("click",function(o){e(o.target).is("#cd-menu-trigger, #cd-menu-trigger span")||(n.removeClass("is-clicked"),i.removeClass("lateral-menu-is-open"),s.removeClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body").removeClass("overflow-hidden")}),e("#cd-lateral-nav").removeClass("lateral-menu-is-open"),e("html").hasClass("no-csstransitions")&&e("body").removeClass("overflow-hidden"))}),e(".item-has-children").children("a").on("click",function(n){n.preventDefault(),e(this).toggleClass("submenu-open").next(".sub-menu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").removeClass("submenu-open").next(".sub-menu").slideUp(200)})});