
const path = require("path")

const config = {

  app: {
    rootUrl: path.dirname(__dirname),
    getViewsUrl: function () { return path.join(this.rootUrl, "views") },
  }




}
module.exports = config