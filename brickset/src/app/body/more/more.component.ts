import { Component } from "@angular/core";
import { mock_set_card } from "../mock-set-card";
import { SetCards } from "../set-card.model";
import { SetCardInfo } from "./more.model";
import { MoreService } from "./more.service";

@Component({
    selector: 'brickset-more',
    templateUrl: './more.component.html'
})
export class MoreComponent {
    setcards: SetCards [] = [];

    constructor(private moreService: MoreService) {
       // for (var setcard of mock_set_card) {
       //     this.setcards.push(new SetCards(setcard))
       // }
        this.moreService.getSetCardInfo().subscribe((data:SetCards[]) => {
            //console.log(data)
            //playground, enhanced for loops, single element responses, etc.
            for (const setcard in data){
                console.log(data[setcard])
                this.setcards.push(data[setcard]);
            }
            //https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
            //populate setcards array!!!
            
        })
    }
}