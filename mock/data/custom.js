// 使用 Mock
const Mock = require('mockjs');
const faker = require('faker');
const { getArrayData } = require('../utils');

faker.locale = 'zh_CN';

module.exports = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'getUserInfo': {
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'username|+1': getArrayData(faker.name.findName, 5),
    'roleId|0-5': 0,
    'email|+1': getArrayData(faker.internet.email, 5),
    'info': Mock.Random.cparagraph(),
    'menu': [
      { label: '主页', path: '/app/home' },
      { label: '关于我', path: '/app/about' }
    ]
  }
});
