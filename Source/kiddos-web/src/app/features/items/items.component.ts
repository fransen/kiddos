import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': ''}
})
export class ItemsComponent implements OnInit {
  
  items: Item[] = [];
  teller: number = -1;
  animationState = 'in';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getRandom();
  }

  getVolgende(): void {
    this.getItem(1);
  }

  getVorige(): void {
    this.getItem(-1);
  }

  getRandom(): void {
    this.teller = -1;
    this.getItem(1);
  }

  getItem(index): void {
    this.items = [];

    this.itemService.getItems()
    .subscribe(
      data => {
        this.getTeller(data.length, index);
        this.items.push(data[this.teller]);
      },
      error => console.log(error)
    )
  }

  getTeller(maximaalAantal, index) {
    if(this.teller == -1) {
      this.getRandomVanAantalItems(maximaalAantal)
    }

    this.teller = this.teller + index;

    if( this.teller == maximaalAantal.length ) {
      this.teller = 0;
    }
  }

  getRandomVanAantalItems(maximaalAantal) {
    this.teller = Math.floor(Math.random() * maximaalAantal);
  }
}
