import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: 'brickset-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent {
    private authObservable!:Observable<AuthResponse>;
    public buttonClicked:string = "";

    public constructor(private authService:AuthService){

    }

    public onSubmit(form:NgForm) {
        console.log("Button clicked");
        var val = form.value;

        if (this.buttonClicked == "SignUp") {
         this.authObservable = this.authService.signup(val.email, val.password);
        }
        if (this.buttonClicked == "Login") {
            this.authObservable = this.authService.login(val.email, val.password);
        }

       this.authObservable.subscribe(
            (data:AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error.error);
            }
        )
        form.resetForm();
    }
}