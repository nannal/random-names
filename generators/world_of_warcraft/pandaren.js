function generator$world_of_warcraft$pandaren() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Jung', 'Kang-Dae', 'Kwang-Sun', 'Kyong', 'Kyu', 'Kyung', 'Mal-Chin', 'Man-Shik', 'Man-Young', 'Min', 'Moon', 'Mun-Hee', 'Myung', 'Myung-Dae', 'Myung-Suck', 'Nam', 'Ryung', 'Sam', 'Sang', 'Sang-Ook', 'Seung', 'Shik', 'Shin', 'So', 'Soo', 'Sook', 'Suck', 'Suck-Chin', 'Suk', 'Sung', 'U', 'Whan', 'Won-Shik', 'Wook', 'Woong', 'Yeo', 'Yon', 'Yong', 'Yong-sun', 'Young', 'Young-Jae', 'Young-Soo', 'Bae', 'Bong', 'Bon-Hwa', 'Chin', 'Chin-Hae', 'Chin-Hwa', 'Chin-Mae', 'Cho', 'Chul-Moo', 'Chun', 'Chung-Hee', 'Chung-Ho', 'Dae', 'Dak-Ho', 'Doh', 'Dong', 'Dong-Sun', 'Dong-Yul', 'Duck-Hwan', 'Duck-Young', 'Gi', 'Gook', 'Hak-Kun', 'Haneul', 'Hee', 'Hei', 'Ho', 'Hwan', 'Hyun', 'Hyun-Ki', 'Hyun-Ki ', 'Hyun-Shik ', 'Il', 'In', 'In-Su', 'Iseul', 'Ja', 'Jae-Hwa', 'Ji', 'Jin', 'An', 'Anh Dung', 'Bao ', 'Binh', 'Canh', 'Chien', 'Chinh', 'Cuong', 'Dac Kien', 'Danh', 'Dao', 'Dat', 'De', 'Dien', 'Duc', 'Due', 'Dung', 'Duong', 'Gia', 'Giang ', 'Hai', 'Hao', 'Hien', 'Hieu', 'Hoc', 'Hung', 'Huu', 'Huy', 'Huynh', 'Khan', 'Lan', 'Lanh', 'Loc', 'Minh', 'Nguyen', 'Nhat', 'Phuc', 'Phuoc', 'Quan', 'Quang', 'Quoc', 'Sang', 'Si ', 'Sinh', 'Son', 'Thang', 'Thanh', 'Thao', 'Thinh', 'Tho ', 'Thu', 'Thuan', 'Toai', 'Toan', 'Trang', 'Trieu', 'Trong', 'Trong Tri', 'Trung', 'Tu', 'Tuan', 'Tung', 'Van', 'Vien', 'Viet', 'Vuong', 'Xuan', 'Aiguo', 'An', 'Anguo', 'Bai', 'Bao', 'Bingwen', 'Bo', 'Bohai', 'Bojing', 'Bolin', 'Boqin', 'Changming', 'Changpu', 'Chanming', 'Chao', 'Chaoxiang', 'Chen', 'Cheng', 'Chenglei', 'Cheung', 'Chi', 'Chongan', 'Chongkun', 'Chonglin', 'Chuanli', 'Chung', 'Da', 'Dai', 'Deli', 'Delun', 'Deming', 'Deshi', 'Dewei', 'Dingbang', 'Dingxiang', 'Dong', 'Donghai', 'Duyi', 'Enlai', 'Fa', 'Fai', 'Fang', 'Feng', 'Fengge', 'Fu', 'Fuhua', 'Gan', 'Gang', 'Geming', 'Gen', 'Genghis', 'Guang', 'Guangli', 'Gui', 'Guiren', 'Guoliang', 'Guotin', 'Guowei', 'Guozhi', 'Hai', 'He', 'Heng', 'Ho', 'Hong', 'Honghui', 'Hongqi', 'Hop', 'Howin', 'Hu', 'Huan', 'Huang Fu', 'Hui', 'Hulin', 'Hung', 'Huojin', 'Jaw-long', 'Jian', 'Jiang', 'Jianguo', 'Jianjun', 'Jianyu', 'Jin', 'Jing', 'Jingguo', 'Jinhai', 'Jinjing', 'Jun', 'Junjie', 'Kang', 'Keung', 'Kong', 'Lei', 'Li', 'Liang', 'Liko', 'Ling', 'Liu', 'Liwei', 'Lok', 'Longwei', 'Manchu', 'Ming-hua', 'Ming-tun', 'Mingli', 'Minsheng', 'Minzhe', 'Nianzu', 'On', 'Peng Roc', 'Pengfei', 'Ping', 'Qi', 'Qianfan', 'Qiang', 'Qingshan', 'Qingsheng', 'Qiquiang', 'Qiu', 'Quan', 'Quon', 'Renshu', 'Rong', 'Ru', 'Shan', 'Shanyuan', 'Shaoqiang', 'Shen', 'Shi', 'Shilin', 'Shing', 'Shining', 'Shirong', 'Shoi-ming', 'Shoushan', 'Shu-sai-chong', 'Shunyuan', 'Siyu', 'Sueh-yen', 'Sying', 'Tao', 'Tengfei', 'Tingzhe', 'Tsun-chung', 'Tung', 'Wang', 'Wei', 'Weimin', 'Weisheng', 'Weiyuan', 'Weizhe', 'Wencheng', 'Wenyan', 'Wing', 'Wuzhou', 'Xiang', 'Xianliang', 'Xiaobo', 'Xiaojian', 'Xiaosi', 'Xiaowen', 'Xiasheng', 'Xin', 'Xing', 'Xiu', 'Xue', 'Xueqin', 'Xueyou', 'Yang', 'Yanlin', 'Yaochuan', 'Yaoting', 'Yaozu', 'Ye', 'Yi ', 'Yingjie', 'Yingpei', 'Yong', 'Yongliang', 'Yongnian', 'Yongrui', 'Yongzheng', 'You', 'Yuanjun', 'Yunxu', 'Yusheng', 'Zedong', 'Zemin', 'Zenguang', 'Zhen', 'Zhengzhong', 'Zhensheng', 'Zhihuan', 'Zhiqiang', 'Zhixin', 'Zhiyuan', 'Zhong', 'Zian', 'Zihao', 'Zixin', 'Hulin', 'Hung', 'Huojin', 'Jaw-Long', 'Jian', 'Jiang', 'Jianguo', 'Jianjun', 'Jianyu', 'Jin', 'Jing', 'Jingguo', 'Jinhai', 'Jinjing', 'Junjie', 'Kang', 'Kong', 'Kueng', 'Li', 'Liang', 'Ling', 'Liwei', 'Lok', 'Longwei', 'Ming-hua', 'Mingli', 'Minsheng', 'Minzhe', 'On', 'Park', 'Peng', 'Ping', 'Qi', 'Qianfan', 'Qiang', 'Qingshan', 'Qiqiang', 'Qiu', 'Quan', 'Quon', 'Ru', 'Renshu', 'Shaiming', 'Shan', 'Shanyuan', 'Shen', 'Shi', 'Shilin', 'Shing', 'Shirong', 'Shoi-Ming', 'Shunyuan', 'Siyu', 'Sueh-Yen', 'Sying', 'Taiwan', 'Tengfei', 'Tingzhe', 'Tung', 'Wang', 'Weimin', 'Weisheng', 'Weiyuan', 'Wencheng', 'Wenyan', 'Wing', 'Wuzhou', 'Xiang', 'Xiaobo', 'Xiaojian', 'Xiaosheng', 'Xiasheng', 'Xin', 'Xing', 'Xiu', 'Xue', 'Xueqin', 'Xueyou', 'Yang', 'Yanlin', 'Yaochuan', 'Yaozu', 'Ye', 'Yi', 'Yingjie', 'Yong', 'Yongnian', 'Yongrui', 'You', 'Yuanjun', 'Yunxu', 'Yusheng', 'Zedong', 'Zengguang', 'Zenguang', 'Zhengsheng', 'Zhensheng', 'Zhiqiang', 'Zhiyuan', 'Zhong', 'Zian', 'Zihao', 'Zixin', 'Zongmeng'];
  const nm2 = ['Jung', 'Ki', 'Kwan', 'Kyong', 'Kyung', 'Kyung-Hu', 'Kyung-Soon', 'Mee', 'Mi-Cha', 'Mi-hi', 'Min', 'Mi-Ok', 'Moon', 'Mun-Hee', 'Myung', 'Myung-Hee', 'Myung-Ok', 'Nam', 'Ryung', 'Sam', 'Sang', 'Shik', 'Shin', 'So', 'Soo', 'Sook', 'Soon-Bok', 'Suck', 'Sun', 'Sung', 'Sun-Hi', 'Whan', 'Woong', 'Yon', 'Yong', 'Yoon', 'Young-Il', 'Young-Soon', 'Ae-Cha', 'Bae', 'Bong', 'Bong-Cha', 'Chin', 'Chin-Sun', 'Cho', 'Choon-Hee', 'Chul', 'Chun', 'Chung-Ae', 'Chung-Cha', 'Dae', 'Dong', 'Du', 'Eui', 'Eun', 'Eun-Kyung', 'Gi', 'Goo', 'Gook', 'Hae', 'Hae-Won', 'Haneul', 'Hea', 'Hee', 'Hee-Young', 'Hei', 'Hei-Ran', 'Ho', 'Ho-Sook', 'Hwa-Young', 'Hye', 'Hyo', 'Hyo-Sonn', 'Hyun', 'Hyun-Ae', 'Hyun-Ok', 'In', 'Iseul', 'Ja', 'Ji', 'Jin', 'Joo', 'Ai', 'An', 'Anh', 'Be', 'Bian', 'Bich', 'Binh', 'Cam', 'Canh', 'Chau', 'Chi', 'Dao', 'Diep', 'Diu', 'Doan Vien', 'Dong', 'Giang ', 'Ha', 'Hai', 'Han', 'Hang', 'Hanh Phuc', 'Hien', 'Hoa', 'Hong', 'Hong Hanh', 'Hong Yen', 'Hue', 'Hung', 'Huong ', 'Huyen', 'Hyunh', 'Ket Nien', 'Khanh', 'Kieu', 'Kim', 'Kim Cuc', 'Kim-Ly', 'Lam', 'Lan', 'Lang', 'Lanh', 'Le', 'Le ', 'Lien', 'Lieu', 'Linh', 'Loan', 'Mai', 'My', 'Nam Ha', 'Ngoc', 'Ngoc Bich', 'Ngu', 'Ngu ', 'Nguyet', 'Nhu', 'Nhung', 'Nu ', 'Phuong', 'Quy', 'Quyen', 'Sang', 'Suong', 'Tam', 'Tan', 'Tham', 'Thanh', 'Thanh Ha', 'Thao', 'Thi', 'Thi ', 'Thien ', 'Thom', 'Thu', 'Thuy', 'Tien', 'Trinh', 'Truc', 'Tuyen', 'Tuyet', 'Uoc', 'Van', 'Viet', 'Xuan', 'Yen', 'Ah Cy', 'Ah Kum', 'Ah Lam', 'Ai', 'An', 'Bao', 'Baozha', 'Baozhai', 'Bik', 'Biyu', 'Bo', 'Changchang', 'Changying', 'Chao-xing', 'Chenguang', 'China', 'Chow', 'Chu Hua', 'Chu hua', 'Chun', 'Chunhua', 'Chuntao', 'Chyou', 'Cuifen', 'Da Chun', 'Da-Xia', 'Dai-tai', 'Daiyu', 'Dandan', 'Dongmei', 'Ehuang', 'Eu-funh', 'Eu-meh', 'Fang', 'Far ', 'Fenfang', 'Fung', 'Guan-yin', 'Hong', 'Howin', 'Hu', 'Hua', 'Hualing', 'Huan', 'Huian', 'Huidai', 'Huifang', 'Huifen', 'Huilang', 'Huiliang', 'Huiqing', 'Huizhong', 'Hwei-ru', 'Jia', 'Jiahui', 'Jiao', 'Jiayi', 'Jiaying', 'Jie', 'Jing', 'Jingfei', 'Jinghua', 'Ju', 'Juan', 'Jun', 'Kuai', 'Kue', 'Kwong', 'Lan', 'Lanfen', 'Lanying', 'Lee', 'Li', 'Li hua', 'Lian', 'Lien', 'Lien hua', 'Lifen', 'Lihua', 'Lihwa', 'Lijuan', 'Liling', 'Lin', 'Ling', 'Linh', 'Linqin', 'Liqiu', 'Liu', 'Lixue', 'Luli', 'Mani', 'Meh-e', 'Meh-funh', 'Mei', 'Meifen', 'Meifeng', 'Meihui', 'Meili', 'Meilin', 'Meirong', 'Meixiang', 'Meixiu', 'Meiying', 'Meizhen', 'Ming-hua', 'Mingxia', 'Mingyu', 'Mingzhu', 'Mu lan', 'Mu tan', 'Ning', 'Ninghong', 'Niu', 'Nuo', 'Nuwa', 'Peijing', 'Peizhi', 'Ping', 'Qianru', 'Qiao', 'Qiaohui', 'Qiaolian', 'Qing', 'Qingge', 'Qingling', 'Qingzhao', 'Qiu', 'Qiuyue', 'Renxiang', 'Rong', 'Rou', 'Rufen', 'Ruiling', 'Ruolan', 'Ruomei', 'Shaoqing', 'Sheu-fuh', 'Shihong', 'Shu', 'Shuang', 'Shuchun', 'Shun', 'Song', 'Suyin', 'Sya', 'Sying', 'Tao', 'Te', 'Ting', 'Tu', 'Ushi', 'Weici', 'Wen', 'Wenling', 'Wenqian', 'Wenquian', 'Xia', 'Xiang', 'Xiaodan', 'Xiaofan', 'Xiaohui', 'Xiaojian', 'Xiaojing', 'Xiaoli', 'Xiaolian', 'Xiaoling', 'Xiaoqing', 'Xiaosheng', 'Xiaotong', 'Xiaowen', 'Xiaozhi', 'Xifeng', 'Xingjuan', 'Xiu', 'Xiu Mei', 'Xiulan', 'Xiurong', 'Xiuying', 'Xue', 'Xueman', 'Ya', 'Yan', 'Yang', 'Yanlin', 'Yanmei', 'Yanyu', 'Yenay', 'Yet Kwai ', 'Yin', 'Ying', 'Yingtai', 'Yow', 'Yu', 'Yu-jun', 'Yuan', 'Yubi', 'Yue', 'Yuehai', 'Yueqin', 'Yuet', 'Yuk', 'Yuke', 'Yuming', 'Yun', 'Yunru', 'Yusheng', 'Yuying', 'Yuzhen', 'Zhaohui', 'Zhen', 'Zhenzhen', 'Zhilan', 'Zhu', 'Zi', 'Zongying'];
  const nm3 = ['Ale', 'Autumn', 'Bear', 'Brew', 'Cloud', 'Eagle', 'Elder', 'Fire', 'Frost', 'Gentle', 'Iron', 'Lake', 'Lightning', 'Lotus', 'Night', 'Rain', 'Shifting', 'Silent', 'Silver', 'Snow', 'Soft', 'Spring', 'Stone', 'Summer', 'Tea', 'Tender', 'Thunder', 'White', 'Wild', 'Wind', 'Winter'];
  const nm4 = ['belly', 'bloom', 'breeze', 'brow', 'brush', 'claw', 'drift', 'fall', 'flower', 'foot', 'fur', 'heart', 'hoe', 'kettle', 'light', 'master', 'paw', 'petal', 'runner', 'scroll', 'shadow', 'sky', 'spear', 'step', 'stone', 'strike', 'sword', 'walker'];


  i = Math.floor(Math.random() * 10);
  {
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd3]}${nm4[rnd4]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd3]}${nm4[rnd4]}`;
    }
    return names;
  }
}
