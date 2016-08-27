const fs = require('fs')
const Future = require('promise-future')

class FS {
  static readFile(name) {
    return Future.call(fs.readFile.bind(fs, name)).then(data => data.toString())
  }

  static writeFile(name, contents) {
    return Future.call(fs.writeFile.bind(fs, name, contents))
  }

  static mkdir(name) {
    return Future.call(fs.mkdir.bind(fs, name))
  }
}

module.exports = FS
