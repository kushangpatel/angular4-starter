import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  private powers: string[]
  private model: Hero
  private submitted: boolean = false

  constructor(private storage: SessionStorageService) { }

  ngOnInit() {
    this.powers = ['Really Smart', 'Super Flexible', 'Super hot', 'Weather Changer']
    this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')
  }

  onSubmit() {
    this.submitted = true
    this.storage.store('hero', this.model)
  }

  newHero() {
    this.model = new Hero(42, '', '')
  }

  get diagnostic() {
    // return JSON.stringify(this.model)
    return JSON.stringify(this.storage.retrieve('hero'))
  }
}
