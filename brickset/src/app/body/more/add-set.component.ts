import { Component } from "@angular/core";
import { MoreService } from "./more.service";

@Component({
    selector: 'add-set-form',
    templateUrl: 'add-set.component.html'
})
export class AddSetComponent {
    constructor(private moreService: MoreService) {
        
    }

    onAddSetCard(data:MoreService) {
        this.moreService.addSetCard(data).subscribe(data =>{
            console.log("Data posted successfuly");
            console.log(data);
        });
    }

}