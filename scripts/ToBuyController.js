angular.module('myApp').controller('ToBuyController',ToBuyControllerFunction);

ToBuyControllerFunction.$inject=['ShoppingListCheckOffService'] 

function ToBuyControllerFunction(ShoppingListCheckOffService){

	var ToBuyController=this;

	ToBuyController.toBuyItems=ShoppingListCheckOffService.getItemsFromBuyList();

	
	ToBuyController.addItemsToAlreadyBoughtList=function(item){
		ShoppingListCheckOffService.addItemsToAlreadyBoughtList(item);
	}
	
}
