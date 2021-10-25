import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MySetCardInfo } from "./my-set-card.model";
import { MySetCardComponent } from "./set-card.component";

@Injectable({providedIn: 'root'})
export class MySetCardService {
    url: string = "https://brickset-b70d8-default-rtdb.firebaseio.com/MySets.json";
    constructor(private http:HttpClient) {
    }

    getMySetCardInfo() {
        return this.http.get<MySetCardInfo[]>(this.url);
    }

    addMySetCard(data: MySetCardService) {
        return this.http.post(this.url, data);
        //post - new entry
        //put - modifies old entry
    }
}