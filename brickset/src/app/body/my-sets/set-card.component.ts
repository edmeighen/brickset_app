import { Component, Injectable } from "@angular/core";
import { MySetCardInfo } from "./set-card.model";
import { MySetCardService } from "./set-card.service";

@Component({
    selector: 'my-set-card',
    templateUrl: './set-card.component.html'
})
@Injectable({providedIn: 'root'})
export class MySetCardComponent {
    mysetcards: MySetCardInfo [] = [];

    constructor(private mySetCardService: MySetCardService) {
       
        this.mySetCardService.getMySetCardInfo().subscribe((data:MySetCardInfo[]) => {

            for (const setcard in data){
                console.log(data[setcard])
                this.mysetcards.push(data[setcard]);
            }
            
            
        })
    }
}