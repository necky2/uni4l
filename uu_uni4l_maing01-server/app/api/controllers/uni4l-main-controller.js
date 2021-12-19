"use strict";
const Uni4lMainAbl = require("../../abl/uni4l-main-abl.js");

class Uni4lMainController {
  init(ucEnv) {
    return Uni4lMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new Uni4lMainController();
