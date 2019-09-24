angular.module('myApp').controller('AlreadyBoughtController',AlreadyBoughtControllerFunction);

AlreadyBoughtControllerFunction.$inject=['ShoppingListCheckOffService'] 

function AlreadyBoughtControllerFunction(ShoppingListCheckOffService){

	var AlreadyBoughtController=this;
	
	AlreadyBoughtController.alreadyBoughtItems=ShoppingListCheckOffService.getItemsFromAlreadyBoughtList();
}