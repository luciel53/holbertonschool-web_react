/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

const row:RowElement = {
  firstName: 'Lucie',
  lastName: 'Leroty',
}

const newRowID:RowID = CRUD.insertRow(row);
const updatedRow:RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

export interface MinorCredits {
  _minorCreditBrand: void;
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
