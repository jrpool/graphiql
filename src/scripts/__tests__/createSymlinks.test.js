import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

import createSymlink from '../createSymlink'

const LINK_PATH = path.resolve(__dirname, '../../../node_modules/src')

const test = require(path.resolve(__dirname, '../../test'))

test('Creates links successfully', t => {
  t.plan(4)

  cleanLink()

  // run when clean
  createSymlink()
  verifyLink(t)

  // run again when links already exist
  createSymlink()
  verifyLink(t)

  t.end()
})

function cleanLink() {
  rimraf.sync(LINK_PATH)
}

function verifyLink(t) {
  const linkStats = fs.lstatSync(LINK_PATH)
  const linkTargetStats = fs.statSync(LINK_PATH)

  t.true(linkStats.isSymbolicLink(), `Symbolic not found at ${LINK_PATH}`)
  t.true(linkTargetStats.isDirectory(), 'Target of symbolic link is a directory')
}
