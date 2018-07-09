import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items;
  item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
    //this.getRandomItem();
    //this.getItem(100);
  }

  getItems(): void {
      this.itemService.getItems()
        .subscribe(
          data => {
            this.items = data;
          },
          error => console.log(error)
        )
  }

  getItem(id: number): void {
    this.itemService.getItems()
    .subscribe(
      data => {
        this.item = data[id];
        console.log(this.item);
      },
      error => console.log(error)
    )
  }

  getRandomItem(): void {
    this.itemService.getItems()
    .subscribe(
      data => {
        this.item = data[Math.floor(Math.random() * data.length)];
        console.log(this.item);
      },
      error => console.log(error)
    )
  }
}
