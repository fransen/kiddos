import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { Item } from '../../models/item';
import { Image } from "../../models/image";
import { Document } from "../../models/document";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items: Item[] = [];
  teller: number = -1;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.items = [];

    this.itemService.getItems()
    .subscribe(
      data => {
        this.getTeller(data.length);
        this.items.push(data[this.teller]);
      },
      error => console.log(error)
    )
  }

  getTeller(maximaalAantal) {
    if(this.teller == -1) {
      this.getRandom(maximaalAantal)
    }

    this.teller = this.teller + 1;

    if( this.teller == maximaalAantal.length ) {
      this.teller = 0;
    }
  }

  getRandom(maximaalAantal) {
    this.teller = Math.floor(Math.random() * maximaalAantal);
  }
}
