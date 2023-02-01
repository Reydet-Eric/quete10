import { Injectable } from '@angular/core';
import { Cocktail } from './Icocktail'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  listCocktail: Cocktail [] = [
    {name: "Valkirie",
      prix: 7.50,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQsGlqnk8Kd44i2IMp2H_Pk3sbbD2hkvtnxWePQvwqlPBv1tfwS9jCjnn-r4tnpyUnV0&usqp=CAU"
    },
    {name:"Sudoki",
  prix: 6.00,
image:"https://www.destinationcocktails.fr/wp-content/uploads/2022/03/cocktail-mimosa.jpg"}
  ]
  // constructor(public cocktailService: CocktailService) { }


  getCocktails(){
    console.log(this.listCocktail)
    return this.listCocktail
  }
}
