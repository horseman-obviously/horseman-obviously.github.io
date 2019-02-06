function openNav() {
	if (screen.width < 400){
		document.getElementById("sidenav").style.width = "100%";

	}
	else {
		document.getElementById("sidenav").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.getElementById("hambutton").style.visibility = "hidden";
	}
    
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("hambutton").style.visibility = "initial";
}






angular.module('webShop', ['ngMaterial'])
       .controller('dialogController', dialogController);
function dialogController ($scope, $mdDialog){
  $scope.qty = 0;
  $scope.product = "";
  $scope.price = 0;
  $scope.basePrice = {"Kits": 1500,
  "Bottles": 50,
  "Cuvettes": 70,
  "Smartphone": 7000}
  $scope.showCustom = function(event, product) {
               $scope.item = product; 
               $scope.qty = 1;
               $scope.price = $scope.basePrice[product];
               $scope.displayPrice = 0;
               $scope.calcPrice = function () {
                  $scope.displayPrice = $scope.price;
                  return $scope.displayPrice *= $scope.qty;
               } 
               $mdDialog.show ({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true,           
                  template: '<md-dialog style = "border-radius: 25px">' +
                              '  <md-dialog-content style = "margin: 30px; color: #e67300">' +
                              '     Qty' +
                              '     <p style = "margin-top: 10px"><input type = "number" ng-model = "qty" value = "1" min = "1"></p>' +
                              '     Price' +
                              '     <p style = "margin-top: 10px; color: black">&#8377;{{ calcPrice() }}</p>' +
                              '     <p style = "margin-top: 10px"><md-button style = "margin-left: 0px" class = "md-raised text"   flex = "100"  flex-gt-md = "auto" ng-click = "add(item, qty, displayPrice)">Add</md-button></p>' +
                              '  </md-dialog-content>' +
                              '</md-dialog>',
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };

            $scope.invoice = {
    items: [{
      name: '',
      description: '',
      qty: 1,
      price: 0
    }]
  };
  $scope.add = function(item, qty, price){
    $scope.invoice.items.push({
      name: item,
      description: '',
      qty: [qty],
      price: [price]
    });
  },
    $scope.remove = function(index){
    $scope.invoice.items.splice(index, 1);
  },
    $scope.total = function(){
    var total = 0;
    angular.forEach($scope.invoice.items, function(item){
      total += item.qty * item.price;
    })
    return total;
  }
}      

