//Relógio em javascript
//Samuel Parente@2022

var arrayDia = new Array(7);
	arrayDia[0] = "Domingo";
	arrayDia[1] = "Segunda";
	arrayDia[2] = "Terça";
	arrayDia[3] = "Quarta";
	arrayDia[4] = "Quinta";
	arrayDia[5] = "Sexta";
	arrayDia[6] = "Sábado";
 
var arrayMes = new Array(12);
	arrayMes[0] = "Janeiro";
	arrayMes[1] = "Fevereiro";
	arrayMes[2] = "Março";
	arrayMes[3] = "Abril";
	arrayMes[4] = "Maio";
	arrayMes[5] = "Junho";
	arrayMes[6] = "Julho";
	arrayMes[7] = "Agosto";
	arrayMes[8] = "Setembro";
	arrayMes[9] = "Outubro";
	arrayMes[10] = "Novembro";
	arrayMes[11] = "Dezembro";


setInterval(get_clock, 1000);
	
function get_clock(){
	
	let relogio=new Date();
	let horas=relogio.getHours();
	let minutos=relogio.getMinutes();
	let segundos=relogio.getSeconds();
	let dia=relogio.getDay();
	let dia_mes=relogio.getDate();
	let mes=relogio.getMonth();
	let ano=relogio.getFullYear();
	
	horas=adiciona_zero(horas);
	minutos=adiciona_zero(minutos);
	segundos=adiciona_zero(segundos);
	dia=dia_extenso(dia);
	mes=mes_extenso(mes);
	
	document.getElementById("clock").innerHTML=horas+':'+minutos+':'+segundos;
	document.getElementById("date").innerHTML=dia+", "+dia_mes+" de "+mes+" de "+ano;
}
	
function adiciona_zero(x){
	
	if(x<10){
		x='0'+x;
	}

	return x;	
}

function dia_extenso(dia){
	
	return this.arrayDia[dia];
	
}

function mes_extenso(mes){
	
	return this.arrayMes[mes];
	
}
