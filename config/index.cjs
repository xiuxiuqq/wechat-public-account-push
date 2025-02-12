/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdfb901d5c8a05249',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '36873609cecd2717dafbb358e027dd28',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oChBC55xS75A_zEZnFoDtNijMrso',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RWc76Dj2Osf6vYAlje_4X9O0LUjzzp9dbvGnlQtuy4I',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '园园', year: '2023', date: '01-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '庆庆', year: '2023', date: '08-21',
        },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '08-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-06-24' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RWc76Dj2Osf6vYAlje_4X9O0LUjzzp9dbvGnlQtuy4I',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oChBC5-ZiCymSPGk9PNOqre7Im4U',
    }
  ],

}

module.exports = USER_CONFIG

