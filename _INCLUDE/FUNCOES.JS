//Neste arquivo � definido o c�digo que cont�m fun��es javascript gen�ricas para qualquer aplica��o.
////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementa no objeto String uma fun��o que retorna a mesma sem espa�os nas extremidades.
String.prototype.trim = function() { 
    // usando uma express�o regular para trocar os espa�os para vazio.
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

// Substitui caracteres com acentua��o para seu equivalente sem acentua��o.
// aStr_Texto - String alvo.
function fStr_SemAcento(aStr_Texto) {
	var vStr_Acento    = '�������������������������������������������������';
	var vStr_SemAcento = 'aaaaaeeeeiiiiooooouuuuyycAAAAAEEEEIIIIOOOOOUUUUYC';
	
	var vStr_Result = '';
	for (var vInt_1 = 0; vInt_1 < aStr_Texto.length; vInt_1++) {
		if (vStr_Acento.indexOf(aStr_Texto.charAt(vInt_1)) >= 0) {
			vStr_Result += vStr_SemAcento.charAt(vStr_Acento.indexOf(aStr_Texto.charAt(vInt_1)));
		}
		else {
			vStr_Result += aStr_Texto.charAt(vInt_1);
		}
	}
	
	return vStr_Result;
}
