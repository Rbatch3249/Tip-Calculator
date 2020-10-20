import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, NgModel } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tip Calculator';
  price = 0.00;
  tip = 0.00;
  tax = 0.00;
tenPercentTip = 0.10;
eighteenPercentTip= 0.18;
twentlyPercentTip = 0.20;
finalPrice = 0.00;
  tipCalc(mealPrice1,priceTax1){
   let mealPrice = parseFloat(mealPrice1);
   let priceTax = parseFloat(priceTax1);
   let value = mealPrice *(this.tip) ;
   let taxApplied = mealPrice *(priceTax/100);
  this.finalPrice = mealPrice + value + taxApplied;
  //return this.finalPrice;

    }
    setTenPercent(){
      this.tip =.10;
    }
    setEighteenPercent(){
      this.tip =.18;
    }
    setTwentyPercent(){
      this.tip = .20;
    
    }
  resetFun(){
    this.tax =0;
    this.finalPrice=0;
  }

  
  }

