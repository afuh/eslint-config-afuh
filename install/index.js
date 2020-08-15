#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const TEMPLATE_DIR = path.join(__dirname, '.', 'templates')

spawn(
  'npm',
  [
    'install',
    '--save-dev',
    'babel-eslint',
    'eslint',
    'eslint-config-afuh',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'prettier',
    'eslint-plugin-prettier',
    'eslint-config-prettier',
  ],
  {
    stdio: 'inherit',
  },
)

fs.readdirSync(TEMPLATE_DIR).forEach((item) => {
  const templateFile = `${TEMPLATE_DIR}/${item}`
  const file = `${path.resolve('.')}/${item}`

  if (!fs.existsSync(file)) {
    fs.copyFileSync(templateFile, file)
    console.log('   \x1b[36mcreate\x1b[0m : ' + item)
  }
})
