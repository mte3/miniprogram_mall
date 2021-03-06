import request from "./network";

export function getDetail(iid) {
  return request({
    url:'detail',
    data:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'recommend'
  })
}


export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;//商品标题(String)
    this.price = itemInfo.price;//当前价格(double)
    this.highPrice = itemInfo.highPrice;//原价(double)
    this.span = itemInfo.discountDesc;//价格标签(String)
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.newPrice;
    this.discount = itemInfo.discount;
    this.columns = columns;//商品销量（array）
    this.services = services;//商品保障(array)
    this.realPrice = itemInfo.lowNowPrice;
  }
}
export class addCart{
constructor(skuInfo) {
  this.price = skuInfo.priceRange
  this.color = skuInfo.props[0].list
  this.size = skuInfo.props[1].list
  this.colorTitle = skuInfo.props[0].label
  this.sizeTitle = skuInfo.props[1].label
  this.show = skuInfo.skus
}
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;//商店头像
    this.name = shopInfo.name;//商店名称
    this.fans = shopInfo.cFans;//商店关注人数
    this.goods = shopInfo.cGoods;//在架商品
    this.sells = shopInfo.cSells;//累计销量
    this.url = shopInfo.shopUrl;//商店地址
    this.score = shopInfo.score;//商店描述（array）
    this.goodsCount = shopInfo.goodsCount;
  }
}

export class GoodsParam{
  constructor(rule) {
    this.text = rule.disclaimer
    this.title = rule.key
    this.rules = rule.tables[0]
  }
}
