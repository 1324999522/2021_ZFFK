
// 修改配置 需要重启服务才能生效
module.exports = {
    mysql: {

        database: 'test03',
        username: 'test03',
        password: 'test03',

        // 默认连接本地数据库
        host: '43.128.27.107',
    },
    JWT_SECRET_KEY: 'cong',
    // 系统管理员ID
    system_admin_id: 19,
    domain: 'localhost',
    link: '769920',
    // 注册
    register: {
        allow: false,
    },
    // 收款
    collect: {
        notify_url: 'http://119.29.77.51:4200/client/order/pay/success',
        ali_pay: {
            show: true,
            appid: '2018032302431243',
            private_key: `MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCw8rPJNWjA4ys7Xg7HovFSPW1RksDHH538gWvuODRlxs/YQZJnVp1AC/ut7cv5gagQRxhDg9IqeFnCv5WtaEKfCPqVELdYLryFWSJnRiRw4+tAKUHvalwd825Q8oHNco8QcUSF4UdaXKNCv+qCw+y2JYZkgyFy3qwqoO6suAp6eOux0ScGDxbLqo8VN0o/waQojoZSmRTWKCkkqZc4w4VQjYMw7imC1d8yfZL0X7ZsCjZg30EiLJGXdKauhOEHcEY/Z9Z0+tMkd5fEe4aYVqFnWL2w7OswaV+DFpbmah+UoKPT8ZdLodBCgHS1wlwo89ieN28U/4L9LBMaUwn3llb/AgMBAAECggEAE6n1BtAzovPb0w4h0FewP7Zp1p3bZIWD9hKf3upKEGFmqZ6n2WoLsZljT7HUcBbTiXONI7ubeHLFbtoBlTK37Jp/1l70MQ2Ij70XEKj/1bfOZePv2t5T/FQYF1DL0fwAIBCmT8Z4Ond/AST4t610Oc2zwKm95tkOAvK9c15Ec9WanUchjV89V/kdbR5frBqqYCteW0qethyu4yXw6xHGw3xpSs5miYEQfmxArGVo0aAUwCYmnvcWxC8wNlQNOoWgYo7zZ8YseNtbFzjtABMTJVH6nYF2qIQIGT6zQBFSmINCteW0HdGufIaUfvN05WzGgbQHVfx1ZhLOo48JRELvuQKBgQDwKeNaX1WoxxzLNTDibaeqRh7qM9Aw11aCEX1J0JqFt9kQNgWPXbmQTucy/6HW1xriUec2MJkVGvVJKss3E3XOizUWjRDmA6RCoEIbGCjivuQ84lZJugb8NjfO3GZIItzKKR2AKSPweq6+zOUa6tsY1k2q2W6FDQdeTxGtyTXDIwKBgQC8nbInvkhKcCsDhjAQ6YjtzHDbVSDEMZjrhL/3dsIehQO4kfXge/Ipt8yJwxtCol2m71ZJ9tLfLcwnpWPXoNpX6+ZVg/YCZKL3sQk4kV1UoXSuYUSegrKmUoBZo9kTT6ybqBJ7VHuLIZdBOhkxCtvoAuBqSExLbQZ8rl+GdOG4dQKBgGo4fJ/p7n75odiWrApZqYB8Bwxa4kfX1iEtDxboto9R4yVyXz8rmvkijMtXmQLmnLNgujyTfgGBrN8xmDPB3ab+lvpkZgb1sV7udo55PwwaleP/z15IcvJ2IHTTskFRegnH6Y5Xo9emy0cEZIhlO4ZesndQN7uNKacinZUZmze1AoGAaIYDWl7qdMXgMF3GeTjRtuYajJGKTO8nTS0NrLdVL9CKlVfdp/9H3bKLWLSUgMK1n3L2oJp1lVQt1LKkt7PeC+cgh7dPN1hJr3WeJIj57ZJjtNcWTbkkA2Oo2QQhob//aWskgs/4fsuopG7r0u+vmc0uS/ewwAO1GpcPPNW82JkCgYEA3aqGf+XJzn63xY6B2WBrPY6PVzkvwevujgQZUvmvg0/LhmFLVJn4nPI9VLITc2vOKX7ndpHnNgr9FpxPKKlmUPL0ovvw5FN22FvgLqr+WdolL6bDmUhqaHw0j41FTVEImHjMnNBvp1dfOvuQrgErf30zjGmUdzKZcd8hd+dblFs=`,
        },
        wx_pay: {
            show: true,
            appid: 'wxf3d37679488f0b35',
            mch_id: '1614796794',
            serial_no: '169267D02FDE7C3936EE1D6F2017375EB98F2CAF',
            apiv3_private_key: 'Aa132499952213249995221324999522',
            private_key: `-----BEGIN PRIVATE KEY-----
            MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDL2asB2OyozOdq
            HJUGuGGbwCs6vg6RArkH5re+jMiNpi3AitgPcYVn63VRnJso9pf7L99qQxCgdhNZ
            btSuFiXNu6W7mEcq/blKkfUEaWP5oGRjFrUMRmbzdbIX3EfRZZjudYnuLAbHEJOF
            kRNaLN01Dh8dIB3l7HUn+34keNauW1BylATkOETHjLqr+8xtbpwxcpvF5CVm/UmL
            6I7Uwm1Jvexmd5mWaDt7qsox7Q4cm3A9HBRohhnc714HsCP5o9SYEHH2F2FAt7eX
            vaMWDgMN+7vCZWs72xkGpAqmSEX6l0VdaPudWlzcxhWRt2SI2Y4w4JnRJ23mTOl7
            56x2QBeDAgMBAAECggEAWCjn6yGcoBgV0O9RiBl/pTNDvuDpPc+WpBMkzhTmu1Pu
            H4IslOk8j8fl8givldSnv+thTPx6GVtXXOswsaVEbihEMdBWnwIh+10KQQEvSosS
            P0RXwlpENfBluCn9KVMuA5rzrvx9ZeQGWNJ4MxyKAmL8E8WLCJ/tvv/l+vIDrl1r
            wq4GxJuDpNg5w7cnQzfM+Kziv0DNuEKUrFKZEryE8C9zgF+a5GA63T6TJYj5R/AT
            ljW1X0s+c9jGC1/SIgvsKHL26Z4PC+VssnqsfuqWhtyJDR+qB8layOoqxvpOCUF6
            5XrxYnqYtD0dN0rw3CAG8cET72SVgKN8l3saLkvSUQKBgQDssR9l9OL3EZmS6YbN
            NQopQh/YiEUHb5p7lnDORbhBjhLtMXM8tX+Yl1uBfV4+JfGTjvmYTpUjWW6s/Pev
            38Qt1MaekKqawdYv9kV4+SdjLt5q4zrfFQILGCKYBs5zP+O5X1Smlw7McjSNQBut
            BG8V6hBMuLFb0xthhAF+dJl52wKBgQDcerVJlXN8qC1H+BBeiKuMgDE2lK/mLs4N
            uiaaa/ZZGsO9LJbKZ0C1DSPvVKAqNtWLzZ5LB4A+Q8dFL9gZChynM7qytA9CRgKJ
            hPOLdO2Vlr0kRhTw5uoVgduL/j25AnCGxbFZbbI0XIi4074zUjmT7RsEt1eYzCVt
            BosJ6P4teQKBgGu3G8Ppk1S/JLXQIvHGfo5SMm33bfq5VoOB7mphHj5vKrvZMklh
            i+TklNc0N6xu1ibB/WLL+GEy9QQyx4G5gu0clRtaWNm+9vuyxuEL+lnP3ZalPIiD
            Zf+ohy3Kgy+91qPo93ws6KYwHyxdDXtKtkcx0yMnNkfEpgRV79wdsi7bAoGBAIRs
            w2RN+o596KyYZySQjBEYkfaJedkUdbiy/Sq0+8LrG3QNSwiI2cmk+ddvCcAxLTQK
            LTA9ch5z0UVSBkaL10fp/xIEqkGREUcN7sXtViIJ5tLZsQw8dY6zb213KBVuTK32
            IZ5oD6f5iDkTHONwWJrrx9WeVWO2AiiozGwIYFppAoGBAJVFRdQJr8t7oBDG2bXy
            806Zsb5hlV1V50j7NE6fRdeZf/LM08dRro9QBcXc1VLpL6g2+sc5gEmRcvKUoWKp
            /fVMfaMv+90hMyPguUl6cyQoww7oE8DoL4dwv8HTF3khqVBKYceN8fa0c/j9+R45
            vHG4VxPNKsS058fwsrETEZnY
            -----END PRIVATE KEY-----`,
        }
    }
}