"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
  <form method="Post">
  <div>
  <label>Email</label>
  <input name="email/>
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password"/>
  <div>
  <button> Submit</button>
  </form>
 `);
});
