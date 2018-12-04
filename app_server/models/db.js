var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekan32';

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function (){
	console.log('Mongoose' + dbURI +
		'adresteki veri tabanına bağlandı\n');
});

mongoose.connection.on('connected', function (err){
	console.log('Mongoose bağlantı hatası\n :' +err);
});

mongoose.connection.on('connected', function (){
	console.log('Mongoose' + dbURI +
		'adresteki veri tabanına bağlandı\n');
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose bağlantısı kesildi\n');
});

kapat = function(msg, callback) {
	mongoose.connection.close(function(){
		console.log('mongoose kapatıldı \n' +msg);
		callback();
	});
};

//uygulama kapandığında kapat
process.on('SIGINT', function(){
	kapat('Uygulama kapatıldı\n', function(){
		process.exit(0);
	});
});

require('./mekansema');