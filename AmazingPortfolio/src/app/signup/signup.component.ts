import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    userName:new FormControl(),
    password:new FormControl()
  })
  usersMap = new Map<string, string>()

  constructor(public router:Router) { }

  ngOnInit(): void {
    let usernames = localStorage.getItem("usernames")
    let passwords = localStorage.getItem("password")

    if (passwords && usernames) {
      let passwordArray = JSON.parse(passwords)
      let usernameArray = JSON.parse(usernames)
      for (let i = 0; i < usernameArray.length; i++) {
        this.usersMap.set(usernameArray[i], passwordArray[i])
      }
    }
  }

  register() {
    if (this.signup.value.firstName == null ||
       this.signup.value.lastName == null || 
       this.signup.value.userName == null || 
       this.signup.value.password == null){
      alert("Missing one or more inputs")
    } else {
      if (this.usersMap.has(this.signup.value.userName)) {
        alert("Username already exist.\nPlease pick another")
      } else {
        this.usersMap.set(this.signup.value.userName, this.signup.value.password)
        let usernames = Array.from(this.usersMap.keys());
        let passwords = Array.from(this.usersMap.values());
        localStorage.setItem("usernames", JSON.stringify(usernames))
        localStorage.setItem("password", JSON.stringify(passwords))
        this.router.navigate(["login"])
      }
    }
  }

  backToLogin() {
    this.router.navigate(["login"])
  }
}
