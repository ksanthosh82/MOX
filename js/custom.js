/* Your JS codes here */
angular.module("mox",['ngSanitize'])
	.controller("moxController", function($scope){
		$scope.title = "MOX Exports	Title";
		$scope.templates = {
			"home" : {
				"name" : "home",
				"url" : "home.html"
			},
			"freshVegetables" : {
				"name" : "Fresh Vegetables",
				"summary" : [
					"We are acclaimed Manufacturers, Exporters and Suppliers of Fresh Vegetables from India. To keep our promise, we are sourcing the best products at the best of prices on a daily basis with the support of local farmers. We have wide range of vegetables than your local market or nearest shopping mall. We give you High quality at reasonable rates and accurate weighing with Digital Weighing Machine. We believe in 'Quality with Right Quantity'.",
					"We can make available different size packaging of these Vegetables and deliver them in all parts of the world promptly. We take “to provide best quality of vegetables at economical price to end consumer which are properly washed, hygienically packed, and correctly weighed before being delivered at their door steps."
				],
				"carousel"  : [
					{
						"heading"  : "Spell put vegetable namee, we have it",
						"paragraph"  : "Vegetables are a rich source of nutrients. We pay attention to rich nutrients.",
						"image" : "img/vegetables/freshVegetables-1.jpg"
					},
					{
						"heading"  : "Most Outstanding freshness",
						"paragraph"  : "The reason freshness is a better choice is definitely because it is fresh.",
						"image" : "img/vegetables/freshVegetables-2.jpg"
					},
					{
						"heading"  : "Choose us",
						"paragraph"  : "Choosing a product plays very important role in our business.",
						"image" : "img/vegetables/freshVegetables-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"freshFruits" : {
				"name" : "Fresh Fruits",
				"summary" : [
					"Our motto is \"To provide the best quality fruits at reasonable rates.\" Our company is engrossed in manufacturing, Exporting and supplying quality-tested Fresh Fruits to buyers, Combinations of fruits can be used to make smoothes and salads contributing to the health of the community. Freshness is our top priority. We bring forth all kinds of Fresh Fruits at affordable prices. A fruit is generally a fleshy seed associated part of a particular plant; it is naturally and mostly edible and sweet in the raw state. By and large each and everyone in this world love fruit, though there are exceptions, we still will have a majority of folks who love fruits. It is something which has both taste and nutrients.",
					"Fruits are good source of vitamins and minerals are a readily available source. A fruit will boost you instantly. It is something which can quench your thirst and satisfy your hunger at the same time. Fruits are guardian angels for all the busy bees out there, which have no time to even have their breakfast. Since its handy they can be eaten even on the move."
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/fruits/freshFruits-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/fruits/freshFruits-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/fruits/freshFruits-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"coconut" : {
				"name" : "Coconut",
				"summary" : [
					"We are a coconut exporter, supplier in India. coconuts are part of the daily diets of many people. Coconuts are different from any other fruits because they contain a large quantity of \"water\" and when immature they are known as tender-nuts or jelly-nuts and may be harvested for drinking.",
					"The oil and milk derived from it are commonly used in cooking and frying; coconut oil is also widely used in soaps and cosmetics. The clear liquid coconut water within is potable. The husks and leaves can be used as material to make a variety of products for furnishing and decorating. It also has cultural and religious significance in many societies that use it."
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/coconut-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/coconut-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/coconut-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"drumsticks" : {
				"name" : "Drumsticks",
				"summary" : [
					"We are a Drumstick (Moringa) exporter, supplier in Tamilnadu, India. The botanical name for drumstick tree is \"Moringa Oleifera\" and it is the single genus in the family \"Moringaceae\". It is thought to have been originated from Northwest India. Drumsticks are enjoyed by including them in curries, sauces, soups or pickles. It is known to be beneficial for the human health in many ways, A must-have ingredient in sambar, one can harness its health benefits in numerous ways such as cooking it with other vegetables, lentils (dals) or in the form of soup. Being high in nutrients and tasty in nature.",
					"We MOX Exports supply and export a wide range of Drumstick (moringa) seeds of that are largely used in various commercial as well as agricultural and industrial purposes. They are also used in plantation specifically the moringa seeds like PMK1 and PMK2. These seeds are graded and separated by skilled manpower to ensure that we offer quality seeds. We are a professionally managed global player in a business of manufacturing processing and marketing moringa seed, moringa leaves powder, moringa seed pkm1, Moringa Oleifera Seeds for cultivation. We are providing moronga oleifera seed pkm1 for plating and cultivation.We are giving best and standard seed."
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/drumsticks-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/drumsticks-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/drumsticks-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"indianSpices" : {
				"name" : "Indian Spices",
				"summary" : [
					"Whole spices are spices in natural form. Some of the major spices which are in good demand in whole form are Turmreric, Chilly, and Coriander etc. The whole spices which we supply are cleaned and graded manually or using latest machineries depending upon the product and the quality required by the buyer. They are further packed in clean and strong export worthy bags.",
					"We mainly export the following varieties of Spices from India: <ul><li>Cumin Seed</li><li>Turmeric Fingers	</li><li>Mustard Seeds</li><li>Curry Leaves</li><li>Cloves</li><li>Corainder Seed</li><li>Black Pepper</li><li>Red / Green Chilli Whole</li><li>Tamarind</li><li>Ginger/ Garlic  Etc"
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/indian-spices-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/indian-spices-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/indian-spices-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"cuminSeeds" : {
				"name" : "Cumin Seeds",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"turmericFingers" : {
				"name" : "Turmeric Fingers",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"mustardSeeds" : {
				"name" : "Mustard Seeds",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"curryLeaves" : {
				"name" : "Curry Leaves",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"cloves" : {
				"name" : "Cloves",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"corianderSeeds" : {
				"name" : "Coriander Seeds",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"blackPepper" : {
				"name" : "Black Pepper",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"redGreenChilliWhole" : {
				"name" : "Red/ Green Chilli Whole",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"tamarind" : {
				"name" : "Tamarind",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"ginger" : {
				"name" : "Ginger",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"garlic" : {
				"name" : "Garlic",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"clayPotHandicrafts" : {
				"name" : "Clay Pot/ Handicrafts",
				"summary" : [
					"MOX Exports  is engaged in exporting, whole selling, distribution and supplying of Clay Pot and handicraft items. We offer a wide range of products like clay pot, paper earring, etc . All these products are tastefully designed by our creative and talented professionals, keeping the diverse requirements of our clients and the current market trends in mind.",
					"Furthermore, clients can customize their orders according to their needs and we hold an expertise in meeting those specifications and delivering them on time. We ensure to strictly check the quality of our products on various parameters before dispatching them to our clients. To make easy monetary transaction."
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/clay-pot-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/clay-pot-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/vegetable/clay-pot-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"garments" : {
				"name" : "Garments",
				"summary" : [
					"A professionally managed company, MOX Exports is a leading exporter of fine quality Ladies fashion garments like Cotton Ladies Tops/Kurtis ,Dresses, T-shirts, Shirts, Lungi, Cotton Towels, handkerchief etc .",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/sarees/garments-1.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/sarees/garments-2.jpg"
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : "img/sarees/garments-3.jpg"
					}
				],
				"url" : "productDetail.html"
			},
			"inquiry" : {
				"name" : "Inquiry",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "productDetail.html"
			},
			"aboutUs" : {
				"name" : "About Us",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "aboutUs.html"
			},
			"contactUs" : {
				"name" : "Contact Us",
				"summary" : [
					"",
					""
				],
				"carousel"  : [
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					},
					{
						"heading"  : "",
						"paragraph"  : "",
						"image" : ""
					}
				],
				"url" : "contactUs.html"
			}
		};
		$scope.template = $scope.templates["home"];
		$scope.getTemplate = function(item){
			if($scope.templates[item] != undefined){
				$scope.template = $scope.templates[item];
			}
		};
		$scope.appointmentForm = "appointment.html";
	});