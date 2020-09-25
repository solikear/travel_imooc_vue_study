/*
 * @Author: your name
 * @Date: 2020-09-24 14:13:55
 * @LastEditTime: 2020-09-24 16:11:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travel_imooc_vue\travel\vue.config.js
 */
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            // .set('assets', resolve('src/assets/styles'))
            .set('styles', resolve('src/assets/styles'))
    },
}