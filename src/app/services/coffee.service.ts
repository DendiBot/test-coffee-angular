import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Coffee } from '../models/coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffeeURL: string = "http://localhost:3000/coffee";

  constructor(private http: HttpClient) { }

  // Get the list of coffee products - GET
  getAllProducts(): Observable <Coffee[]>{
    return this.http.get<Coffee[]>(this.coffeeURL);
  }

  // Get a product by its id - GET
  // Component needs to pass the id
  getProductById(id: number): Observable<Coffee>{
    return this.http.get<Coffee>(this.coffeeURL+"/"+id)
  }


  // Adding a new product - POST
  // Component needs to pass a coffee object
  addProduct(newcoffee: Coffee): Observable<Coffee>{
    return this.http.post<Coffee>(this.coffeeURL, newcoffee)
  }

  // Editting a product by id - PUT
  // Component needs to pass a coffee object and an id for the item to be updated
  editProduct(id: number, edittedCoffee: Coffee): Observable<Coffee>{
    return this.http.put<Coffee>(this.coffeeURL+"/"+id, edittedCoffee)
  }

  // Deleting a product by id - DELETE
  // Component needs to pass the id of the object to be deleted
  deleteProduct(id: number): Observable<any>{
    return this.http.delete<any>(this.coffeeURL+"/"+id)
  }

}
