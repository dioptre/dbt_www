$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});

	$("#contactForm1, #contactForm2").submit(function(e){
			e.preventDefault();
			var form = this;
			var email = $("input[name=frmEmail]").val();
			var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			if (!re.test(email)) {
				alert('Bad Email');
			}
			else {
				$.ajax({
					url: "https://hooks.zapier.com/hooks/catch/1746517/601d2b/",
					data: {
						"name": $("input[name=frmName]").val(),
						"email" : $("input[name=frmEmail]").val(),
						"subject" : $("input[name=frmSubject]").val(),
						"message" : $("textarea[name=frmMessage]").val()
					},
					type: "POST",
					dataType: "xml",
					statusCode: {
							0: function() {
									//Success message
							},
							200: function() {
									//Success Message
									alert("Thanks for reaching out! We'll be in contact shortly.")
							}
					},
					complete: function(jqXHR, textStatus) {
						if (textStatus === "error") {
							alert('An error occurred, please try again later.')
						}
					}
				 });
				}
	});


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 37.7797758, lng: -122.4040214},
		    zoom: 20
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});
