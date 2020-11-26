
const newList = [
    {
        id: 1,
        name: '刘俊杰',
        prompt: '1.6万人关注了ta',
        imgPath: 'https://picsum.photos/100/100.webp?random=0',
        text: '石室诗士施氏，嗜狮，誓食十狮。施氏时时适市视狮。十时，适十狮',
        tips: [
            "坚持自己",
            "皇家大建院",
            "一天十公里"
        ],
        imgs: [
            "https://picsum.photos/200/200.webp?random=1",
            "https://picsum.photos/200/200.webp?random=2",
            "https://picsum.photos/200/200.webp?random=3",
            "https://picsum.photos/200/200.webp?random=4",
            "https://picsum.photos/200/200.webp?random=5",
            "https://picsum.photos/200/200.webp?random=6",
        ],
        goods: {
            isGood: 0,
            goodCount: 365
        },
        stars: {
            isStar: 0,
            starCount: 35
        },
        chats: {
            chatCount: 56,
            chats: [
                {
                    isGood: 0,
                    name: "杨家兴",
                    text: "加油哦! 明天可以一起吗? 加油哦! 明天可以一起吗加油哦! 明天可以一起吗? 加油哦! 明天可以一起吗"
                },
                {
                    isGood: 1,
                    name: "齐云飞",
                    text: "啊啊啊啊啊啊啊啊啊,美女!"
                },
                {
                    isGood: 1,
                    name: "杨家兴",
                    text: "加油哦! 明天可以一起吗? 加油哦! 明天可以一起吗"
                },
                {
                    isGood: 0,
                    name: "齐云飞",
                    text: "啊啊啊啊啊啊啊啊啊,美女!"
                },
                {
                    isGood: 0,
                    name: "杨家兴",
                    text: "加油哦! 明天可以一起吗? 加油哦! 明天可以一起吗"
                },
                {
                    isGood: 0,
                    name: "齐云飞",
                    text: "啊啊啊啊啊啊啊啊啊,美女!"
                },
                {
                    isGood: 0,
                    name: "杨家兴",
                    text: "加油哦! 明天可以一起吗? 加油哦! 明天可以一起吗"
                },
                {
                    isGood: 0,
                    name: "齐云飞",
                    text: "啊啊啊啊啊啊啊啊啊,美女!"
                },
            ]
        }
    },
    {
        id: 2,
        name: '仇迪',
        prompt: '没人关注ta',
        imgPath: 'https://picsum.photos/100/100.webp?random=1',
        text: '有人一起出来跑步吗?',
        tips: [
            "坚持自己",
            "我是帅哥"
        ],
        imgs: [
            "https://picsum.photos/200/200.webp?random=10",
            "https://picsum.photos/200/200.webp?random=20",
            "https://picsum.photos/200/200.webp?random=30",
            "https://picsum.photos/200/200.webp?random=40",
        ],
        goods: {
            isGood: 0,
            goodCount: 3
        },
        stars: {
            isStar: 0,
            starCount: 5
        },
        chats: {
            chatCount: 1,
            chats: [
                {
                    isGood: 0,
                    name: "杨家兴",
                    text: "帅哥!"
                }
            ]
        }
    },
    {
        id: 3,
        name: '张三',
        prompt: '1个人关注了ta',
        imgPath: 'https://picsum.photos/100/100.webp?random=3',
        text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        tips: [
            "坚持自己",
            "我是帅哥"
        ],
        imgs: [
            "https://picsum.photos/200/200.webp?random=101",
            "https://picsum.photos/200/200.webp?random=202",
            "https://picsum.photos/200/200.webp?random=303",
            "https://picsum.photos/200/200.webp?random=404",
            "https://picsum.photos/200/200.webp?random=106",
            "https://picsum.photos/200/200.webp?random=207",
            "https://picsum.photos/200/200.webp?random=308",
            "https://picsum.photos/200/200.webp?random=409",
            "https://picsum.photos/200/200.webp?random=400",

        ],
        goods: {
            isGood: 0,
            goodCount: 385
        },
        stars: {
            isStar: 0,
            starCount: 55
        },
        chats: {
            chatCount: 2,
            chats: [
                {
                    isGood: 0,
                    name: "李四",
                    text: "帅哥,一起跑步吗!"
                },
                {
                    isGood: 0,
                    name: "王五",
                    text: "你也在这里啊!"
                }
            ]
        }
    },
    {
        id: 4,
        name: '李四',
        prompt: '没人关注ta',
        imgPath: 'https://picsum.photos/100/100.webp?random=4',
        text: '没人和我一块跑吗?',
        tips: [
            "我是帅哥"
        ],
        imgs: [
            "https://picsum.photos/200/200.webp?random=104",
            "https://picsum.photos/200/200.webp?random=204",
            "https://picsum.photos/200/200.webp?random=304",
            "https://picsum.photos/200/200.webp?random=404",
        ],
        goods: {
            isGood: 0,
            goodCount: 35
        },
        stars: {
            isStar: 0,
            starCount: 5
        },
        chats: {
            chatCount: 1,
            chats: [
                {
                    isGood: 0,
                    name: "杨家兴",
                    text: "帅哥!"
                }
            ]
        }
    }
]

let newsFunction = {
    addNews: (name, text, imgs) => {
        let news = {
            id: newList.length + 1,
            name: name,
            prompt: '没人关注ta',
            imgPath: 'https://picsum.photos/100/100.webp?random=' + (newList.length + 1),
            text: text,
            tips: [

            ],
            imgs: imgs,
            goods: {
                isGood: 0,
                goodCount: 0
            },
            stars: {
                isStar: 0,
                starCount: 0
            },
            chats: {
                chatCount: 0,
                chats: [

                ]
            }
        }
        newList.push(news)
    },
    addNewsChat: (id, name, text) => {
        newList[id - 1].chats.chatCount++
        newList[id - 1].chats.chats.unshift({
            name: name,
            text: text,
            isGood: 0
        })
    },
    chatGood: (id, num) => {
        if (newList[id - 1].chats.chats[num].isGood == 0) {
            newList[id - 1].chats.chats[num].isGood = 1
        } else {
            newList[id - 1].chats.chats[num].isGood = 0
        }
    },
    newsGood: (id) => {
        if (newList[id - 1].goods.isGood == 0) {
            newList[id - 1].goods.isGood = 1
            newList[id - 1].goods.goodCount++
        } else {
            newList[id - 1].goods.isGood = 0
            newList[id - 1].goods.goodCount--
        }
    },
    newsStar: (id) => {
        if (newList[id - 1].stars.isStar == 0) {
            newList[id - 1].stars.isStar = 1
            newList[id - 1].stars.starCount++
        } else {
            newList[id - 1].stars.isStar = 0
            newList[id - 1].stars.starCount--
        }
    }
}


const activityList = [
    {
        text: '四星期减脂挑战,赢取限时徽章赢取限时徽章',
        time: '2020.11.03-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=0',
        hot: '6,255'
    },
    {
        text: '飞跃芝加哥 | 线上马拉松 City Run',
        time: '2020.11.11-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=1',
        hot: '22,250'
    },

    {
        text: '缤纷感恩行 | 马拉松感恩节特辑',
        time: '2020.11.20-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=2',
        hot: '2,155'
    }, {
        text: '2020线上徐州马拉松赛',
        time: '2020.11.29-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=3',
        hot: '666,255'
    },
    {
        text: '自在独自行 | 马拉松新系列 woman power',
        time: '2020.11.01-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=4',
        hot: '6,255'
    },
    {
        text: '十一月减脂挑战 | 赢[爱之物语]系列徽章',
        time: '2020.12.03-2020.12.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=5',
        hot: '678,255'
    }, {
        text: '四星期减脂挑战,赢取限时徽章赢取限时徽章',
        time: '2020.11.03-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=0',
        hot: '6,255'
    },
    {
        text: '飞跃芝加哥 | 线上马拉松 City Run',
        time: '2020.11.11-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=1',
        hot: '22,250'
    },

    {
        text: '缤纷感恩行 | 马拉松感恩节特辑',
        time: '2020.11.20-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=2',
        hot: '2,155'
    }, {
        text: '2020线上徐州马拉松赛',
        time: '2020.11.29-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=3',
        hot: '666,255'
    },
    {
        text: '自在独自行 | 马拉松新系列 woman power',
        time: '2020.11.01-2020.11.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=4',
        hot: '6,255'
    },
    {
        text: '十一月减脂挑战 | 赢[爱之物语]系列徽章',
        time: '2020.12.03-2020.12.30',
        imgPath: 'https://picsum.photos/200/100.webp?random=5',
        hot: '678,255'
    }
]

const friendList = [
    {
        id: 1,
        name: '刘俊杰',
        imgPath: '',
        time: '20:01',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 2,
        name: '齐云飞',
        imgPath: '',
        time: '20:00',
        chatList: [
            {
                isfl: 0,
                text: 'hello?'
            },
            {
                isfl: 1,
                text: 'What\'s the matter'
            },
            {
                isfl: 0,
                text: 'There\'s nothing'
            },
            {
                isfl: 1,
                text: 'Bye bye.'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 3,
        name: '杨家兴',
        imgPath: '',
        time: '15:00',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 4,
        name: '张三',
        imgPath: '',
        time: '14:44',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 5,
        name: '李四',
        imgPath: '',
        time: '13:01',
        chatList: [
            {
                isfl: 0,
                text: 'hello?'
            },
            {
                isfl: 1,
                text: 'What\'s the matter'
            },
            {
                isfl: 0,
                text: 'There\'s nothing'
            },
            {
                isfl: 1,
                text: 'Bye bye.'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 6,
        name: '王五',
        imgPath: '',
        time: '2019-11-20',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 7,
        name: '赵六',
        imgPath: '',
        time: '2020-01-20',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 8,
        name: 'Jack',
        imgPath: '',
        time: '2019-01-20',
        chatList: [
            {
                isfl: 0,
                text: 'hello?'
            },
            {
                isfl: 1,
                text: 'What\'s the matter'
            },
            {
                isfl: 0,
                text: 'There\'s nothing'
            },
            {
                isfl: 1,
                text: 'Bye bye.'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    },
    {
        id: 9,
        name: 'Tom',
        imgPath: '',
        time: '2019-01-20',
        chatList: [
            {
                isfl: 0,
                text: '你在干嘛啊?'
            },
            {
                isfl: 1,
                text: '没干嘛'
            },
            {
                isfl: 0,
                text: '现在几点了'
            },
            {
                isfl: 1,
                text: '25点'
            },
            {
                isfl: 1,
                text: '拜拜...'
            },
            {
                isfl: 1,
                imgPath: 'https://placeimg.com/400/400/any'
            }
        ]
    }
]



module.exports = {
    newList: newList,
    newsFunction: newsFunction,
    activityList: activityList,
    friendList: friendList
}