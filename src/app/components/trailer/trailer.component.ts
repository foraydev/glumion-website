import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  isVideoPlaying = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.videoContainer) return;
    
    const element = this.videoContainer.nativeElement;
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && !this.isVideoPlaying) {
      // Video will autoplay when visible (video element has autoplay attribute)
    }
  }

  onVideoPlay() {
    this.isVideoPlaying = true;
  }
}
