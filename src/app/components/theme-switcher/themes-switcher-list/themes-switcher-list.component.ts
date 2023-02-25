import {Component, Input} from '@angular/core';
import { NbThemeService, NbPopoverDirective } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
  selector: 'ngx-theme-switcher-list',
  template: `
    <ul class="themes-switcher-list">
      <li class="themes-switcher-item"
          *ngFor="let theme of themes"
          (click)="onToggleTheme(theme.key)">        
        <span>{{ theme.title }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./theme-switcher-list.component.scss'],
})
export class ThemeSwitcherListComponent {

  @Input() popover: NbPopoverDirective;

  theme: NbJSThemeOptions;

  themes = [
    {
      title: 'Light',
      key: 'default',
    },
    {
      title: 'Cosmic',
      key: 'cosmic',
    },
    {
      title: 'Corporate',
      key: 'corporate',
    },
    {
      title: 'Arctic',
      key: 'arctic',
    },
  ];

  constructor(
    private themeService: NbThemeService,
  ) {}

  onToggleTheme(themeKey: string) {
    this.themeService.changeTheme(themeKey);
    this.popover.hide();
  }
}
