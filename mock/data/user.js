// 使用 Mock
const Mock = require('mockjs');

module.exports = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'users|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': Mock.Random.cword(2, 5)
  }]
});
