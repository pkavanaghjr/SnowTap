//========================= GLOBAL ================
var controller;

if (screen.width <= 977) {
    window.location = "mobile/index.html";
  }

navigator.sayswho= (function(){
	var ua= navigator.userAgent, tem, 
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Safari'){
	alert("Safari does not support the full Snowtap experience, please return on Chrome or Firefox. In the meantime, we have redirected you to our mobile site.");
    window.location = "mobile/index.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}

	if(M[1]=== 'msie'){
	alert("Internet Explorer does not support the full Snowtap experience, please return on Chrome or Firefox. In the meantime, we have redirected you to our mobile site.");
    window.location = "mobile/index.html";
		tem= ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(' ');
})();	


//========================= PAGE LOAD ================
$(document).ready(function() {


	// VARIABLES
	var controller = new ScrollMagic();


// _______________________ WRITE QUERY STRING TO PAGE _____________________________________
	function writeTextToPage(textToWrite, destination){
		$(destination).html(textToWrite);
	};	


//========================= SNOW COUNTER  ================
	var snowTimer;
	var snowCounter = 0;

	function snowTimer(){
		snowTimer = setInterval(function(){
			snowCounter++;
			// console.log("counter: "+snowCounter);
		}, 2000);	
	};

	var snowfallValue = 0;
	function snowStats(){		
		console.log("counter value: "+ snowCounter);
		var scrollTimer = snowCounter * 2;
		writeTextToPage(scrollTimer,"#timeHolder");

		timedSnowStat = snowCounter / 20;
		writeTextToPage(timedSnowStat,".snowStatsHolder");

		waterStat = timedSnowStat / 4;
		writeTextToPage(waterStat,"#waterStatsHolder");
	};


	snowTimer();



//========================= NAV EASING  ================
	$('#logo').on("click", function(event){
		event.preventDefault();
		console.log("scroll to top");
	    $('html, body').stop(true).animate({scrollTop:0}, 4000, "easeInOutExpo");
	});

	$('#scrollDownArrow').on("click",function(event){
		event.preventDefault();
	    var sceneScroll = sceneAbout.scrollOffset() + sceneAbout.duration() / 3.3;	 
	    $('html, body').stop(true).animate({scrollTop:sceneScroll}, 2000,'easeInOutExpo', function(){
	    	$("#aboutContent").stop(true).animate({opacity:1},500,function(){
	    		showButtons();
				$(this).css("pointer-events","all");
	    	});
	    });
		console.log("Nav Arrow: "+sceneScroll);	
	});

	// GLOBAL NAV EH
	$('#navList a').on("click",function(event){
		event.preventDefault();
		var name = $(this).attr('data-name'),
			content = '#'+name.toLowerCase()+'Content',
			scene = '';
		if (content.indexOf("about") >= 0){
			scene = sceneAbout;
		}else if (content.indexOf("crisis") >= 0){
			scene = sceneCrisis;
		}else if (content.indexOf("product") >= 0){
			scene = sceneProduct;
		}else if (content.indexOf("cause") >= 0){
			scene = sceneCause;
		}else if (content.indexOf("footer") >= 0){
			scene = sceneFooter;
		}
	    var sceneScroll = scene.scrollOffset() + scene.duration() / 2.8;
		hideButtons();
	    $('html, body').stop(true).animate({scrollTop:sceneScroll}, 2000,'easeInOutExpo', function(){
	    	$(content).stop(true).animate({opacity:1},500,function(){
	    		showButtons();
				$(this).css("pointer-events","all");
	    	});
	    });
	});

	$('#navContact').on("click",function(event){
		event.preventDefault();
	    var sceneScroll = sceneFooter.scrollOffset() + 1000;
	    hideButtons();
	    $('html, body').stop(true).animate({scrollTop:sceneScroll}, 2000,'easeInOutExpo');	    
		console.log("Nav Contact: "+sceneScroll);	
	});


//========================= HIDDEN CONTENT HANDLERS ================
	var hiddenActive = false;	

	$(".closeButton, .doneButton").on("click", function(event){
		event.preventDefault();
		// $("body").css("overflow","scroll");			
		$(".hiddenContent").stop(true).animate({opacity:0,scrollTop:0},500);
		hideButtons();		
	});

	//========================= EXPAND CONTENT ================
	$(document).on("click", ".scroll-section .moreButton", function(){
		console.log("more button open");
		$("body").css("overflow","hidden");
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({height:"80vh"},1000,"easeInExpo",function(){
			$(".moreContent").animate({opacity:1},500);
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("overflow","scroll").css("zIndex","50");
			// $("#aboutContent, #crisisContent, #productContent, #causeContent").css("zIndex","50");
			$(".moreButton").animate({opacity:0},500).css("pointer-events","none");
		});
	});

	//========================= SECTION HANDLERS ================
	$(document).on("click", ".snowflake", function(){
		console.log("click: " + hiddenActive);
		var target = $(this).attr('data-target');
		if(hiddenActive == false){
			$(target).stop(true).animate({opacity:1},500,function(){
				showButtons();
				$(this).css("pointer-events","all");
			});
		}else if(hiddenActive == true){
			$(target).stop(true).animate({opacity:0},500,function(){
				hideButtons();
				$(this).css("pointer-events","none");
			});
		}
	});

	$(document).on("click", ".snowflakeTwo:not(.footer-anchor), .snowflakeThree:not(.footer-anchor)", function(){
		var target = $(this).attr('data-target'),
			scene = '';
		if (target.indexOf("about") >= 0){
			scene = sceneAbout;
		}else if (target.indexOf("crisis") >= 0){
			scene = sceneCrisis;
		}else if (target.indexOf("product") >= 0){
			scene = sceneProduct;
		}else if (target.indexOf("cause") >= 0){
			scene = sceneCause;
		}else if (target.indexOf("footer") >= 0){
			scene = sceneFooter;
		}
	    var sceneScroll = scene.scrollOffset() + scene.duration() / 2.6;
	    $('html, body').stop(true).animate({scrollTop:sceneScroll}, 2000,'easeInOutExpo', function(){
	    	$(target).stop(true).animate({opacity:1},500,function(){
	    		showButtons();
				$(this).css("pointer-events","all");
	    	});
	    });
		console.log("Snowflake Nav : "+sceneScroll);
	});

	$(document).on("click", ".footer-anchor", function(e){
		e.preventDefault();
	    var sceneScroll = sceneFooter.scrollOffset() + 1000;
	    $('html, body').stop(true).animate({scrollTop:sceneScroll}, 2000,'easeInOutExpo');	    
		console.log("Nav Contact: "+sceneScroll);	
	});




//========================= SHOW / HIDE HIDDEN CONTENT  ================
	function showButtons(){
		hiddenActive = true;		
		$(".moreButton").css("pointer-events","all").stop(true).animate({opacity:1},500,function(){
			
		});
		$(".closeButton h2").stop(true).animate({opacity:1},500,function(){
			$(".closeButton").css("pointer-events","all");
		});
	}

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
		$("#aboutContent, #crisisContent, #productContent, #causeContent").stop(true).animate({height:"42vh", opacity:0, scrollTop:0},500,function(){
			$("#aboutContent, #crisisContent, #productContent, #causeContent").css("pointer-events","none").css("overflow","hidden").css("zIndex","3");
			$(".moreContent").animate({opacity:0},500);
		});
	}





//=========================================================================================================================




//========================= SCROLL MAGIC SCENE - MAIN SCROLL ================
		
	// Create Animation for 0.5s
	var tweenLine1 = new TimelineMax ().add([
		TweenMax.to('#backgroundCloudsOne', 2.5, {top: "-15%", autoRound:false, z:.01}),	
		TweenMax.fromTo('#mountainPeak', 2.5,{scale:3}, {top: "35%", scale:1, autoRound:false, z:.01}),	
		TweenMax.fromTo('#mountainLeft', 2.5,{scale:1.3}, {top: "60%", scale:1, autoRound:false, z:.01}),	
		TweenMax.fromTo('#mountainRight', 2.5,{scale:1.3}, {top: "65%", scale:1, autoRound:false, z:.01}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneScroll = new ScrollScene({
		triggerElement: '#mainScrollArea',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 0,
		duration:$("#mainScrollArea").height()
	})
	.setTween(tweenLine1)
	.addTo(controller);


//========================= SCROLL MAGIC SCENE - FMA ================
		
	// Create Animation for 0.5s
	var tweenLineFma = new TimelineMax ().add([
		TweenMax.to('.logo', 0.5, {scale: 0,top: "150%",opacity: 0, autoRound:false, z:.01}),	
		TweenMax.to('#scrollDownArrow', 0.25, {opacity: 0, autoRound:false, z:.01}),	
		TweenMax.to('#fmaCloudOne', 1.1, {scale: 10,top: "-55%",left:"-300%",opacity: 0, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.to('#fmaCloudTwo', 1.5, {scale: 7,top: "-200%",left:"200%",opacity: 0, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.to('#fmaCloudThree', 2, {scale: 2,top: "-42%",left:"10%",opacity: 0, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.to('#fmaCloudFour', 2.5, {scale: 1.5,top: "-45%",left:"85%",opacity: 0, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneFma = new ScrollScene({
		triggerElement: '#fma',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 0,
		duration:1500
	})
	.setTween(tweenLineFma)
	.setPin("#fma")
	.addTo(controller);

	sceneFma.on("enter", function (event) {
	    console.log("FMA Scene Enter");
		hideButtons();
	});	

	sceneFma.on("leave", function (event) {
	    console.log("FMA Scene Leave");
		hideButtons();
	});

//========================= SCROLL MAGIC SCENE - ABOUT ================
		
	// Create Animation for 0.5s
	var tweenLineAbout = new TimelineMax ().add([
		TweenMax.fromTo('#aboutCloudOne', 20,{opacity:.8,scale:1,top:"0%",left:"-20%"}, {delay:1,scale: 5,top: "-100%",left:"100%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutCloudTwo', 25,{opacity:.6,scale:1,top:"-10%",left:"110%"}, {delay:2,scale: 1.5,top: "-55%",left:"60%",opacity: .1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutCloudThree', 22,{opacity:.6,scale:1,top:"12%",left:"20%"}, {delay:3,scale: 1.7,top: "-60%",left:"45%",opacity: .1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutCloudFour', 10,{opacity:1,scale:3,top:"40%",left:"100%"}, {delay:6,scale: .7,top: "-125%",left:"0%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutCloudFive', 12,{opacity:.9,scale:1,top:"20%",left:"-10%"}, {delay:9,scale: 2.5,top: "-100%",left:"80%",opacity: 0, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutCloudSix', 10,{opacity:.7,scale:1,top:"40%",left:"140%"}, {delay:11,scale: .7,top: "-75%",left:"10%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	

		TweenMax.fromTo('#aboutFlakeOne', 35,{opacity:.4,scale:.2,rotation:180,top:"-110%",left:"150%"}, {delay:2,scale: 1,rotation:540,top: "50%",left:"-60%",opacity: 1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutFlakeThree', 40,{opacity:.1,scale:.1,rotation:0,top:"-100%",left:"80%"}, {delay:3.5,scale: .8,rotation:980,top: "50%",left:"-10%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#aboutFlakeTwo', 25,{opacity:.3,scale:.2,rotation:45,top:"-70%",left:"194%"}, {delay:3.5,scale: .7,rotation:500,top: "10%",left:"-80%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneAbout = new ScrollScene({
		triggerElement: '#aboutSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 1,
		duration:3000
	})
	.setTween(tweenLineAbout)
	.setPin("#aboutSection")
	.addTo(controller);

	sceneAbout.on("enter", function (event) {
	    console.log("About Scene Enter");
		hideButtons();
	});	

	sceneAbout.on("leave", function (event) {
	    console.log("About Scene Leave");
		hideButtons();
	});
	

//========================= SCROLL MAGIC SCENE - CRISIS ================
		
	// Create Animation for 0.5s
	var tweenLineCrisis = new TimelineMax ().add([
		TweenMax.fromTo('#crisisCloudOne', 20,{opacity:.8,scale:1,top:"10%",left:"-10%"}, {delay:1,scale: 3,top: "-90%",left:"50%",opacity: .9, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisCloudTwo', 50,{opacity:.5,scale:1,top:"10%",left:"70%"}, {delay:2,scale: .7,top: "-60%",left:"90%",opacity: .3, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisCloudThree', 60,{opacity:.6,scale:1,top:"10%",left:"40%"}, {delay:17,scale: .7,top: "-60%",left:"10%",opacity: .3, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisCloudFour', 18,{opacity:.9,scale:3,top:"20%",left:"40%"}, {delay:11,scale: 1,top: "-90%",left:"-35%",opacity: .8, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisCloudFive', 25,{opacity:.7,scale:1,top:"-10%",left:"110%"}, {delay:20,scale: 1,top: "-65%",left:"30%",opacity: .8, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisCloudSix', 30,{opacity:.8,scale:1,top:"5%",left:"-20%"}, {delay:31,scale: 1,top: "-75%",left:"90%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	
		TweenMax.fromTo('#crisisFlakeOne', 40,{opacity:.4,scale:.2,rotation:180,top:"-90%",left:"-5%"}, {delay:20,scale: 1,rotation:480,top: "30%",left:"120%",opacity: 1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisFlakeTwo', 35,{opacity:0,scale:.2,rotation:45,top:"-100%",left:"20%"}, {delay:21,scale: .7,rotation:650,top: "40%",left:"120%",opacity: .7, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#crisisFlakeThree', 30,{opacity:.1,scale:.1,rotation:0,top:"-50%",left:"-40%"}, {delay:21,scale: .8,rotation:480,top: "-30%",left:"120%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneCrisis = new ScrollScene({
		triggerElement: '#crisisSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 1,
		duration:3000
	})
	.setTween(tweenLineCrisis)
	.setPin("#crisisSection")	
	.addTo(controller);

	sceneCrisis.on("enter", function (event) {
	    console.log("Crisis Scene Enter");
		hideButtons();
	});

	sceneCrisis.on("leave", function (event) {
	    console.log("Crisis Scene leave");
		hideButtons();
	});
	


//========================= SCROLL MAGIC SCENE - PRODUCT ================
		
	// Create Animation for 0.5s
	var tweenLineProduct = new TimelineMax ().add([
		TweenMax.fromTo('#productCloudOne', 20,{opacity:1,scale:3,top:"20%",left:"40%"}, {delay:1,scale: .8,top: "-90%",left:"-50%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productCloudTwo', 45,{opacity:.6,scale:1,top:"0%",left:"30%"}, {delay:0,scale: .6,top: "-70%",left:"15%",opacity:.1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productCloudThree', 40,{opacity:.7,scale:1,top:"10%",left:"40%"}, {delay:8,scale: .7,top: "-65%",left:"75%",opacity: .1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productCloudFour', 20,{opacity:1,scale:1,top:"10%",left:"0%"}, {delay:16,scale: .6,top: "-76%",left:"40%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productCloudFive', 20,{opacity:.9,scale:1,top:"15%",left:"110%"}, {delay:7,scale: .75,top: "-80%",left:"30%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productCloudSix', 18,{opacity:.7,scale:1,top:"10%",left:"55%"}, {delay:23,scale: .7,top: "-75%",left:"-20%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	

		TweenMax.fromTo('#productFlakeOne', 35,{opacity:.4,scale:.2,rotation:180,top:"-110%",left:"120%"}, {delay:8,scale: 1,rotation:540,top: "40%",left:"-35%",opacity: 1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productFlakeTwo', 25,{opacity:.3,scale:.2,rotation:45,top:"-70%",left:"150%"}, {delay:9.5,scale: .7,rotation:630,top: "-10%",left:"-55%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#productFlakeThree', 40,{opacity:.1,scale:.1,rotation:0,top:"-100%",left:"80%"}, {delay:9.5,scale: .8,rotation:810,top: "90%",left:"-45%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneProduct = new ScrollScene({
		triggerElement: '#productSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 1,
		duration:3500
	})
	.setTween(tweenLineProduct)
	.setPin("#productSection")	
	.addTo(controller);

	sceneProduct.on("enter", function (event) {
	    console.log("Product Scene Enter");
		hideButtons();
	});

	sceneProduct.on("leave", function (event) {
	    console.log("Product Scene leave");
		hideButtons();
	});
	

//========================= SCROLL MAGIC SCENE - CAUSE ================
		
	//Create Animation for 0.5s
	var tweenLineCause = new TimelineMax ().add([
		TweenMax.fromTo('#causeCloudOne', 20,{opacity:.8,scale:2,top:"10%",left:"-10%"}, {delay:1,scale: .7,top: "-70%",left:"30%",opacity: .9, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeCloudTwo', 40,{opacity:.5,scale:1,top:"10%",left:"90%"}, {delay:8,scale: .5,top: "-60%",left:"60%",opacity: .3, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeCloudThree', 50,{opacity:.3,scale:1,top:"0%",left:"-15%"}, {delay:0,scale: .5,top: "-60%",left:"30%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeCloudFour', 18,{opacity:.9,scale:2,top:"0%",left:"120%"}, {delay:11,scale: .5,top: "-75%",left:"20%",opacity: .8, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeCloudFive', 25,{opacity:.7,scale:1,top:"20%",left:"-30%"}, {delay:18,scale:.6,top: "-65%",left:"25%",opacity: .8, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeCloudSix', 30,{opacity:.8,scale:1,top:"0%",left:"110%"}, {delay:23,scale: .5,top: "-70%",left:"50%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	
		TweenMax.fromTo('#causeFlakeOne', 40,{opacity:.4,scale:.2,rotation:180,top:"-90%",left:"-5%"}, {delay:10,scale: 1,rotation:520,top: "20%",left:"120%",opacity: 1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeFlakeTwo', 35,{opacity:.3,scale:.2,rotation:0,top:"-100%",left:"-5%"}, {delay:11,scale: .8,rotation:550,top: "35%",left:"140%",opacity: .6, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#causeFlakeThree', 30,{opacity:.1,scale:.1,rotation:45,top:"-50%",left:"-10%"}, {delay:14,scale: .7,rotation:850,top: "-35%",left:"110%",opacity: .4, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneCause = new ScrollScene({
		triggerElement: '#causeSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 1,
		duration:5000
	})
	.setTween(tweenLineCause)
	.setPin("#causeSection")	
	.addTo(controller);

	sceneCause.on("enter", function (event) {
	    console.log("Cause Scene Enter");
		hideButtons();
	});

	sceneCause.on("leave", function (event) {
	    console.log("Cause Scene leave");
		hideButtons();
	});
	


//========================= SCROLL MAGIC SCENE - FOOTER ================
		
	//Create Animation for 0.5s
	var tweenLineFooter = new TimelineMax ().add([
		TweenMax.fromTo('#socialMail', 1,{opacity:0,scale:2,top:"-100%",left:"42.5%"}, {delay:1.1,scale:1,top:"-10%",left:"42.5%",opacity:1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#socialTweet', 1,{opacity:0,scale:2,top:"-100%",left:"47.5%"}, {delay:1.3,scale:1,top:"-10%",left:"47.5%",opacity:1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#socialInsta', 1,{opacity:0,scale:2,top:"-100%",left:"52.5%"}, {delay:1.2,scale:1,top:"-10%",left:"52.5%",opacity:1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#socialYou', 1,{opacity:0,scale:2,top:"-100%",left:"57.5%"}, {delay:1,scale:1,top:"-10%",left:"57.5%",opacity:1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
		TweenMax.fromTo('#copyright', 1,{opacity:0}, {delay:1.5,scale:1,top:"-5%",opacity:1, autoRound:false, z:.01, ease:Linear.easeInOutExpo}),	
	])
	// Create the Scene and trigger when visible with ScrollMagic
	var sceneFooter = new ScrollScene({
		triggerElement: '#footerSection',
		offset: 0, /* offset the trigger 150px below #scene's top */
		triggerHook: 1,
		//duration:1000
	})
	.setTween(tweenLineFooter)
	.setPin("#footerSection")
	.addTo(controller);

	sceneFooter.on("enter", function (event) {
	    console.log("Footer Scene Enter");
		hideButtons();

		$("#snowingStats").stop(true).delay(250).animate({opacity:1},500,function(){
			snowStats();
			showButtons();
			$(this).css("pointer-events","all");
		});		

	});

	sceneFooter.on("leave", function (event) {
	    console.log("Footer Scene leave");
		$(".closeButton h2").stop(true).animate({opacity:0},500,function(){
			$(".closeButton").css("pointer-events","none");
		});
		$(".moreButton").stop(true).animate({opacity:0},500,function(){
			$(".moreButton").css("pointer-events","none");
		});
		$("#snowingStats").stop(true).animate({height:"50vh", opacity:0},500,function(){
			$("#snowingStats").css("pointer-events","none").css("overflow","hidden").css("zIndex","3");
			$(".moreContent").animate({opacity:0},500);
		});

	});
	


// ========================= SCROLL MAGIC INDICATORS ================
	// sceneFma.addIndicators({zindex: 100, colorStart:"#fff000", suffix: "FMA"});	
	// sceneAbout.addIndicators({zindex: 100, colorStart:"#000fff", suffix: "ABOUT"});	
	// sceneCrisis.addIndicators({zindex: 100, colorStart:"#00fff0", suffix: "CRISIS"});	
	// sceneProduct.addIndicators({zindex: 100, colorStart:"#0fff00", suffix: "PRODUCT"});	
	// sceneCause.addIndicators({zindex: 100, colorStart:"#0ff0f0", suffix: "CAUSE"});	
	// sceneFooter.addIndicators({zindex: 100, colorStart:"#0f0f00", suffix: "FOOTER"});	
	


//} // <- close responsive javascript
});