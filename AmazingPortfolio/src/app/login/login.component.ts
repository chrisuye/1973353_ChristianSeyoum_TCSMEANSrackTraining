import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
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

  myPortfolio() {
    if (this.usersMap.has(this.login.value.userName)){
      if (this.usersMap.get(this.login.value.userName) == this.login.value.password){
        sessionStorage.setItem("currentUser", this.login.value.userName)
        this.router.navigate(["portfolio"])
      } else {
        alert("Password does not match\nPlease try again")
      }
    } else {
      alert("Username does not match\nPlease try again")
    }
  }

  signUp() {
    this.router.navigate(["signup"])
  }
}
