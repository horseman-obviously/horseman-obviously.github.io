---
permalink: /shop/
title: Shop 
layout: default
---

<div id = "grid-container" ng-app = "webShop">
	<h3 style="font-weight: 100; text-align: center;">Base Kit</h3>
	<md-button class = "md-raised text" href="{{ site.url }}/invoice/" flex = "100"  flex-gt-md = "auto">
	Invoice               		
    </md-button>
	<div id = "img-container" class = "shop-container" ng-controller = "dialogController as ctrl">
		<div class = "container">
			<img src = "{{ site.url }}/assets/images/Kit1.jpg" alt = "Kit" id = "kit" class = "shop-images">
			<div class="middle">
				<div class = "description">Base Kits<br>Price: &#8377;1500</div>
    			<md-button class = "md-raised text" ng-click = "showCustom($event, 'Kits')" flex = "100"  flex-gt-md = "auto">
               		Add
            	</md-button>
</div>	
</div>
		<div class = "container">
			<img src = "{{ site.url }}/assets/images/Kit2.jpg" id = "smartphone" class = "shop-images">
			<div class="middle">
				<div class = "description">Smartphone<br>Price: &#8377;7000</div>
    			<md-button class = "md-raised text" ng-click = "showCustom($event, 'Smartphone')" flex = "100"  flex-gt-md = "auto">
               		Add
            	</md-button>
</div>	
</div>
		<div class = "container">	
			<img src = "{{ site.url }}/assets/images/bottle.jpg" id = "bottles" class = "shop-images">
			<div class="middle">
				<div class = "description">Bottles<br>Price: &#8377;50</div>
    			<md-button class = "md-raised text" ng-click = "showCustom($event, 'Bottles')" flex = "100"  flex-gt-md = "auto">
               		Add
            	</md-button>
</div>	
</div>
		<div class = "container">	
			<img src = "{{ site.url }}/assets/images/cuvettes.jpg" id = "cuvettes" class = "shop-images">		
			<div class="middle">
				<div class = "description">Cuvettes<br>Price: &#8377;70</div>
    			<md-button class = "md-raised text" ng-click = "showCustom($event, 'Cuvettes')" flex = "100"  flex-gt-md = "auto">
               		Add
            	</md-button>
</div>	
</div>
</div>
</div>