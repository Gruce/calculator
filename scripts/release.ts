import { execSync } from 'child_process'
import pkg from 'fs-extra'
const { readJSONSync } = pkg
import { exit } from 'process'

const { version: oldVersion } = readJSONSync('../package.json')

execSync('cd .. && bumpp --no-commit --no-tag --no-push', { stdio: 'inherit' })

const { version } = readJSONSync('../package.json')

if (oldVersion === version) {
  console.log('canceled')
  process.exit()
}

execSync('cd .. && git add .', { stdio: 'inherit' })
execSync(`cd .. && git commit -m "release-v${version}"`, { stdio: 'inherit' })
execSync(`cd .. && git tag -a release-v${version} -m "v${version}"`, { stdio: 'inherit' })
execSync(`cd .. && git push origin master"`, { stdio: 'inherit' })

console.log(`released v${version}`)