<template>

  <div id="order_details">
    <div class='out_box_base'>

      <navbar class='navbar2'>
        <template v-slot:left>
          <van-icon name="arrow-left" @click="$router.push($store.state.home_link)" />
        </template>
        <template v-slot:middle>
          订单详情
        </template>
        <template v-slot:right>
          <a href="javascript:;" @click="$router.push('/after_sale')" style="color:white;">申请售后</a>

        </template>
      </navbar>

      <div class='order_info_box'>

        <h3 class='h2'> {{order.payMode}} <span v-if="order.payMode!='微信支付'">支付</span> <span class='order_info_box_money'>{{order.orderPrice.toFixed(2)}}元</span> </h3>

        <p>
          <van-icon size="16px" name="peer-pay" /> <span>付款时间：{{order.createdAt}}</span>
        </p>
        <p>
          <van-icon size="16px" name="peer-pay" /> <span>订单编号：{{order.ordername}}</span>
        </p>
        <p>
          <van-icon size="16px" name="peer-pay" /> <span>商品名称：{{order.goodname}}</span>
        </p>
        <p>
          <van-icon size="16px" name="envelop-o" /> <span v-if='order.sendCardStatus=="已发货"'>已发卡密{{order.count}}张，未发卡密0张。</span>
          <span v-if='order.sendCardStatus=="未发货"'>已发卡密0张，未发卡密{{order.count}}张。</span>
        </p>
        <p>
          <van-icon size="16px" name="peer-pay" /> <span>商家联系方式: {{$store.state.config.contact}}</span>
        </p>
      </div>

      <div class='cards_box_text'>

        <h3>您购买的卡密 </h3>
        <div>

          <div v-show="!$store.state.customer_info.isPhoen">
            <el-button @click="$copy(order.cards_string)" plain type="info" size="small">复制卡密</el-button>
            <el-button @click="download()" plain type="info" size="small">导出卡密</el-button>
          </div>

          <div v-show="$store.state.customer_info.isPhoen">
            <span @click="$copy(order.cards_string)">复制卡密 </span>
            <span @click="download()">导出卡密 </span>
          </div>
        </div>

      </div>

      <div class='cards_box public_box'>
        <div>
          <van-field v-model="order.cards_string" rows="2" autosize type="textarea" placeholder="卡密信息" />
        </div>

      </div>

      <!-- cookie -->
      <van-cell-group v-if="$store.state.client.baidu_cookie" inset class='is_cookie_box'>
        <van-cell center inset title="软件使用">
          <template #right-icon>
            <van-switch v-model="is_cookie" size="24" @change='change_is_cookie()' />
          </template>
        </van-cell>
      </van-cell-group>

      <div class='cards_box_text'>
        <h3>卡密使用说明 </h3>
      </div>

      <div class='use_box public_box'>
        <div>
          <van-field v-model="order.use_explain" rows="2" autosize type="textarea" placeholder="卡密使用说明" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { request } from '@/network/request.js'
import navbar from '@/components/public/navbar'
export default {
  name: 'order_details',
  components: {
    navbar,
  },
  data() {
    return {
      ordername: '',
      cards: '',
      order: {
        orderPrice: 0,
      },
      is_cookie: false,
    }
  },
  async created() {

    this.is_cookie = window.localStorage.getItem('isCookie')
    if (this.is_cookie == 'true') this.is_cookie = true
    if (this.is_cookie == 'false') this.is_cookie = false
    console.log(this.is_cookie)

    this.ordername = this.$route.query.ordername
    this.order_query()
  },
  methods: {
    async order_query() {
      this.$store.state.loading = true
      let res = await request({
        url: "/client/order/query",
        method: "get",
        params: {
          ordername: this.ordername,
          isCookie: this.is_cookie,
        }
      })
      this.order = res.data.data

    },
    download() {
      let blob = new Blob([this.order.cards_string], { type: "text/plain;charset=utf-8" });
      this.$download_txt(blob, this.order.ordername);
    },
    change_is_cookie() {
      window.localStorage.setItem('isCookie', this.is_cookie)
      this.order_query()
    }

  },

}
</script>

<style lang="less" scoped>
#order_details {
  background-color: var(--main_color);
  min-height: 100%;
}
.order_info_box {
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  height: 180px;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  .h2 {
    font-size: 17px;
    margin: 10px 0px;
    color: var(--first_font_color);
    .order_info_box_money {
      font-size: 16px;
    }
  }
  P {
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 13px;
    color: var(--second_font_color);
    i {
      vertical-align: -20%;
      margin-right: 10px;
    }
  }
}
.cards_box_text {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  color: white;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    font-size: 14px;

    padding: 10px;
  }
}
.public_box {
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
}
.cards_box {
  max-height: 300px;

  > div {
    max-height: 280px;
    overflow: auto;
  }
}

.navbar2 {
  color: rgb(255, 255, 255) !important;
}

// 去除cookie
.is_cookie_box {
  margin: 10px 0px !important;
}
</style>
