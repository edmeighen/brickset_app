import { Component, Input } from "@angular/core";

@Component({
    selector: 'set-card',
    templateUrl: './set-cards.component.html',
    styleUrls: ['./set-cards.component.css']
})
export class SetCardsComponent {
    @Input()
    imgPath! : string;
    @Input()
    setName! : string;
    @Input()
    setNumber! : string;
    @Input()
    altId! : string;
    @Input()
    setTheme! : string;
    @Input()
    setSubtheme! : string;
    @Input()
    setYear! : string;
    @Input()
    pieceCount! : string;
    @Input()
    setFigs! : string;
    @Input()
    figExtra! : string;
    @Input()
    setRrp! : string;
    @Input()
    setAvail! : string;
}