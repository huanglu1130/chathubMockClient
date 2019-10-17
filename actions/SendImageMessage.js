/**
 * 比如你给机器人发了一张图片   机器人会把这个图片存到本地 + 存到云上  并且给这个图片编一个号并且告诉chathub下次如果chathub把这个编号告诉机器人，让机器人再把这个图片发给别人，那么机器人就会到本地的缓存文件夹里按照这编号来找这个图片，如果找到了，他就把这个图片发出去，如果没找到，就按照这个编号去云上找，如果找了也发出去，如果找不到就报错。
 * mac001_1_3e7e3a60b846 | [2019-10-17T11:27:47.412] [DEBUG] rpc - on message: Message#Image[🗣Contact<小怪兽>]
 * mac001_1_3e7e3a60b846 | [2019-10-17T11:27:48.553] [INFO] rpc - 上传 发送图片 至aliyun oss... chathub/images/wxid_v3t1we1k343112-917e78ef-642c-499f-b122-95eda9fe708d.jpg
 * 
 */

module.exports = () => {
  return actionBody => {
    return {}
  }
}

/**
 * 应当看  To Chathub ActionReply 中的 event response 来决定return什么东西
 * 
   mac001_1_3e7e3a60b846 | [2019-10-17T11:27:48.747] [DEBUG] rpc - -------------To Chathub EVENT: IMAGEMESSAGE----------------
   mac001_1_3e7e3a60b846 | [2019-10-17T11:27:48.747] [DEBUG] rpc - {"content":{"msg":{"img":{"$":{"aeskey":"952e01e87a1e39654c4aab87def10e59","encryver":"0","cdnthumbaeskey":"952e01e87a1e39654c4aab87def10e59","cdnthumburl":"30580201000451304f02010002040e7b3e8b02032f54690204158a313a02045da7dfb2042a777875706c6f61645f777869645f763374317765316b3334333131323539385f31353731323832383639020401091a020201000400","cdnthumblength":"3382","cdnthumbheight":"120","cdnthumbwidth":"61","cdnmidheight":"0","cdnmidwidth":"0","cdnhdheight":"0","cdnhdwidth":"0","cdnmidimgurl":"30580201000451304f02010002040e7b3e8b02032f54690204158a313a02045da7dfb2042a777875706c6f61645f777869645f763374317765316b3334333131323539385f31353731323832383639020401091a020201000400","length":"100414","md5":"29288e8167747685f94369b4b41ff8c4","hevc_mid_size":"59524"}}}},"fromUser":"wxid_5753727547512","toUser":"wxid_v3t1we1k343112","continue":1,"timestamp":1571282866,"msgId":"b6988c76-5d9a-4764-8f81-ed4e2097e3b6","description":"Contact<小怪兽> : 收到一张图片消息","mType":3,"imageId":"wxid_v3t1we1k343112-917e78ef-642c-499f-b122-95eda9fe708d.jpg"}
   mac001_1_3e7e3a60b846 | [2019-10-17T11:27:48.747] [DEBUG] rpc - ---------------To Chathub EVENT: IMAGEMESSAGE----------------

 * 
 * 
 */