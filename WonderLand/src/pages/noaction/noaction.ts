import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YesActionPage } from '../yesaction/yesaction';


@Component({
  selector: 'page-noaction',
  templateUrl: 'noaction.html'
})


export class NoActionPage {

    constructor(public navCtrl: NavController) { }

    onClickOkey(){

      this.navCtrl.push(YesActionPage);
  
  
    }

  }