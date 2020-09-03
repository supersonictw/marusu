const axios = require("axios");
const data = require("./data.js");

class compute {
  construct() {
    this.data = new data();
  }

  _response(req, data) {
    return req.send(JSON.stringify(data));
  }

  authorize(req, res) {
    if (!("oauth_token" in req.body)) {
      return this._response(req, {
        status: 400,
      });
    }
    this._response(req, {
      status: 200,
    });
  }
}

module.exports = compute;
