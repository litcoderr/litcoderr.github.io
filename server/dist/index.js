"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "../../")));
app.get('/', function (req, res) {
    res.render("index.html");
});
app.listen(5001, function () {
    console.log("Server Running @ 5001");
});
