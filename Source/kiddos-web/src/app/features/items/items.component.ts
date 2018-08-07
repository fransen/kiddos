import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private itemService: ItemService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teller = +params.get('id');
      

      this.getItem(this.teller);
    });
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

  getTeller(maximaalAantal, index) : void {
    if(this.teller == -1) {
      this.teller = Math.floor(Math.random() * maximaalAantal);
    }

    this.teller =  this.teller + index;

    if( this.teller == maximaalAantal.length ) {
      this.teller = 0;
    }

    console.log("index:" + index );
    console.log("teller:" + this.teller );


  }
}
