
const anaSayfa=function(req,res){
	res.render('mekanlar-liste', 

		{'baslik':'Anasayfa',
		 'sayfaBaslik':{
			'siteAdi': 'mekan32',
			'aciklama':'Isparta civarındaki mekanları keşfedin'

		},
		'mekanlar': [
		{
			'ad': 'Starbucks',
			'adres':'Centrum Garden',
			'puan': 4,
			'imkanlar':['kahve', 'çay', 'tavla'],
			'mesafe': '10 km'
		},
		{
			'ad': 'Gloria Jeans',
			'adres':'Iyaş AVM',
			'puan': 5,
			'imkanlar':['kahve', 'çay'],
			'mesafe': '4 km'
		},
		
		]

	});

}
const mekanBilgisi=function(req,res){
	res.render('mekan-detay', {
		'baslik':'Mekan Bilgisi',
		'sayfaBaslik':'Starbucks',
		'mekanBilgisi':{
			'ad':'Starbucks',
			'adres':'Centrum Garden',
			'puan':3,
			'imkanlar':['kahve', 'pasta', 'kek'],
			'koordinatlar':{
				'enlem':37.781885,
				'boylam':30.566034,
			},
			'saatler':[
			{
				'gunler':'Pazartesi-Cuma',
				'acilis':'7.00',
				'kapanis': '23.00',
				'kapali':false

			},
			{
				'gunler':'Cumartesi',
				'acilis':'9.00',
				'kapanis': '22.30',
				'kapali':false

			},
			{
				'gunler':'Pazar',
				'kapali':true

			}

			],
			'yorumlar':[
			{
				'yorumYapan':'Esma Haber ',
				'puan':3,
				'tarih':'22 Ekim 2017',
				'yorumMetni':'Işıl ışıl bir mekan'
			}
			]
		}
	});

};
const yorumEkle=function(req,res){
	res.render('yorum-ekle', {'title':'Yorum Ekle'});

};

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle}; //indexi dış dünyaya açtık