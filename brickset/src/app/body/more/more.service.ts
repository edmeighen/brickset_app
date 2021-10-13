import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SetCardInfo } from "./more.model";

@Injectable({providedIn: 'root'})
export class MoreService {
    url: string = "https://brickset-b70d8-default-rtdb.firebaseio.com/SetCards.json";
    constructor(private http:HttpClient) {
    }

    getSetCardInfo() {
        return this.http.get(this.url);
    }
}