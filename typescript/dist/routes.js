"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Ricardo',
        email: 'ricardo@gmail.com',
        password: '13216'
    });
    return response.json({ message: "Hello " + user.name });
}
exports.helloWorld = helloWorld;