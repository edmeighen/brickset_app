import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    url: string = "https://brickset-b70d8-default-rtdb.firebaseio.com/my-info.json";
    constructor(private http:HttpClient) {
    }

    getUserInfo() {
        return this.http.get<UserInfo>(this.url);
    }

    editUserInfo(data: UserInfo) {
        return this.http.post(this.url, data);
        //post - new entry
        //put - modifies old entry
    }
}
