import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // A variable to store the list of coffee items
  coffeeList: Coffee[] = [];

  constructor(private myCoffeeService: CoffeeService, private router: Router) { }

  ngOnInit(): void {
    this.myCoffeeService.getAllProducts().subscribe(response => {
      console.log(response);
      this.coffeeList = response;
    })
  }

}
