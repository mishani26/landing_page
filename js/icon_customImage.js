ymaps.ready(function(){
	var myMap=new ymaps.Map('map',
		{center:[53.932171,27.642743],zoom:14,
			controls:['zoomControl','typeSelector','fullscreenControl']}),
	myPlacemark=new ymaps.Placemark([53.925402,27.637237],
		{hintContent:'Собственный значок метки',balloonContent:'Адрес:220114, г. Минск, ул. Филимонова, д.55, корп.3, оф. 6Н'},
		{iconLayout:'default#image',iconImageHref:'images/pointer.png',
		iconImageSize:[30,42],iconImageOffset:[-10,-42]});
	myGeoObject=new ymaps.Placemark([53.930063,27.635864],{},
		{iconLayout:'default#image',iconImageHref:'images/adres.png',
		iconImageSize:[190,170],iconImageOffset:[-130,-170]});
	myMap.geoObjects.add(myPlacemark).add(myGeoObject).add(new ymaps.Placemark([53.927657,27.640542],{},
		{iconLayout:'default#image',iconImageHref:'images/foot1.png',
		iconImageSize:[30,42],iconImageOffset:[-3,-42]})).add(new ymaps.Placemark([53.929860,27.642215],{},
		{iconLayout:'default#image',iconImageHref:'images/foot2.png',
		iconImageSize:[20,42],iconImageOffset:[-3,-42]})).add(new ymaps.Placemark([53.931126,27.644533],{},
		{iconLayout:'default#image',iconImageHref:'images/foot3.png',
		iconImageSize:[20,42],iconImageOffset:[-3,-42]})).add(new ymaps.Placemark([53.932494,27.647279],{},
		{iconLayout:'default#image',iconImageHref:'images/foot4.png',iconImageSize:[20,42],iconImageOffset:[-3,-42]}));});