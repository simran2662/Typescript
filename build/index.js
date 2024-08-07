"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const app = (0, express_1.default)();
app.use(loginRoutes_1.router);
app.listen(3001, () => {
    console.log(`Listening on port 3001`);
});
