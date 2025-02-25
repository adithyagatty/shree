(function ($) {
  "use strict";
  var SOD = {
    init: function () {
      this.onLoad();
      this.resizeListner();
      this.scrollListner();
      this.scrollTo();
      this.loader();
      this.bannerslider();
          this.doctorslider();
          this.commonslider();
          this.videoslider();
      this.accordion();
      this.selectbox();
      this.slider();
      this.newswrap();
      this.navbar();
      //this.counts();
      this.generaltreatments();
      this.productslider();
      this.logos();
      this.gallery();
      this.equalheight();
      this.tooltip();
      this.hideshow();
      //this.datepicker();
    },
    settings: {
      windowWidth: $(window).width(),
      windowheight: $(window).height(),
      scrollTop: $(window).scrollTop(),
      scrollClassTrigger: 70,
    },
    onLoad: function () {
      $(document).ready(function () {});
    },

    navbar: function () {
      $(document).ready(function () {
        // Third Level Nav
        $("ul.dropdown-menu [data-toggle=dropdown]").on(
          "click",
          function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().toggleClass("open");
            $(this).parent().siblings().removeClass("open");
          }
        );
      });
    },

    counts: function () {
      var counted = 0;
      $(window).scroll(function () {
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
          $(".count").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },

              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                },
              }
            );
          });
          counted = 1;
        }
      });
    },

    loader: function () {
      $(window).on("load", function () {
        setTimeout(function () {
          // allowing 3 secs to fade out loader
          $(".page-loader").fadeOut("slow");
        }, 2800);
      });
    },

    gallery: function () {
      // Gallery image hover
      $(".img-wrapper").hover(
        function () {
          $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
        },
        function () {
          $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
        }
      );

      // Lightbox
      var $overlay = $('<div id="overlay"></div>');
      var $image = $("<img>");
      var $prevButton = $(
        '<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'
      );
      var $nextButton = $(
        '<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'
      );
      var $exitButton = $(
        '<div id="exitButton"><i class="fa fa-times"></i></div>'
      );

      // Add overlay
      $overlay
        .append($image)
        .prepend($prevButton)
        .append($nextButton)
        .append($exitButton);
      $("#gallery").append($overlay);

      // Hide overlay on default
      $overlay.hide();

      // When an image is clicked
      $(".img-overlay").click(function (event) {
        // Prevents default behavior
        event.preventDefault();
        // Adds href attribute to variable
        var imageLocation = $(this).prev().attr("href");
        // Add the image src to $image
        $image.attr("src", imageLocation);
        // Fade in the overlay
        $overlay.fadeIn("slow");
      });

      // When the overlay is clicked
      $overlay.click(function () {
        // Fade out the overlay
        $(this).fadeOut("slow");
      });

      // When next button is clicked
      $nextButton.click(function (event) {
        // Hide the current image
        $("#overlay img").hide();
        // Overlay image location
        var $currentImgSrc = $("#overlay img").attr("src");
        // Image with matching location of the overlay image
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        // Finds the next image
        var $nextImg = $($currentImg.closest(".image").next().find("img"));
        // All of the images in the gallery
        var $images = $("#image-gallery img");
        // If there is a next image
        if ($nextImg.length > 0) {
          // Fade in the next image
          $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
          // Otherwise fade in the first image
          $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        // Prevents overlay from being hidden
        event.stopPropagation();
      });

      // When previous button is clicked
      $prevButton.click(function (event) {
        // Hide the current image
        $("#overlay img").hide();
        // Overlay image location
        var $currentImgSrc = $("#overlay img").attr("src");
        // Image with matching location of the overlay image
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        // Finds the next image
        var $nextImg = $($currentImg.closest(".image").prev().find("img"));
        // Fade in the next image
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        // Prevents overlay from being hidden
        event.stopPropagation();
      });

      // When the exit button is clicked
      $exitButton.click(function () {
        // Fade out the overlay
        $("#overlay").fadeOut("slow");
      });
    },

    bannerslider: function () {
      $(".homebanner").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
      });
    },
      commonslider: function () {
          $(".commonslide").slick({
              dots: false,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              responsive: [
                  {
                      breakpoint: 1400,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                      }
                  },
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 767.98,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }

                  // You can unslick at a given breakpoint now by adding:

                  // settings: "unslick"

                  // instead of a settings object

              ]
          });
      },
      videoslider: function () {
          $(".videoslide").slick({
              dots: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                  {
                      breakpoint: 1400,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false,
                      },
                  },
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          dots: false,
                      },
                  },
                  {
                      breakpoint: 767.98,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          dots: false,
                      },
                  },

                  // You can unslick at a given breakpoint now by adding:

                  // settings: "unslick"

                  // instead of a settings object
              ],
          });
      },
    doctorslider: function () {
      $(".doctors").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

          // You can unslick at a given breakpoint now by adding:

          // settings: "unslick"

          // instead of a settings object
        ],
      });
    },

    generaltreatments: function () {
      $(".our-treatments-two").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1199.98,

            settings: {
              slidesToShow: 3,

              slidesToScroll: 3,

              infinite: true,
            },
          },

          {
            breakpoint: 991.98,

            settings: {
              slidesToShow: 2,

              slidesToScroll: 2,
            },
          },

          {
            breakpoint: 480,

            settings: {
              slidesToShow: 1,

              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });
    },

    productslider: function () {
      $(".branches").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

          // You can unslick at a given breakpoint now by adding:

          // settings: "unslick"

          // instead of a settings object
        ],
      });
    },

    logos: function () {
      $(".logoslider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1399.98,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },

          // You can unslick at a given breakpoint now by adding:

          // settings: "unslick"

          // instead of a settings object
        ],
      });
    },

    resizeListner: function () {
      $(window).on("load resize", function () {
        SOD.settings.windowWidth = $(window).width();
      });
    },

    scrollListner: function () {
      $(window).on("load scroll", function () {
        if ($(window).scrollTop() > SOD.settings.scrollClassTrigger) {
          $("body").addClass("scrolled");
        } else {
          $("body").removeClass("scrolled");
        }
      });
      $(window).on("mousewheel DOMMouseScroll", function (event) {
        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        if (wd < 0) {
          $("body").removeClass("scrollingUp");
          $("body").addClass("scrollingDown");
        } else {
          $("body").removeClass("scrollingDown");
          $("body").addClass("scrollingUp");
        }
      });
      $(window).on("load scroll", function () {
        if ($(window).scrollTop() > SOD.settings.scrollClassTrigger) {
          $(".site-header").addClass("fixed");
        } else {
          $(".site-header").removeClass("fixed");
        }
      });
    },

    slider: function () {
      $(".testimonial").slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

          // You can unslick at a given breakpoint now by adding:

          // settings: "unslick"

          // instead of a settings object
        ],
      });
    },

    newswrap: function () {
      $(".news").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

          // You can unslick at a given breakpoint now by adding:

          // settings: "unslick"

          // instead of a settings object
        ],
      });
    },

    tooltip: function () {
      $(document).ready(function () {
        // $('[data-toggle="popover"]').popover();
        $('[data-toggle="popover"]').popover({
          placement: "bottom",
          html: true,
          title:
            '<span style="visibility:hidden;">UserInfo</span><a href="#" class="close" data-dismiss="alert">&times;</a>',
        });
        $(document).on("click", ".popover .close", function () {
          $(this).parents(".popover").popover("hide");
        });
      });
    },

    hideshow: function () {
      $(document).ready(function () {
        $(".btn-wrap").click(function () {
          $(".add--address--section").slideToggle("fast");
        });
      });
    },

    datepicker: function () {
      $(function () {
        $("#datepicker")
          .datepicker({
            autoclose: true,
            todayHighlight: true,
          })
          .datepicker("update", new Date());
      });
    },

    equalheight: function () {
      var highestBox = 0;

      $(".products__listings .product__wrap .product__description").each(
        function () {
          if ($(this).height() > highestBox) {
            highestBox = $(this).height();
          }
        }
      );

      $(".products__listings .product__wrap .product__description").height(
        highestBox
      );
    },

    selectbox: function () {
      $(document).ready(function () {
        $(".js-select2").select2();

        $(".js-select2-multi").select2();

        $(".large").select2({
          dropdownCssClass: "big-drop",
        });
      });
    },

    accordion: function () {
      $(".accordion-item__title").click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass("active")) {
          $this.removeClass("active");
          $this.siblings(".accordion-item__body").slideUp(200);
        } else {
          $(".accordion-item__title").removeClass("active");
          $this.addClass("active");
          $(".accordion-item__body").slideUp(200);
          $this.siblings(".accordion-item__body").slideDown(200);
        }
      });
    },

    scrollTo: function () {
      $(".navigation__link").bind("click", function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        var target = $(this).attr("href"); // Set the target as variable
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target).offset().top,
            },
            600,
            function () {
              location.hash = target; //attach the hash (#jumptarget) to the pageurl
            }
          );
        return false;
      });

      $(window).scroll(function () {
        // Assign active class to nav links while scolling
        $(".page-section").each(function (i) {
          if ($(this).position().top <= scrollTop) {
            $(".navigation a.active").removeClass("active");
            $(".navigation a").eq(i).addClass("active");
          }
        });
      });
    },
  };
  SOD.init();
})(jQuery);
