import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    anime: 'Anime',
                    about: 'About',
                    resources: 'Resources',
                    manga: 'Manga',
                    language: 'Language',
                    english: 'English',
                    chinese: 'Chinese',
                    otaku: 'Otaku Park',
                    animesearch: 'Anime Search',
                    dashboard: 'Dashboard',
                    waifu: 'Waifu Finder',
                    welcome:"Welcome",
                    new:"new",
                    friends:"Friends",
                    home1:"Do you like watching anime?",
                    home2:"Do you like reading manga?",
                    home3:"Then please enjoy this site!",
                    submit: "Submit",
                    newitem: 'New Item',
                    update: 'Update',
                    delete: "Delete",
                    favanime: "Favorite Anime",
                    rec:"Recommend your favorite anime!",
                    find1: 'Find your girl!',
                    find2: 'Find your boy!',
                    click: 'Click Me!',
                    des1: 'This site is for anyone with a love for',
                    des2: "anime or manga. It's always a pleasure to",
                    des3: 'experience another culture and their love of storytelling.',
                    thanks: 'Special Thanks to:',
                    dis: 'Disclaimer: This site was translated by myself, please forgive any mistakes.',
                    fun: "Fun",
                    r1: 'Watching Anime',
                    r2:'Shopping',
                    r3:'Reading Manga',
                    button: 'Get Random Anime Quote!',
                    login: 'Login',
                    logout: 'Logout'
                    
                    

                    
                }
            },
            ch: {
                translation: {
                    anime: '动画',
                    about: '关于',
                    resources: '资源',
                    language: '语言',
                    english: '英文',
                    chinese: '中文',
                    otaku: '宅男们 公园',
                    manga: '漫画',
                    animesearch: '搜索动画',
                    dashboard: '仪表板',
                    waifu: '看一些美女',
                    welcome:"欢迎",
                    new:"新的",
                    friends:"朋友们",
                    home1:"你喜欢看动画吗?",
                    home2:"你喜欢看漫画吗?",
                    home3:"那我希望你喜欢这个网站",
                    submit:"提交",
                    newitem: '添加',
                    update: '更新',
                    delete: "除掉",
                    favanime: "最喜欢的动画",
                    rec:"推荐你最喜欢的动漫!",
                    find1: '找一个美女!',
                    find2: '找一个帅哥!',
                    click: '点击!',
                    des1: '什么人喜欢看动画和漫画会喜欢这个网站!',
                    des2: "总是很高兴",
                    des3: '体验另一种文化和他们对讲故事的热爱。',
                    thanks: '感谢这些的网站:',
                    dis: '免责声明: 这网站是我自己翻译的，对不起有什么错误',
                    fun: "好玩儿的",
                    r1: '看动漫',
                    r2:'购物',
                    r3:'看漫画',
                    button: '随机的动漫的引用句(只有英语的）',
                    login: '登录',
                    logout: '登出'
                }
            }
        }
    })