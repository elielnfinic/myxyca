var nombreInc;
var nom;
$(function(){
	$("#valider").click(function(){
		var nombre = $("#nombreInconnue").val();
		if(nombre != "" && $("#nomInconnue").val() != ""){
			if(isNaN(nombre) || nombre > 10){
				$("#nombreInconnue").css("background","red").css("color","white");
				return false;
			}else{
				$("#valider").attr("disabled","disabled");
				nombreInc = parseInt(nombre);
				nom = $("#nomInconnue").val();
				placerElements(nombre,nom);
			}
		}
	});
});

function calculer(){
	var image = document.getElementById("imageLoading");
	image.style.display = "block";
	var coefficientVariable=document.getElementsByClassName("coefficients");
	var coefficientInd=document.getElementsByClassName("coefficientInd");
	var zoneCalcul = document.getElementById("zoneCalcules");
	var toutCoefficient = $("[class*='coeff']").get();
	var zoneAffichage = document.getElementById("reponses");
	var lesValeurs = [];
	for(var i = 0;i<coefficientVariable.length;i++){lesValeurs[i] = parseInt(coefficientVariable[i].value);}
	var determinant = creerMatrice(lesValeurs,nombreInc);
	var reponses = [];
	for(var x = 0;x<nombreInc;x++){		
		var tableau = [];
		for(var j = 0;j<coefficientVariable.length;j++){
			tableau.push(coefficientVariable[j].value);
		}
		for(var i = 0,j=x;i<coefficientInd.length;i++,j=j+coefficientInd.length){
			tableau[j] = coefficientInd[i].value;
		}
		reponses.push(creerMatrice(tableau,nombreInc) / determinant);
	}
	zoneAffichage.innerHTML = "";
	for(var i=0;i<reponses.length;i++){
		var element = document.createElement("div");
		var indice = i + 1;
		element.innerHTML = nom + "<sub>"+indice+"</sub> = "+reponses[i];
		zoneAffichage.appendChild(element);
	}
	image.style.display = "none";
	
}

function creerMatrice(tableauOrigine,colonnes){
	var tableauFinal = [];	
	var tableauFinal1 = [];
	for(var i = 0,k=0,j=0;i<tableauOrigine.length;i++){
		tableauFinal1.push(tableauOrigine[i]);
		if(j == colonnes - 1){		
			j = 0;
			tableauFinal.push(tableauFinal1);
			if(i == tableauOrigine.length - 1){
				return determinant(tableauFinal,colonnes);
			}
			tableauFinal1 = [];			
			k++;
		}
		else j++;
	}
}

function placerElements(nombre,nom){
	var nombreVariables = parseInt(nombre);
	var nomVariable = nom;
	var zoneTable = document.getElementById("tableCalcules");
	for(var i=1;i<nombreVariables+1;i++){		
		var ligne = document.createElement("tr");		
		var dansLigne = zoneTable.appendChild(ligne);
		for(var j=0;j<nombreVariables+1;j++){			
			var cellule = document.createElement("td");
			var coefficient = document.createElement("input");
			var variable = document.createElement("variable");
			var base = document.createElement("sub");
			var signe = document.createElement("signe");
			if(j == 0){
				coefficient.setAttribute("type","text");
				coefficient.setAttribute("class","coefficientInd");
				coefficient.setAttribute("id","ind"+i);
				signe.innerHTML = " = ";
				var dansCellule = dansLigne.appendChild(cellule);
				dansCellule.appendChild(coefficient); 
				dansCellule.appendChild(signe); 
				continue;
			}
			base.innerHTML =  j;
			signe.innerHTML = " + ";
			variable.innerHTML = " " + nomVariable+" ";
			coefficient.setAttribute("type","text");
			coefficient.setAttribute("id","coef"+j);
			coefficient.setAttribute("class","coefficients");
			coefficient.setAttribute("maxwidth","5");
			var dansCellule = dansLigne.appendChild(cellule);
			dansCellule.appendChild(coefficient); 
			var dansVariable = dansCellule.appendChild(variable);
			dansVariable.appendChild(base);
			if(j<nombreVariables){
				dansVariable.appendChild(signe);
			}
		}
	}
	var boutonCalculer = document.getElementById("boutonCalculer");
	var boutonCalc = document.createElement("button");
	boutonCalc.innerHTML = "Calculer";
	boutonCalc.setAttribute("type","button");
	boutonCalc.setAttribute("onclick","verifierChamps();");
	boutonCalc.setAttribute("id","buttonCalculer");
	boutonCalculer.appendChild(boutonCalc);
}

function verifierChamps(){
	var zoneTable = document.getElementById("tableCalcules");
	var lesEntres = zoneTable.getElementsByTagName("input"),a;
	for(var i = 0,a = lesEntres.length,b = lesEntres.length;i<lesEntres.length;i++){
		if(lesEntres[i].value == ""){
			lesEntres[i].style.border = "1px red solid";
			a--;
		}
		else{
			if(isNaN(lesEntres[i].value)){
				lesEntres[i].style.border = "1px red solid";
				a--;
			}
			else{
				lesEntres[i].style.border = "1px gray solid";
				b--;
			}
		}
	}
	if(b==0) calculer();
	else return false;
}

function initialiserTout(){
	
}

