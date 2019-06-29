import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  selectedRadioButton : string ='All';

@Output()
  countRadioButtonSelectionChange : EventEmitter <string> = new EventEmitter <string>();
@Input()
  all : number  ;
@Input()
  male : number ;
@Input()
  female :number ;

onRadioButtonSelectionCahnge(){
  console.log(this.selectedRadioButton);
  this.countRadioButtonSelectionChange.emit(this.selectedRadioButton);
}

  constructor() { }

  ngOnInit() {
  }

}
