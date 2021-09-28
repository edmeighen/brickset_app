import { Component } from "@angular/core";
import { mock_set_card } from "../mock-set-card";
import { SetCards } from "../set-card.model";

@Component({
    selector: 'brickset-more',
    templateUrl: './more.component.html'
})
export class MoreComponent {
    setcards: SetCards [] = [];

    constructor() {
        for (var setcard of mock_set_card) {
            this.setcards.push(new SetCards(setcard))
        }
    }
}