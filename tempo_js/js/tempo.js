// JavaScript Document
window.addEventListener('load', () => {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sucesso,erro);
		
	} 
	else {
		window.alert('Localização desativada.O seu navegador não suporta localização.');
	}

	function sucesso(localizacao){
		const Key='e28dd82b8735350e9f5514d2b8db1251';
		let lat = localizacao.coords.latitude;
		let long = localizacao.coords.longitude;
		let urlToSend = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&xclude=minutely,hourly,daily,alerts&appid='+Key+'&units=metric&lang=pt';
		
		
		fetch(urlToSend)
		.then(dados => {
		return dados.json();
		})
		.then(buscaDados => {
			
		//cidade e país
		let cidade = buscaDados.name;
		let pais =buscaDados.sys.country;
			
		let divLocal = document.getElementById('local');
		let supLoc = document.createElement('sup');
		supLoc.className='supLoc';
		let text = document.createTextNode(pais);
		supLoc.appendChild(text);
		divLocal.innerHTML=(cidade);
		divLocal.appendChild(supLoc);
		
		//Temperatura em celsius
		let tempC = (buscaDados.main.temp).toFixed(0);
		let divTemp = document.getElementById('tempCelsius');
		let sup = document.createElement('sup');
		sup.className='supC';
		let texto = document.createTextNode('ºC');
		sup.appendChild(texto);
		divTemp.innerHTML=(tempC);
		divTemp.appendChild(sup);
		
		//Temperatura em farenheit °F = (°C x 1,8) + 32
		let tempF = (tempC*1.8)+32;
		divTemp = document.getElementById('tempFarenheit');
		sup = document.createElement('sup');
		sup.className='supF';
		texto = document.createTextNode('ºF');
		sup.appendChild(texto);
		divTemp.innerHTML=(tempF.toFixed(0));
		divTemp.appendChild(sup);
			
		//Descrição e icone
		let { description, icon } = buscaDados.weather[0];
		document.getElementById('descricao').textContent=description;
		let iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
		document.getElementById('icone').src = iconUrl;
		let icone = document.getElementById('icone');
		icone.style.width = '50px';
		icone.style.height = 'auto';
		});

	}
	
	function erro(){
		window.alert('Não é possível obter a localização');
	}
	
	//local
	//tempCelsius 
	//tempFarenheit
	//icone
	//descricao
	
	
//let base='http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e28dd82b8735350e9f5514d2b8db1251&units=metric';

//let base='http://api.openweathermap.org/data/2.5/weather?lat=41.394295&lon=-7.998372&APPID=e28dd82b8735350e9f5514d2b8db1251&units=metric';
//console.log(base);


});
