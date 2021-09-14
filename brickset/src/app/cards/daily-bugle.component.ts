import { Component } from "@angular/core";

@Component({
    selector: 'app-daily-bugle',
    templateUrl: './daily-bugle.component.html',
    styleUrls: ['./daily-bugle.component.css']
})
export class DailyBugleComponent {
    image = "./assets/dailybugle.jpeg"
    alt = "daily bugle"
    number = "76178"
    name = "Daily Bugle"
    theme = "MARVEL SUPER HEROES"
    subtheme = "SPIDER-MAN"
    year = "2021"
    pieces = "3772"
    minifigs = "25"
    figextra = "(19 Unique to this set)"
    rrp = "$299.99, 299.99€ |"
    availability = "LEGO Exclusive"
}