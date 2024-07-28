import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Root, createRoot } from 'react-dom/client';
import Editor from './editor';
import React from 'react';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  anchor = viewChild.required<ElementRef<HTMLElement>>('anchor');
  ngOnInit(): void {
    let root = createRoot(this.anchor().nativeElement);
    root.render(React.createElement(Editor));
  }
}
