$(function(){
	document.addEventListener("menubutton",onMenuKeyDown,false);
});
function afficherAide(){//alert("Bonjour");
	$("#afficheurAide").fadeIn("fast");	
	$("#afficheurAide").load("aide.txt");
}
function cacherAide(){
	$("#afficheurAide").fadeOut("slow");
}
function dessusBoutonAide(){
	$("#aide").css("text-decoration","underline");
	$("#aide").mouseout(function(){
		$(this).css("text-decoration","none");
	});
}

function aZero(){
	$("#afficheurPrincip").load("src/recharge.htm");
	$("#afficheurPrincip").load("src/travail.htm");
}

function onMenuKeyDown(){
	$("#afficheurPrincip").load("src/menus.htm");
}
