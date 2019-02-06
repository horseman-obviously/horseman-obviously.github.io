---
permalink: /invoice/
title: Invoice 
layout: default
---

<div class="cont" ng-app="webShop">
  <section class="row" ng-controller="dialogController">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in invoice.items">
          <td><input type="text" ng-model="item.name" class="form-control" /></td>
          <td><input type="text" ng-model="item.description" class="form-control" /></td>
          <td><input type="number" ng-model="item.qty" class="form-control" /></td>
          <td><input type="number" ng-model="item.price" class="form-control" /></td>
          <td>&#8377;{% raw %} {{item.qty * item.price}} {% endraw %}</td>
          <td><button type="button" class="btn btn-danger" ng-click="remove($index)">Delete</button></td>
        </tr>
        <tr>
        <td><button type="button" class="btn btn-primary" ng-click="add()">Add item</button></td>
          <td></td>
          <td></td>
          <td>Total : </td>
          <td>&#8377; {% raw %} {{ total() }} {% endraw %}</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>