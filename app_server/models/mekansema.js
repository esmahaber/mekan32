var mongoose = require('mongoose');
//bir şema diğer şemayı kullanacaksa diğer şema altında olmalıdır
var saatSema = new mongoose.Schema(
{
	gunler:{type: String, required:true},
	acilis: String,
	kapanis: String,
	kapali:{type:Boolean, required:true}
},
{usePushEach: true}
	);

var yorumSema = new mongoose.Schema(
{
	yorumYapan:{type:String, required:true},
	puan:{type:Number, required:true, min:0, max:5},
	yorumMetni:{type:String, required:true},
	tarih:{type:Date, default:Date.now}
},
{usePushEach: true}
	);
//mekan bilgilerinin tutulacağı şema
var mekanSema = new mongoose.Schema(
{
	ad:{type: String, required:true},
	adres:String,
	puan:{type:Number, default:0, min:0, max:5},
	imkanlar:[String],
	koordinatlar: {
		type: {
			type: String
		},
		enlemboylam: [Number]
	},
	saatler:[saatSema],
	yorumlar:[yorumSema]
},{usePushEach: true}
	);
mekanSema.index({koordinatlar: '2dsphere'});

mongoose.model('mekan', mekanSema, 'mekanlar');

