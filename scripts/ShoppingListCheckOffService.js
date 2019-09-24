angular.module('myApp').service('ShoppingListCheckOffService',ShoppingListCheckOffServiceFunction);

function ShoppingListCheckOffServiceFunction(){

	var service=this;

	var toBuyItems = [

		{name:'Coca Cola',quantity:'3'},
		{name:'Pepsi',quantity:'4'},
		{name:'Limca',quantity:'7'}

	];

	var alreadyBoughtItems=[];

	service.addItemsToAlreadyBoughtList=function(item){
		alreadyBoughtItems.push(item);
		service.removeItemsFromBuyList(item);
	}

	service.getItemsFromAlreadyBoughtList=function(){
		return alreadyBoughtItems;
	}

	service.getItemsFromBuyList=function(){
		return toBuyItems;
	}

	service.removeItemsFromBuyList=function(item){
		toBuyItems.splice(toBuyItems.indexOf(item),1);
	}

}