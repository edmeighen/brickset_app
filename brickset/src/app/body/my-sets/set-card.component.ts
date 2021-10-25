import { Component, Injectable, Input } from "@angular/core";
import { MySetCardInfo } from "./my-set-card.model";
import { MySetCardService } from "./set-card.service";

@Component({
    selector: 'my-set-card',
    templateUrl: './set-card.component.html'
})
@Injectable({providedIn: 'root'})
export class MySetCardComponent {
    @Input()
    imgPath! : string;
    @Input()
    setName! : string;
    @Input()
    setNumber! : string;
}