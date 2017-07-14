import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() grpDataChange = new EventEmitter<any>();
  title = 'app';
  jsonValue: any;
  queryData: any =
  [{
    "name": "Type",
    "displayName": "Type",
    "position": 1,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1,
        "typeaheadUrl": "https://localhost/aqb/typeahead/object-types/"
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 2,
        "typeaheadUrl": "https://localhost/aqb/typeahead/object-types/"
      }
    ]
  },
  {
    "name": "ObjectId",
    "displayName": "Id",
    "position": 2,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 2
      },
      {
        "name": "Greater",
        "displayName": ">",
        "position": 6
      },
      {
        "name": "Less",
        "displayName": "<",
        "position": 7
      },
      {
        "name": "GreaterEqual",
        "displayName": ">=",
        "position": 8
      },
      {
        "name": "LessEqual",
        "displayName": "<=",
        "position": 9
      }
    ]
  },
  {
    "name": "SubjectId",
    "displayName": "Subject Id",
    "position": 3,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 2
      },
      {
        "name": "Contains",
        "displayName": "Contains",
        "position": 3
      }
    ]
  },
  {
    "name": "AnatomicalRegion",
    "displayName": "Anatomical Region",
    "position": 4,
    "comparisonOperators": [
      {
        "name": "Contains",
        "displayName": "Contains",
        "position": 1,
        "typeaheadUrl": "https://localhost/aqb/typeahead/fma/"
      },
      {
        "name": "Equals",
        "displayName": "=",
        "position": 2,
        "typeaheadUrl": "https://localhost/aqb/typeahead/fma/"
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 3,
        "typeaheadUrl": "https://localhost/aqb/typeahead/fma/"
      }
    ]
  },
  {
    "name": "Fulltext",
    "displayName": "Fulltext",
    "position": 5,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1
      }
    ]
  },
  {
    "name": "FileExtension",
    "displayName": "File Extension",
    "position": 6,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 2
      }
    ]
  },
  {
    "name": "Placeholder",
    "displayName": "Placeholder",
    "position": 7,
    "comparisonOperators": [
      {
        "name": "Equals",
        "displayName": "=",
        "position": 1,
        "typeaheadUrl": "https://localhost/aqb/typeahead/object-types/"
      },
      {
        "name": "Contains",
        "displayName": "Contains",
        "position": 3
      },
      {
        "name": "NotEquals",
        "displayName": "!=",
        "position": 2,
        "typeaheadUrl": "https://localhost/aqb/typeahead/fma/"
      }
    ]
  }
  ]
  groupDataChange(group): void {
    this.grpDataChange.emit(group);
    this.jsonValue = group;
  }
}
