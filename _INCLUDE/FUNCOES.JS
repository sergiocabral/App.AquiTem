//Neste arquivo é definido o código que contém funções javascript genéricas para qualquer aplicação.
////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementa no objeto String uma função que retorna a mesma sem espaços nas extremidades.
String.prototype.trim = function() { 
    // usando uma expressão regular para trocar os espaços para vazio.
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

// Substitui caracteres com acentuação para seu equivalente sem acentuação.
// aStr_Texto - String alvo.
function fStr_SemAcento(aStr_Texto) {
	var vStr_Acento    = 'àãâáäèêéëìîíïòõôóöùûúüıÿçÀÃÂÁÄÈÊÉËÌÎÍÏÒÕÔÓÖÙÛÚÜİÇ';
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
