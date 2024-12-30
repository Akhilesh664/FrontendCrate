"use strict";
exports.__esModule = true;
var empsal = /** @class */ (function () {
    function empsal() {
        this.emp_id = [1, 2, 3, 4, 5];
        this.emp_sal = [10, 20, 50, 40, 30];
        console.log("I am from constructure");
        this.i = 0;
    }
    empsal.prototype.displaySal = function () {
        for (; this.i < this.emp_id.length; this.i++) {
            console.log(this.emp_id[this.i] + "=" + this.emp_sal[this.i]);
        }
    };
    empsal.prototype.updateSalary = function (data, updatedata) {
        var temp = 0;
        this.i = 0;
        for (; this.i < this.emp_id.length; this.i++) {
            if (this.emp_sal[this.i] == data) {
                this.emp_sal[this.i] = updatedata;
                temp = 1;
            }
        }
        if (temp == 1) {
            for (var i = 0; i < this.emp_id.length; i++) {
                console.log(this.emp_id[i] + "=" + this.emp_sal[i]);
            }
        }
        else {
            console.log("Old data is not found " + data);
        }
    };
    empsal.prototype.searchSalary = function () {
    };
    empsal.prototype.addNewUser = function () {
    };
    return empsal;
}());
var obj = new empsal();
// obj.displaySal();
obj.updateSalary(300, 80);
// var obj1=new empsal();
// obj.displaySal();
obj.updateSalary(30, 80);
