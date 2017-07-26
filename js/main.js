$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.main-carousel').carousel({fullWidth: true});
   $('.main-carousel').carousel('set', 1);
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
     "Dilip Sundarraj"
   ];
   var memberDetails = [
     "Vivek is a firm believer in the power of education as a tool to empower children. As a native of India, Vivek is familiar with the culture and history of India and is committed to EmpowerKids Foundation's activities in India. Vivek holds a Bachelor's degree in Computer Science and Engineering from the National Institute of Technology, Jamshedpur. Vivek is a Software Executive with Equinix and an Executive Committee Member of MIT/Stanford Venture Lab.",
     "Chihiro has extensive experience in managing nonprofit organizations and in providing educational resources to youths. Prior to working at transactional groups of international law firms in Silicon Valley, she taught creative writing, oratory, and test-taking skills to high school and middle school students through various youth empowerment programs. Chihiro holds two bachelor's degrees and a master's degree from Stanford University, and is on the Board of Directors of MIT/Stanford Venture Lab and SV Links.",
     "Dilip is a Silicon Valley engineer, technologist and an aspiring entrepreneur. He has been an active program volunteer with other non-profit organizations in the past. Dilip heads the outreach team at MIT/Stanford Venture Lab and holds both bachelor's and master's degrees in Computer Science. Empowering underprivileged children through education is his passion. He enjoys playing basketball and golf."
   ]
   $(".modal-trigger").click(function(){
     var teamateIndexIn = $(this).attr("data-index");
     $("#team-dtl-mdl-h4").html(teamMember[teamateIndexIn]);
     $("#team-dtl-mdl-p").html(teamMember[memberDetails]);
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
});
