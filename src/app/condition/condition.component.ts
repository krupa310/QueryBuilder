import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupComponent } from '../group/group.component';
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
  selector: 'custom-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

 
  sourceData: any;
  sourceValue: any;
  conditionOperatorValue: any;
  operatorValue: Object;
  conditonData: Array<any>;
  @Input() parentGroup: GroupComponent;
  @Input() qData: Array<any>;
  @Output() conditionChange = new EventEmitter<any>();
  @Input()
  get conditionData(): Condition { return this._condition; }
  set conditionData(value: Condition) {
    if (value !== this._condition) {
      this._condition = value;
    }
  };
  private _condition: Condition;

  constructor() { } 

  ngOnInit() {
    this.conditonData = this.qData;
  }
  //change source dropdown
  sourceChange(value) {
    this.sourceValue = value.target.value;
    let getData = this.conditonData.find(x => x.name == this.sourceValue);
    this.conditionOperatorValue = getData.comparisonOperators;
    this.conditionData.field = this.sourceValue;
    this._emitChangeEvent();
    
  }
  //change operator dropdown
  operatorChange(value)
  {
    this.operatorValue = value.target.value;
    let getOpt = this.conditionOperatorValue.find(x => x.name == this.operatorValue);
    this.conditionData.operator = getOpt.displayName;
    this._emitChangeEvent();
  }
  //change input value
  onInputChange(value) {
    let textValue = value.target.value;
    this.conditionData.value = textValue;
    this._emitChangeEvent();
  }
  //remove condition
  removeCondition() {
    if (this.parentGroup) {
      let index: number = this.parentGroup.groupData.conditions.findIndex((c: Condition) => {
        return c.id === this.conditionData.id;
      });
      this.parentGroup.groupData.conditions.splice(index, 1);
      this._emitChangeEvent();
    }
  }

  _emitChangeEvent(): void {
    this.conditionChange.emit(this.conditionData);
  }
}
