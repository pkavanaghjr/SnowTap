//========================= GLOBAL ================

//======= SCROLL TOP ON REFRESH =======
window.onbeforeunload = function(){ 
	window.scrollTo(0,0); 
};


//========================= PAGE LOAD ================
$(document).ready(function() {


	// VARIABLES			


//========================= SHOW HIDE NAV LEFT ================
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
		$("#navSection").animate({left : '10'}, 500, 'easeOutExpo');
	};

	function animateOut(){
		state = "up";
		$("#navSection").stop(true);
		$("#navSection").animate({left : '-200'}, 500, 'easeOutExpo');
	};

		// FUNCTIONS
	$(window).resize(function() {
		threshold = $("#fma").height();
	});
	


//========================= RESPONSIVE JAVASCRIPT: DESKTOP ================
//if (document.documentElement.clientWidth > 900) {



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
	var mp = 150; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
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




//========================= LANDING FMA  ================
	function startFma(){
		$("#logoDrop").stop(true).delay(0).animate({top:"43%", opacity:1},1750,"easeInOutExpo");
		$("#logoText").stop(true).delay(650).animate({opacity:1},1750,"easeInOutExpo");
		$("#fmaCloudOne").stop(true).delay(1200).animate({opacity:.95, left:"20%"},2500,"easeNone");
		$("#fmaCloudTwo").stop(true).delay(1200).animate({opacity:.8, left:"71%"},2500,"easeNone");
		$("#fmaCloudThree").stop(true).delay(1200).animate({opacity:.7, left:"45%"},2500,"easeNone");
		$("#fmaCloudFour").stop(true).delay(1200).animate({opacity:.3, left:"55%"},2500,"easeNone");
		$("#loadColor").stop(true).delay(1750).animate({opacity:0},2500,function(){
			// $("body").css("overflow","scroll");		
		});
		$("#snowCanvas").stop(true).delay(2200).animate({opacity:1},8000);
		$("#scrollDownArrow").stop(true).delay(3500).animate({opacity:.8},1000,"easeNone");
		var tweenArrow = TweenMax.to("#scrollDownArrow", 0.75, {top:"92%", repeat:-1, yoyo:true, autoRound:false, ease:Linear.easeInExpo});		
	};

	// initialize fma animation
	startFma();

//========================= LANDING FMA - MOBILE  ================
	function startMobile(){
		$("#logoDrop").stop(true).delay(0).animate({top:"45%", opacity:1},1750,"easeInOutExpo");
		$("#logoText").stop(true).delay(650).animate({opacity:1},1750,"easeInOutExpo");
		$("#fmaCloudOne").stop(true).delay(1200).animate({opacity:.95, left:"27%"},2500,"easeNone");
		$("#fmaCloudTwo").stop(true).delay(1200).animate({opacity:.8, left:"95%"},2500,"easeNone");
		$("#fmaCloudThree").stop(true).delay(1200).animate({opacity:.7, left:"35%"},2500,"easeNone");
		$("#fmaCloudFour").stop(true).delay(1200).animate({opacity:.3, left:"60%"},2500,"easeNone");
		$("#loadColor").stop(true).delay(1750).animate({opacity:0},2500);
		$("#snowCanvas").stop(true).delay(2200).animate({opacity:1},8000);
		$("#scrollDownArrow").stop(true).delay(4500).animate({opacity:.8},1000,"easeNone");
		var tweenArrow = TweenMax.to("#scrollDownArrow", 0.75, {top:"92%", repeat:-1, yoyo:true, autoRound:false, ease:Linear.easeInExpo});		
	};

if (document.documentElement.clientWidth < 767) {
	startMobile();
}

//========================= SHOW / HIDE HIDDEN CONTENT  ================
	function showButtons(){
		hiddenActive = true;		
		$(".moreButton").css("pointer-events","all").stop(true).animate({opacity:1},500,function(){
			
		});
		$(".closeButton h2").stop(true).animate({opacity:1},500,function(){
			$(".closeButton").css("pointer-events","all");
		});
	};

	function hideButtons(){
		hiddenActive = false;		
		hiddenMore = false;	
		// $("body").css("overflow","scroll");
		$(".closeButton h2").stop(true).animate({opacity:0},500,function(){
			$(".closeButton").css("pointer-events","none");
		});
		$(".moreButton").stop(true).animate({opacity:0},500,function(){
			$(".moreButton").css("pointer-events","none");
		});
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({height:"42vh", opacity:0},500,function(){
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("pointer-events","none").css("overflow","hidden").css("zIndex","3");
			$(".moreContent").animate({opacity:0},500);
		});
	};



//} // <- close responsive javascript
});