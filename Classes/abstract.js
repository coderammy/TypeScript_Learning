// abstract and singletons & privatecontructor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractMethod = /** @class */ (function () {
    function AbstractMethod(id) {
        this.id = id;
    }
    AbstractMethod.createEmolyee = function (name) {
        //for static
        return { name: name };
    };
    return AbstractMethod;
}());
var ItDepart = /** @class */ (function (_super) {
    __extends(ItDepart, _super);
    function ItDepart(name) {
        return _super.call(this, "AMAN") || this;
    }
    ItDepart.getInstance = function () {
        if (ItDepart.instance) {
            return this.instance;
        }
        this.instance = new ItDepart("AMmynew");
        return this.instance;
    };
    ItDepart.prototype.describe = function () {
        console.log("it department " + this.id);
    };
    return ItDepart;
}(AbstractMethod));
var apolo = AbstractMethod.createEmolyee("amanDepart");
var acconting = ItDepart.getInstance();
var acconting2 = ItDepart.getInstance();
console.log(">>>>>>>", acconting, acconting2);
// const newAcc = new ItDepart ("Siyaan")
acconting.describe();
