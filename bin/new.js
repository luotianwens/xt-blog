/*
 * @Author: xiaotian
 * @Date: 2022-06-28 14:47:07
 * @LastEditors: xiaotian
 * @LastEditTime: 2022-07-04 10:32:36
 * @Description: 
 */

const process = require('process')

process.on('exit', () => {
  console.log();
})



if (!process.argv[2]) {
  console.error('文件名必填');
  process.exit(1)
}
const dateStr = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
const fileSave = require('file-save')
const path = require('path')
const fs = require('fs')
// 文件名转驼峰
const uppercamelcase = require('uppercamelcase')
const fileName = `${dateStr}-${uppercamelcase(process.argv[2])}`
const filePath = path.join(__dirname, `../docs/blog/${fileName}.md`)
const fileTitle = process.argv[3] || fileName

if (fs.existsSync(filePath)) {
  console.error('文件名已存在')
  process.exit(1)
}
fileSave(filePath)
    .write('# ' + fileTitle, 'utf8')
    .end('\n')
console.log('add file: ' + filePath);