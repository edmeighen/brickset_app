import { Component, Input, OnInit } from '@angular/core';
import { MySetCardInfo } from './my-set-card.model';
import { MySetCardComponent } from './set-card.component';
import { MySetCardService } from './set-card.service';

@Component({
  selector: 'brickset-my-sets',
  templateUrl: './my-sets.component.html',
})
export class MySetsComponent implements OnInit {

  mysetcards: MySetCardInfo [] = [];

    constructor(private mySetCardService: MySetCardService) {
       
        this.mySetCardService.getMySetCardInfo().subscribe((data:MySetCardInfo[]) => {

            for (const setcard in data){
                console.log(data[setcard])
                this.mysetcards.push(data[setcard]);
            }
            
            
        })
    }

  ngOnInit(): void {
  }

}
