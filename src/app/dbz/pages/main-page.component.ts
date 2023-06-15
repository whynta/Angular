import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dvz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get character(): Character[] {
    return [...this.dbzService.character];

  }

  onDeleteCharacter(id: string): void{
   this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }
}
