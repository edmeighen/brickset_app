import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Observable } from "rxjs";
import { UserInfo } from "../headers/user-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<UserInfo []>;
    mysets: Observable<any []>;

    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<UserInfo>('my-info').valueChanges();
        this.mysets = this.db.list<any>('MySets').valueChanges();
    }

    public showMySets() {
        this.mysets.subscribe((data: any[]) => {
            console.log("MySet data recieved");
            for (let item of data) {
                console.log(item);
            }
        })
    }

    public showData() {
        this.items.subscribe((data: UserInfo[]) => {
            console.log("Data recieved");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}