import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  downloads = [
    {
      platform: 'Windows',
      icon: 'assets/download-windows.png',
      url: '[INSERT_WINDOWS_DOWNLOAD_LINK]'
    },
    {
      platform: 'Mac',
      icon: 'assets/download-mac.png',
      url: '[INSERT_MAC_DOWNLOAD_LINK]'
    },
    {
      platform: 'Steam Deck',
      icon: 'assets/download-steam-deck.svg',
      url: '[INSERT_STEAM_DECK_DOWNLOAD_LINK]'
    }
  ];
}
