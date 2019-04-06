import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() public name = '';
  @Input() public id = 0;

  constructor() { }

  ngOnInit() {
  }

}
