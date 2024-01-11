var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from "./crud";
var row = {
    firstName: 'Lucie',
    lastName: 'Leroty',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
export function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
export function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
//# sourceMappingURL=main.js.map