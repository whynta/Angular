import { Component } from '@angular/core';

@Component({
  selector: 'app-Heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman','Ironman','Hulk','Thor','She Hulk'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroName.pop();

  }
}
