import {
  Component,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  @ViewChild('dialogTemplate') dialogTemplate!: DialogComponent;

  // public _overlayRef!: OverlayRef | null;

  constructor() {} // private viewContainerRef: ViewContainerRef // private overlay: Overlay,

  openDialog() {
    this.dialogTemplate.openDialog();
  }

  closeDialog() {
    this.dialogTemplate.closeDialog();
  }

  // openDialog() {
  //   if (this._overlayRef) return;

  //   this._overlayRef = this.overlay.create();

  //   this._overlayRef.attach(
  //     new TemplatePortal(this.dialogTemplate, this.viewContainerRef)
  //   );
  // }

  // closeDialog() {
  //   this._overlayRef && (this._overlayRef.dispose(), (this._overlayRef = null));
  // }
}
