const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

    class card
        extends Model {
        static async takeCard(order) {
            if (order.sendCardStatus == '已发货') return { msg: '该订单已发货', no: 5, data: null }
            // 获取卡密
            let cards = await this.findAll({
                limit: order.count,
                where: {
                    goodId: order.goodId,
                    status: 1,
                },
            })

            if (cards.length < order.count)
                return { msg: '库存不足', code: 4, data: cards }

            // 更新卡密状态
            for (let card of cards) {
                card.orderId = order.id
                card.status = 0
                await card.save()
            }
            order.sendCardStatus = '已发货'
            order.save()
            return { msg: 'ok', code: 0, data: cards }
        }
        // 卡密数组转换成字符串
        static Array_to_String(cards) {
            let new_cards = new String()
            cards.forEach((card) => {
                let str = card.cardNumber.replace(/[\r\n]/g, '') //清除换行
                new_cards = new_cards.concat(str + '\n')
            })
            return new_cards
        }
        // 字符串转换成卡密数组
        static String_to_Array() {

            res.data.data.good_cards.forEach((i) => {
                let str = i.cardNumber.replace(/[\r\n]/g, '') //清除换行
                if (this.$store.state.config.isCookie === 2) {
                    let c = cookieParse(str)
                    if (c.password != undefined) str = `${c.userName}----${c.password}----${c.emailName}----${c.emailPass}`

                }
                this.cards = this.cards.concat(str + '\n')
            })
        }
    }
    card.init(
        {
            cardNumber: {
                type: DataTypes.STRING(5000),
                allowNull: false,

            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1
            },

        }, { sequelize, modelName: 'card' })

};

