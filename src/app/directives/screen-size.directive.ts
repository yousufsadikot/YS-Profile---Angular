import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appScreenSize]',
})
export class ScreenSizeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appScreenSize(sizes: string[]) {
    this.updateView(sizes);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateView(this.appScreenSize);
  }

  private updateView(sizes: string[]) {
    if (this.isScreenSize(sizes)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private isScreenSize(sizes: string[]): boolean {
    if (sizes && sizes.length > 0) {
      return sizes.some((size) => this.matchScreenSize(size));
    }
    return false; // Default to false if sizes is not defined or empty
  }

  private matchScreenSize(size: string): boolean {
    switch (size) {
      case 'xs':
        return window.innerWidth < 576;
      case 'sm':
        return window.innerWidth >= 576 && window.innerWidth < 768;
      case 'md':
        return window.innerWidth >= 768 && window.innerWidth < 992;
      case 'lg':
        return window.innerWidth >= 992 && window.innerWidth < 1200;
      case 'xl':
        return window.innerWidth >= 1200;
      default:
        return false;
    }
  }
}
