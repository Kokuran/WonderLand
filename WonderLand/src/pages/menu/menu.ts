import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoActionPage } from '../noaction/noaction';
import { YesActionPage } from '../yesaction/yesaction';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})


export class MenuPage {

    constructor(public navCtrl: NavController) { }

    onClickNo(){

      this.navCtrl.push(NoActionPage);
  
  
    }

    onClickYes(){

      this.navCtrl.push(YesActionPage);
  
  
    }

  }

