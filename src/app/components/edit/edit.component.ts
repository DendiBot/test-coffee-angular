import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coffeeItem: Coffee = new Coffee();
  id: number;

  constructor(private myCoffeeService: CoffeeService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get("editID"));
    this.myCoffeeService.getProductById(this.id).subscribe(response => {
      console.log(response);
      this.coffeeItem = response;
    })
  }

  editItem(){
    console.log(this.coffeeItem)
    this.myCoffeeService.editProduct(this.id,this.coffeeItem).subscribe(response => {
      console.log(response);
      this.router.navigate(['home']);
    })
  }

}
