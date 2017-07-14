import { Component, Input, Output, EventEmitter } from '@angular/core';
export class Condition {
  id: number;
  field: string;
  operator: string;
  value: string;
}

export class Group {
  id: number;
  logicalOperator: string;
  conditions: Array<Condition>;
  groups: Array<Group>;
}

@Component({
  selector: 'custom-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent {

  constructor() { this.currentComponent = this; }

  groupList: number[];
  conditionList: number[];
  grpnum: number = 0;
  conditionNum: number = 0;
  groupData: Group = { id: 0, logicalOperator: "And", conditions: [], groups: [] };
  public _index: number = 0;
  public _grpindex: number = 0;
  private _query: Group;

  @Input()
  get query(): Group { return this._query; }
  set query(value: Group) {
    this._query = value || {
      id: 0,
      logicalOperator: 'and',
      conditions: [],
      groups: []
    };
  }
  @Input() qData: any;
  @Input() operators: Array<any>;
  @Input() parentGroup: any;
  @Output() grpDataChange = new EventEmitter<any>();
  currentComponent: GroupComponent;

  //add new group
  addNewGrp() {
    this.groupData.groups.push({
      id: this._grpindex,
      logicalOperator: 'and',
      conditions: [{
        id: this._index,
        field: '',
        operator: '',
        value: ''
      }],
      groups: []
    });
    this._grpindex += 1;
    this._emitChangeEvent();
  }
  //add new condition
  addNewCondition() {
    this.groupData.conditions.push({
      id: this._index,
      field: '',
      operator: '',
      value: ''
    });
    this._index += 1;
    this._emitChangeEvent();
  }
   //group data change
  groupDataChange(group: Group) {
    let i: number = this.groupData.groups.findIndex((g: any) => {
      return g.id === group.id;
    });
    this._emitChangeEvent();
  }
  //remove group
  removeGroup() {
    if (this.parentGroup) {
      let index: number = this.parentGroup.groups.findIndex((g) => {
        return g.id === this.groupData.id;
      });
      this.parentGroup.groups.splice(index, 1);
      this._emitChangeEvent();
    }
  }
  //conditon change
  conditionDataChange(event: Condition, i): void {
    let index: number = this.groupData.conditions.findIndex((c: Condition) => {
      this._index == i;
      return c.id === i;
    });
    this.groupData.conditions[index] = event;
    this._emitChangeEvent();
  }

  _emitChangeEvent(): void {
    this.grpDataChange.emit(this.groupData);
  }
}
