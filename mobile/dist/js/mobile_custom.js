//========================= GLOBAL ================


//======= SCROLL TOP ON REFRESH =======
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});


//========================= PAGE LOAD ================
$(document).ready(function() {

if (document.documentElement.clientWidth < 768) {


	// VARIABLES			
	var hiddenNav = false;


//========================= HIDDEN NAV ================
	$("#mobileMenu").on("tap", function(event){
		event.preventDefault();
		console.log("mobile menu click");
		if(hiddenNav == false){
			openHiddenNav();
		}else if(hiddenNav == true){
			closeHiddenNav();
		}
	});

	function openHiddenNav(){
			$("#hiddenMenu").css("display","block");
			$("#hiddenMenu nav").css("visibility","visible");
			$("#hiddenMenu nav").animate({opacity:1});
			hiddenNav = true;
	}	

	function closeHiddenNav(){
		$("#hiddenMenu nav").animate({opacity:0},function(){
			$("#hiddenMenu nav").css("visibility","hidden");	
			$("#hiddenMenu").css("display","none");
		});		
		hiddenNav = false;
	};


//========================= SHOW HIDE NAV TOP ================
	var state = "up";
	var threshold = $("#fma").height();
	
	$(document).scroll(function(){
		var offset = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
		if(offset >= threshold && state == "up"){
			animateIn();
		};
		
		if(offset < threshold && state == "down"){
			animateOut();
		};
	});
	
	
	function animateIn(){
		state = "down";
		$("#navSection").stop(true);
		$("#navSection").animate({top : '0px'}, 500, 'easeOutExpo');
	};

	function animateOut(){
		state = "up";
		$("#navSection").stop(true);
		$("#navSection").animate({top : '-10vh'}, 500, 'easeOutExpo');
		$("#hiddenMenu nav").animate({opacity:0},function(){
			$("#hiddenMenu nav").css("visibility","hidden");			
		});
		hiddenNav = false;
	};

		// FUNCTIONS
	$(window).resize(function() {
		threshold = $("#fma").height();
	});


//========================= NAVIGATION ================

//========================= NAV EASING - INDIVIDUAL ================
	$('#logo a').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");	
		hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#fma").offset().top}, 2000, "easeInOutExpo",function(){
			closeHiddenNav();			
		}); 
	});

	$('#navAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		hideButtons();
		$('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateAbout();
			closeHiddenNav();			
		}); 
	});
	
	$('#navCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCrisis();
			closeHiddenNav();			
		}); 
	});
	
	$('#navProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");	
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateProduct();
			closeHiddenNav();			
		}); 
	});
	
	$('#navCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		hideButtons();		
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCause();
			closeHiddenNav();			
		}); 
	});
	
	$('#navFooter').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		hideButtons();		
	    $('html, body').stop(true).animate({scrollTop:$("#footerSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateFooter();
			closeHiddenNav();			
		}); 
	});


//========================= NAV UP ARROWS ================
	$('#arrowUpFma').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : FMA");		
	    $('html, body').stop(true).animate({scrollTop:$("#fma").offset().top}, 1500, "easeInOutExpo",function(){
			closeHiddenNav();			
		}); 
	});

	$('#arrowUpAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
	    $('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateAbout();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowUpCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CRISIS");		
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCrisis();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowUpProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : PRODUCT");		
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateProduct();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowUpCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CAUSE");		
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCause();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowScrollTop').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CONTACT");		
	    $('html, body').stop(true).animate({scrollTop:0}, 1500, "easeInOutExpo",function(){
			closeHiddenNav();			
		}); 
	});

	
//========================= NAV DOWN ARROWS ================
	$('#arrowDownAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");	
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateAbout();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowDownCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCrisis();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowDownProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateProduct();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowDownCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateCause();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowDownFooter').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#footerSection").offset().top}, 1500, "easeInOutExpo",function(){
			animateFooter();
			closeHiddenNav();			
		}); 
	});





	// FUNCTIONS
//========================= SNOWING ================
window.onload = function(){
	//canvas init
	var canvas = document.getElementById("snowCanvas");
	var ctx = canvas.getContext("2d");
	
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//snowflake particles
	var mp = 75; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*3+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}



//========================= ANIMATE SECTIONS ================

	//========================= ANIMATE ABOUT ================
	var aboutSectionArray  = $("#aboutSection").children();

	function animateAbout(){
		for(i=0;i<aboutSectionArray.length;i++){
			$(aboutSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= CRISIS ABOUT ================
	var crisisSectionArray  = $("#crisisSection").children();

	function animateCrisis(){
		for(i=0;i<crisisSectionArray.length;i++){
			$(crisisSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= PRODUCT ABOUT ================
	var productSectionArray  = $("#productSection").children();

	function animateProduct(){
		for(i=0;i<productSectionArray.length;i++){
			$(productSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= CAUSE ABOUT ================
	var causeSectionArray  = $("#causeSection").children();

	function animateCause(){
		for(i=0;i<causeSectionArray.length;i++){
			$(causeSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= FOOTER ABOUT ================
	var footerSectionArray  = $("#footerSection").children();

	function animateFooter(){
		for(i=0;i<footerSectionArray.length;i++){
			$(footerSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};




//========================= HIDDEN CONTENT HANDLERS ================
	var hiddenActive = false;	
	var hiddenMore = false;	

	$(".closeButton, .doneButton").on("tap", function(event){
		event.preventDefault();
		$(".hiddenContent").css("overflow","hidden");
		$(".hiddenContent").stop(true).animate({scrollTop:0},500,function(){
			hideButtons();		
		});
	});

	//========================= EXPAND CONTENT ================
	$("#aboutContent .moreButton, #crisisContent .moreButton, #productContent .moreButton, #causeContent .moreButton").on("tap", function(){
		console.log("more button open");
		if(hiddenMore == false){
			openHiddenContent();
		}else if(hiddenMore == true){
			closeHiddenContent();
		}
	});


	function openHiddenContent(){
		$(".hiddenContent").css("overflow","scroll");
		$(".closeButton h2").animate({opacity:1},1000);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"11vh",height:"80vh"},1000,"easeInExpo",function(){
			$(".moreContent").animate({opacity:1},1000);
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","scroll").css("zIndex","50");
			$(".moreButton").animate({opacity:0},750);
			$(".normContent").css("display","none");
		});
		hiddenMore = true;
	};

	function closeHiddenContent(){
		$(".hiddenContent").css("overflow","hidden");
		$(".closeButton h2").animate({opacity:0},750);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"35vh",height:"42vh"},1000,"easeInExpo",function(){
			$(".moreContent").animate({opacity:0},750);
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","hidden");
			$(".moreButton").animate({opacity:1},1000)
			$(".normContent").css("display","block");
		});
		hiddenMore = false;
	};



//========================= LANDING FMA - MOBILE  ================
	function startMobile(){
		$("#logoDrop").stop(true).delay(0).animate({top:"43%", opacity:1},1750,"easeInOutExpo");
		$("#logoText").stop(true).delay(650).animate({opacity:1},1750,"easeInOutExpo");
		$("#fmaCloudOne").stop(true).delay(1200).animate({opacity:.95},2500);
		$("#fmaCloudTwo").stop(true).delay(1200).animate({opacity:.5},2500);
		$("#fmaCloudThree").stop(true).delay(1200).animate({opacity:.7},2500);
		$("#fmaCloudFour").stop(true).delay(1200).animate({opacity:.3},2500);
		$("#loadColor").stop(true).delay(1750).animate({opacity:0},2500)		
		$("#snowCanvas").stop(true).delay(2200).animate({opacity:1},8000);
		$("#arrowDownAbout").stop(true).delay(3000).animate({opacity:1},1000);
		flashArrow();
	};

//if (document.documentElement.clientWidth < 767) {
	startMobile();
//}

	function flashArrow(){
		$("#arrowDownAbout").delay(100).animate({opacity:.3},1000).delay(100).animate({opacity:1},750);
		flashArrow();
	};


//========================= SHOW / HIDE HIDDEN CONTENT  ================

	
	function showButtons(){
		hiddenActive = true;		
		$(".closeButton h2").stop(true).animate({opacity:1},500)			
	};

	function hideButtons(){
		hiddenActive = false;		
		hiddenMore = false;	
		$(".moreContent").animate({opacity:0},750);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"37vh",height:"42vh"},1000,function(){
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","hidden");
			$(".closeButton h2").stop(true).animate({opacity:0},750);
			$(".moreButton").stop(true).animate({opacity:1},1000);
			$(".normContent").css("display","block");
		});
	};


} // CLOSE MOBILE RESPONSIVE

});
//========================= GLOBAL ================


//======= SCROLL TOP ON REFRESH =======
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});


//========================= PAGE LOAD ================
$(document).ready(function() {

if (document.documentElement.clientWidth > 767) {


	$('body').bind('touchmove', function(e){
		e.preventDefault()
	});


	// VARIABLES			
	var hiddenNav = false;


//========================= HIDDEN NAV ================
	$("#mobileMenu").on("tap", function(event){
		event.preventDefault();
		console.log("mobile menu click");
		if(hiddenNav == false){
			openHiddenNav();
		}else if(hiddenNav == true){
			closeHiddenNav();
		}
	});

	function openHiddenNav(){
			$("#hiddenMenu").css("display","block");
			$("#hiddenMenu nav").css("visibility","visible");
			$("#hiddenMenu nav").animate({opacity:1});
			hiddenNav = true;
	}	

	function closeHiddenNav(){
		$("#hiddenMenu nav").animate({opacity:0},function(){
			$("#hiddenMenu nav").css("visibility","hidden");	
			$("#hiddenMenu").css("display","none");
		});		
		hiddenNav = false;
	};


//========================= SHOW HIDE NAV TOP ================
	var state = "up";
	var threshold = $("#fma").height();
	
	$(document).scroll(function(){
		var offset = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
		if(offset >= threshold && state == "up"){
			animateIn();
		};
		
		if(offset < threshold && state == "down"){
			animateOut();
		};
	});
	
	
	function animateIn(){
		state = "down";
		$("#navSection").stop(true);
		$("#navSection").animate({top : '0px'}, 500, 'easeOutExpo');
	};

	function animateOut(){
		state = "up";
		$("#navSection").stop(true);
		$("#navSection").animate({top : '-10vh'}, 500, 'easeOutExpo');
		$("#hiddenMenu nav").animate({opacity:0},function(){
			$("#hiddenMenu nav").css("visibility","hidden");			
		});
		hiddenNav = false;
	};

		// FUNCTIONS
	$(window).resize(function() {
		threshold = $("#fma").height();
	});




//========================= NAVIGATION ================

//========================= NAV EASING - INDIVIDUAL ================
	$('#logo a').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");	
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#fma").offset().top+15}, 2000, "easeInOutExpo",function(){
			closeHiddenNav();			
		}); 
	});

	$('#navAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		//hideButtons();
		$('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateAbout();
			closeHiddenNav();			
		}); 
	});
	
	$('#navCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCrisis();
			closeHiddenNav();			
		}); 
	});
	
	$('#navProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");	
		//hideButtons();	
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateProduct();
			closeHiddenNav();			
		}); 
	});
	
	$('#navCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		//hideButtons();		
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCause();
			closeHiddenNav();			
		}); 
	});
	
	$('#navFooter').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");
		//hideButtons();		
	    $('html, body').stop(true).animate({scrollTop:$("#footerSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateFooter();
			closeHiddenNav();			
		}); 
	});


//========================= NAV UP ARROWS ================
	$('#arrowUpFma').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : FMA");	
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#fma").offset().top+15}, 1500, "easeInOutExpo",function(){
			closeHiddenNav();
		}); 
	});

	$('#arrowUpAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateAbout();
			closeHiddenNav();
		}); 
	});
	
	$('#arrowUpCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CRISIS");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCrisis();
			closeHiddenNav();	
		}); 
	});
	
	$('#arrowUpProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : PRODUCT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateProduct();
			closeHiddenNav();	
		}); 
	});
	
	$('#arrowUpCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CAUSE");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCause();
			closeHiddenNav();
		}); 
	});
	
	$('#arrowScrollTop').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : CONTACT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:0}, 1500, "easeInOutExpo",function(){
			closeHiddenNav();
		}); 
	});

	
//========================= NAV DOWN ARROWS ================
	$('#arrowDownAbout').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#aboutSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateAbout();
			closeHiddenNav();	
		}); 
	});
	
	$('#arrowDownCrisis').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#crisisSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCrisis();
			closeHiddenNav();
		}); 
	});
	
	$('#arrowDownProduct').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#productSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateProduct();
			closeHiddenNav();
		}); 
	});
	
	$('#arrowDownCause').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#causeSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateCause();
			closeHiddenNav();			
		}); 
	});
	
	$('#arrowDownFooter').on("tap",function(event){
		event.preventDefault();
		console.log("Arrow : ABOUT");		
		$(".hiddenContent").css("overflow","hidden");
		//hideButtons();
	    $('html, body').stop(true).animate({scrollTop:$("#footerSection").offset().top+15}, 1500, "easeInOutExpo",function(){
			//animateFooter();
			closeHiddenNav();
		}); 
	});



	// FUNCTIONS
//========================= SNOWING ================
window.onload = function(){
	//canvas init
	var canvas = document.getElementById("snowCanvas");
	var ctx = canvas.getContext("2d");
	
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//snowflake particles
	var mp = 75; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*3+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}



//========================= ANIMATE SECTIONS ================

	//========================= ANIMATE ABOUT ================
	var aboutSectionArray  = $("#aboutSection").children();

	function animateAbout(){
		for(i=0;i<aboutSectionArray.length;i++){
			$(aboutSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= CRISIS ABOUT ================
	var crisisSectionArray  = $("#crisisSection").children();

	function animateCrisis(){
		for(i=0;i<crisisSectionArray.length;i++){
			$(crisisSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= PRODUCT ABOUT ================
	var productSectionArray  = $("#productSection").children();

	function animateProduct(){
		for(i=0;i<productSectionArray.length;i++){
			$(productSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= CAUSE ABOUT ================
	var causeSectionArray  = $("#causeSection").children();

	function animateCause(){
		for(i=0;i<causeSectionArray.length;i++){
			$(causeSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};


	//========================= FOOTER ABOUT ================
	var footerSectionArray  = $("#footerSection").children();

	function animateFooter(){
		for(i=0;i<footerSectionArray.length;i++){
			$(footerSectionArray[i]).stop(true).delay(250*i).animate({
				opacity:1
			},1000)		
		};	
	};




//========================= HIDDEN CONTENT HANDLERS ================
	var hiddenActive = false;	
	var hiddenMore = false;	

	$(".closeButton, .doneButton").on("tap", function(event){
		event.preventDefault();
		$(".hiddenContent").css("overflow","hidden");
		$(".hiddenContent").stop(true).animate({scrollTop:0},500,function(){
			hideButtons();		
		});
	});

	//========================= EXPAND CONTENT ================
	$("#aboutContent .moreButton, #crisisContent .moreButton, #productContent .moreButton, #causeContent .moreButton").on("tap", function(){
		console.log("more button open");
		if(hiddenMore == false){
			openHiddenContent();
		}else if(hiddenMore == true){
			closeHiddenContent();
		}
	});


	function openHiddenContent(){
		//$("body").unbind('touchmove');
		//$("#aboutContent .hiddenContent, #crisisContent .hiddenContent, #productContent .hiddenContent, #causeContent .hiddenContent").unbind('touchmove');
		//$("#aboutContent, #crisisContent, #productContent, #causeContent").unbind('touchmove');

		
		$(".closeButton h2").animate({opacity:1},1000);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"16vh",height:"70vh"},1000,"easeInExpo",function(){
			$(".moreContent").animate({opacity:1},1000);
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","scroll").css("zIndex","50");
			$(".moreButton").animate({opacity:0},750);
		});
		hiddenMore = true;
	};

	function closeHiddenContent(){
		//$('body').bind('touchmove', function(e){e.preventDefault()});
		//$("#aboutContent, #crisisContent, #productContent, #causeContent").unbind('touchmove');

		$(".closeButton h2").animate({opacity:0},750);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"40%",height:"45vh"},1000,"easeInExpo",function(){
			$(".moreContent").animate({opacity:0},750);
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","hidden");
			$(".moreButton").animate({opacity:1},1000)
		});
		hiddenMore = false;
	};



//========================= LANDING FMA - MOBILE  ================
	function startMobile(){
		$("#logoDrop").stop(true).delay(0).animate({top:"43%", opacity:1},1750,"easeInOutExpo");
		$("#logoText").stop(true).delay(650).animate({opacity:1},1750,"easeInOutExpo");
		$("#fmaCloudOne").stop(true).delay(1200).animate({opacity:.95},2500);
		$("#fmaCloudTwo").stop(true).delay(1200).animate({opacity:.5},2500);
		$("#fmaCloudThree").stop(true).delay(1200).animate({opacity:.7},2500);
		$("#fmaCloudFour").stop(true).delay(1200).animate({opacity:.3},2500);
		$("#loadColor").stop(true).delay(1750).animate({opacity:0},2500)		
		$("#snowCanvas").stop(true).delay(2200).animate({opacity:1},8000);
		$("#arrowDownAbout").stop(true).delay(3000).animate({opacity:1},1000);
		flashArrow();
	};

//if (document.documentElement.clientWidth < 767) {
	startMobile();
//}

	function flashArrow(){
		$("#arrowDownAbout").delay(100).animate({opacity:.3},1000).delay(100).animate({opacity:1},750);
		flashArrow();
	};


//========================= SHOW / HIDE HIDDEN CONTENT  ================

	
	function showButtons(){
		hiddenActive = true;		
		$(".closeButton h2").stop(true).animate({opacity:1},500)			
	};

	function hideButtons(){
		hiddenActive = false;		
		hiddenMore = false;	
		$(".moreContent").animate({opacity:0},750);
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({top:"40vh",height:"45vh"},1000,function(){
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","hidden");
			$(".closeButton h2").stop(true).animate({opacity:0},750);
			$(".moreButton").stop(true).animate({opacity:1},1000);

		});
	};



} // CLOSE TABLET RESPONSIVE

});