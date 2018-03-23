//
// i18n.run(lang)
// - $("[data-i18n]").each((el.type == input, textarea ? el.placeholder : el.innerHTML) = table[lang][el.attr(data-i18n)])
//
// requires jquery
//
// this file is mainly a big table
// calls i18n.run(localStorage.lang) at bottom of this file

"use strict";

var i18n = function () {
    var table = {
        en: {
            amount: "Amount",
            blog: "Blog",
            "check/anchor": "Please, read about this tool here.",
            "check/blah1": "During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and \"cancel\" / replace these TXs.",
            "check/blah2": "This is not typically something you can do. It should not be relied upon &amp; will only work when the TX Pools are full.",
            "check/comment1": "Please enter a valid TX hash",
            "check/tx-details": "Transaction Details",
            community: "Community",
            data: "Data",
            download: "Download",
            "gas-limit": "Gas Limit",
            "gas-price": "Gas Price",
            "header/new-wallet": "Create New Wallet",
            "header/send": "Send NAS",
            "header/send-offline": "Send Offline",
            "header/view": "View Wallet Info",
            "header/check": "Check TX Status",
            "header/contract": "Contract",
            home: "Home",
            "index/comment": "This password encrypts your private key." +
                "<br>This does not act as a seed to generate your keys." +
                "<br>You will need this password + your private key to unlock your wallet.",
            "index/enter-password": "Enter a password:",
            "index/new": "Create New Wallet",
            "index/placeholder/do-not-forget": "Do NOT forget to save this!",
            name: "English",
            resources: "Resources",
            "send-nas/amount": "Value / Amount to Send",
            "send-nas/balance": "Balance",
            "send-nas/button/generate": "Generate Transaction",
            "send-nas/from-address": "From Address",
            "send-nas/raw": "Raw Transaction",
            "send-nas/receipt": "receipt",
            "send-nas/send": "Send Transaction",
            "send-nas/signed": "Signed Transaction",
            "send-nas/to-address": "To Address",
            "send-offline/gen-info": "Generate Information",
            "send-offline/step1": "Step 1: Generate Information (Online Computer)",
            "send-offline/step2": "Step 2: Generate Transaction (Offline Computer)",
            "send-offline/step3": "Step 3: Send / Publish Transaction (Online Computer)",
            "swf/button": "SELECT WALLET FILE...",
            "swf/comment": "<br>This is not a recommended way to access your wallet." +
                "<br>Entering your private key on a website is dangerous. If our website is compromised or you accidentally visit a different website, your funds will be stolen.",
            "swf/good": "Your wallet is encrypted. Good! Please enter the password.",
            "swf/modal/select/message": "please upload your wallet file, thanks",
            "swf/modal/select/title": "please select your wallet",
            "swf/name": "Select Your Wallet File:",
            "swf/unlock": "Unlock",
            team: "Team",
            technology: "Technology",
            "wallet-info/acc-addr": "Account Address",
            "wallet-info/acc-balance": "Account Balance",
            "wallet-info/keystore": "Keystore File (UTC / JSON · Recommended · Encrypted)",
            "wallet-info/private-key": "Private Key (unencrypted)",
            "wallet-info/your-addr": "Your Address"
        },
        zh: {
            amount: "数量",
            blog: "博客",
            "check/anchor": "有关此工具请阅读这里。",
            "check/blah1": "大容量交易（像 ICO）可能持续数小时甚至数天，此工具致力找出并取消 / 替换这类交易。",
            "check/blah2": "这往往不是你能做的。不要依赖它，它只在交易池满的时候有效。",
            "check/comment1": "请输入有效的交易散列",
            "check/tx-details": "交易详情",
            community: "社区",
            data: "数据",
            download: "下载",
            "gas-limit": "Gas 限制",
            "gas-price": "Gas 价格",
            "header/new-wallet": "新建钱包",
            "header/send": "发送星云币",
            "header/send-offline": "离线发送",
            "header/view": "钱包信息",
            "header/check": "交易状态",
            "header/contract": "合约",
            home: "主页",
            "index/comment": "该密码用于加密您的私钥。<br>他不做为产生私钥的种子。<br>您需要该密码 + 您的私钥以解锁您的钱包。",
            "index/enter-password": "输入密码:",
            "index/new": "新建钱包",
            "index/placeholder/do-not-forget": "别忘了这个！",
            name: "简体中文",
            resources: "资源",
            "send-nas/amount": "要发送的价值 / 数量",
            "send-nas/balance": "余额",
            "send-nas/button/generate": "生成交易",
            "send-nas/from-address": "来自地址",
            "send-nas/raw": "原始交易",
            "send-nas/receipt": "收据",
            "send-nas/send": "发送交易",
            "send-nas/signed": "签名的交易",
            "send-nas/to-address": "目的地址",
            "send-offline/gen-info": "生成信息",
            "send-offline/step1": "第 1 步：生成信息（联网）",
            "send-offline/step2": "第 2 步：生成信息（单机）",
            "send-offline/step3": "第 3 步：发送 / 发布交易（联网）",
            "swf/button": "选择钱包文件...",
            "swf/comment": "<br>不推荐用此方法访问钱包。" +
                "<br>在网站输入你的私钥很危险，如果网站不安全或访问了不同的网站，你的资金会失窃。",
            "swf/good": "你的钱包加密了，好！请输入密码。",
            "swf/modal/select/message": "请上传您的钱包文件，谢谢",
            "swf/modal/select/title": "请选择您的钱包",
            "swf/name": "选择你的钱包文件：",
            "swf/unlock": "解锁",
            team: "团队",
            technology: "技术",
            "wallet-info/acc-addr": "钱包地址",
            "wallet-info/acc-balance": "钱包余额",
            "wallet-info/keystore": "密码库文件（UTC / JSON · Recommended · Encrypted）",
            "wallet-info/private-key": "私钥（未加密）",
            "wallet-info/your-addr": "你的地址"
        }
    };

    return {
        name: name,
        run: run,
        supports: supports
    };

    function name(s) {
        return table[s].name;
    }

    function run(lang, $parent) {
        // make sure lang is a key of table
        lang = (lang || "").toLowerCase();
        table[lang] || (lang = "en");

        if ($parent)
            $parent.find("[data-i18n]").each(f);
        else {
            $("[data-i18n]").each(f);
            document.documentElement.lang = lang;
        }

        function f(i, o) {
            var key = (o.dataset.i18n || "").toLowerCase();
            o[o.tagName == "INPUT" || o.tagName == "TEXTAREA" ? "placeholder" : "innerHTML"] = table[lang][key] || table.en[key];
        }
    }

    function supports(s) {
        return s ? s in table : Object.keys(table);
    }
}();

i18n.run(localStorage.lang);
