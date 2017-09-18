$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.main-carousel').carousel({fullWidth: true});
   $('.main-carousel').carousel('set', 1);
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   autoplay();
   function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 6000);
    }
   $('.modal').modal();

   /******************** scroll to ************************/
   $('a[href*="#"]')
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
       // On-page links
       if (
         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
         &&
         location.hostname == this.hostname
       ) {
         // Figure out element to scroll to
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
           // Only prevent default if animation is actually gonna happen
           event.preventDefault();
           $('html, body').animate({
             scrollTop: target.offset().top
           }, 1000, function() {
             // Callback after animation
             // Must change focus!
             var $target = $(target);
             $target.focus();
             if ($target.is(":focus")) { // Checking if the target was focused
               return false;
             } else {
               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
             };
           });
         }
       }
     });
     /******************** scroll to ************************/

   var teamMember = [
     "Vivek Kumar",
     "Chihiro Jameson",
     "Puja Venkataraman"
   ];
   var memberDetails = [
     "Vivek is a firm believer in the power of education as a tool to empower children. As a native of India, Vivek is familiar with the culture and history of India and is committed to EmpowerKids Foundation's activities in India. Vivek holds a Bachelor's degree in Computer Science and Engineering from the National Institute of Technology, Jamshedpur. Vivek is a Software Executive with Equinix and an Executive Committee Member of MIT/Stanford Venture Lab.",
     "Chihiro has extensive experience in managing nonprofit organizations and in providing educational resources to youths. Prior to working at transactional groups of international law firms in Silicon Valley, she taught creative writing, oratory, and test-taking skills to high school and middle school students through various youth empowerment programs. Chihiro holds two bachelor's degrees and a master's degree from Stanford University, and is on the Board of Directors of MIT/Stanford Venture Lab and SV Links.",
     "Puja is an HR Professional and enjoys volunteering in meaningful non-profit organizations. Empowering underprivileged children through education is Puja's passion. She will be helping on opportunities to spread our initiatives and goals to help raise funds and donations to help our children gain scholarships and tuition. Her deep interest and concern for meaningful causes span from heading and participating as a team lead for fundraising for organizations such as Autism Speaks, American Cancer Society etc. Puja comes with a Bachelor Degree from Les Roches, Switzerland in International Hospitality Management."
   ]
   $(".modal-trigger").click(function(){
     var teamateIndexIn = $(this).attr("data-index");
     $("#team-dtl-mdl-h4").html(teamMember[teamateIndexIn]);
     $("#team-dtl-mdl-p").html(memberDetails[teamateIndexIn]);
   });
   $("#team-dtl-mdl-cls").click(function(){
       $('#team-dtl-modal').modal('close');
   });
   $('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

  $('.donate').click(function(){
    $("#donation-trigger").click();
  });
  $('.contact-us-trigger').click(function(){
    $('.tap-target').tapTarget('open');
  });
});
