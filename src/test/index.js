import test from 'tape'
import tapSpec from 'tap-spec'

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

export default test
