import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'app-oneitem',
  templateUrl: './oneitem.component.html',
  styleUrls: ['./oneitem.component.css']
})
export class OneitemComponent implements OnInit {

  coffeeItem: Coffee = new Coffee();
  id: number;

  constructor(private myCoffeeService: CoffeeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get("productID"));
    this.myCoffeeService.getProductById(this.id).subscribe(response => {
      console.log(response);
      this.coffeeItem = response;
    })
  }

  deleteItem(itemid:number){
    console.log(itemid)
    this.myCoffeeService.deleteProduct(itemid).subscribe(response => {
      console.log(response);
      this.router.navigate(['home']);
    })
  }

}
