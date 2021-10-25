import { Component } from "@angular/core";
import { MySetCardService } from "./set-card.service";


@Component({
    selector: 'add-my-set-form',
    templateUrl: 'add-my-set.component.html'
})
export class AddMySetComponent {
    constructor(private mySetCardService: MySetCardService) {
        
    }

    onAddSetCard(data:MySetCardService) {
        this.mySetCardService.addMySetCard(data).subscribe(data =>{
            console.log("Data posted successfuly");
            console.log(data);
        });
    }

}