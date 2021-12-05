import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode: boolean;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
   }

   getdarkMode(){
     return this.darkMode;
   }

   changeMode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
}
