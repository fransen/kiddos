import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  randomItem;
  items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    // this.getItems();
    this.getRandomItem();
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

  getRandomItem(): void {
    this.itemService.getItems()
    .subscribe(
      data => {
        this.randomItem = data[Math.floor(Math.random() * data.length)];
      },
      error => console.log(error)
    )
  }

}
