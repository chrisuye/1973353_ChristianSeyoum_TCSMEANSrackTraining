import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyAuthGaurd implements CanActivate {
    constructor(public router:Router) { }
    canActivate() {
        let test = sessionStorage.getItem("currentUser")

        if (test) return true
        else {
            this.router.navigate(["login"])
            return false
        }
    }
}