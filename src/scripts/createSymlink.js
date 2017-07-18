import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

const LINK_PATH = path.resolve(__dirname, '../../node_modules/src')
const LINK_TARGET_PATH = path.resolve(__dirname, '..')

export default function createSymlink() {
  console.log('Deleting link:', LINK_PATH)
  rimraf.sync(LINK_PATH)

  console.log('Creating symlink')
  fs.symlinkSync(LINK_TARGET_PATH, LINK_PATH, 'dir')
}

if (!module.parent) {
  /* eslint-disable xo/no-process-exit */
  try {
    createSymlink()
    process.exit(0)
  } catch (err) {
    console.error('Processing error:', err)
    process.exit(1)
  }
}
