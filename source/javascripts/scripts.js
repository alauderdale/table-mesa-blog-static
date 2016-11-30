$(document).ready(function(){
	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});



    ///all the animations!

    // $('.slideinleftonload').viewportChecker({
    // classToAdd: 'fadeIn', // Class to add to the elements when they are visible,
    // classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    // classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
    // removeClassAfterAnimation: false, // Remove added classes after animation has finished
    // offset: [100 OR 10%], // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    // invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
    // repeat: false, // Add the possibility to remove the class if the elements are not visible
    // callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
    // scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    // });


    $('.fadeInOnload').viewportChecker({
        classToAdd: 'fadeIn'
    });

    //menu
    $('.menu-button').click(function() {
        $('#collapse-menu').toggleClass('menu-on'); // hide all shown divs
    });

    // //scroll header
    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();

    //      //>=, not <=
    //     if (scroll >= 500) {
    //         //clearHeader, not clearheader - caps H
    //         $(".logo-and-breadcrumbs").addClass("scrolled");
    //     } else {
    //         $(".logo-and-breadcrumbs").removeClass("scrolled");
    //     }
    // }); //missing );


    ( function( $ ) {
        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {
                //Debugging - Log the current scroll position.
                console.log(data.curTop);

            if (data.curTop >= 500) {
                //clearHeader, not clearheader - caps H
                $(".logo-and-breadcrumbs").addClass("scrolled");
            } else {
                $(".logo-and-breadcrumbs").removeClass("scrolled");
            }

            }
        });
    } )( jQuery );





    // console.log(data.curTop);

});




