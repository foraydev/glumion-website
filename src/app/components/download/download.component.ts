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
      url: 'https://github.com/foraydev/gravitas-releases/releases/download/v0.4.1/Glumion.Windows.Build.zip'
    },
    {
      platform: 'Mac',
      icon: 'assets/download-mac.png',
      url: '[INSERT_MAC_DOWNLOAD_LINK]'
    },
    {
      platform: 'Steam Deck',
      icon: 'assets/download-steam-deck.svg',
      url: 'https://github.com/foraydev/gravitas-releases/releases/download/v0.4.1/Glumion.Steam.Deck.Build.zip'
    }
  ];
}
