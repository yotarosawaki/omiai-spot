// IBJ推奨フォトスタジオ（東京都）— IBJ加盟店ページ「提携のIBJ推奨フォト」より 2026-11-19 時点
// reg = 通常価格（税込）。IBJ会員価格はここに書かない（private/member-prices.json → 暗号化して member-prices.enc.js） / g = 対象（W:女性 M:男性 A:男女共通）
// hm = ヘアメイク（F:フルメイク P:ポイントメイク・お直し H:ヘアのみ N:なし） / loc = ロケ撮影あり / cuts = 修整付きデータ枚数
window.STUDIO_DATA_DATE = "2026-11-19";
window.STUDIOS = [
  { id: "selfit-shinjuku", name: "セルフィット 東京新宿スタジオ", area: "新宿", lat: 35.6905, lng: 139.6990,
    access: "新宿駅 各線より徒歩5分", catch: "婚活撮影 年間19,000人以上のIBJグループスタジオ。3大保証（返金・再撮影・再修整）",
    plans: [
      { name: "IBJフォトプラン（女性）", g: "W", reg: 31400, hm: "P", cuts: 2, loc: false, note: "上半身2ポーズ（背景違い）・修整データ2カット。土日祝は+1,500円" },
      { name: "IBJフォトプラン（男性）", g: "M", reg: 28400, hm: "P", cuts: 2, loc: false, note: "上半身2ポーズ（背景違い）・修整データ2カット。土日祝は+1,500円" }
    ] },
  { id: "selfit-yaesu", name: "セルフィット 東京八重洲口スタジオ", area: "東京・京橋", lat: 35.6787, lng: 139.7706,
    access: "JR東京駅 徒歩約7分／銀座線 京橋駅 徒歩約1分", catch: "婚活撮影 年間19,000人以上のIBJグループスタジオ。3大保証付き",
    plans: [
      { name: "IBJフォトプラン（女性）", g: "W", reg: 31400, hm: "P", cuts: 2, loc: false, note: "上半身2ポーズ（背景違い）・修整データ2カット。土日祝は+1,500円" },
      { name: "IBJフォトプラン（男性）", g: "M", reg: 28400, hm: "P", cuts: 2, loc: false, note: "上半身2ポーズ（背景違い）・修整データ2カット。土日祝は+1,500円" }
    ] },
  { id: "728-ginza", name: "スタジオ728 銀座店", area: "銀座・有楽町", lat: 35.6716, lng: 139.7640,
    access: "地下鉄 銀座駅C6／JR有楽町駅 徒歩5分", catch: "更衣室あり。データは当日お渡し",
    plans: [
      { name: "オリジナル撮影パック（ヘアメイクあり）", g: "A", reg: 19800, hm: "P", cuts: 2, loc: false, note: "婚活ヘア＆ポイントメイク・美肌仕上げ・データ2カット" },
      { name: "オリジナル撮影パック（ヘアメイクなし）", g: "A", reg: 14300, hm: "N", cuts: 2, loc: false, note: "美肌仕上げ・データ2カット" },
      { name: "【ロケ】撮影パック（ヘアメイクあり）", g: "A", reg: 33000, hm: "P", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" },
      { name: "【ロケ】撮影パック（ヘアメイクなし）", g: "A", reg: 26400, hm: "N", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" }
    ] },
  { id: "728-shibuya", name: "スタジオ728 渋谷店", area: "渋谷", lat: 35.6590, lng: 139.7010,
    access: "渋谷駅 徒歩5分", catch: "更衣室あり。データは当日お渡し",
    plans: [
      { name: "オリジナル撮影パック（ヘアメイクあり）", g: "A", reg: 19800, hm: "P", cuts: 2, loc: false, note: "婚活ヘア＆ポイントメイク・美肌仕上げ・データ2カット" },
      { name: "オリジナル撮影パック（ヘアメイクなし）", g: "A", reg: 14300, hm: "N", cuts: 2, loc: false, note: "美肌仕上げ・データ2カット" },
      { name: "【ロケ】撮影パック（ヘアメイクあり）", g: "A", reg: 33000, hm: "P", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" },
      { name: "【ロケ】撮影パック（ヘアメイクなし）", g: "A", reg: 26400, hm: "N", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" }
    ] },
  { id: "728-shinjuku", name: "スタジオ728 新宿店", area: "新宿", lat: 35.6862, lng: 139.6975,
    access: "JR新宿駅 南口 徒歩10分", catch: "更衣室あり。データは当日お渡し",
    plans: [
      { name: "オリジナル撮影パック（ヘアメイクあり）", g: "A", reg: 19800, hm: "P", cuts: 2, loc: false, note: "婚活ヘア＆ポイントメイク・美肌仕上げ・データ2カット" },
      { name: "オリジナル撮影パック（ヘアメイクなし）", g: "A", reg: 14300, hm: "N", cuts: 2, loc: false, note: "美肌仕上げ・データ2カット" },
      { name: "【ロケ】撮影パック（ヘアメイクあり）", g: "A", reg: 33000, hm: "P", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" },
      { name: "【ロケ】撮影パック（ヘアメイクなし）", g: "A", reg: 26400, hm: "N", cuts: 3, loc: true, note: "ロケ撮影・データ3カット（納品約3日）" }
    ] },
  { id: "luff", name: "ヘアメイク＆フォトスタジオ Luff", area: "六本木", lat: 35.6634, lng: 139.7317,
    access: "日比谷線／大江戸線 六本木駅 徒歩1分", catch: "全データお渡し。スタジオ＋ロケの組み合わせも可能",
    plans: [
      { name: "ヘアメイク付きスタジオ撮影", g: "A", reg: 19500, hm: "F", cuts: 2, loc: false, note: "2ポーズ・全データ渡し。男性は15,500円" },
      { name: "スタジオ撮影（ヘアメイクなし）", g: "A", reg: 18000, hm: "N", cuts: 2, loc: false, note: "2ポーズ・全データ渡し・修整2カットまで無料" },
      { name: "ヘアメイク付きロケ撮影", g: "A", reg: 26500, hm: "F", cuts: 2, loc: true, note: "ロケーション撮影（上半身）" },
      { name: "ヘアメイク付きスタジオ＆ロケ撮影", g: "A", reg: 38000, hm: "F", cuts: 2, loc: true, note: "スタジオ2ポーズ＋ロケ（上半身・全身）" },
      { name: "メイクレクチャー付きスタジオ撮影", g: "A", reg: 39500, hm: "F", cuts: 2, loc: false, note: "お見合い向けメイクをプロが提案（施術2時間）" }
    ] },
  { id: "agarl", name: "メイクアップサロン アガール", area: "南青山", lat: 35.6702, lng: 139.7178,
    access: "外苑前駅 徒歩1分／青山一丁目駅 徒歩5分", catch: "黄金比メイクで自信UP。レンタル衣装完備、元モデルの女性フォトグラファー",
    plans: [
      { name: "黄金比メイク＆フォトプラン", g: "A", reg: 22000, hm: "F", cuts: null, loc: false, note: "平日は1,000円オフ" },
      { name: "黄金比メイクレッスン＆フォトプラン", g: "A", reg: 33000, hm: "F", cuts: null, loc: false, note: "メイクレッスン付き。平日は1,000円オフ" }
    ] },
  { id: "bestscene", name: "BESTSCENE Hairmake&Photo Studio", area: "有楽町", lat: 35.6748, lng: 139.7625,
    access: "JR有楽町駅 徒歩1分", catch: "人気店。データ当日お渡し",
    plans: [
      { name: "女性スタンダードプラン（60分）", g: "W", reg: 22000, hm: "P", cuts: 2, loc: false, note: "ポイントメイク・ヘアセット・2〜3ポーズ・修整データ2カット" },
      { name: "男性スタンダードプラン（60分）", g: "M", reg: 22000, hm: "P", cuts: 2, loc: false, note: "メイク・ヘアスタイリング・眉カット・修整データ2カット" },
      { name: "撮影のみプラン（30分）", g: "A", reg: 22000, hm: "N", cuts: 2, loc: false, note: "ヘアメイクなし・修整データ2カット" }
    ] },
  { id: "starmaker-shibuya", name: "スターメーカースタジオ 渋谷店", area: "渋谷", lat: 35.6585, lng: 139.7030,
    access: "渋谷駅より徒歩5分", catch: "IBJSを分析した専任フォトグラファーがトータルプロデュース",
    plans: [
      { name: "好印象♪女性写真プラン", g: "W", reg: 35000, hm: "F", cuts: null, loc: false, note: "上半身・全身混合可・フルメイク・ヘアアレンジ・好印象仕上げ" },
      { name: "好印象♪男性写真プラン", g: "M", reg: 31500, hm: "P", cuts: null, loc: false, note: "上半身・全身混合可・好印象仕上げ" },
      { name: "ヘアカット付撮影プラン（女性）", g: "W", reg: 25500, hm: "F", cuts: null, loc: false, note: "ヘアカット＋フルメイク＋撮影" },
      { name: "ヘア＆眉カット付撮影プラン（男性）", g: "M", reg: 25000, hm: "P", cuts: 3, loc: false, note: "ヘアカット・眉カット・メンズメイク（期間限定価格）" }
    ] },
  { id: "starmaker-shinjuku", name: "スターメーカースタジオ 新宿店", area: "西新宿", lat: 35.6905, lng: 139.6925,
    access: "西新宿駅／都庁前駅C8出口 直結", catch: "会員様・仲人様 撮影可能スタジオ",
    plans: [
      { name: "IBJ女性プラン", g: "W", reg: 16500, hm: "F", cuts: 3, loc: false, note: "フルメイク＋撮影" },
      { name: "IBJ男性プラン", g: "M", reg: 13000, hm: "P", cuts: 3, loc: false, note: "メンズメイク＋撮影" }
    ] },
  { id: "malu", name: "Malu", area: "恵比寿", lat: 35.6467, lng: 139.7090,
    access: "JR恵比寿駅 西口／日比谷線 恵比寿駅 徒歩1分", catch: "人気店。10カットをCD-Rでお渡し、一緒にベストショットを選定",
    plans: [
      { name: "ベーシック男性プラン", g: "M", reg: 25300, hm: "P", cuts: 1, loc: false, note: "ヘアセット・簡単メイク・約80分。10カットデータ渡し" },
      { name: "男性お得プラン（修整2枚）", g: "M", reg: 28600, hm: "P", cuts: 2, loc: false, note: "約90分。10カットデータ渡し" },
      { name: "女性ポイントメイクプラン", g: "W", reg: 29700, hm: "P", cuts: 1, loc: false, note: "ヘアセット・手直しメイク・約90分" },
      { name: "女性フルメイクプラン", g: "W", reg: 33000, hm: "F", cuts: 1, loc: false, note: "ヘアセット・フルメイク・約2時間" },
      { name: "女性フルメイクお得プラン（修整2枚）", g: "W", reg: 36300, hm: "F", cuts: 2, loc: false, note: "フルメイク・修整2カット" }
    ] },
  { id: "aora", name: "スタジオアオラ", area: "渋谷", lat: 35.6595, lng: 139.7045,
    access: "渋谷駅 徒歩3分", catch: "より本質を目指した婚活写真",
    plans: [
      { name: "ロケーションプラン（フルヘアメイク＋修整）", g: "A", reg: 30450, hm: "F", cuts: 3, loc: true, note: "男女共通" },
      { name: "スタジオプラン（フルヘアメイク＋修整）", g: "A", reg: 26400, hm: "F", cuts: 3, loc: false, note: "男女共通" },
      { name: "撮影＋美肌修整プラン", g: "A", reg: 22350, hm: "N", cuts: 3, loc: false, note: "男女共通・ヘアメイクなし" }
    ] },
  { id: "timecolors", name: "TIME COLORS", area: "渋谷・原宿", lat: 35.6640, lng: 139.7050,
    access: "JR渋谷駅 宮益坂口 徒歩10分／明治神宮前駅 徒歩7分", catch: "自然光の入るスタジオで「会ってみたい」と思わせる写真",
    plans: [
      { name: "女性プラン（メイクお直し・ヘアセット）", g: "W", reg: 22000, hm: "P", cuts: 1, loc: false, note: "データ2カット（うち1カット修整）" },
      { name: "男性プラン（メイク・ヘアセット）", g: "M", reg: 22000, hm: "P", cuts: 1, loc: false, note: "データ2カット（うち1カット修整）" },
      { name: "女性 外ロケ フルメイクプラン", g: "W", reg: 31900, hm: "F", cuts: 1, loc: true, note: "スタジオ2カット＋ロケ1カット" }
    ] },
  { id: "omotesando-studio", name: "表参道ステューディオ", area: "表参道・原宿", lat: 35.6680, lng: 139.7060,
    access: "原宿駅／明治神宮前駅 徒歩5分", catch: "土日祝も追加料金なし。修整データ4カット",
    plans: [
      { name: "IBJレディスプラン", g: "W", reg: 25300, hm: "F", cuts: 4, loc: false, note: "2ポーズ・背景セレクト・土日祝追加料金なし" },
      { name: "IBJレディス・ロケーションプラン", g: "W", reg: 31900, hm: "F", cuts: 4, loc: true, note: "ヘアメイクがロケに同行" },
      { name: "IBJメンズプラン", g: "M", reg: 19800, hm: "P", cuts: 4, loc: false, note: "2ポーズ・背景セレクト" },
      { name: "IBJメンズ・ロケーションプラン", g: "M", reg: 26400, hm: "F", cuts: 4, loc: true, note: "ヘアメイクがロケに同行" }
    ] },
  { id: "tenstudio", name: "テンスタジオ", area: "千駄木", lat: 35.7255, lng: 139.7630,
    access: "千代田線 千駄木駅 徒歩1分", catch: "タレント撮影の技術で個性を引き出す。屋外ロケ追加料金なし",
    plans: [
      { name: "【女性】IBJ割引プラン", g: "W", reg: 19800, hm: "P", cuts: 1, loc: false, note: "クイックヘア＆メイク・簡易修整・1ポーズ" },
      { name: "【男性】IBJ割引プラン", g: "M", reg: 19800, hm: "P", cuts: 1, loc: false, note: "クイックヘア＆メイク・簡易修整・1ポーズ" }
    ] },
  { id: "stylish-aoyama", name: "STYLISH aoyama", area: "青山", lat: 35.6705, lng: 139.7165,
    access: "銀座線 外苑前駅 徒歩5分", catch: "アーティスト集団による魅せ方提案型ハウススタジオ。全データお渡し",
    plans: [
      { name: "フランプラン", g: "A", reg: 25300, hm: "P", cuts: 2, loc: false, note: "20分撮影・洋服1着・約60分" },
      { name: "グランプラン", g: "A", reg: 29800, hm: "P", cuts: 2, loc: false, note: "40分撮影・洋服2着まで・L判プリント付" },
      { name: "プレミアムセッション", g: "A", reg: 38500, hm: "F", cuts: 2, loc: false, note: "60分撮影・着替え自由・L判4枚・約120分" }
    ] },
  { id: "united", name: "UNITED 表参道スタジオ", area: "表参道", lat: 35.6655, lng: 139.7120,
    access: "表参道駅 A1出口 徒歩2分", catch: "広告・ファッション誌の撮影チームが手がける婚活写真",
    plans: [
      { name: "IBJ-R（レギュラー）コース", g: "A", reg: null, hm: "N", cuts: null, loc: true, note: "ファミリーCMのような自然な笑顔。晴天時は表参道でストリート撮影" },
      { name: "IBJ-W（白背景）コース", g: "A", reg: null, hm: "N", cuts: null, loc: false, note: "ストロボで明るく。ファッション誌のレタッチャーが監修" }
    ] },
  { id: "banpro", name: "バンプロ写真事務所", area: "江戸川橋", lat: 35.7090, lng: 139.7330,
    access: "有楽町線 江戸川橋駅 徒歩4分", catch: "外ロケーション撮影が無料",
    plans: [
      { name: "おまかせプラン", g: "A", reg: 18480, hm: "P", cuts: 1, loc: false, note: "メイク直し・簡単ヘアセット・1ポーズ1カット（外ロケ無料）" },
      { name: "平日プラン（ヘアメイクなし）", g: "A", reg: 18480, hm: "N", cuts: 1, loc: false, note: "平日限定・1ポーズ1カット" }
    ] },
  { id: "dearlogue", name: "DEAR－LOGUE 下北沢店", area: "下北沢", lat: 35.6614, lng: 139.6680,
    access: "下北沢駅 徒歩1分", catch: "個室美容室。ヘアカット＆セット込みのプランが好評",
    plans: [
      { name: "【メンズ限定】ヘアカット＋眉カット＋撮影", g: "M", reg: 18000, hm: "H", cuts: null, loc: false, note: "ヘアカット・眉カット・ヘアセット込み" }
    ] }
];
