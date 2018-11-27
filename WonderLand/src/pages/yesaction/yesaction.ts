import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner'
import { NoActionPage } from '../noaction/noaction';
import { MenuPage } from '../menu/menu';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-yesaction',
  templateUrl: 'yesaction.html'
})


export class YesActionPage {


scanData : {};
options : BarcodeScannerOptions;

   // constructor(private barcodeScanner: BarcodeScanner) {}
    constructor(public navCtrl: NavController, public alertCtrl: AlertController,private barcodeScanner: BarcodeScanner) { }

    
      scan(){
  //     this.options = {
   //     prompt : "Scan your barcode"
   //    }
    //  this.barcodeScanner.scan(this.options).then((barcodeData) => {
 //       console.log(barcodeData);

 //      this.scanData = barcodeData;
 //     }).catch (err => {
  //     console.log ("Error accured :  " + err);
    //   });

       this.options = {
        prompt: "Come on, scan it!"
      };
      this.barcodeScanner.scan(this.options).then(barcodeData => {
        console.log('Barcode data', barcodeData);
        this.scanData = barcodeData;
      }).catch(err => {
        console.log('I see little problem', err);
      })
      }

      error(){
        const alert = this.alertCtrl.create({
          title: 'You are a little naive creature',
          subTitle: 'You are in WonderLand. Everything is nothing, and nothing is everything',
          buttons: ['Tray again']
        });
        alert.present();
    
      }
      }


     

 

  