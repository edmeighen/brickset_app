import { Component } from "@angular/core";
import { UserInfo } from "../headers/user-info.model";
import { UserInfoService } from "../headers/user-info.service";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'brickset-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent {
    constructor(private infoService:UserInfoService, private dbService:DatabaseService) {
        this.dbService.showData();
    }

onEditUserInfo(data:UserInfo) {
    this.infoService.editUserInfo(data).subscribe(data =>{
        console.log("Data posted successfuly");
        console.log(data);
    });
}

}