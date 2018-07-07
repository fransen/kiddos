import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
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
}
