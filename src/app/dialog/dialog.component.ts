import {
  Component,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  public _overlayRef!: OverlayRef | null;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  openDialog() {
    if (this._overlayRef) return;

    this._overlayRef = this.overlay.create();

    this._overlayRef.attach(
      new TemplatePortal(this.dialogTemplate, this.viewContainerRef)
    );
  }

  closeDialog() {
    this._overlayRef && (this._overlayRef.dispose(), (this._overlayRef = null));
  }
}
