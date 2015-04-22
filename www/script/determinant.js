/*
*@author Mathe Eliel Kasereka
*@copyright 2014
*Cette fonction a ete developpe dans le but d'aider les developpeurs JavaScript a trouver facilement
*le determinant des matrices.
*Dans cette fonction, on entre la matrice et le nombre des lignes ou des colonnes
*Exemple:
	2	3	7	3
	8	7	9	0
	2	5	8	43
	21	5	9	4
	Donc il faut entrer cette matrice sous forme de tableau et entrer 3 comme nombre des lignes ou des colonnes
	sachant que pour une matrice le nombre des lignes est egal au nombre des colonnnes
	donc on aura determinant(tableau,3)
	Merci, pour plus d'informations, ecrivez moi sur elielmathe@yahoo.fr ou elielmathe1@gmail.com ou encore eli.mathe.397@facebook.com
	Visitez encore plus de nos decouvertes sur http://www.facebook.com/deonzgroup
	
*/
function determinant(matrice,colonnes){
	if(colonnes == 1) return matrice[0];
	else if( colonnes == 2) return  matrice[1][1]*matrice[0][0]-matrice[0][1]*matrice[1][0];
	else if( colonnes == 3) return matrice[0][0]*matrice[1][1]*matrice[2][2]+matrice[1][0]*matrice[2][1]*matrice[0][2]+matrice[2][0]*matrice[0][1]*matrice[1][2]-matrice[2][0]*matrice[1][1]*matrice[0][2]-matrice[1][2]*matrice[2][1]*matrice[0][0]-matrice[2][2]*matrice[1][0]*matrice[0][1];
		else{
			var leDeterminant=0,i,m,l;
			for(i=0;i<colonnes;i++){
				var nouvelleMatrice = [];
				for(m=0;m<colonnes;m++){
					var nouvelleMatrice1 = [];
					if( m==0) continue;
						for(l=0;l<colonnes;l++){
							if(l==i) continue;
							nouvelleMatrice1.push(matrice[m][l]);
						}
					nouvelleMatrice.push(nouvelleMatrice1);
				}		
				leDeterminant += (Math.pow(-1,i))*(matrice[0][i])*(determinant(nouvelleMatrice,colonnes-1));
			}
			return leDeterminant;
		}
}