import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioList } from '../portfolio.module';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioMap = new Map<string, Array<string>>()

  currentUser:string = ""
  currentPortfolio: Array<PortfolioList> = new Array()

  portfolio = new FormGroup({
    contactName:new FormControl(),
    phoneNo:new FormControl()
  })

  userPortfolio: Array<string> = new Array()

  regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  constructor(public router:Router) { }

  ngOnInit(): void {
    let test = sessionStorage.getItem("currentUser")

    if (test) {
      this.currentUser = test
    }

    let users = localStorage.getItem("users")
    let portfolios = localStorage.getItem("portfolio")

    if(users && portfolios) {
      let usersArray = JSON.parse(users)
      let portfolioArray = JSON.parse(portfolios)

      for(let i = 0; i < usersArray.length; i++) {
        this.portfolioMap.set(usersArray[i], portfolioArray[i])
      }
      
      let array = this.portfolioMap.get(this.currentUser)
      if (array) {
        for (let i = 0; i < array.length; i += 2) {
          this.currentPortfolio.push(new PortfolioList(array[i], array[i + 1]))
        }
      }
    }
  }

  save() {
    if (this.portfolio.value.contactName == null || this.portfolio.value.phoneNo == null) {
      alert("Missing one or more inputs")
    } else {
        if (this.regex.exec(this.portfolio.value.phoneNo)) {
          if (this.portfolioMap.has(this.currentUser)) {
            let test = this.portfolioMap.get(this.currentUser)
            if (test) {
              this.userPortfolio = test
              this.userPortfolio.push(this.portfolio.value.contactName)
              this.userPortfolio.push(this.portfolio.value.phoneNo)
              this.portfolioMap.set(this.currentUser, this.userPortfolio)
            }
          } else {
            this.userPortfolio.push(this.portfolio.value.contactName)
            this.userPortfolio.push(this.portfolio.value.phoneNo)
            this.portfolioMap.set(this.currentUser, this.userPortfolio)
          }
          this.currentPortfolio.push(new PortfolioList(this.portfolio.value.contactName, this.portfolio.value.phoneNo))
          let users = JSON.stringify(Array.from(this.portfolioMap.keys()))
          let portfolio = JSON.stringify(Array.from(this.portfolioMap.values()))
          localStorage.setItem("users", users)
          localStorage.setItem("portfolio", portfolio)
        } else {
          alert("Enter a valid phone number")
        }
      }
  }

  backToLogin() {
    sessionStorage.removeItem("currentUser")
    this.router.navigate(["login"])
  }
}
