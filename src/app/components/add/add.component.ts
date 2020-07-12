import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newCoffeeItem: Coffee = new Coffee();

  constructor(private myCoffeeService: CoffeeService, private router: Router) { }

  ngOnInit(): void {
  }

  createItem(){
    console.log(this.newCoffeeItem);
    this.myCoffeeService.addProduct(this.newCoffeeItem).subscribe(response => {
      console.log(response);
      this.router.navigate(['home']);
    })
  }

}
