var timer;
$(function(){
	$("#idBarre").css("height","5px").css("width","5px").css("background","gray").animate({"width":"+=7cm"},1200);
	function assombrir(){
		$("#texteMyxyca").fadeTo(1000,0.4,function(){		
		$(this).css("color","black");
		$(this).fadeTo(1500,10,function(){			
			$(this).css("color","#006666");
			assombrir();
		});	
	});
	}	
	timer = setInterval(allerAccueil,4000);
});
function allerAccueil(){
		clearInterval(timer);
		$("#afficheurPrincip").load("src/travail.htm");
}