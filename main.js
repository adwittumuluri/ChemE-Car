/*small change*/
/*------------------MAIN CHEME CAR WEBSITE JAVASCRIPT---------------*/
		$(document).ready(function() {
		     
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
			
			$("#"+ this.id +"img").delay(100).animate({top: "27px", left: "26"},300,"swing");
			$("#" + this.id + "content").delay(600).fadeIn();
			$("#return").delay(700).fadeIn();
			    })
		   
		   
		   $("#return, #subteams").click(function() {
			
			$("#informationimg").delay(400).animate({top: "266px",left: "26px"},200);
			$("#financeimg").delay(400).animate({top: "266px",left: "262px"},200);
			$("#chassisimg").delay(400).animate({top: "266px",left: "498px"},200);
			$("#safetyimg").delay(400).animate({top: "266px",left: "734px"},200);
			
			
			$("#batteryimg").delay(400).animate({left: "26px"},200);
			$("#fuelimg").delay(400).animate({left: "262px"},200);
			$("#pressureimg").delay(400).animate({left: "498px"},200);
			$("#potionsimg").delay(400).animate({left: "734px"},200);
			
			$(".shadow").delay(600).animate({boxShadow: "0px -40px 40px -20px black"},200, "swing");
			$(".shadow span").delay(700).fadeIn(1000);
			
			$("#return, #batterycontent, #fuelcontent, #pressurecontent, #potionscontent, #informationcontent, #financecontent, #chassiscontent, #safetycontent").fadeOut();
			
			$(".thumbnail,.shadow").fadeIn();
			$("#battery, #fuel, #pressure, #potions").delay(400).fadeIn();
			$("#information, #finance, #chassis, #safety").fadeIn();

			
			
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
