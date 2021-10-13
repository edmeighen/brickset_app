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
    setInfo: SetCardInfo[] | any;

    constructor(private moreService: MoreService) {
        for (var setcard of mock_set_card) {
            this.setcards.push(new SetCards(setcard))
        }
        this.moreService.getSetCardInfo().subscribe(data => {
            console.log(data)
            //playground, enhanced for loops, single element responses, etc.
            this.setInfo = data;
            console.log(this.setInfo)
            console.log(this.setInfo.set1)
            console.log(this.setInfo.set1.setName)
            //works
        })
    }
}
