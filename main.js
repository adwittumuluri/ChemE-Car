/*------------------MAIN CHEME CAR WEBSITE JAVASCRIPT---------------*/
		$(document).ready(function() {
		     

		    updateWindow("#webwrapper");
		    updateText();
		    $(window).resize( function() {
	            updateWindow("#webwrapper");
        		updateText();
        	});

        	function updateText() {
        		var height = $(window).height();
        		var width = $(window).width();
        		var value = "12"
        		//alert(height)
        		if (height >= 800) {
        			value = "12"
        		} else if (height >= 700) {
        			value = "11"
        		} else if (height >= 600) {
        			value = "10"
        		} else if (height >= 500) {
        			value = "9"
        		} else if (height >= 400) {
        			value = "8"
        	    } else if (height >= 300) {
        			value = "7"
        		} else if (height >= 200) {
        			value = "6"
        		} else if (height >= 100) {
        			value = "5"
        		} else {
        			value = 4
        		}
        		$("html").css("font-size",value +"pt")
        	} 

		    function updateWindow(container) {
	            var aspectRatio = 1.79;
	            var windowHeight = $(window).height();
	            var windowWidth = $(window).width();

	            if (windowWidth/windowHeight < aspectRatio) {
	                
	                bodyWidth = windowHeight * aspectRatio;
	                bodyHeight = windowHeight;
	            } else {
	                bodyHeight = windowWidth/aspectRatio;
	                bodyWidth = windowWidth;
	            }
	            
	                $(container).css("width", bodyWidth + "px");
	                $(container).css("height", bodyHeight + "px");

    		}   

		    $("#menuwrapper div").click( function() {
			    $("#menuwrapper div").not(this).css("color", "white");
			    $(this).animate({color: "#40E0D0"},400);
			    
			   $(".contentyear").not("#content"+ this.id).fadeOut();
			    $("#content"+ this.id).fadeIn();
			    
			   $(".preview").not("#content"+ this.id).fadeOut();
			    $("#preview"+ this.id).delay(400).fadeIn();
			});
		    
		    
		    
		    $("#menuwrapper div").mouseenter(function(){
			if ($(this).css("color") == "rgb(255, 255, 255)") {
			    $(this).css("color","#B31B1B");}
			})
		    
		    $("#menuwrapper div").mouseleave( function(){
			if ($(this).css("color") == "rgb(179, 27, 27)") {
			    $(this).css("color","rgb(255, 255, 255)");}
			})
		    
		    $("#slideshowshadow").delay(750).fadeOut(500);
		    
		    $("#slideshow").cycle({});
		    $("#captionshow").cycle();
		    
		   
		   
		   $(".shadow").click(function() {
			$(".shadow, .thumbnail").not("#"+ this.id +"img").fadeOut(200);
			$(".shadow").animate({boxShadow: "0px -0px 0px 0px black"});
			
			$("#"+ this.id +"img").delay(100).animate({top: "6.4%", left: "3.5%"},300,"swing");
			$("#" + this.id + "content").delay(600).fadeIn();
			$("#return").delay(700).fadeIn();
			    })
		   
		   
		   $("#return, #subteams").click(function() {
			
			$("#adminimg").delay(400).animate({left: "6.4%",top: "3.25%"},200);
			$("#batteryimg").delay(400).animate({left: "31%",top: "3.25%"},200);
			$("#fuelimg").delay(400).animate({left: "54%",top: "3.25%"},200);
			$("#potionsimg").delay(400).animate({left: "77%",top: "3.25%"},200);

			$("#informationimg").delay(400).animate({top: "35.5%",left: "6.4%"},200);
			$("#financeimg").delay(400).animate({top: "35.5%",left: "31%"},200);
			$("#chassisimg").delay(400).animate({top: "35.5%",left: "54%"},200);
			$("#safetyimg").delay(400).animate({top: "35.5%",left: "77%"},200);
			
			$("#TEGimg").delay(400).animate({top: "67.75%",left: "6.4%"},200);
			$("#electronicsimg").delay(400).animate({top: "67.75%",left: "31%"},200);
			$("#bioimg").delay(400).animate({top: "67.75%",left: "54%"},200);			
			$("#pressureimg").delay(400).animate({top: "67.75%",left: "77%"},200);

			
			$(".shadow").delay(600).animate({boxShadow: "0px -40px 40px -20px black"},200, "swing");
			$(".shadow span").delay(700).fadeIn(1000);
			
			$("#return, #admincontent, #batterycontent, #fuelcontent, #pressurecontent, #potionscontent, #TEGcontent," +
				"#biocontent, #electronicscontent, #informationcontent, #financecontent, #chassiscontent, #safetycontent").fadeOut();
			
			$(".thumbnail,.shadow").fadeIn();
		     });
		     
/*--------FOOTER JAVASCRIPT--------*/
		    $(".fader").mouseenter(function() {
				    $(this).stop().animate({
					opacity: "1"
					},200);
				    });
			$(".fader").mouseleave(function() {
				    $(this).stop().animate({
					opacity: ".6"
					});
				    });
		    $("#footer a").mouseenter(function() {
				    $(this).stop().animate({
					opacity: "1"
					},75);
				    });
		    $("#footer a").mouseleave(function() {
				    $(this).stop().animate({
					opacity: ".6"
					},175);
				    });
/*--------END OF FOOTER JAVASCRIPT--------*/


/*--------MENU ITEMS JAVASCRIPT--------*/	
		    $("#home").delay(200).animate({
			    width: "110%",
			    boxShadow: '5px 0px 10px -5px black'},900,"swing");
		    
/*Adwit's TEST DIV
		    $("#test").click( function(){
			var counter = 0;
			if ($("#test").css("height") == "100px") {
			    $("#test").animate({height: "1000px"})
			    if (counter != 0) {
				$("#test").text("click me again");
			    } else {
				$("#test").text("AND AGAIN");
			    }
			} else {
			    $("#test").animate({height: "100px"})
			    $("#test").text("AND AGAIN");
			}
		    });*/
		     
		    
/*-----Animation Within Menu Tab Selection-----*/       
		    $("#home,#aboutus,#subteams,#teamhistory,#photogallery,#sponsors").click(function(){
				
				/*-----SUBTEAMS JAVASCRIPT-----*/
				if (this.id != "subteams") {
				    $(".shadow").animate({boxShadow: "0px -0px 0px 0px black"},1);
				    $(".shadow span").css("display","none");
				}
				
				if ($(this).css("backgroundColor") != "rgb(0, 0, 0)") {
				    if (this.id == "home"){
					$(".content").fadeOut(); 
					$("#homecontent").fadeIn()
				    } else {	
					$(".content").fadeIn();
					$("#homecontent").fadeOut();
				    }
				    
				    $("#home,#aboutus,#subteams,#teamhistory,#photogallery,#sponsors").not(this).animate({width: "100%"},100)
				    $("#aboutuscontent,#subteamscontent,#teamhistorycontent,#photogallerycontent,#sponsorscontent").fadeOut(200);
				    $("#home,#aboutus,#subteams,#teamhistory,#photogallery,#sponsors").css("backgroundColor","white");
				    $("#home span,#aboutus span,#subteams span,#teamhistory span,#photogallery span,#sponsors span").css("color","black");
				    
				    $("#activelight").animate({
					top: $("#"+ this.id).css('top')
					},300,"swing")
    				
    				/*-----PHOTOGALLERY JAVASCRIPT-----*/
				    if((this.id == "photogallery")) {
					    
					    $("#slideshowshadow").fadeIn(500);
					    $("#photogallerycontent").delay(500).fadeIn(700);
					    
						$("#photogallery").css("color","white")
						$("#" + this.id).animate({backgroundColor: '#000000'},100)
						$("#photogallery span").css("color","white")
						$("#photogallerycontent").css('z-index',200);
				    
				    } else {
				    
					$("#slideshowshadow").fadeOut(400);
					$("#" + this.id + " span").css("color","white")
					$("#" + this.id + "content").css('z-index',200);
					$("#" + this.id + " span").css("color","white")
					$("#" + this.id).animate({backgroundColor: '#000000'},100)
					$("#"+ this.id).animate({
					    width: "110%",
					    boxShadow: '5px 0px 10px -5px black'},300);
					
					
					$("#" + this.id + "content").fadeIn(500);
				    } //end of else
				    
			  } //overarching if
                        });
                    });
