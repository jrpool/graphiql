import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

import createSymlinks from '../createSymlinks'

const test = require(path.resolve(__dirname, '../../test'))

const linkDir = path.resolve(__dirname, '../../node_modules/src')
const rootDir = path.resolve(__dirname, '../..')

const expectedLinks = [
  {path: `${linkDir}/client`, target: `${rootDir}/client`},
  {path: `${linkDir}/common`, target: `${rootDir}/common`},
  {path: `${linkDir}/config`, target: `${rootDir}/config`},
  {path: `${linkDir}/dist`, target: `${rootDir}/dist`},
  {path: `${linkDir}/scripts`, target: `${rootDir}/scripts`},
  {path: `${linkDir}/server`, target: `${rootDir}/server`},
  {path: `${linkDir}/test`, target: `${rootDir}/test`},
]

test('Creates links successfully', t => {
  t.plan(expectedLinks.length * 2 * 2)

  cleanLinks()

  // run when clean
  createSymlinks()
  verifyLinks(t)

  // run again when links already exist
  createSymlinks()
  verifyLinks(t)

  t.end()
})

function cleanLinks() {
  rimraf.sync(linkDir)
}

function verifyLinks(t) {
  expectedLinks.forEach(link => {
    const linkStats = fs.lstatSync(link.path)
    const linkTargetStats = fs.statSync(link.path)

    t.true(linkStats.isSymbolicLink(), `Symbolic not found at ${link.path}`)
    t.true(linkTargetStats.isDirectory(), 'Target of symbolic link is a directory')
  })
}
