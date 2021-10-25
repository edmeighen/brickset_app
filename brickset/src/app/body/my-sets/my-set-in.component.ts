import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-set-card-in',
    templateUrl: './set-card.component.html'
})
export class MySetCardsInComponent {
    @Input()
    imgPath! : string;
    @Input()
    setName! : string;
    @Input()
    setNumber! : string;
}
