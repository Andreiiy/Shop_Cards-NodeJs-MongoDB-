var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping', { useNewUrlParser: true });
var products =[
	new Product({
	imagePath: 'https://mrcollection.com/wp-content/uploads/2019/12/LAMBO043.jpg',
	title: 'Lambordgini',
	description: 'Lamborgini newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
	price:3000000
	}),
	new Product({
		imagePath: 'https://images.hgmsites.net/hug/ferrari-f40-tribute-by-samir-sadikhov_100679034_h.jpg',
		title: 'Ferrari',
		description: 'Ferrari newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
		price: 2000000
	}),
	new Product({
		imagePath: 'https://techcrunch.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-9.07.53-PM.jpg',
		title: 'Mersedess',
		description: 'Mersedess newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
		price: 1500000
	}),
	new Product({
		imagePath: 'https://kelwaysvillage.com/wp-content/uploads/2019/07/99-Gallery-of-New-Infiniti-Q70-2020-New-Concept-with-New-Infiniti-Q70-2020.jpg',
		title: 'Infiniti',
		description: 'Infiniti newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
		price: 1000000
	}),
	new Product({
		imagePath: 'https://img1.cgtrader.com/items/1929561/03f87288f0/toyota-supra-2020-lowpoly-3d-model-low-poly-max.jpg',
		title: 'Toyota',
		description: 'Toyota newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
		price: 900000
	}),
	new Product({
		imagePath: 'https://s3-us-east-2.amazonaws.com/lexus-cms-media/wp-content/uploads/2019/11/2020_Lexus_GS_F_01-1500x900.jpg',
		title: 'Lexus',
		description: 'Lexus newest concept car has just been unveiled and it is ready to hit the track, this time a slightly different one.',
		price: 1000000
	})
];
var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function (err, result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

		function exit() {
			mongoose.disconnect();
		}