function generator$real$chineses() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesFamily = ['Li', 'Gao', 'Zhang', 'Han', 'Wang', 'Ye', 'Sun', 'Dong', 'Fu', 'Cai', 'Guan', 'Huang', 'Zhou', 'Qiao', 'Diao', 'Yang', 'Xi', 'Tai', 'Zhen', 'Cao', 'An', 'Ang', 'Ao', 'Ba', 'Bai', 'Ban', 'Bao', 'Bi', 'Bo', 'Bu', 'Cai', 'Cao', 'Cha', 'Chai', 'Cham', 'Chan', 'Chang', 'Chao', 'Chau', 'Che', 'Cheah', 'Chen', 'Cheng', 'Cheong', 'Chern', 'Cheung', 'Chi', 'Chia', 'Chiang', 'Ching', 'Chiong', 'Chiou', 'Cho', 'Choi', 'Chong', 'Chou', 'Chow', 'Chu', 'Chua', 'Chuang', 'Chun', 'Chung', 'Cong', 'Cui', 'Dai', 'Dang', 'Dea', 'Deng', 'Ding', 'Dou', 'Dong', 'Doo', 'Du', 'Duan', 'Dung', 'Eng', 'Fan', 'Fang', 'Fei', 'Feng', 'Fong', 'Fu', 'Feng', 'Gan', 'Gang', 'Gao', 'Gau', 'Ge', 'Geng', 'Go', 'Goa', 'Gong', 'Gu', 'Guan', 'Guo', 'Ha', 'Hai', 'Han', 'Hang', 'Hao', 'He', 'Ho', 'Hoh', 'Hom', 'Hon', 'Hong', 'Hou', 'Hu', 'Hua', 'Huang', 'Hui', 'Hung', 'Huo', 'Hwang', 'Hy', 'Ing', 'Jan', 'Jang', 'Jeng', 'Jew', 'Ji', 'Jia', 'Jian', 'Jiang', 'Jiao', 'Jin', 'Jing', 'Jo', 'Joe', 'Jong', 'Joo', 'Jow', 'Ju', 'Jue', 'Jung', 'Kam', 'Kan', 'Kang', 'Kao', 'Kau', 'Ke', 'Keng', 'Kho', 'Khoo', 'Kiang', 'King', 'Ko', 'Koh', 'Kong', 'Koo', 'Kook', 'Kou', 'Ku', 'Kuan', 'Kuang', 'Kung', 'Kuo', 'Kwan', 'Kwong', 'Lai', 'Lam', 'Lan', 'Lang', 'Lao', 'Lau', 'Lee', 'Lei', 'Leng', 'Leong', 'Leung', 'Lew', 'Li', 'Lian', 'Liang', 'Liao', 'Liaw', 'Lien', 'Liew', 'Lim', 'Lin', 'Ling', 'Liu', 'Loh', 'Lok', 'Long', 'Loo', 'Lou', 'Louie', 'Lu', 'Lua', 'Lui', 'Luk', 'Lum', 'Lung', 'Luo', 'Ma', 'Mah', 'Mai', 'Mak', 'Man', 'Mao', 'Mar', 'Mau', 'May', 'Mei', 'Meng', 'Miao', 'Min', 'Ming', 'Miu', 'Mo', 'Mok', 'Mon', 'Moy', 'Mu', 'Mui', 'Na', 'Ng', 'Ngan', 'Ni', 'Nie', 'Ning', 'Niu', 'Ou', 'Ow', 'Owyang', 'Pan', 'Pang', 'Pao', 'Pau', 'Pei', 'Peng', 'Pi', 'Ping', 'Po', 'Pon', 'Pong', 'Poon', 'Pu', 'Pun', 'Qi', 'Qian', 'Qiao', 'Qin', 'Qiu', 'Quan', 'Que', 'Rao', 'Ren', 'Rong', 'Ruan', 'Sam', 'San', 'Sang', 'Seto', 'Sha', 'Sham', 'Shan', 'Shang', 'Shao', 'Shaw', 'Shek', 'Shen', 'Sheng', 'Sheu', 'Shi', 'Shiau', 'Shieh', 'Shing', 'Xiu', 'Shu', 'Shy', 'Shyu', 'Si', 'Sieh', 'Sing', 'Siu', 'So', 'Soh', 'Song', 'Soo', 'Soong', 'Su', 'Suen', 'Sui', 'Sum', 'Sun', 'Seng', 'Sze', 'Szeto', 'Tai', 'Tam', 'Tan', 'Tang', 'Tao', 'Tay', 'Te', 'Teh', 'Teng', 'Teo', 'Tian', 'Tien', 'Tin', 'Ting', 'Tiu', 'To', 'Toh', 'Tom', 'Tong', 'Tsang', 'Tsao', 'Tsay', 'Tse', 'Tseng', 'Tso', 'Tsoi', 'Tsou', 'Cu', 'Tsui', 'Tu', 'Tuan', 'Teng', 'Tzeng', 'U', 'Un', 'Ung', 'Wah', 'Wai', 'Wan', 'Wang', 'Wee', 'Wei', 'Wen', 'Weng', 'Wing', 'Wong', 'Woo', 'Woon', 'Wu', 'Xi', 'Xia', 'Xiang', 'Xiao', 'Xie', 'Xin', 'Xing', 'Xiong', 'Xu', 'Xue', 'Yan', 'Yang', 'Yao', 'Yau', 'Ye', 'Yen', 'Yi', 'Yim', 'Yin', 'Ying', 'Yiu', 'Yong', 'Yoon', 'You', 'Young', 'Yu', 'Yuan', 'Yue', 'Yun', 'Yung', 'Zang', 'Zeng', 'Zha', 'Zhan', 'Zhang', 'Zhao', 'Zhen', 'Zheng', 'Zhong', 'Zhou', 'Zhu', 'Zhuang', 'Zhuo', 'Zong', 'Zou'];
  const namesMale = ['Aiguo', 'An', 'Anguo', 'Bai', 'Bao', 'Bingwen', 'Bo', 'Bohai', 'Bojing', 'Bolin', 'Boqin', 'Changming', 'Changpu', 'Chanming', 'Chao', 'Chaoxiang', 'Chen', 'Cheng', 'Chenglei', 'Cheung', 'Chi', 'Chongan', 'Chongkun', 'Chonglin', 'Chuanli', 'Chung', 'Da', 'Dai', 'Deli', 'Delun', 'Deming', 'Deshi', 'Dewei', 'Dingbang', 'Dingxiang', 'Dong', 'Donghai', 'Duyi', 'Enlai', 'Fa', 'Fai', 'Fang', 'Feng', 'Fengge', 'Fu', 'Fuhua', 'Gan', 'Gang', 'Geming', 'Gen', 'Guang', 'Guangli', 'Gui', 'Guiren', 'Guoliang', 'Guotin', 'Guowei', 'Guozhi', 'Hai', 'He', 'Heng', 'Ho', 'Hong', 'Honghui', 'Hongqi', 'Hoa', 'Haowei', 'Hu', 'Huan', 'Huang Fu', 'Hui', 'Hulin', 'Hung', 'Huojin', 'Jaw-long', 'Jian', 'Jiang', 'Jianguo', 'Jianjun', 'Jianyu', 'Jin', 'Jing', 'Jingguo', 'Jinhai', 'Jinjing', 'Jun', 'Junjie', 'Kang', 'Kong', 'Lei', 'Li', 'Liang', 'Liko', 'Ling', 'Liu', 'Liwei', 'Lok', 'Longwei', 'Manchu', 'Ming-hua', 'Ming-tun', 'Mingli', 'Minsheng', 'Minzhe', 'Nianzu', 'On', 'Pengfei', 'Ping', 'Qi', 'Qianfan', 'Qiang', 'Qingshan', 'Qingsheng', 'Qiquiang', 'Qiu', 'Quan', 'Renshu', 'Rong', 'Ru', 'Shan', 'Shanyuan', 'Shaoqiang', 'Shen', 'Shi', 'Shilin', 'Shing', 'Shining', 'Shirong', 'Shoi-ming', 'Shoushan', 'Shu-sai-chong', 'Shunyuan', 'Siyu', 'Sui-yen', 'Sying', 'Tao', 'Tengfei', 'Tingzhe', 'Tsun-chung', 'Teng', 'Wang', 'Wei', 'Weimin', 'Weisheng', 'Weiyuan', 'Weizhe', 'Wencheng', 'Wenyan', 'Wing', 'Wuzhou', 'Xiang', 'Xianliang', 'Xiaobo', 'Xiaojian', 'Xiaosi', 'Xiaowen', 'Xiasheng', 'Xin', 'Xing', 'Xiu', 'Xue', 'Xueqin', 'Xueyou', 'Yang', 'Yanlin', 'Yaochuan', 'Yaoting', 'Yaozu', 'Ye', 'Yi ', 'Yingjie', 'Yingpei', 'Yong', 'Yongliang', 'Yongnian', 'Yongrui', 'Yongzheng', 'You', 'Yuanjun', 'Yunxu', 'Yusheng', 'Zedong', 'Zemin', 'Zenguang', 'Zhen', 'Zhengzhong', 'Zhensheng', 'Zhihuan', 'Zhiqiang', 'Zhixin', 'Zhiyuan', 'Zhong', 'Zian', 'Zihao', 'Zixin', 'Hulin', 'Hung', 'Huojin', 'Jaw-Long', 'Jian', 'Jiang', 'Jianguo', 'Jianjun', 'Jianyu', 'Jin', 'Jing', 'Jingguo', 'Jinhai', 'Jinjing', 'Junjie', 'Kang', 'Kong', 'Li', 'Liang', 'Ling', 'Liwei', 'Lok', 'Longwei', 'Ming-hua', 'Mingli', 'Minsheng', 'Minzhe', 'On', 'Park', 'Peng', 'Ping', 'Qi', 'Qianfan', 'Qiang', 'Qingshan', 'Qiqiang', 'Qiu', 'Quan', 'Ru', 'Renshu', 'Shaiming', 'Shan', 'Shanyuan', 'Shen', 'Shi', 'Shilin', 'Shing', 'Shirong', 'Shoi-Ming', 'Shunyuan', 'Siyu', 'Sui-Yen', 'Sying', 'Taiwan', 'Tengfei', 'Tingzhe', 'Teng', 'Wang', 'Weimin', 'Weisheng', 'Weiyuan', 'Wencheng', 'Wenyan', 'Wing', 'Wuzhou', 'Xiang', 'Xiaobo', 'Xiaojian', 'Xiaosheng', 'Xiasheng', 'Xin', 'Xing', 'Xiu', 'Xue', 'Xueqin', 'Xueyou', 'Yang', 'Yanlin', 'Yaochuan', 'Yaozu', 'Ye', 'Yi', 'Yingjie', 'Yong', 'Yongnian', 'Yongrui', 'You', 'Yuanjun', 'Yunxu', 'Yusheng', 'Zedong', 'Zengguang', 'Zenguang', 'Zhengsheng', 'Zhensheng', 'Zhiqiang', 'Zhiyuan', 'Zhong', 'Zian', 'Zihao', 'Zixin', 'Zongmeng'];
  const namesFemale = ['Ah Cy', 'Ah Kum', 'Ah Lam', 'Ai', 'An', 'Bao', 'Baozha', 'Baozhai', 'Bik', 'Biyu', 'Bo', 'Changchang', 'Changying', 'Chao-xing', 'Chenguang', 'Chow', 'Chu Hua', 'Chu hua', 'Chun', 'Chunhua', 'Chuntao', 'Chyou', 'Cuifen', 'Da Chun', 'Da-Xia', 'Dai-tai', 'Daiyu', 'Dandan', 'Dongmei', 'Ehuang', 'Eu-funh', 'Eu-meh', 'Fang', 'Far ', 'Fenfang', 'Feng', 'Guan-yin', 'Hong', 'Haowei', 'Hu', 'Hua', 'Hualing', 'Huan', 'Huian', 'Huidai', 'Huifang', 'Huifen', 'Huilang', 'Huiliang', 'Huiqing', 'Huizhong', 'Hwei-ru', 'Jia', 'Jiahui', 'Jiao', 'Jiayi', 'Jiaying', 'Jie', 'Jing', 'Jingfei', 'Jinghua', 'Ju', 'Juan', 'Jun', 'Kuai', 'Kue', 'Kwong', 'Lan', 'Lanfen', 'Lanying', 'Lee', 'Li', 'Li hua', 'Lian', 'Lien', 'Lien hua', 'Lifen', 'Lihua', 'Lihwa', 'Lijuan', 'Liling', 'Lin', 'Ling', 'Linh', 'Linqin', 'Liqiu', 'Liu', 'Lixue', 'Luli', 'Mani', 'Meh-e', 'Meh-funh', 'Mei', 'Meifen', 'Meifeng', 'Meihui', 'Meili', 'Meilin', 'Meirong', 'Meixiang', 'Meixiu', 'Meiying', 'Meizhen', 'Ming-hua', 'Mingxia', 'Mingyu', 'Mingzhu', 'Mu lan', 'Mu tan', 'Ning', 'Ninghong', 'Niu', 'Nuo', 'Nuwa', 'Peijing', 'Peizhi', 'Ping', 'Qianru', 'Qiao', 'Qiaohui', 'Qiaolian', 'Qing', 'Qingge', 'Qingling', 'Qingzhao', 'Qiu', 'Qiuyue', 'Renxiang', 'Rong', 'Rou', 'Rufen', 'Ruiling', 'Ruolan', 'Ruomei', 'Shaoqing', 'Sheu-fuh', 'Shihong', 'Shu', 'Shuang', 'Shuchun', 'Shun', 'Song', 'Suyin', 'Sya', 'Sying', 'Tao', 'Te', 'Ting', 'Tu', 'Ushi', 'Weici', 'Wen', 'Wenling', 'Wenqian', 'Wenquian', 'Xia', 'Xiang', 'Xiaodan', 'Xiaofan', 'Xiaohui', 'Xiaojian', 'Xiaojing', 'Xiaoli', 'Xiaolian', 'Xiaoling', 'Xiaoqing', 'Xiaosheng', 'Xiaotong', 'Xiaowen', 'Xiaozhi', 'Xifeng', 'Xingjuan', 'Xiu', 'Xiu Mei', 'Xiulan', 'Xiurong', 'Xiuying', 'Xue', 'Xueman', 'Ya', 'Yan', 'Yang', 'Yanlin', 'Yanmei', 'Yanyu', 'Yenay', 'Yet Kwai ', 'Yin', 'Ying', 'Yingtai', 'Yow', 'Yu', 'Yu-jun', 'Yuan', 'Yubi', 'Yue', 'Yuehai', 'Yueqin', 'Yuet', 'Yuk', 'Yuke', 'Yuming', 'Yun', 'Yunru', 'Yusheng', 'Yuying', 'Yuzhen', 'Zhaohui', 'Zhen', 'Zhenzhen', 'Zhilan', 'Zhu', 'Zi', 'Zongying'];

  const names2 = type === 1 ? namesFemale : namesMale;
  const names1 = namesFamily;

  i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd1]}`;
    return names;
  }
}
