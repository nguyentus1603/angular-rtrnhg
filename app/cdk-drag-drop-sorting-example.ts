import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { OnInit } from '@angular/core/src/metadata';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample implements OnInit {
  skills: Skill[];
  ngOnInit(): void {
    this.skills = [
      { title: 'C#', sortOrder: 1 },
      { title: 'Java', sortOrder: 2 },
      { title: 'DevOps', sortOrder: 3 },
      { title: 'SQL', sortOrder: 4 },
      { title: 'Reactjs', sortOrder: 5 },
      { title: 'Angular', sortOrder: 6 },
      { title: 'Database', sortOrder: 7 },
      { title: 'Scrum', sortOrder: 8 },
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.skills.map((x) => x.title));
    console.log(this.skills.map((x) => x.sortOrder));
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
    this.skills.forEach((order) => {
      order.sortOrder = this.skills.indexOf(order) + 1;
    });
  }
}

export interface Skill {
  title: string;
  sortOrder: number;
}
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
