import { Component, Input } from "@angular/core";

@Component({
    selector: 'set-card',
    templateUrl: './set-cards.component.html'
})
export class SetCardsComponent {
    @Input()
    imgPath! : string;
    @Input()
    setName! : string;
    @Input()
    setNumber! : string;
}