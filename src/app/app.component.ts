import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus_Pizza';



  
 
  allItems:MenuItem[] =[
  {
    name:"Chicken Fingers",
    category: "Dinner",
    price: 11.99
  },
  {
    name:"Pizza",
    category: "Dinner",
    price: 11.99
  },
  {
    name:"Wings",
    category: "Sides",
    price: 8.99
  },
  {
    name:"Breadsticks",
    category: "Sides",
    price: 4.99
  },
  {
    name:"Ceaser Salad",
    category: "Salads",
    price: 5.99
  },
  {
    name:"Cinnamon Roll",
    category: "Dessert",
    price: 8.99
  },
  {
    name:"Cobb Salad",
    category: "Salads",
    price: 6.99
  },
  {
    name:"Cheesecake",
    category: "Dessert",
    price: 10.99
  },
  ];

 //newmenuitem:MenuItem[]=[];
getByCategory(cat: string):MenuItem[]{
//this.newmenuitem.length=0;
//this.newmenuitem.splice(0, this.newmenuitem.length)
let newmenuitem:MenuItem[]=[];
this.allItems.forEach((t:MenuItem) => {
  if(t.category == cat){
    newmenuitem.push(t);
  }
});
    return newmenuitem;
}

 dinner:MenuItem[]= this.getByCategory("Dinner");
 sides:MenuItem[]= this.getByCategory("Sides");
 salads:MenuItem[]= this.getByCategory("Salads");
 dessert:MenuItem[]= this.getByCategory("Dessert");


}
