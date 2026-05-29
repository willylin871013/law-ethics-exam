// 考古題資料庫 — 民國100-114年，司法官/律師第一試法律倫理（第61-75題）
// 資料來源：考選部歷屆試題（透過 lawplayer.com 整理）

const QUESTIONS = [
  {
    id: 100061,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "以下敘述，何者錯誤？",
    options: [
      "A. 法官、檢察官及律師等之倫理規範，為專業倫理規範，具有類法律之拘束力，兼具實證道德及法規之性質，屬於正式的社會控制機制之一種，並非無強制力之純粹道德守則",
      "B. 法官、檢察官及律師等法律工作者間，因為分工不同，適用之法律倫理規則或有若干差異，但論及追求法治、維護人權、實現公平正義等核心價值，則無二致",
      "C. 擔任法官、檢察官及律師等法律工作者，必須具備之條件、資格雖然與其他職業有所不同，但所享有之權利及承擔之義務與責任，則與一般人民無異，如無法律明確之規定或授權，主管機關、同業團體或公會皆不得對法律工作者之基本權利施予任何限制，以符平等原則及法律保留原則",
      "D. 法官、檢察官及律師等法律工作者，應超然於國家、社會與多數價值之上，保有一定之自主性與獨立性，並且對於關懷弱勢者有特別之使命感"
    ],
    answer: "C",
    keywords: ["道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 100062,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "關於「律師倫理規範」，下列敘述何者錯誤？",
    options: [
      "A. 其以「律師法」為法源依據",
      "B. 由各地方律師公會訂立之",
      "C. 其訂立依法須報請法務部備查",
      "D. 違反「律師倫理規範」可能構成律師懲戒之事由"
    ],
    answer: "B",
    keywords: ["律師懲戒"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 100063,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "下列敘述，何者與法律倫理有所扞格？",
    options: [
      "A. 法官得管理自己所有及與家庭成員共有之財產，亦得進行投資，並得兼任以營利為目的之事業或團體之職務或經營商業",
      "B. 法官應避免與律師、案件的當事人有財務往來。但該當事人為金融機構且其交易係正當者，不在此限",
      "C. 法官應阻止家庭成員從事看似利用法官職務之交易行為",
      "D. 法官應儘量避免金錢借貸、邀集或參與合會、擔任財物或身分之保證人"
    ],
    answer: "A",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 100064,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "下列何者行為，未違反法官倫理？",
    options: [
      "A. 甲法官心儀某電視台主播，乃利用司法院提供之相關查詢系統查詢該主播住家等資訊",
      "B. 乙法官於某網路交友網站自稱為律師，同時與二位網友發生性關係",
      "C. 單身之丙法官前往某合法立案之婚友社，未隱瞞自己身分，而由該婚友社安排數位異性進行聯誼",
      "D. 丁法官未依相關規定申請許可及請假，赴大陸地區攻讀博士學位"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 100065,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "高等法院檢察署至地方法院檢察署進行業務檢查，發現檢察官甲有一件案件，已逾二年尚未結案，請檢察官甲說明理由。下列那一種狀況理由妥適？",
    options: [
      "A. 甲：因係醫療糾紛案件，已將相關資料送請行政院衛生署進行審議鑑定尚未完成鑑定，每季定期函詢行政院衛生署鑑定進度，故無法結案",
      "B. 甲：因前一年颱風來襲，地方法院檢察署贓物庫淹水，導致該案之證物滅失，無法鑑定取證，為保障被告權益，故暫不結案",
      "C. 甲：因該案件之犯罪是否成立，應以民事法律關係為斷，因當事人就民事法律關係，已於前一年在法院進行民事訴訟，所以依刑事訴訟法第261 條規定，停止偵查，因法院已許久未通知，目前尚不知法院民事訴訟進行狀況，故尚未偵結案件",
      "D. 甲：因該案件太複雜，暫無從下手，且伊有許多案件，故先進行其他案件，以免耽誤其他案件之進行，故尚未結案"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 100066,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "公訴檢察官甲於審判期日在法庭內實行公訴調查證據程序時，從卷證資料發現其父親係未經起訴之共犯，而案件即將辯論終結，法院亦未發現。甲下列那一項處置方式，符合法律倫理？",
    options: [
      "A. 基於職責，當庭依法追加起訴其父親，並向法院聲請另定期日，並於後續審判期日，公正無私的堅守崗位，依法完成該案之審判程序",
      "B. 應即向法院釋明發現其父親為同案共犯，聲請另定期日，並於退庭後即向所屬檢察長聲請迴避承辦上開公訴案件",
      "C. 基於親情與人性考量，且刑事訴訟法第180 條本即有親屬間得拒絕證言之規定，同時兼顧避免浪費司法資源，可不予告發",
      "D. 向法院聲請休庭，並立即通知其父親到庭接受調查，以完成審判程序"
    ],
    answer: "B",
    keywords: ["法官迴避"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 100067,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲檢察官參加電視談話性節目，並在節目中針對某地方法院檢察署正在偵辦之案件，發表評論，甲認為以其擔任多年檢察官之經驗，該案件如果對被告實施搜索，應可扣得相關證物，承辦檢察官未進行搜索，不符檢察實務經驗，如果不是檢察官辦案不力，就有可能係受到上級干預。請問，下列敘述，何者正確？",
    options: [
      "A. 檢察官應保持客觀中立，不應上傳播媒體發言，甲參加電視談話性節目，本身就不符法律倫理",
      "B. 甲並非案件之承辦檢察官，自可就他檢察官偵辦中之案件，依其經驗客觀評論，並無不合法律倫理",
      "C. 甲並非案件之承辦檢察官，故可對某地檢署偵辦中之案件，依其經驗，在電視上發表看法，但甲之評論，洩漏檢察官可能之偵查方向，所以不符法律倫理",
      "D. 檢察官於職務外，參加電視談話性節目，並無不可，但甲於節目中對他檢察官正在偵辦中之個案，發表評論，並推測該檢察官可能辦案不力或受上級干預，有損他人及機關形象，所以不符法律倫理"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 100068,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "下列何種行為違反律師倫理規範？",
    options: [
      "A. 律師甲曾任法官、庭長與檢察官等工作，其在事務所之招牌上標示具有豐富司法實務經驗",
      "B. 律師乙為推展業務，在個人部落格上傳存證信函範本，無償供網民存取參考，並在部落格上載明「如有問題，歡迎來電與律師乙討論。電話：09xxxxxxxx」",
      "C. 律師丙聘僱業務員赴法院推展業務",
      "D. 律師丁為臺中地方法院登錄之執業律師，其事務所新開幕時，則以該事務所之名義，致函臺中地區之工商團體，表示「本事務所設有法律服務中心，免費提供各界法律諮詢。本事務所謹訂於民國99 年3 月31 日早上11 時舉辦開幕茶會，敬邀您蒞臨參加。」"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 100069,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "在某債務糾紛中，兩造當事人分別僱A 律師事務所之律師和B 律師事務所之律師擔任訴訟代理人，在該案件進行當中，甲律師從A 事務所離職，轉到B 律師事務所任職。問甲律師能不能在B 律師事務所處理前述債務糾紛案件？",
    options: [
      "A. 要看甲律師在A 律師事務所有沒有接觸或承辦該案件，如果沒有的話，就可以在B 律師事務所承辦該案件。如果之前曾經有接觸，就不可以承辦該案",
      "B. 為了避免甲律師面對A 律師事務所之律師會不好意思，因此甲律師不能在B 律師事務所承接該案",
      "C. 不論甲律師在A 律師事務所時有沒有接觸或承接該案，既然甲律師已經退出A 律師事務所，自然可以承接該案",
      "D. 不管甲律師在A 律師事務所有無承接該案，甲律師均不得在B 律師事務所承接該案"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 100070,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "關於律師執行職務時，是否構成對於法院的矇蔽欺罔而違反律師倫理，下列敘述何者錯誤？",
    options: [
      "A. 於案件進行中，刑事被告之律師雖合理懷疑被告之陳述可能不實，但仍然得向法院提出之",
      "B. 於案件進行中，刑事被告之律師不得在明知被告的陳述不實的情況下，仍然故意向法院提出來誤導法院",
      "C. 於案件進行中，對於刑事被告之陳述以外的證據，律師經合理判斷為不實者，得拒絕提出之",
      "D. 於案件進行中，律師得協助被告與證人做開庭準備，提供不實腳本讓他們統一口徑與說詞"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 100071,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "下列何種行為不違反律師倫理規範？",
    options: [
      "A. 律師甲於民國98 年2 月以前，在臺中地方法院擔任書記官一職，其在民國99 年考上律師，於受完律訓後，隨即於同年12 月在臺中地方法院辦理登錄，並於民國100 年2 月接受一宗車禍案件之委託，擔任被告之訴訟代理人，為被告就系爭案件在臺中地方法院執行辯護人之職務",
      "B. 律師乙知其所聘請法務助理中之一人丙，在地方法院民事執行處任職執達員，但仍聘任丙擔任助理工作長達三年以上",
      "C. 律師丁於民國95 年任職嘉義地方法院法官，後個人因素離職轉任律師工作，於臺南設立事務所，並分別於高雄、臺南及嘉義登錄執業，民國99 年受當事人A 委託處理嘉義地方法院管轄之土地登記訴訟，律師丁因業務繁忙之故，乃將此事件複委任律師戊執行訴訟代理人之職務",
      "D. 律師己與律師庚為夫妻，各自在臺北和桃園開設事務所執行律師業務。在一宗車禍案件中，二位律師分別接受兩造當事人之委託，在知悉雙方分別受同一案件對立當事人委託之情事後，兩位律師仍然續行職務"
    ],
    answer: "C",
    keywords: ["忠誠義務", "委任關係", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 100072,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "律師甲代理之A 公司與律師乙代理之B 公司於法院進行訴訟中，甲交待其秘書凡呈交法院之文件均應寄送一份副本給乙。案件進行中，甲判斷此案難以獲勝，故撰一法律意見書給A 公司，並建議A公司應儘量尋求和解。甲之秘書將該意見書寄交A 公司，並同時製作副本給乙，乙乃全盤知悉甲之策略。問甲有無違反律師倫理規範？",
    options: [
      "A. 不違反，因係甲之秘書所為，且未必對A 公司造成損害",
      "B. 已違反，因為甲疏忽未交待其秘書，此法律意見書並非書狀，故不必寄對方律師",
      "C. A 公司如能證明因甲之秘書誤交文件給B 而導致A 之損失，甲則即應負違反倫理規範之責",
      "D. 已違反，不論甲有無交待秘書，其秘書之行為對當事人不利，甲即應負責"
    ],
    answer: "B",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第72題",
    explanation: "官方更正答案：B 或 D 或 BD 均給分。"
  },
  {
    id: 100073,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "關於律師依法應迴避辦理訴訟事件之情形，下列敘述何者錯誤？",
    options: [
      "A. 倘若律師甲的外甥的配偶乙為A 地方法院之院長，則甲不得在A 法院辦理訴訟事件",
      "B. 倘若律師甲的媽媽的堂哥乙為A 地方法院檢察署之檢察長，則甲不得在A 法院辦理訴訟事件",
      "C. 倘若律師甲的阿姨的孫子乙為偵辦某刑事案件的司法警察，則甲不得擔任該刑事案件被告的辯護人",
      "D. 倘若律師甲為法官轉任，且其自A 法院離職僅四年，則甲不得於A 法院執行律師職務"
    ],
    answer: "D",
    keywords: ["忠誠義務", "法官迴避", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 100074,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲檢察官之夫在美工作，甲懷孕，請假未經機關首長簽准，即赴美產子。經機關首長予以書面警告，甲不服，私下以假案號查詢同署各檢察官之出入境資料。試問甲前述各行為何者違反檢察官倫理？",
    options: [
      "A. 赴美產子、請假未簽准、私下查詢其他檢察官出入境資料均違反",
      "B. 請假未簽准、私下查詢其他檢察官出入境資料違反，但赴美產子未違反",
      "C. 私下查詢其他檢察官出入境資料部分違反，其他未違反",
      "D. 赴美產子、請假未簽准、私下查詢其他檢察官出入境資料三項均不違反"
    ],
    answer: "B",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第74題",
    explanation: "2. 底層邏輯\n檢察官之行為倫理涉及多個層次：\n（一）基本人權：赴美產子屬個人生育自由，為憲法保障之基本權利，不因檢察官身分而被剝奪。\n（二）行政管理：請假應依規定程序辦理，未經簽准即離開職務，違反行政管理秩序。\n（三）濫用職權：以假案號查詢他人出入境資料，係利用職務之便為私人目的蒐集個人資料，嚴重違反個資保護與職權行使之正當性。\n\n因此，「赴美產子」本身不違反倫理，但「請假未簽准」與「私下查詢他人出入境資料」均違反。\n\n3. 逐選項拆解\n(A) 錯。赴美產子屬個人生育自由之行使，為基本人權保障範圍，不因檢察官身分而當然違反倫理。\n\n(B) 對。請假未簽准與私下查詢出入境資料違反，赴美產子未違反。未經簽准即出國，違反職務紀律；以假案號查詢他人個資，則是利用公務系統為私人目的，構成濫用職權。\n\n(C) 錯。此選項忽略「請假未簽准」亦屬違反。出國目的正當，不代表程序違反可被吸收。\n\n(D) 錯。未經核准請假及濫用公務系統查詢個資，均為明確之倫理違反行為。\n\n4. 陷阱標記\n(A) 把「赴美產子」包裝成倫理違反，容易讓考生誤以為檢察官赴美產子有損形象。\n(C) 只抓到「假案號查詢」的嚴重性，卻漏掉請假程序本身也有職務紀律問題。\n\n5. 關聯知識網\n公務人員請假規則：公務員出國應依規定請假並經核准。\n個人資料保護法：公務機關蒐集個資應於特定目的範圍內為之。\n檢察官倫理規範：檢察官應遵守職務紀律與行政管理規定，不得濫用職權。\n憲法第22條：人民其他自由及權利，包括生育自由。\n\n6. 秒殺技\n三行為分別判斷：赴美產子是基本權，不違反；未簽准是程序違反；假案號查詢是濫用職權。兩項違反、一項不違反，直接對應 (B)。"
  },
  {
    id: 100075,
    year: 100,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "甲律師與乙法官係大學同學，甲因其委任人丙之刑事案件刻由乙審理中，甲乙之大學同學丁以電話邀約甲、乙及其他三位大學同學聚餐。問：下列敘述，何者正確？",
    options: [
      "A. 甲雖與乙無特殊恩怨關係，基於利益衝突，原則上應拒絕丙之委任",
      "B. 乙雖與甲無特殊恩怨關係，就該案件已具迴避事由",
      "C. 乙接受丁邀約，到場後，發現甲刻意談及系爭個案，亦毋須離席",
      "D. 甲允諾丁之邀宴，即使知道乙亦接受邀約，甲之允諾赴宴並未違反律師倫理"
    ],
    answer: "D",
    keywords: ["利益衝突", "委任關係", "法官迴避"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/100-comprehensive-law-1-criminal",
    sourceNote: "100年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 101061,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於律師懲戒制度，下列敘述，何者錯誤？",
    options: [
      "A. 律師懲戒委員會之委員係無給職",
      "B. 律師懲戒委員會之委員須具有律師資格",
      "C. 律師懲戒委員會召開評議會時，應通知被付懲戒人到會陳述意見",
      "D. 評議會應有委員三分之二以上之出席，始得開會"
    ],
    answer: "B",
    keywords: ["律師懲戒"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 101062,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "有關律師懲戒，下列敘述何者錯誤？",
    options: [
      "A. 律師應付懲戒者，地方法院檢察署得依職權送請律師懲戒委員會處理",
      "B. 律師辦理商標、專利事務應付懲戒者，得由經濟部送請律師懲戒委員會處理",
      "C. 律師應付懲戒者，律師公會得經理事、監事聯席會議之決議，送請律師懲戒委員會處理",
      "D. 律師懲戒委員會設置於律師公會全國聯合會之下，基於律師專業自律之精神自行懲戒"
    ],
    answer: "D",
    keywords: ["律師懲戒"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 101063,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "律師法第28 條規定，律師不得矇蔽或欺誘法院。下列何者情形並不牴觸該規定？",
    options: [
      "A. 律師受涉嫌妨害風化之理容院負責人之委任，企圖為其脫罪而教唆其與他人簽立不實之理容院讓渡書，謊稱其委任人早非該理容院之負責人",
      "B. 律師未依法律及公會章程之規定，於出庭時不穿著制服執行職務，矇蔽其有律師之身分",
      "C. 律師於看守所接見被告時，提示卷宗筆錄內容給被告知悉",
      "D. 律師明知其委任人之真正身分、及其以偽造之「林○○」身分證應訊，在刑事委任狀「被告或犯罪嫌疑人」欄，仍登載為「林○○」，以配合隱瞞委任人被通緝之事實"
    ],
    answer: "C",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 101064,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "依照律師法的規定，司法人員自離職之日起三年內，不得在其離職前三年內曾任職務之法院或檢察署執行律師職務。下列人士皆任職於法院：甲是法官，乙是書記官，丙是公證人，丁是法官助理，戊是法警，己是觀護人。請問上述規定的「司法人員」應包括那些人？",
    options: [
      "A. 甲、乙",
      "B. 甲、乙、丁",
      "C. 甲、乙、丙、丁",
      "D. 甲、乙、丙、丁、戊、己"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 101065,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "甲律師因為承辦A 的案件知悉A 有婚外情。官司結束後兩年，A 的婚外情被報章雜誌報導出來，B欲利用這件事情告A，並於訴訟中對A 有所主張，B 欲委任甲辦理，甲得否接受委任？",
    options: [
      "A. 因為該事證已經公開，且甲與A 的委任關係已經消滅，因此甲可以接受B 的委任",
      "B. 因為與A 委任關係消滅，甲已不受保密義務約束，不論該事實有無公開，甲均不受約束，可以接受B 的委任",
      "C. 保密義務是永久的，縱使該事實已經被揭露，甲仍不應該接受B 的委任",
      "D. 該事實雖涉及私德，甲仍不得接受B 的委任"
    ],
    answer: "一律給分",
    keywords: ["保密義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第65題",
    explanation: "官方更正答案：本題一律給分。"
  },
  {
    id: 101066,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲律師擔任刑事案件被告A 的辯護人，到看守所接見A，因為A 的女兒非常思念A，寫了一封慰問信給A，要求甲律師帶進去給A 看，甲律師應如何處理？",
    options: [
      "A. 應視內容是否與案情有關，如果只是平常慰問信就帶進去給A 看，如果有涉及案情的討論或涉及勾串共犯，就不可以帶進去",
      "B. 非經看守所核可，不可將信件帶進去交給A",
      "C. 因為只是家信，所以可以帶給A",
      "D. 告知看守所後，即可傳遞任何物品"
    ],
    answer: "B",
    keywords: ["忠誠義務", "誠信義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 101067,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲律師受A 委任辦理與對造B 的債務糾紛，A 提出一份收據給甲律師並告知這份文件是他請人變造的，但強烈要求甲提出該收據作為證據，問甲應如何處理？",
    options: [
      "A. 既然是當事人要求提出的證據，一定要提出於法院",
      "B. 審查該收據變造有無破綻，如果沒有破綻的話就可以提出，如果有破綻，就不應該提出",
      "C. 如果和案情有關就應該提出，如果和案情無關就不應該提出",
      "D. 既然甲律師明知文件為變造，應拒絕提出於法院"
    ],
    answer: "D",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 101068,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "檢察官甲接受電臺談話性節目邀請，數次上電臺談話性節目，針對社會矚目之偵查中個案發表專業看法。試問甲之行為是否違反檢察官倫理？",
    options: [
      "A. 如係利用公餘時間，且以私人身分應邀參加，不違反檢察官倫理",
      "B. 言論內容只要不涉及檢察官所承辦案件或其個人職務有關，即不違反檢察官倫理",
      "C. 檢察官本有維護法律制度健全發展之義務，本諸偵查業務經驗，對社會矚目案件發表專業看法，只要不涉及昧於事實之負面批評，如能導正民眾對法律正確看法，不違反檢察官倫理",
      "D. 檢察官對社會矚目案件發表專業看法，即使不涉及承辦案件或個人職務，仍屬有關職務之不當言論，違反檢察官倫理"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 101069,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲檢察官休假與家人前往韓國濟州島旅遊，巧遇詐欺案通緝犯之同鄉乙，相偕前往濟州島博弈場所小玩幾把，甲輸鉅款，乙先協助代墊，返國後，甲以被設計詐賭為由，賴帳不還。試問甲前述各行為何者違反檢察官倫理？",
    options: [
      "A. 賭債非債，甲賴帳屬民事糾紛，不違反檢察官倫理",
      "B. 濟州島為博弈勝地，小玩幾把無傷大雅，不違反檢察官倫理",
      "C. 與詐欺案通緝犯相偕賭博之舉，已違反檢察官倫理",
      "D. 國外巧遇同鄉，相偕賭博，乃人之常情，不違反檢察官倫理"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 101070,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "下列情形，何者不構成司法人員受懲戒之事由？",
    options: [
      "A. 透過關係人指導所承審案件之被告為訴訟行為",
      "B. 單純基於人情、未受金錢上之利益，為他人關說",
      "C. 基於親情，為自己之子女關說",
      "D. 基於親情，為自己子女提供法律意見"
    ],
    answer: "D",
    keywords: ["律師懲戒"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 101071,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "關於律師之行為，下列敘述何者正確？",
    options: [
      "A. 律師因已通過國家考試，可稱為法律專家，雖未曾修過任何破產法之課程，無特殊研究或實務經驗，亦可在名片上表示自己係破產法權威",
      "B. 律師在某一廣播節目上，以來賓身分，表明自己係律師，專長係民刑事訴訟程序，歡迎有法律疑難聽眾，撥打某一服務專線電話，此行為依目前規定，應無違反律師倫理",
      "C. 律師得以支付介紹人報酬方式，招攬業務",
      "D. 律師得聘僱業務人員推展業務，並約定基本薪資及抽成分紅比例"
    ],
    answer: "B",
    keywords: ["律師廣告", "律師酬金"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 101072,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "某日檢察官甲接到其大學同學乙律師之邀約，前往某日本料理店與其聚餐敘舊，問：下列關於檢察官倫理之敘述，何者正確？",
    options: [
      "A. 若甲在受邀約時知悉乙為甲現正承辦中某煙毒案被告之辯護人，但因係同窗之故，仍得前往參加此一聚餐",
      "B. 若甲到聚餐處，發現乙所邀朋友中有一現正為其所偵查中犯罪嫌疑人，此時，甲基於人情，仍可參與此一聚餐，待事後再向乙抱怨",
      "C. 若甲到聚餐處，發現乙所邀朋友中，有現正為其所偵查之犯罪嫌疑人，甲應即告退",
      "D. 甲係檢察官，對於律師之邀約，無論是否大學同學，均不應答應前往"
    ],
    answer: "C",
    keywords: ["忠誠義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 101073,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "律師甲受A 公司委任進行訴訟，雙方對案件之進行方式觀點不同，A 乃解任甲，並要求甲將所有卷宗移交另一律師乙。甲要求A 付清律師費並簽署切結書，承諾不主張甲於代理A 期間有任何執業不當情事，甲之請求是否有理？",
    options: [
      "A. 甲之要求係為保障律師合法權益，自屬有理",
      "B. 甲之要求有礙A 之權益，自屬無理",
      "C. 甲要求A 付清律師費之部分有理，甲要求A 簽署切結書之部分無理",
      "D. 甲要求A 付清律師費必須扣減其未完成之工作始有理，甲要求A 簽署切結書之部分無理"
    ],
    answer: "D",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 101074,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "法官、檢察官及律師關於財物之收受，下列敘述何者錯誤？",
    options: [
      "A. 法官不得就所承辦之事務收受任何餽贈。無關承辦事務之餽贈，於客觀上可能減損司法獨立、公正、中立、廉潔、正直者，法官亦不得收受",
      "B. 檢察官與有隸屬關係者、所辦理案件之當事人或其他利害關係人間，無論涉及職務與否，均不得受贈財物",
      "C. 律師就受任事件於未獲委任人之授權或同意前，不得無故逕與相對人洽議，亦不得收受相對人之報酬或餽贈",
      "D. 律師僅得依據公會所定標準，向委任人收費，不得明示其酬金數額或計算方法。但約定後酬者，不在此限"
    ],
    answer: "D",
    keywords: ["律師酬金", "風險代理費", "委任關係", "法官廉潔"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 101075,
    year: 101,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "下列敘述，何者合於法律倫理？",
    options: [
      "A. 法官於調查或出差時，得接受相關機關（構）茶點及食宿之接待",
      "B. 法官在處理私人事務時，無需刻意隱瞞自己之職務或工作，但是應該避免他人以為有藉法官身分牟利或受到優待的情形，尤其要避免運用法官的身分或職務為自己或第三人牟取私人利益",
      "C. 法官對於其他法官受理之個案發表公開意見，屬於個人言論自由之範疇，不受限制",
      "D. 法官不得為候選人拉票，但在辦公室內懸掛心儀之公職候選人旗幟、肖像，為法所不禁"
    ],
    answer: "B",
    keywords: ["藉身分謀私"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/101-comprehensive-law-1-criminal",
    sourceNote: "101年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 102061,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "下列何種情形，不構成司法人員懲戒之事由？",
    options: [
      "A. 對於依少年事件處理法第28 條第1 項所定，應依法製作裁定書送達，卻逕以宣示筆錄代之",
      "B. 於臨退休之際，將所有承辦未結案件之庭期改定於其退休日後",
      "C. 對於依法不得判處專科罰金之行為，僅判處罰金",
      "D. 審理程序中完全禁止辯護人詰問證人"
    ],
    answer: "A",
    keywords: ["忠誠義務", "律師懲戒", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 102062,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "下列何種行為，並未違反法官倫理或檢察官倫理？",
    options: [
      "A. 法官投資經營國家考試補習班",
      "B. 檢察官偵辦案件，應不受檢察總長、檢察長之指揮監督，得各自為之",
      "C. 檢察官以其薪資所得之一部分，投資共同基金",
      "D. 法官於下班之後，代親友撰寫訴狀並收取費用"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 102063,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "關於法官評論其他法官審判中個案的言論自由問題，下列敘述何者錯誤？",
    options: [
      "A. 法官發表評論時，應避免影響該個案承審法官之獨立性與公正性",
      "B. 法官發表評論時，應注意社會大眾對於司法公正性的信賴",
      "C. 法官應避免針對個案之事實認定及證據取捨做評論",
      "D. 法官評論其他法官審判中個案的言論自由，不應受到任何限制"
    ],
    answer: "D",
    keywords: ["司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 102064,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "以下敘述，何者錯誤？",
    options: [
      "A. 法官對於高標準之司法行為應以身作則，以增強公眾對於司法之信賴。公眾對於司法之信賴是維繫司法獨立之基礎",
      "B. 法官應確保其於法庭內外之行為，及參與職務內與職務外之一切活動，均足以維繫並促進公眾、法律專業人士及當事人對於法官及司法公正性之信賴",
      "C. 法官不得容許在法庭服務之職員及其他受法官指揮、監督之人藉職務之便，索取或收受任何餽贈及利益",
      "D. 為維繫法官公正客觀之形象，避免產生法官涉入政治之疑慮，法官不得公開發表或講授與現行法律有關之議題；亦不得參與任何形式之公聽會"
    ],
    answer: "D",
    keywords: ["委任關係", "司法獨立", "法官廉潔"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 102065,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "面對多元及進步的社會，不同專業領域類型之新興犯罪型態，應運而生，檢察官面對涉及相關專業領域犯罪，下列那一項做法，不符檢察官倫理？",
    options: [
      "A. 應隨時充實新知，參與各類專業知能講習或進修，提升本身辦案專業能力",
      "B. 因偵查不公開，可視案件類型，採行團隊辦案模式，除送請專業鑑定外，不宜讓專家參與辦案，以維持案件之中立與秘密",
      "C. 檢察署應建立專組辦案機制，檢察官應落實專組辦案，對於非其熟悉之專業案件，可陳請檢察長移轉他組承辦",
      "D. 檢察官對其承辦之專業案件，經偵查後所得出之心證與專家鑑定意見完全相反時，可以放棄其心證，改採專家之鑑定意見"
    ],
    answer: "B",
    keywords: ["保密義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 102066,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲為地方法院資深法官，其獨子於該地院轄區不慎駕車傷人，甲非承審法官，護子心切之甲，應如何抉擇，始不違背法官倫理？",
    options: [
      "A. 不涉及迴避等程序問題，甲當然可採取請託等一切手段，讓大事化小，小事化無，蓋護子乃人之常情",
      "B. 甲不應進行任何形式之關說或請託，以維護司法獨立",
      "C. 甲應儘量保持低調，但得讓法官同僚知道孩子涉案",
      "D. 甲代其子撰寫答辯狀，並表明為其代理人"
    ],
    answer: "B",
    keywords: ["法官迴避", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 102067,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "法官甲之配偶乙為律師，同住在法官甲之職務宿舍內。乙時常利用甲上班不在宿舍內之時間，在該宿舍內接見委任人。某甲發現上情，以如何處置為宜？",
    options: [
      "A. 若乙係利用其夫之身分、名望等牟取委任人之信賴，則應禁止乙在宿舍內接見委任人；若無此情形，即無禁止之必要",
      "B. 若乙受任處理之案件非其夫甲審理者，甲既毋庸迴避之，自無理由禁止乙在甲之宿舍內接見委任人；惟法官甲仍以避免在場為宜",
      "C. 若乙之委任人不知其處所為法官職務宿舍，則可接見之；倘乙事先已告知委任人其處所為法官職務宿舍，或委任人已自行知之者，則應禁止乙利用該處所接見委任人",
      "D. 放任乙在法官職務宿舍接見委任人，易使委任人及通情達理之旁觀者看來誤以為乙及其委任人可以在案件之處理上享有特別之待遇，不論事實上有無此不當情形，均不容許乙繼續利用宿舍接見委任人"
    ],
    answer: "D",
    keywords: ["誠信義務", "委任關係", "法官迴避"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 102068,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "律師法第37 條之1 規定：司法人員自離職之日起3 年內，不得在其離職前3 年內曾任職務之法院或檢察署執行律師職務。本規定所稱司法人員不包括：",
    options: [
      "A. 法官助理",
      "B. 書記官",
      "C. 司法事務官",
      "D. 法院政風人員"
    ],
    answer: "D",
    keywords: ["受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 102069,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "律師與當事人在委任關係存續期間，不應發展男女感情或性關係。下列何者並非其專業倫理上的理由？",
    options: [
      "A. 潛在的利益衝突",
      "B. 影響客觀獨立判斷",
      "C. 避免對當事人造成心理壓力或利用當事人有求於己的處境",
      "D. 違反善良風俗及傳統道德"
    ],
    answer: "D",
    keywords: ["利益衝突", "委任關係", "司法獨立", "道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 102070,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "依律師法及律師倫理規範之精神，關於律師倫理之特質，下列何種敘述有誤？",
    options: [
      "A. 商業性",
      "B. 專業性",
      "C. 獨立性",
      "D. 公益性"
    ],
    answer: "A",
    keywords: ["司法獨立", "公益法律服務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 102071,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "關於律師犯罪行為與律師懲戒事由之關係，下列敘述何者正確？",
    options: [
      "A. 已婚之律師因與配偶外第三人發生性關係遭判刑5 個月，得易科罰金。因僅涉及私德，不得作為懲戒律師之事由",
      "B. 律師因與鄰居口角發生互毆情事，因傷害罪被判處拘役確定。其情節不重大，不得作為律師懲戒事由",
      "C. 律師因過失犯罪被判刑，雖非當然得懲戒事由，但若可認為未謹言慎行，情節重大，仍可能因違反律師倫理規範遭受懲戒",
      "D. 已婚之律師在色情酒店多次與女陪侍生（部分為未成年）發生性關係，因未有判刑確定之情形，即使檢舉者對之已提出充分證據，無論其情節是否重大，均不得作為懲戒事由"
    ],
    answer: "C",
    keywords: ["律師懲戒"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 102072,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "律師宣傳業務之下列方式，何者未違反律師倫理？",
    options: [
      "A. 保證勝訴，敗訴退費",
      "B. 歡迎老客戶介紹新客戶，每介紹一新客戶將略致薄酬",
      "C. 本律師為司法官訓練所第XX 期結業，XX 大學兼任講師",
      "D. 僱用業務員至醫院急診室對車禍傷患發放名片及宣傳單"
    ],
    answer: "C",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 102073,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "甲律師接受臺北市政府財政局的委任向A 追討房產，訴訟進行當中，A 擬向財政局提起國賠案件訴訟，問甲得否接受A 的委任？",
    options: [
      "A. 追討房產和國賠案件為不同性質之案件不相影響，甲可以接受A 的委任",
      "B. 臺北市政府財政局現在是甲的當事人，國賠案件係以財政局為對造，因此有利益衝突，不得受任",
      "C. 國賠案件係向臺北市政府國賠會提起，並非向財政局提起，因此沒有利益衝突",
      "D. 如果A 只委任甲向國賠會請求則得受任，但提起國賠訴訟則不得受任"
    ],
    answer: "B",
    keywords: ["利益衝突", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 102074,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "檢察官於職務外之假日公餘時間，一樣享有私領域之生活，但從事下列那一項活動，不符檢察官倫理規範？",
    options: [
      "A. 前往寺廟，參加法會、媽祖鑾轎出巡遶境",
      "B. 學習舞蹈課程，參加國標舞比賽",
      "C. 前往政黨黨部，投票選舉黨代表",
      "D. 參加大學法律系同學會，有許多律師同學出席"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 102075,
    year: 102,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "甲開車載乙同遊，與丙駕駛之車輛相撞，甲、丙兩人皆因超速而有過失，結果乙、丙兩人受傷。丙委任A 律師向法院提起請求甲損害賠償之訴。後來，乙也希望向丙請求損害賠償，請問A 可否代理乙對丙提起訴訟？",
    options: [
      "A. 可以，但是必須經法院同意才可以",
      "B. 不可以，因為律師不應從事任何會引起前案當事人丙不悅的事情",
      "C. 可以，因為這兩個案件是不同案件，在前案件中，乙根本不是當事人",
      "D. 不可以，因為這兩個案件是有實質關連之事件，A 有利益衝突"
    ],
    answer: "D",
    keywords: ["利益衝突", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/102-comprehensive-law-1-criminal",
    sourceNote: "102年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 103061,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "甲駕駛偷來的汽車行竊，偷得財物變現得款20 萬元，用於購買安非他命及行竊工具一批，剩餘12萬元。後因酒駕被警逮捕，查獲車中藏有毒品、行竊工具及12 萬元現金，下列敘述，何者正確？",
    options: [
      "A. 毒品應予沒收",
      "B. 12 萬元現金應予沒收",
      "C. 應沒收20 萬元",
      "D. 汽車應予沒收行竊工具應予沒收"
    ],
    answer: "AE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 103062,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "甲殺死A。案經檢察官偵訊時，甲謊稱兇案當天與乙至海邊夜釣，與該案無涉，並事先要求乙為有利於己之陳述。經乙為有利於甲之證言，並為具結。下列敘述，何者錯誤？",
    options: [
      "A. 乙成立偽證罪",
      "B. 乙成立偽證罪之幫助犯",
      "C. 甲、乙均不成立偽證罪",
      "D. 甲成立偽證罪之教唆犯甲、乙成立偽證罪之共同正犯"
    ],
    answer: "BCE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 103063,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "依實務見解，下列情境，何者成立刑法第222 條第1 項加重強制性交罪？",
    options: [
      "A. 甲得6 歲女童A 之同意，以手指侵入A 之性器官",
      "B. 乙與13 歲女孩B 在網路聊天室認識，經B 之同意兩人約出來見面援交，並為性交行為",
      "C. 丙因房客C 積欠租金，自行持鑰匙進入C 家欲追討房租，C 見丙自行開門進來，表明沒有錢繳租金，丙臨時起意，將C 推倒令其不能反抗而為性交行為",
      "D. 丁對20 歲智能不足之D，告知其被小鬼纏身，如不與丁為性交行為，將會七孔流血而亡，D 害怕而與丁為性交行為計程車司機戊搭載乘客E 回家，到達目的地後，E 酒醉不醒，戊趁E 不省人事之際，在計程車上對E 為性交行為"
    ],
    answer: "AD",
    keywords: ["誠信義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 103064,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "關於減免罪責之要件，下列敘述，何者正確？",
    options: [
      "A. 犯意圖勒贖而擄人罪，未經取贖而釋放被害人者，得減輕或免除其刑",
      "B. 犯誣告罪，於所誣告之案件，裁判確定前自白者，減輕或免除其刑",
      "C. 犯湮滅刑事證據罪，於關係他人刑事被告案件裁判確定前自白者，減輕或免除其刑",
      "D. 犯略誘婦女結婚罪，於裁判宣告前，指明被誘人所在地因而尋獲者，得減輕其刑對於配偶犯遺棄罪，得減輕或免除其刑"
    ],
    answer: "BCD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 103065,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "甲為A 保管空白支票簿，為給付貨款給乙，盜刻A 之印章，冒開一張支票支付。乙收到支票後，隨即出貨給甲。乙提示支票未獲付款。根據實務見解，下列敘述，何者正確？",
    options: [
      "A. 甲應論以刑法第201 條第1 項之偽造有價證券罪",
      "B. 甲應論以刑法第201 條第2 項之行使偽造有價證券罪",
      "C. 甲應論以刑法第201 條第2 項之交付偽造有價證券罪",
      "D. 甲應論以刑法第339 條第1 項詐欺取財罪甲盜刻印章乃偽造有價證券罪之階段行為，不另論罪"
    ],
    answer: "AE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 103066,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲為A 公司倉庫管理員，與乙共謀監守自盜，利用夜間甲值班時，由甲打開倉庫，乙將貨品搬至公司外，攔路過之計程車司機丙載送。丙雖覺情況有異，仍將貨物送至乙指示之地址，藏放於知情之丁的空屋，由乙賤價出售予知情之戊。依實務見解，下列論罪，何者正確？",
    options: [
      "A. 甲犯業務侵占罪",
      "B. 乙犯普通侵占罪",
      "C. 丙為竊盜罪之幫助犯",
      "D. 丁犯收受贓物罪戊犯故買贓物罪"
    ],
    answer: "AE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 103067,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲非法持有毒品，經偵查機關依法偵查。依實務見解，下列敘述，何者正確？",
    options: [
      "A. 司法警察在未持搜索票下，取得甲同居人乙之同意進入二人同居之處所搜索，係合法搜索",
      "B. 甲經警察依法逮捕後，辯護人未在場，甲基於意思自主同意司法警察未持搜索票進入其居所搜索，係合法搜索",
      "C. 甲開車，邀不知情友人乙一同返鄉，於途中發覺警車緊隨其後，甲遂棄車逃逸，司法警察得在場乙之同意，未持搜索票搜索甲車前座置物箱，係合法搜索",
      "D. 司法警察未持搜索票進入甲之居所搜索完畢後，始徵得甲之同意，並於搜索扣押筆錄內為同意之簽名，係合法搜索司法警察未持搜索票下，依法律明文規定，應先履行告知甲有權拒絕同意之義務後，再徵得甲之同意進入甲之居所搜索始為合法搜索"
    ],
    answer: "AB",
    keywords: ["忠誠義務", "誠信義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 103068,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "甲向地檢署檢察官告訴乙涉犯偽造私文書罪嫌，如檢察官偵查終結為不起訴處分，甲得如何救濟？如甲聲請再議，經高檢署檢察長駁回其再議，甲得如何救濟？如甲聲請法院交付審判，甲可否提出新證據以供法院調查？如法院裁定駁回甲的聲請交付審判，甲得如何救濟？依目前實務上之見解，下列敘述，何者正確？",
    options: [
      "A. 甲不服檢察官的不起訴處分，得於收受不起訴處分書後10 日內具狀聲請再議",
      "B. 高檢署檢察長認為甲聲請再議為無理由而以處分書駁回時，甲得聲請法院交付審判",
      "C. 高檢署檢察長認為甲聲請再議為不合法而以公函通知駁回再議時，甲得聲請法院交付審判",
      "D. 甲聲請法院交付審判，不得再提出新事實或新證據請求法院調查甲聲請法院交付審判，經法院裁定駁回時，甲仍得抗告救濟之"
    ],
    answer: "BD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 103069,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "被告甲涉嫌搶奪剛從郵局提款之被害人乙的皮包，經司法警察調查被害人乙，乙指稱甲在搶奪過程強行將乙踢倒在地，而作成詢問筆錄；偵查中檢察官並依法訊問被告甲，製作訊問筆錄。案經檢察官將被告甲以準強盜罪嫌提起公訴，審判中，檢察官對證人乙行主詰問，乙陳述被告甲於搶奪過程中並未強行將其踢倒在地。下列敘述，何者正確？",
    options: [
      "A. 偵查中檢察官訊問甲所製作的自白筆錄，為被告甲審判外之陳述，屬傳聞證據",
      "B. 倘法院基於審判中證人乙之陳述，認定被告甲僅構成搶奪罪，此種情形，被告甲雖無選任辯護人到庭為其辯護，法庭亦得逕行判決",
      "C. 檢察官不得使用司法警察對乙的詢問筆錄內容，作為彈劾審判中證人乙之信用性之證據",
      "D. 乙之詢問筆錄內容若較審判中之證言具有可信之特別情況，且為證明被告甲犯罪事實所必要，得為證據檢察官如要使用乙之警詢筆錄作為不利被告甲的證據，應由檢察官證明警詢筆錄的可信性及必要性"
    ],
    answer: "DE",
    keywords: ["忠誠義務", "檢察官客觀義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 103070,
    year: 103,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "甲與乙、丙共犯貪污罪嫌，甲經檢察官傳喚到場訊問後，檢察官認甲有串證之虞，擬聲請羈押，遂於逮捕後，聲請法院羈押獲准。下列敘述，何者正確？",
    options: [
      "A. 偵查中，檢察官認有限制甲與辯護人接見之必要，得聲請法院限制之",
      "B. 偵查中，檢察官認有限制甲與辯護人接見之必要，遇有急迫情形，得先為必要之處分",
      "C. 甲對檢察官於急迫情形所為必要之限制甲與辯護人接見處分，得抗告之",
      "D. 偵查中，檢察官認為有限制甲與辯護人接見所為急迫情形之必要處分，最長時效36 小時檢察官對法院駁回其聲請限制甲與其辯護人之接見處分，得抗告之"
    ],
    answer: "AB",
    keywords: ["忠誠義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/103-comprehensive-law-1-criminal",
    sourceNote: "103年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 104061,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "甲因案入監服刑，經提報假釋出獄，於何種情境下，其假釋應被撤銷？",
    options: [
      "A. 甲於假釋中故意犯罪，甫於假釋期滿後，受有期徒刑3 年宣告確定",
      "B. 甲於假釋中犯殺人罪，於假釋期滿前，受死刑之宣告確定",
      "C. 甲於假釋期滿後故意犯罪，受無期徒刑之宣告確定",
      "D. 甲於假釋中駕車不慎撞死人，受有期徒刑10 月之宣告確定甲於假釋中犯強盜罪，假釋期滿後5 年，受有期徒刑8 年判決確定"
    ],
    answer: "AB",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 104062,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "關於中止未遂，下列敘述，何者錯誤？",
    options: [
      "A. 從刑事政策的角度考量，己意中止的行為人，刑罰必要性已經減少或消滅",
      "B. 未了未遂的情形，行為人只須消極放棄行為的繼續實行，即可成立中止未遂",
      "C. 行為人以「一行為」同時實現殺人未遂罪與傷害既遂罪，中止未遂的法律效果可同時及於兩罪",
      "D. 結果之不發生，非行為人防果行為所致，而行為人已盡力為防止行為者，學理上稱為準中止犯不論是既了未遂或未了未遂，均可能成立中止未遂"
    ],
    answer: "BC",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 104063,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "下列何者屬於刑法脫逃罪中所稱之「依法逮捕、拘禁之人」？",
    options: [
      "A. 於勞動場所受強制工作之人",
      "B. 被管收的民事債務人",
      "C. 遭民眾逮捕之現行犯",
      "D. 受羈押之被告被警察通知到案之犯罪嫌疑人"
    ],
    answer: "ABD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 104064,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "甲為藝術收藏家，某日，邀請乙前來家中參觀，乙鑑賞後要求甲割愛一作品，甲拒絕，兩人發生口角。乙將甲打昏，為掩蓋罪行，且怕監視錄影機留下自己打人的畫面，遂放火燒屋。結果火勢太大，不僅房子燒燬，且屋內大批收藏品亦付之一炬，甲逃生不及葬身火海，且屍體焦黑難以辨認。試問：乙之行為觸犯何罪？",
    options: [
      "A. 放火燒屋行為觸犯刑法第173 條第1 項之放火罪",
      "B. 燒燬收藏品觸犯刑法第175 條第1 項之放火燒燬住宅以外之他人所有物罪",
      "C. 燒燬監視錄影機觸犯刑法第165 條湮滅證據罪",
      "D. 燒死甲觸犯刑法第271 條第1 項殺人罪使甲之屍體焦黑觸犯刑法第247 條第1 項毀壞屍體罪"
    ],
    answer: "AD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 104065,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "甲欲殺害岳父A，邀乙一同前往殺人，乙攜帶西瓜刀一把，與甲一同前往A 家。甲、乙到達時，甲看見A 站在門口，立即逃逸，乙則持刀向前揮砍，A 快速閃避未被砍中，乙揮刀落空後亦逃逸。下列敘述，何者錯誤？",
    options: [
      "A. 甲成立殺直系血親尊親屬罪之預備犯",
      "B. 甲成立殺直系血親尊親屬罪之未遂犯",
      "C. 甲成立殺人罪之中止犯",
      "D. 乙成立殺人罪之未遂犯甲、乙兩人成立殺人未遂罪之共同正犯"
    ],
    answer: "ABC",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 104066,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲欲殺害其父A，向不知情之乙借得美工刀一把作為工具，持刀找尋A 下手，誤認B 為A，將B 殺死，依實務見解，下列敘述，何者正確？",
    options: [
      "A. 甲誤B 為A 而殺之，成立殺人未遂及過失致死罪",
      "B. 甲欲殺害A，持刀找尋A 之行為，成立殺直系血親尊親屬未遂罪",
      "C. 甲誤B 為A 而殺之，將B 殺害之行為，成立普通殺人罪",
      "D. 乙雖不知其所為係幫助，仍應依甲所成立之罪，論以幫助犯美工刀雖屬犯罪工具，但非甲所有，不得宣告沒收"
    ],
    answer: "CE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 104067,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲因違反槍砲彈藥刀械管制條例，於偵查中，司法警察持僅記載甲地址「臺北市○○○路○段○○號二樓」之搜索票，進行搜索，並於進出該2 樓（一層一戶）所必經門口公共樓梯間之甲所有鞋櫃內查獲槍彈。依實務見解，下列敘述，何者正確？",
    options: [
      "A. 搜索票記載地點僅為甲之住宅，違反搜索票記載明確性原則，但該搜索仍為合法",
      "B. 搜索票記載地點僅為甲之住宅，違反搜索票記載明確性原則，該搜索為不合法",
      "C. 搜索票記載地點僅為甲之住宅，無違反搜索票記載明確性原則，但該搜索為不合法",
      "D. 搜索票記載地點僅為甲之住宅，無違反搜索票記載明確性原則，該搜索為合法搜索票記載地點雖僅為甲之住宅，但樓梯間與甲住宅有密不可分關係，且鞋櫃亦屬甲所有。故搜索為合法"
    ],
    answer: "DE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 104068,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "富商甲之友人乙因買賣股票失利，意圖勒贖強擄被害人甲後隨即將甲殺害，但於取贖時，為警逮捕，經檢察官偵查後，以被告乙犯擄人勒贖殺人罪嫌提起公訴。下列敘述，何者正確？",
    options: [
      "A. 被告對於被訴之犯罪事實不置可否時，法院得逕為不利被告之認定",
      "B. 被告否認犯罪所持之辯解，縱無可取，仍得作為被告犯罪之證據，故法院得為不利被告之認定",
      "C. 被告雖陳述有利之事實，但卻未指出證明之方法，法院仍不得逕以資為不利被告之認定",
      "D. 被告未據實陳述時，法院仍不得為不利被告之認定被告主張其有不陳述之自由，法院仍不得為不利被告之認定"
    ],
    answer: "CDE",
    keywords: ["檢察官客觀義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 104069,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲向地檢署誣告乙涉犯傷害罪嫌，檢察官起訴乙涉犯傷害罪嫌後，甲復以證人身分到法院作偽證，嗣經法院判決乙無罪確定。乙想要控訴甲犯誣告及偽證犯行。依最高法院之見解，下列敘述，何者正確？",
    options: [
      "A. 乙得對甲犯誣告罪嫌提出告訴，但不得對甲犯偽證罪嫌提出告訴",
      "B. 乙不得對甲犯誣告罪嫌提出告訴，但得對甲犯偽證罪嫌提出告訴",
      "C. 乙向檢察官告訴甲犯誣告罪嫌後，翌日得再對甲犯偽證罪嫌提出自訴",
      "D. 乙向檢察官告訴甲犯偽證罪嫌後，翌日得再對甲犯誣告罪嫌提出自訴乙委任律師為代理人向地方法院自訴甲犯誣告罪嫌後，不得再自訴甲犯偽證罪嫌"
    ],
    answer: "AE",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 104070,
    year: 104,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "甲駕駛不慎，撞倒乙所駕後載丙之機車，致乙受傷送醫，丙當場死亡，經檢察官相驗丙後開始偵查。依實務見解，下列敘述，何者正確？",
    options: [
      "A. 檢察官開始偵查後，乙仍得向檢察官告訴甲犯過失傷害罪嫌",
      "B. 檢察官開始偵查後，乙仍得委任律師為代理人向地方法院自訴甲犯過失傷害罪嫌",
      "C. 如檢察官起訴甲犯過失致死罪嫌後，乙向檢察官告訴甲犯過失傷害罪嫌，檢察官可追加起訴",
      "D. 如檢察官起訴甲犯過失致死罪嫌後，因乙未向檢察官告訴，法院對甲過失傷害乙部分不得審判如檢察官起訴甲犯過失致死罪嫌後，乙告訴後於審判中撤回告訴，法院對甲過失傷害乙部分應判決不受理"
    ],
    answer: "AD",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/104-comprehensive-law-1-criminal",
    sourceNote: "104年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 105061,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "下列何種情形成立湮滅證據罪？",
    options: [
      "A. 偽造關於他人刑事案件之證據",
      "B. 變造關於自己刑事案件之證據",
      "C. 湮滅關於他人民事案件之證據",
      "D. 教唆他人隱匿關於自己刑事案件之證據與他人共同湮滅關於他人刑事案件之證據"
    ],
    answer: "AE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 105062,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "關於「客觀處罰條件」，下列敘述，何者錯誤？",
    options: [
      "A. 指不法與罪責以外，影響犯罪成立與否的可罰性實體要件",
      "B. 若客觀處罰條件有所欠缺，應為無罪判決",
      "C. 行為人於行為時，必須認識客觀處罰條件的存在",
      "D. 客觀處罰條件亦屬構成要件要素刑法第238 條詐術締結婚姻罪，所定「致其無效或得撤銷之裁判確定」，為客觀處罰條件"
    ],
    answer: "CD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 105063,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "甲無故侵入A 所有之倉庫，以之為居所長達12 年。A 知悉後要求甲離開，仍不退去，A 乃提起告訴，甲抗辯侵入住居罪為最重一年以下有期徒刑之罪，追訴時效為10 年，追訴時效已過。下列敘述，何者正確？",
    options: [
      "A. 追訴時效已完成，不得再為追訴",
      "B. 追訴時效已完成，不得再為告訴",
      "C. 追訴時效尚未開始，並無完成問題",
      "D. 因無停止事由，期間已超過10 年，故時效應已完成行為尚未終了前，並無停止時效的問題"
    ],
    answer: "CE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 105064,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "某夜在山區甲欲對A 強制性交，勒住A 的脖子，A 用力掙脫後逃跑，跌落山谷死亡。甲在山谷下找到A 之屍體後，仍然對A 進行性侵害。甲之行為成立下列何罪？",
    options: [
      "A. 甲成立刑法第271 條第1 項殺人既遂罪",
      "B. 甲成立刑法第247 條第1 項污辱屍體罪",
      "C. 甲成立刑法第221 條第1 項強制性交既遂罪",
      "D. 甲成立刑法第226 條第1 項強制性交因而致被害人於死罪甲成立刑法第226 條之1 強制性交與殺人罪之結合犯"
    ],
    answer: "BD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 105065,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "關於背信罪與詐欺罪、侵占罪之論罪，下列敘述，何者正確？",
    options: [
      "A. 背信與侵占罪性質為身分犯",
      "B. 背信與詐欺罪之成立，以行為致生損害於他人之財產或利益為結果要素",
      "C. 背信與侵占罪之成立，以行為人僅於為自己不法所有之意圖為限",
      "D. 利用受委任處理事務之機會，意圖為自己不法之所有，以詐術使委任人交付財物，應成立背信罪與詐欺罪，兩罪數罪併罰利用受委任處理事務之機會，意圖為自己不法之所有，將所持有委任人之物侵占入己，應成立背信罪與侵占罪，兩罪數罪併罰"
    ],
    answer: "AB",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 105066,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "依實務見解，下列關於刑法偽造文書罪之敘述，何者正確？",
    options: [
      "A. 第210 條偽造私文書罪，乃處罰「有形偽造」，亦即無製作權者以他人名義作成文書，至於文書內容是否真實，並非所問",
      "B. 第215 條業務登載不實罪，乃處罰「無形偽造」，亦即所登載之內容不實，且製作人與名義人不符",
      "C. 畢業證書遺失，自行偽造一張畢業證書，只要內容是真實且與原來證書一模一樣，並不成立犯罪",
      "D. 第214 條使公務員登載不實罪，必須一經申報，公務員即有登載之義務，始成立本罪。如果公務員尚有實質審查之義務，並於審查後方為一定之記載，則不成立本罪公務員不確定所登載於公文書之內容是否真實，也未加以求證就予以登載，成立第213 條公務員登載不實罪"
    ],
    answer: "AD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 105067,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲因涉犯偽造乙名義之契約書，經警移送地檢署偵辦，分由檢察官丙偵查。丙檢察官乃指揮檢察事務官丁詢問被告甲與證人乙。下列敘述，何者正確？",
    options: [
      "A. 丁於詢問被告甲後，得命甲具保、責付或限制住居。但如認有羈押之原因，應由檢察官聲請法院羈押之",
      "B. 丙指示丁於詢問證人乙時應命其具結，丁乃令乙具結陳述，並記明係受丙之指示而為，其詢問筆錄已轉化為檢察官之訊問筆錄",
      "C. 丁依丙之指示詢問乙已具結之陳述，得依刑事訴訟法第159 條之1 第2 項規定認定其證據能力",
      "D. 現行刑事訴訟法明文規定丁於詢問證人乙時，應告以乙得為第180 條一定親屬關係之拒絕證言現行刑事訴訟法並無明文規定丁於詢問證人乙時，應告以乙得為第181 條免於自陷入罪之拒絕證言"
    ],
    answer: "DE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 105068,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "檢察官起訴會首甲冒用會員乙之名義，填寫標單冒標會款，致活會會員丙、丁、戊、己、庚等5 人，誤以為是乙得標，而各繳交會款新臺幣1 萬元與甲，涉犯行使偽造私文書與詐欺取財等罪嫌。下列敘述，何者正確？",
    options: [
      "A. 法院審理中，檢察官發現丙是死會會員，對該部分犯罪事實為一部撤回，法院就丙部分毋庸審判",
      "B. 法院審理中，檢察官發現丙是死會會員，對該部分犯罪事實為一部撤回，法院就丙部分仍應審判",
      "C. 法院審理中，檢察官以書狀追加起訴甲詐欺活會會員辛之會款，法院對於該追加之起訴，應為實體判決",
      "D. 法院審理中，檢察官以書狀追加起訴甲詐欺活會會員辛之會款，法院對於該追加之起訴，應諭知公訴不受理之判決法院審理中，檢察官以書狀追加起訴甲詐欺活會會員辛之會款，法院對於該追加之起訴，如未判決，應由法院依法補充判決"
    ],
    answer: "BDE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 105069,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲乙夫妻感情不和，乙女乃結識丙男，進而同居生女，嗣甲找到乙、丙同居處，憤而同時同地一棒毆打乙、丙成傷。依實務見解，下列敘述，何者正確？",
    options: [
      "A. 甲得委任律師為代理人自訴丙犯相姦罪嫌",
      "B. 丙得委任律師為代理人告訴甲傷害丙，其效力及於甲傷害乙",
      "C. 甲得向檢察官告訴乙犯通姦罪嫌，其效力及於丙犯相姦罪嫌",
      "D. 丙自訴甲犯傷害罪嫌，經法院判決甲無罪確定後，乙得再自訴甲犯傷害罪嫌丙自訴甲犯傷害罪嫌，經法院判決甲罪刑確定後，乙得再自訴甲犯傷害罪嫌"
    ],
    answer: "AC",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 105070,
    year: 105,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "住在臺中市的甲，涉嫌在新北市某處非法製造槍、彈，經臺北地檢署A 檢察官於9 月9 日向臺北地方法院聲請羈押獲准（押於臺北看守所），10 月7 日臺東地檢署B 檢察官將被告甲借提前往臺東執行他案（殺人案），A 檢察官於10 月8 日偵查終結，向臺北地方法院起訴甲犯製造槍彈罪嫌。下列敘述，何者正確？",
    options: [
      "A. 新北地方法院對甲非法製造槍、彈之犯罪，有管轄權",
      "B. 臺中地方法院對甲非法製造槍、彈之犯罪，有管轄權",
      "C. 臺北地方法院對甲非法製造槍、彈之犯罪，有管轄權",
      "D. 臺北地方法院對檢察官之起訴，應諭知管轄錯誤判決並移送於有管轄權的法院臺北地方法院對檢察官之起訴，得經臺中地方法院之同意，以裁定移送於臺中地方法院"
    ],
    answer: "一律給分",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/105-comprehensive-law-1-criminal",
    sourceNote: "105年司法官/律師考試第一試第70題",
    explanation: "官方更正答案：本題一律給分。"
  },
  {
    id: 106061,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於公然侮辱罪與誹謗罪，下列敘述，何者正確？",
    options: [
      "A. 公然侮辱罪所稱「公然」之要件，指不特定人得以共聞共見之狀況，特定之多數人不構成「公然」之要件",
      "B. 在公開場合傳述毀損他人名譽之具體事實，致他人名譽受損，應論以公然侮辱罪，不成立誹謗罪",
      "C. 行為人必須已著手散布文字、圖畫之行為，始能滿足加重誹謗罪之構成要件",
      "D. 誹謗罪不罰的法定條件，行為人除需能證明所誹謗之事為真實外，尚需該事非「涉於私德而與公共利益無關」行為人雖不能證明言論為真實，但依其所提證據資料，可認其有相當理由確信所言為真實者，仍不成立誹謗罪"
    ],
    answer: "CDE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 106062,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "下列情境，何者成立刑法第185 條之3 不能安全駕駛罪？",
    options: [
      "A. 甲吃完麻油雞後，騎機車遭警臨檢，經量吐氣所含酒精濃度達每公升0.35 毫克，甲騎車時意識清楚，亦通過警察為其進行之生理平衡測試",
      "B. 乙從夜店喝酒結束，甫開車離去，意識清楚，經警盤查通過生理平衡測試，量得吐氣所含酒精濃度為每公升0.22 毫克",
      "C. 丙服用感冒藥，開車時因藥物影響，嗜睡而注意力不集中，肇事撞傷行人",
      "D. 丁前一晚熬夜喝酒，第二天駕車上班時，宿醉昏沉追撞前車，經警測量吐氣所含酒精濃度達每公升0.25 毫克戊從酒店應酬結束後，欲開車返家，自覺精神不濟，於車上休息，經警盤查進行酒測，量得吐氣所含酒精濃度為每公升0.58 毫克"
    ],
    answer: "ACD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 106063,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "關於教唆犯與幫助犯，下列敘述，何者正確？",
    options: [
      "A. 教唆犯與幫助犯的成立，必須符合從屬性原則",
      "B. 依限制從屬原則，教唆行為或幫助行為必須正犯著手於違法行為之實行",
      "C. 對犯意已決者的教唆，仍可成立教唆犯",
      "D. 依實務見解，被教唆人有等價客體錯誤時，教唆人不成立教唆既遂罪對於過失的行為，無法成立教唆犯或幫助犯"
    ],
    answer: "ABE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 106064,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "甲犯竊盜及強盜二罪，竊盜罪受有期徒刑8 月的宣告確定，並已執行完畢。嗣後，裁判確定前所犯的強盜罪，經判處有期徒刑7 年確定。試問定執行刑處置方式，下列敘述，何者正確？",
    options: [
      "A. 因竊盜罪刑已執行，毋須與強盜罪之刑重定執行刑，僅再執行強盜罪之刑即可",
      "B. 應將二罪之刑重新定應執行之刑，並扣除已執行之刑後，定為應執行之刑",
      "C. 應將二罪之刑改定應執行之刑，並於應執行之刑中扣除已執行之刑",
      "D. 應將二罪之刑改定應執行之刑，且應執行之刑不得低於7 年應執行強盜罪之刑，並扣除已執行之8 月，應執行之刑為6 年4 月"
    ],
    answer: "CD",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 106065,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "甲、乙、丙三人為珠寶公司同事，相約竊取公司保險櫃內的鑽石。甲負責偷取，乙、丙在外接應。得手後，於離去時被捕。下列敘述，何者錯誤？",
    options: [
      "A. 乙、丙應成立竊盜罪之「共謀」共同正犯",
      "B. 因甲已經著手實行，與乙、丙成立共同正犯",
      "C. 甲、乙、丙成立共同竊盜未遂罪",
      "D. 甲、乙、丙成立結夥三人加重竊盜罪乙、丙未出現在犯罪現場，不成立犯罪"
    ],
    answer: "ACE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 106066,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "關於業務過失致死罪，下列敘述，何者正確？",
    options: [
      "A. 業務屬行為人之身分要件，需有證照始得執行，無證照之人執行業務，過失致死，不適用之",
      "B. 實務上認為，業務不以主要部分之業務為限，亦包括為完成主要業務附隨之準備工作與輔助事務在內",
      "C. 實務上認為，業務過失以業務上有注意義務為前提，且按其當時情節係能注意而不注意者，始能構成",
      "D. 曾經從事過之業務，不再執業後，偶然實施同種行為，因過失而致人於死，仍應依本罪論處二人共同業務上過失致人於死，實務上認為二人應個別論罪，無共同正犯之適用"
    ],
    answer: "BCE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 106067,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲涉犯竊盜罪為警查獲，司法警察官乙為蒐集甲涉犯竊盜罪之證據，通知證人丙（甲之配偶）及丁（向甲購買贓物者）到場詢問。下列敘述，何者正確？",
    options: [
      "A. 依刑事訴訟法規定，證人丙及丁均有拒絕證言權",
      "B. 司法警察官乙，依刑事訴訟法規定無須向丁告知得以拒絕證言",
      "C. 司法警察官乙，依刑事訴訟法規定應向丙告知得以拒絕證言",
      "D. 司法警察官乙，依刑事訴訟法規定均無須向丙及丁告知得以拒絕證言司法警察官乙，依刑事訴訟法規定均應向丙及丁告知得以拒絕證言"
    ],
    answer: "ABC",
    keywords: ["誠信義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 106068,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "甲、乙父子二人感情不睦，經常口角，乙竟與其友人丙謀議共同竊取甲所有的古董賤售牟利，經甲報警循線查獲乙、丙共同竊盜犯行。下列敘述，何者正確？",
    options: [
      "A. 甲僅對丙提出告訴，檢察官查明乙、丙共同竊盜，檢察官可起訴乙、丙共犯竊盜罪嫌",
      "B. 甲僅對丙提出告訴，檢察官起訴乙、丙共犯竊盜罪嫌，法院可判決乙、丙共犯竊盜罪刑",
      "C. 甲對乙、丙提出告訴，檢察官起訴乙、丙共犯竊盜罪嫌，法院審理中，甲得對乙撤回告訴",
      "D. 甲對乙、丙提出告訴，檢察官起訴乙、丙共犯竊盜罪嫌，法院審理中，甲不得對丙撤回告訴甲僅對乙提出告訴，檢察官查明乙、丙共同竊盜，檢察官可起訴乙、丙共犯竊盜罪嫌"
    ],
    answer: "CDE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 106069,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲涉嫌強盜殺人罪被檢察官提起公訴，甲於審判中選任乙律師為辯護人為其辯護。依實務見解，下列何種情形，違反強制辯護案件無辯護人到庭不得審判之規定？",
    options: [
      "A. 審判期日，檢察官陳述起訴要旨時，辯護人未到庭",
      "B. 審判期日，書記官朗讀案由時，辯護人未到庭",
      "C. 辯護人未提出刑事辯護狀，僅於審判庭辯護時稱：「被告已辯解其並無強盜殺人行為，請庭上斟酌被告之辯解，作為妥適的判決」",
      "D. 審判期日，審判長為人別訊問時，辯護人未到庭辯護人是否構成無效之辯護，應同時具備「行為瑕疵」與「結果不利」二要件"
    ],
    answer: "AC/ACE",
    keywords: ["忠誠義務", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第69題",
    explanation: "官方更正答案：AC 或 ACE 均給分。"
  },
  {
    id: 106070,
    year: 106,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "甲因故與乙發生口角，基於傷害之故意，將乙毆打成傷，送醫急救，乙具狀告訴甲傷害。依實務見解，下列敘述，何者正確？",
    options: [
      "A. 檢察官起訴甲犯傷害罪嫌，地方法院審理中，乙因傷重致死，法院對乙死亡事實不得合一審判",
      "B. 地方法院判決甲傷害罪刑後，乙因傷重致死，檢察官提起上訴，高等法院對乙死亡事實應合一審判",
      "C. 地方法院判決甲傷害罪刑確定後，乙因傷重致死，檢察官對死亡事實得另行起訴",
      "D. 地方法院判決甲傷害罪刑確定後，乙因傷重致死，乙之家屬得以發現新事實對原判決聲請重新審判檢察官起訴甲犯傷害罪嫌，法院判決甲無罪確定後，乙因傷重致死，檢察官對乙死亡事實不得另行起訴"
    ],
    answer: "BE",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/106-comprehensive-law-1-criminal",
    sourceNote: "106年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 107061,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "法官、檢察官與律師都屬於為司法制度提供專業服務之法律人，就其職業特性來看，關於法官倫理、檢察官倫理與律師倫理之比較敘述，下列何者正確？",
    options: [
      "A. 律師雖不屬於國家機關，其仍有兼職上的限制；法官與檢察官與其他國家公務員一樣，不能任意兼職",
      "B. 法官與檢察官都具有獨立性的倫理要求，律師因為要為委任人提供專業服務，所以不能獨立於委任人",
      "C. 律師為了貫徹其忠誠義務，有利益衝突迴避之義務；法官與檢察官不需要有迴避義務，以免造成勞逸不均",
      "D. 法官與檢察官身為國家司法機關的成員，有監督下屬之義務；律師身為自由業，不需要負有監督下屬之義務"
    ],
    answer: "A",
    keywords: ["利益衝突", "忠誠義務", "委任關係", "法官迴避", "司法獨立", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 107062,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "法官A 審理某知名藝人甲涉犯性侵害案件，判決甲有罪。甲投書媒體稱法官A 拿到對方的好處，脅迫他承認犯罪，他是冤枉的。下述法官A 所為，何者未違法官倫理？",
    options: [
      "A. 向媒體提供並詳細說明他在判決書內沒有提到的其他定罪證據，以彰顯其認事用法之嚴謹專業",
      "B. 將甲開庭時之影音電子檔放在自己的臉書網頁上，供各界檢視，以正視聽",
      "C. 向媒體提供卷內資料，說明其實還有其他判決沒提到的被害人數名及其具體情節，但未經檢察官起訴，所以未審理論科",
      "D. 對甲提起民事訴訟，主張其投書媒體指控之內容不實，損害其名譽，請求賠償及登報道歉"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 107063,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "關於法官倫理之敘述，下列何者正確？",
    options: [
      "A. 法官A 與律師B 為大學好友，律師B 競選民意代表，法官A 不得為B 公開站台助選，但得在私下為B 向社區鄰居請求支持",
      "B. 家事法庭法官A 與律師B 為大學好友，A 應避免出入B 所開設之律師事務所，但得允許B 平常於一般民刑案件開庭後，至法官A 辦公室聊天敘舊",
      "C. 法官A 於審理家庭暴力保護令聲請事件，訊問15 歲之未成年被害人甲時，認為有隔離訊問之必要，命陪同到庭之社會工作人員退出庭外，於訊問完畢後，始請其入庭並告以訊問要旨",
      "D. 當事人甲認為一審法官A 有重大過失，致審判有明顯重大違誤，而嚴重侵害他的權益，該案件尚未確定，但自第一審繫屬日起已逾6 年，甲可以陳請律師公會，對A 法官進行個案評鑑"
    ],
    answer: "D",
    keywords: ["庭外接觸", "法官評鑑"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 107064,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "法官A 的胞弟甲，與他人乙之間發生糾葛，乙對甲提起詐欺取財之刑事自訴。甲求助於胞兄法官A。法官A 之下列行為，何者為法官倫理所容許？",
    options: [
      "A. 法官A 於甲出庭時到庭關切，與承審法官打招呼，表明其法官身分及與被告的關係，但僅默默旁聽",
      "B. 法官A 為甲提供諮商、撰擬書狀，及建議其尋求律師諮商與辯護",
      "C. 法官A 於甲被訴案件之審判期日以言詞陳明擔任甲之輔佐人",
      "D. 法官A 提供自己所審理其他案件中有關乙之筆錄與證據資料，讓甲得以證明乙素行不良"
    ],
    answer: "B",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 107065,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "下列何一行為，未違背專業倫理規範之要求？",
    options: [
      "A. 法官A 為增進對於社會百態的認識，利用公餘及假日時光兼任計程車駕駛，並按公告費率收取車資以應車輛行駛及維修之所需",
      "B. 法官B 自行在家開設讀經班，招收社區內學齡兒童研讀四書五經，並向學童家長收取學費供聘請師資及維持班務之用",
      "C. 法官C 愛好攝影，在添購更高階之相機及閃光燈等攝影器材設備後，將自己已使用過之攝影器材設備透過拍賣網站出售",
      "D. 法官D 於留職停薪期間，開設早餐店貼補家用"
    ],
    answer: "C",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 107066,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "檢察官A 參加大學同學律師B 之婚宴，律師C 係A 正在承辦案件被告甲之辯護人，C、甲係B 之朋友，亦參加B 之婚宴。C、甲恰巧安排與A 同桌。下列敘述，何者符合法律倫理規範的要求？",
    options: [
      "A. 婚宴屬正常社交活動，A 雖與C、甲同桌，但屬於公開場合，毋庸顧慮他人眼光",
      "B. A 係檢察官，B 係律師，因檢察官與律師職務上對立不相容，為維持檢察公正、廉潔形象，A 不可參加B 之婚宴",
      "C. A 在婚宴會場先入席後，C、甲方入席同桌，A 為避免物議，遂先行離去",
      "D. C、甲入席後，發現A 在同桌參加喜宴，C 帶同甲向A 打招呼，並向A 陳述甲確實係遭冤枉，請A 主持正義"
    ],
    answer: "C",
    keywords: ["忠誠義務", "刑事辯護", "法官廉潔"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 107067,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "檢察官A 負責偵辦甲、乙涉嫌詐欺案件，甲、乙均否認犯罪，並供稱並不認識告訴人丙；且稱當時均在國外經商，聲請檢察官查調甲、乙之入出境資料。惟檢察官並未查調甲、乙之入出境資料，依告訴人丙之指訴及證人丁之證詞，對甲、乙提起公訴。嗣經法院審理，查調甲、乙入出境資料後，發現甲、乙被訴犯罪行為時間，確實在國外，告訴人丙指訴誤認，因而判決甲、乙無罪，並經判決確定。下列敘述，何者正確？",
    options: [
      "A. 檢察官A 係根據告訴人丙指訴及證人丁之證述，據以提起公訴，雖法院判決無罪，但係屬證據取捨問題，A 或有疏忽之處，但未違反檢察官倫理規範",
      "B. 被告甲、乙雖聲請檢察官A 調查其不在場證明，A 認為沒有必要，係屬檢察官偵查裁量權，不涉檢察官倫理規範問題",
      "C. 檢察官偵查犯罪，應致力發現真實，兼顧被害人與被告權益，若被害人原本指訴明確，A 獲得心證，即應堅持立場，以使被告定罪為目的",
      "D. A 對於甲、乙所聲請調查之入出境資料，查調並無困難，且於犯罪事實之認定具有重要關聯性，但A 未盡調查能事，有違檢察官應勤慎執行職務之疏失"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 107068,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "A 律師是某事務所主持律師，為了推廣業務，將事務所過去曾經處理過之重大案件列在事務所網頁上。A 律師所為有無違反現行律師倫理相關規範？",
    options: [
      "A. 看情形，律師將過去承辦案件放在網頁時，如果有得到案件當事人之同意就可以列出，但如果沒有經過當事人同意就不可以列出",
      "B. 有違反。律師事務所根本不能夠架設網頁推廣業務",
      "C. 有違反。律師事務所只能在客戶詢問時，提供過去承辦案件的實績做為參考，不能刊載於網頁上供不特定人查看",
      "D. 有違反。律師事務所只能將現在處理的案件列為宣傳內容，不得將過去所處理的案件作為宣傳之用"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 107069,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "A 律師受債權人甲的委任提起返還借款之訴。第一審訴訟進行到一半時，雙方代理人當庭同意合意停止訴訟以進行調解，審判長並告知代理人及當天也有出庭之債權人甲4 個月內若未續行訴訟，將視為撤回起訴。雙方調解未成，A 律師也沒有在4 個月內聲明續行訴訟，以致被視為撤回起訴。A律師是否違反律師倫理規範？",
    options: [
      "A. 只要A 律師負擔另行起訴之裁判費用且不另行收取律師費用，就沒有違反律師倫理規範",
      "B. 只要A 律師同意另行重新起訴且不另行收取律師費用，就沒有違反律師倫理規範",
      "C. A 律師未在4 個月內請求續行訴訟，未盡力維護當事人權益，違反律師倫理規範",
      "D. 因為債權人甲未提醒A 律師，是甲的錯，A 律師並不違反律師倫理規範"
    ],
    answer: "C",
    keywords: ["誠信義務", "委任關係", "雙方代理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 107070,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "A 律師承辦某刑事案件，因為法庭要傳訊證人甲，所以A 律師在開庭前事先安排與證人甲洽談。洽談時A 律師發覺證人甲現在的敘述和他之前在偵查庭時的證詞筆錄內容有出入，A 律師就提示偵查筆錄給證人甲看，詢問甲到底什麼樣的說法才是正確。A 律師提示筆錄之行為有沒有違反律師倫理相關規範？",
    options: [
      "A. 有違反。律師在任何情況下都不得提示筆錄給證人",
      "B. 沒有違反。可以提示證人之前曾經作證之筆錄給他看，但不能有威脅、利誘、騷擾或其他影響證人作證證詞的行為",
      "C. 如果有經過法院同意就可以提示筆錄給證人看，否則不可以",
      "D. 沒有違反。律師和證人接觸，本來就是要安排套好在法庭上的證詞，所以律師要提示筆錄並幫證人編一套完整無瑕的證詞"
    ],
    answer: "B",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 107071,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "債權人甲與債務人乙就支票欠款達成協議，約定由債務人乙分3 年償還，該協議書簽署時並由A 律師擔任雙方見證人。惟簽立協議書之後，債務人乙均未依協議書內容償還。經過6 年之後，債權人甲想委託A 律師擔任訴訟代理人，依據該協議書請求債務人乙償還欠款，A 律師可以接受甲的委任嗎？",
    options: [
      "A. 不可以。A 律師在得到雙方同意之前，不得擔任與該協議書相關訴訟之任何一方的代理人",
      "B. 可以。該票據債權已經罹於短期時效，A 律師可不受約束擔任甲的代理人",
      "C. 可以。該協議書約定還款期限為3 年，現在已經第6 年，A 律師可以不受約束擔任甲的代理人",
      "D. 可以。不過A 律師必須要先以書面通知乙，但不需要得到乙之同意"
    ],
    answer: "A",
    keywords: ["利益衝突", "委任關係", "見證人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 107072,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "關於律師酬金之敘述，下列何者應無違反律師倫理相關規範？",
    options: [
      "A. 律師受當事人委託，協助其投標承攬政府公共工程案，得就工作進度及性質，約定一定金額上限之分收酬金標準",
      "B. 律師就返還土地爭議案件，得約定勝訴確定以主文所載返還土地面積的三分之一為酬勞",
      "C. 律師受當事人委託處理改定子女親權行使的案件，得約定若勝訴，始需給付律師費",
      "D. 律師就業務過失致死二審上訴案件，得約定如二審判決獲緩刑，另再給付律師費10 萬元"
    ],
    answer: "A",
    keywords: ["律師酬金", "風險代理費"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 107073,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "A 律師提供免費法律諮詢。甲前來詢問目前他對乙提的損害賠償訴訟的法律依據，但未提到乙的姓名。A 律師請甲簽署同意書，聲明［本人並未委託貴律師辦理今日諮詢事項，貴律師事後可以接受其他人委任處理與本事件相關的一切事件，無須通知本人。］數周後，A 律師接受乙委任處理同一訴訟事件。甲主張A 律師違反利益衝突規定，不得受任。甲的主張有無理由？",
    options: [
      "A. 無理由，甲已經簽署同意書",
      "B. 無理由，無償法律諮詢不構成律師與當事人委任關係",
      "C. 有理由，甲的同意書不能有效豁免A 律師的利益衝突",
      "D. 無理由，A 律師受甲諮詢時，不知道甲的對造就是乙"
    ],
    answer: "C",
    keywords: ["利益衝突", "委任關係", "前任委任人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 107074,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "A 律師下列行為，何者未違反律師倫理？",
    options: [
      "A. A 律師得知對造當事人因資訊不足，聘請了一位律師界公認不敬業的律師B。為避免對造當事人因此受害，A 律師善意告知對造當事人關於B 律師的風評",
      "B. A 律師的當事人被控告殺人罪，A 律師請當事人告知事情真相並答應為其守密",
      "C. A 律師的當事人涉及索賄貪瀆。於偵查程序將終結時，發現接案之初當事人提供的資訊極可能為偽造。A 律師在開庭前一天解除委任，並在臉書上建議當事人向法庭坦白一切",
      "D. 在事務所外懸掛布條宣傳業務，內容為「天下第一訟師：百戰百勝。購書者可獲免費諮詢」"
    ],
    answer: "B",
    keywords: ["誠信義務", "委任關係", "前任委任人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 107075,
    year: 107,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "下列何種情形，律師得執行律師職務？",
    options: [
      "A. A 律師擔任替代役期間曾在甲法院服司法行政役，於退役後第2 年擬在甲法院執行律師職務",
      "B. A 曾擔任甲法院的書記官，考取律師後離職，擬於離職後第3 年在甲法院執行律師職務",
      "C. A 曾擔任甲地檢署的檢察官，轉任律師1 年後擬於甲地檢署執行律師職務",
      "D. A 律師曾在甲法院擔任法官，於轉任律師2 年後擬僱用律師B，就A 律師所承接的案件，在甲法院出庭執行律師職務"
    ],
    answer: "A",
    keywords: ["受僱律師離職", "轉任律師限制"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/107-comprehensive-law-1-criminal",
    sourceNote: "107年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 108061,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於我國法律倫理規範之制定與執行，何者正確？",
    options: [
      "A. 就律師法與律師倫理規範有所疑義者，應送交律師公會做解釋",
      "B. 法官與檢察官倫理規範由司法院制定；律師倫理規範由法務部制定",
      "C. 法官與檢察官倫理規範其法源為法官法，律師倫理規範其法源為律師法",
      "D. 違反法官與檢察官倫理規範者，直接送職務法庭審理；違反律師倫理規範者，則於律師公會審議"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 108062,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "關於法官、檢察官及律師之職務特性，下列敘述何者正確？",
    options: [
      "A. 律師無退休金保障，其執業乃以營利最大化為主要目標，毋需考慮公益",
      "B. 律師基於委託人利益，不需強調獨立性，即使確認委託人係為詐害相對人，亦可為之提起該訴訟",
      "C. 檢察官係公務員，有服從義務，因而對於其所承辦而依法及依其心證認為應起訴之案件，直屬檢察長對之口頭要求不予起訴，應服從之",
      "D. 法官審判具獨立性，但法院院長對於法官多次未請假而無故缺席法官會議，仍得為行政監督"
    ],
    answer: "D",
    keywords: ["司法獨立", "公益法律服務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 108063,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "甲法官之夫乙任職由10 位律師以合夥型態組成的某事務所，該事務所丙律師所代理某民事事件適分由甲法官審理，下列敘述何者正確？",
    options: [
      "A. 甲法官如知悉丙律師與其夫乙同事務所時，應立即自行迴避",
      "B. 因乙任職之律師事務所人數眾多，甲法官知悉丙律師與其夫乙並非熟識，故毋須為任何處理",
      "C. 甲法官知悉丙律師與其夫乙同事務所時，應告知當事人並陳報院長知悉",
      "D. 甲法官知悉丙律師與其夫乙同事務所時，應裁定停止訴訟程序並陳報院長知悉"
    ],
    answer: "C",
    keywords: ["誠信義務", "法官迴避"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 108064,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "甲法官於庭審時，於辯護人陳述前，即諭示被告：「你選任辯護律師宜謹慎為之，以免碰到沒道德的律師」及「辯護人有的招搖撞騙，黑白亂講，搞得法院烏煙瘴氣」等語。下列敘述何者正確？",
    options: [
      "A. 甲之諭示屬訴訟指揮權之範圍，不涉及法官倫理",
      "B. 甲之諭示有損辯護人尊嚴，可能涉及違反法官倫理",
      "C. 甲之諭示係善意勸說，維護被告權益，促進訴訟公平，並無不當之處",
      "D. 甲之諭示只是個人意見的表達，不涉及法官倫理"
    ],
    answer: "B",
    keywords: ["忠誠義務", "刑事辯護", "道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 108065,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "甲法官於審理某刑事傷害案件時，得知任職同法院之夫乙法官刻正審理該案之民事求償事件，下列敘述何者正確？",
    options: [
      "A. 甲、乙法官為夫妻，任何職務上資訊均得互相分享",
      "B. 甲法官如認必要時，得當庭打電話向乙法官詢問民事訴訟進行情形",
      "C. 甲法官當庭打電話向乙法官詢問民事和解情形，違反審判獨立及法庭尊嚴，影響人民對司法之信賴",
      "D. 甲法官對於告訴乃論案件，得當庭打電話向乙法官詢問民事和解情形"
    ],
    answer: "C",
    keywords: ["司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 108066,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "有關法官對於司法案件評論之倫理規範，下列敘述何者正確？",
    options: [
      "A. 法官得對非自己承辦且尚在法院繫屬中之案件，為公開評論，並預測未來判決結果",
      "B. 法官對於其他法官承辦之案件，一律不得公開發表言論",
      "C. 法官就非自己承辦的案件判決，認為媒體報導不實，得接受節目採訪，透露私下得知的評議實情，以衡平視聽",
      "D. 法官應要求書記官等受其指揮或監督之法院人員，不得就繫屬中或即將繫屬之案件公開發表足以影響裁判公正之評論"
    ],
    answer: "D",
    keywords: ["庭外接觸"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 108067,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "下列何項行為，檢察官不得從事？",
    options: [
      "A. 檢察官購買自住房屋，向銀行貸款",
      "B. 檢察官將自己存款，投資購買數張上市公司股票，長期持有",
      "C. 檢察官申請服務機關許可，在私立大學兼課，教授法律倫理學",
      "D. 檢察官利用下班時間，合夥經營加盟之咖啡連鎖店"
    ],
    answer: "D",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 108068,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "檢察官代表國家依法追訴處罰犯罪，須超出黨派以外，公正超然。下列敘述，何者符合檢察官倫理之要求？",
    options: [
      "A. 檢察官於任職期間，可以參加政黨，但不可以參加政治活動",
      "B. 檢察官於下班且非執行公務時間，在不表明其為檢察官身分下，可以為公職候選人之選舉活動站台助選",
      "C. 檢察官一樣擁有憲法保障之參政權，任職期間可先登記參選公職人員選舉，但當選後即應立刻辭去檢察官職務",
      "D. 檢察官於任職期間，不得參加政黨、政治團體，任職前已參加政黨、政治團體者，應退出之"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 108069,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲曾任檢察官，退休後轉為執業律師，並開設律師事務所，其妻乙係現職法官，甲與乙共同居住在乙之法官職務宿舍內。下列敘述，何者不違反律師倫理規範？",
    options: [
      "A. 甲在其律師名片上印有其曾任某檢察署檢察官之經歷",
      "B. 甲在其律師事務所客戶諮商室內，懸掛其穿著律師袍與其妻乙穿著法官袍之合照照片",
      "C. 甲於下班時間，請其客戶丙，至其與乙共同居住之職務宿舍內，討論受委任案件之案情",
      "D. 甲在其律師事務所公開網站介紹中，介紹其經歷曾任檢察官，妻子為現職法官，其具有堅強之法律背景，訴訟百戰百勝"
    ],
    answer: "A",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 108070,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "關於倫理規範中對於律師保密義務之敘述，下列何者正確？",
    options: [
      "A. 律師對當事人所負之保密義務，於彼此間之委任關係結束後免除",
      "B. 律師對於受任內容應嚴守秘密，即使告知委任人並得其同意後，仍不得揭露",
      "C. 律師因承辦案件所知悉當事人之秘密，其同一事務所之其他律師對之不負有保密義務",
      "D. 律師因處理受任事件而被當事人起訴請求返還報酬，於答辯之必要範圍內，得揭露原應保密的受任事件內容"
    ],
    answer: "D",
    keywords: ["保密義務", "誠信義務", "律師酬金", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 108071,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "關於律師與法院及司法人員之間的關係，下列敘述何者錯誤？",
    options: [
      "A. 律師不得惡意詆毀司法人員或司法機關",
      "B. 律師應協助法院發現真實及實現司法正義",
      "C. 律師應扮演監督法官及檢察官的角色，積極參與法官評鑑及檢察官評鑑",
      "D. 地方法院法官得依職權將應付懲戒之律師直接送請律師懲戒委員會處理"
    ],
    answer: "D",
    keywords: ["律師懲戒", "法官評鑑"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 108072,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "甲律師受當事人委託處理遺產糾紛案件，案件終結並結束委任後1 年半，甲律師的事務所要搬遷，新的事務所空間較小，無法存放太多檔案卷宗，甲律師得否銷毀該遺產案件卷證資料？",
    options: [
      "A. 如果新的事務所空間足夠，甲律師就不能銷毀；如果新的事務所空間真的無法容納，就可以銷毀",
      "B. 案件結束後，依法只要保存卷證資料6 個月，既然已經1 年半了，就可以銷毀",
      "C. 案件結束後，律師依倫理規範有義務保存卷證資料2 年，現在只經過1 年半，尚不能銷毀",
      "D. 律師為保護當事人權益，所有的卷證資料永遠都不能銷毀"
    ],
    answer: "C",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 108073,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "A 今年21 歲，因持有毒品遭警方逮捕，A 的父親拜託甲律師協助，同時表示將為兒子支付律師費。下列敘述何者正確？",
    options: [
      "A. 甲不得受任，因為律師不得接受第三人代付律師費",
      "B. 甲不得受任，因為A 已經成年，不得由第三人代付律師費",
      "C. 甲可以受任，但必須先取得A 同意，也必須判定由A 的父親代付律師費，是否會影響自己處理此案件的獨立專業判斷",
      "D. 甲可以受任，只要A 書面授權其父親全權處理委託律師事宜"
    ],
    answer: "C",
    keywords: ["委任關係", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 108074,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "下列有關律師收費之行為，何者違反法律倫理規範？",
    options: [
      "A. 律師在告知委任人並得其同意，且不影響律師獨立專業判斷時，接受第三人代付之律師費",
      "B. 律師就其委任人所委任之民事侵權行為損害賠償訴訟約定後酬",
      "C. 律師對於依法律扶助法接受委任之案件，私下向當事人收取費用",
      "D. 律師於當事人委任時，僅以口頭向其說明以按件計酬方式收費"
    ],
    answer: "C",
    keywords: ["誠信義務", "律師酬金", "風險代理費", "委任關係", "司法獨立", "公益法律服務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 108075,
    year: 108,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "關於甲律師執行職務的行為，下列敘述何者正確？",
    options: [
      "A. 甲所聘僱的助理延誤受任事件的上訴期間，造成委任人的損害，甲毋須負責",
      "B. 甲於處理受任的事件中，教唆證人於作證時不為真實之陳述，甲未違反律師倫理",
      "C. 甲於訴訟進行中，因疏忽未提出對委任人有利之證據，而造成委任人敗訴，甲毋須負責",
      "D. 甲於案件進行中，對於身為刑事被告之委任人的陳述，雖經合理判斷為不實，仍將之提出，不違反律師倫理"
    ],
    answer: "D",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/108-comprehensive-law-1-criminal",
    sourceNote: "108年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 109061,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於專業倫理與專門職業特性關聯之敘述，下列何者正確？",
    options: [
      "A. 因為審判工作重視審慎並追求正確，故不能要求法官追求效率，即使承辦之多數案件嚴重訴訟遲延，也不可懲戒法官",
      "B. 因為律師是為委任人提供專業的服務，所以律師為維護委任人之利益，得不惜詆毀中傷相對人",
      "C. 因為律師需與當事人建立特殊的信賴關係，才能對當事人作出更好的服務，因此律師應注意保守當事人之秘密",
      "D. 因為檢察官負責訴追犯罪，應以訴追犯罪為最主要的任務，在偵查與執行公訴時，不需考慮對被告有利之證據"
    ],
    answer: "C",
    keywords: ["保密義務", "律師懲戒", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 109062,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "關於律師、法官及檢察官言論自由之限制，下列敘述何者錯誤？",
    options: [
      "A. 法官針對重大案件作成判決或裁定後，可由法院召開記者會公開說明",
      "B. 律師在受任案件未獲判決確定時，得因當事人受媒體的不當報導備受責難下，出面發表平衡言論",
      "C. 檢察官為維護公共利益，有必要公開揭露偵查中因執行職務所知悉之事項時，得經機關首長授權後，由發言人公開發布新聞",
      "D. 法官對於自己承辦之案件，不得公開發表可能影響裁判或程序公正之言論，但對於其他法官承辦之案件則不在此限"
    ],
    answer: "D",
    keywords: ["保密義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 109063,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "法官受邀為報社法律新知專欄撰稿，口頭約定利用公餘時間完稿後投稿，無定期供稿之義務，尚無兼職需經同意之疑慮，惟其內容於何種態樣或情形下違反法官倫理規範？",
    options: [
      "A. 介紹及解釋法律規定，並以虛擬案例幫助讀者瞭解相關規定",
      "B. 以自擬讀者提問，再以第一人稱回答之方式，介紹一般性之法律知識",
      "C. 對於具參考價值之確定判決，在隱匿個人資料及簡化案情後，撰文加以介紹及評論",
      "D. 對於讀者提問個案法律糾紛應如何解決，撰文回應分析爭點及提供如何起訴之具體法律建議"
    ],
    answer: "D",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 109064,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "未婚法官甲男應友人之邀前往KTV 唱歌飲酒，隨後由友人買單，並另外付錢給應召酒女乙，由甲載乙前往飯店發生性行為，為警員臨檢查獲。下列敘述何者正確？",
    options: [
      "A. 甲之行為違反法官倫理規範，因未謹言慎行及影響法官形象",
      "B. 甲之行為不違反法官倫理規範，因法官之人格自由、自主權受憲法保障，男歡女愛，不涉品味",
      "C. 甲之行為不違反法官倫理規範，因甲、乙之行為有對價關係，甲並非濫用其職位",
      "D. 甲之行為違反法官倫理規範，因法官在任何情形下跟朋友聚餐均不得由友人付帳"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 109065,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "下列何行為未違背法律倫理規範之要求？",
    options: [
      "A. 法官於案件審理程序中，對於某法律爭議，對當事人表示法官自己所持之法律見解",
      "B. 法官於臨退休前2 個月，將其所有原定之言詞辯論期日的案件，全部取消，改訂退休日後的期日",
      "C. 法官於下班之後，代親友撰寫訴狀並收取一定費用",
      "D. 地方法院院長基於司法監督，為維持審判效率，指示某一法官就某一案件應於10 日內終結之"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 109066,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "A 檢察官在偵辦某案件時，與檢察長見解不同，發生爭論。檢察長口頭命令A，為了統一訴追標準，不應採用A 的法律見解，因此要求A 交出案件，以移轉由其他檢察官處理。本案所涉及的檢察官倫理規範，下列敘述何者正確？",
    options: [
      "A. 檢察長依口頭方式下達指揮監督命令，要求A 改變法律意見，基於檢察一體原則，A 應該接受命令",
      "B. 雖然A 之法律意見與檢察長不同，但檢察長不得以此為由將A 送交檢察官評鑑委員會進行評鑑",
      "C. 檢察長可依據法官法、法院組織法之相關規定，行使職務承繼權，A 應交出案件給其他檢察官偵辦",
      "D. 因為A 的法律意見與檢察長不同，為了維護檢察一體，檢察長本可依據口頭命令要求A 將案件交出"
    ],
    answer: "B",
    keywords: ["法官評鑑", "檢察一體"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 109067,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲與乙係夫妻，甲擔任律師，乙為地方檢察署檢察官，乙獲機關配有檢察官職務宿舍一戶。關於法律倫理之敘述，下列何者正確？",
    options: [
      "A. 甲係律師，因有職務上之利害關係，故甲不得與配偶乙一起居住於乙之檢察官職務宿舍",
      "B. 因甲係律師，必須經乙任職之檢察機關同意，才可以與乙一起居住於檢察官職務宿舍",
      "C. 甲可居住於乙之檢察官職務宿舍，但不可將檢察官職務宿舍作為其律師事務所，但非檢察機關上班時間，甲與其客戶在居住之宿舍內商談案情，則不限制",
      "D. 甲可居住於乙之檢察官職務宿舍，甲之律師事務所同事可以於假日來訪，在乙之檢察官職務宿舍內，與甲閒話家常與餐敘"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 109068,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "現職檢察官甲，深感司法改革需透過法制變革，方能有更積極的作為，考慮加入政黨，以投入立法委員選舉。下列敘述何者正確？",
    options: [
      "A. 憲法保障人民有參政的權利，甲只要遵循法令，任職期間，亦可登記參加立法委員選舉，惟當選後應即辭去檢察官職務",
      "B. 甲可加入政黨，登記參選立法委員，惟不可參加政黨活動，且當選後應即辭去檢察官職務",
      "C. 甲係現職檢察官，不可直接登記參選立法委員，惟可先參加政黨初選，如獲政黨提名，即應先辭去檢察官職務，才可登記參選立法委員",
      "D. 甲若想參加下屆立法委員選舉，需於本屆立法委員任期屆滿1 年前，辭去檢察官職務或依法退休、資遣，才可登記為立法委員候選人"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 109069,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "檢察官因職務上負責追訴犯罪，且為國家執法之公益代表人，因此檢察官發言經常受到新聞媒體之重視，關於檢察官與新聞媒體之敘述，下列何者正確？",
    options: [
      "A. 檢察官依法應遵守偵查不公開之規定，且應謹言慎行，故不可參加任何新聞媒體的談話性節目",
      "B. 檢察官具有法律專業，若非其承辦之案件，可應新聞媒體之邀請，在談話性節目，對社會大眾關切正在偵、審中之重大矚目案件，提出其法律上之觀點進行評論，以提供民眾正確之法律觀念",
      "C. 檢察官可參加新聞媒體之談話性節目，提供一般法令宣導或法治教育，惟仍應謹言慎行；且若有維護公共利益之必要，經所屬機關檢察長授權者，可對偵查中之案件為必要之說明",
      "D. 檢察官對於其偵辦中之個案，發現新聞媒體之報導猜中其未來之偵查作為時，可對新聞媒體釋放假訊息，以避免偵查作為受到影響"
    ],
    answer: "C",
    keywords: ["公益法律服務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 109070,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "A 律師在其名片上印有學經歷，其中有二個經歷是現兼任臺北市政府訴願委員會委員以及財政部訴願委員會委員。A 律師在名片上印有這樣的經歷有無違反現行律師倫理相關規範？",
    options: [
      "A. 只要A 律師確實現在有兼任該些委員就不會違反，否則就有違反",
      "B. 只要A 律師注意，兼任該些委員所處理的案件都有踐行利益衝突迴避程序，就不會違反",
      "C. 有違反，律師現在兼任公務機關之職務，不得在名片上顯示",
      "D. 有違反，依照現行規範，律師只能在名片上列出學歷，不能夠列出任何經歷"
    ],
    answer: "C",
    keywords: ["利益衝突", "法官迴避", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 109071,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "A 律師是某事務所主持律師，為了推展業務在網路上設置事務所網站，在網站上將事務所最近3 年來承辦的案件列出總數量，並有勝訴率達76%的文字。A 律師這樣的網站內容有無違背現行律師倫理相關規範？",
    options: [
      "A. 沒有違反。但是案件數量及勝訴率的數據必須正確，不可以造假",
      "B. 有違反。依照現行規範，律師事務所根本不得利用網站廣告",
      "C. 沒有違反。但是必須把所有案件之案號列在網站資料上，以便當事人查證",
      "D. 有違反。律師不得為推展業務，將訴訟案件之勝訴率列為宣傳內容"
    ],
    answer: "D",
    keywords: ["律師廣告"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 109072,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "甲律師到看守所面會因殺人罪嫌遭羈押之當事人A 時，未經看守所許可，將A 所經營公司之業務報告直接交付給A。甲律師有無違反律師倫理相關規範？",
    options: [
      "A. 沒有違反，因為羈押被告仍有權閱覽私人事務之文件",
      "B. 看情形，如果A 被禁見且禁止通信就不能；如果沒有禁見及禁止通信，甲律師就可以交付",
      "C. 看情形，如果是和案情無關的業務報告，甲律師就可以交付；如果有串供之虞，就不能交付",
      "D. 有違反，甲律師去看守所接見羈押中的被告，除了和案情有關之書狀傳遞外，不能交付任何物品給羈押的當事人"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 109073,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "甲律師曾在擔任檢察官時，於一件車禍案件，蒞庭執行公訴職務。之後該車禍案件的被害人A 向加害人B 請求民事損害賠償，A 想委任甲律師擔任該民事案件之訴訟代理人，甲律師能不能接受委任？",
    options: [
      "A. 甲律師曾在該車禍案擔任蒞庭檢察官，不能接受與該案件相同或實質相關案件任何一方之委任",
      "B. 如果可以得到B 書面同意就可以接受委任，否則就不可以",
      "C. 甲律師如果離開檢察官職務後已經滿3 年就可以接受委任，3 年內就不可以",
      "D. 甲律師擔任檢察官承辦的是刑事部分，現在涉訟的是民事部分，二者是不同的訴訟程序，甲律師可以接受委任"
    ],
    answer: "A",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 109074,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲律師承辦下列案件，何者不違反律師倫理？",
    options: [
      "A. 就專利侵權案件，與原告約定勝訴後以賠償金額之一定比例為後酬",
      "B. 就離婚案件，與原告約定裁判離婚後以所得贍養費五分之一為後酬",
      "C. 就詐欺罪之刑事案件，與被告約定若無罪釋放，以詐欺所得金額四分之一為後酬",
      "D. 在土地買賣案件訴訟中，因當事人發生財務困難，與當事人約好由甲律師購買該案之土地，再由甲律師接手要被告拆屋還地"
    ],
    answer: "A",
    keywords: ["律師酬金", "風險代理費"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 109075,
    year: 109,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "甲律師和乙律師為親兄弟，但平時很少往來感情也很不好，甲律師受僱於A 事務所，乙律師受僱於B事務所，於同一案件中，甲、乙分別受原、被告的委任，是否有違律師倫理規範？",
    options: [
      "A. 甲、乙律師之間如能保持執行職務之獨立性，其接受委任即不違反律師倫理規範",
      "B. 因為甲、乙律師平常沒有往來感情也不好，不構成利害衝突，因此可以分別受任",
      "C. 因為甲、乙律師間係二親等血親，接受同一案件相對造之委任，違反律師倫理規範",
      "D. 因為甲、乙律師分屬不同事務所，沒有利益衝突的問題，因此可以分別受任"
    ],
    answer: "C",
    keywords: ["利益衝突", "委任關係", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/109-comprehensive-law-1-criminal",
    sourceNote: "109年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 110061,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "下列那位法官在網路上的行為，並沒有違反相關的法官倫理規範？",
    options: [
      "A. 甲法官私下匿名設置部落格，撰寫文章，同時接受廠商給予的費用，發文宣傳特定產品",
      "B. 乙法官在網路上公開簽名支持某政治人物競選公職",
      "C. 丙法官公開在社群網站上貼文，評論某個已定讞判決之法律見解",
      "D. 丁法官公開在社群網站上貼文，敘述自己審理某個案的當事人姓名與細節，並引為笑談"
    ],
    answer: "C",
    keywords: ["庭外接觸"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 110062,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "法官下列行為，何者未違反法官倫理？",
    options: [
      "A. 甲法官係某二審案件之受命法官，因認上訴人提起上訴顯無理由，對上訴人闡釋這個案子一審量刑結果對其而言已屬有利，絕不可能再改判，請那個律師來辯護都沒有用",
      "B. 乙法官於庭審中發現當事人間與本案請求相關連之爭執，已另案繫屬於法院，為追求效率，當庭打電話與該他案件之承辦法官討論兩案事實如何認定及判決",
      "C. 丙法官於審理期日，因認證人所述偏頗不實，當庭向證人表示做人說話要憑良心，說謊會下地獄，希望證人想清楚再回答後，就已詰問過之待證事項依職權再次詢問證人",
      "D. 丁法官於獨任審判時，發現旁聽席中被告之母親正用手機錄影開庭情形，經制止後不從，遂禁止其旁聽"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 110063,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "下列法官職務外之行為，何者未違反法官倫理？",
    options: [
      "A. 法官應其兼任教職大學學生之請求，對於無利害關係之機構，具名銜為學生撰寫求職介紹信",
      "B. 兼任司法行政職之法官，因受某被移送職務法庭懲戒之法官要求，撰寫表明職銜之意見書，向職務法庭擔保該法官之品操無虞，請求勿予懲處",
      "C. 法官向兼任司法行政職之法官要求優先安排其子女至法院擔任志工，以完成子女就讀學校要求之志工時數",
      "D. 法官購屋時表明其職位身分，請賣方給與特別的折扣優惠"
    ],
    answer: "A",
    keywords: ["律師懲戒", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 110064,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "關於法官倫理之敘述，下列何者錯誤？",
    options: [
      "A. 法官不得為刑事訴訟之自訴代理人",
      "B. 法官不得為家庭成員提供法律意見",
      "C. 法官非經任職機關同意，不得在私立大學兼任教職",
      "D. 法官於任職期間不得為任何政治團體募款"
    ],
    answer: "B",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 110065,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "法官倫理要求法官應避免不當或易被認為不當的行為，下列之規範意旨何者正確？",
    options: [
      "A. 職務內外之一切行為，如易被認為不當者，法官即應避免為之，以降低或減少法官審判犯錯之機率，確保司法的正確性",
      "B. 職務上一切行為，如易被認為不當者，法官即應避免為之，以降低或減少法官犯錯之機率，維護司法優良之形象；至於職務以外之活動則不在此限，以免過度限制法官之自由",
      "C. 職務內外之一切行為，如易被認為不當者，法官即應避免為之，以確保法官之所有言行由通情達理之旁觀者觀之，亦無可指摘之程度，其目的係為維繫公眾對於司法之信任",
      "D. 職務上一切行為，如易被認為不當者，法官即應避免為之，以彰顯法官之素質優良，判斷無失，具備足以勝任審判職務之卓越能力。至於職務外之活動，因與法官職務之執行無關，毋須苛求"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 110066,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "法官、檢察官、律師之職務性質各有不同，關於法律倫理規範之敘述，下列何者正確？",
    options: [
      "A. 法官與檢察官均屬司法人員，為求公正執法，不受任何外力干涉，均受審判獨立之保障",
      "B. 檢察官與被告辯護律師，在刑事審判上係屬對立地位，為避免發生弊端，在審判中不可有任何協商",
      "C. 檢察官、法官與被告辯護律師在刑事審判中，雖各司其職，但仍應相互協同致力實現人權保障或司法正義",
      "D. 法官、檢察官與律師，在執行職務上，常有相互制衡、利害衝突的迴避事項，故為免發生法律倫理衝突，法官、檢察官、律師，私下不宜交往或成為男、女朋友"
    ],
    answer: "C",
    keywords: ["利益衝突", "委任關係", "法官迴避", "司法獨立", "庭外接觸", "刑事辯護", "道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 110067,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲檢察官與乙律師係夫妻，下列敘述何者不違反法律倫理規範之要求？",
    options: [
      "A. 乙律師與甲檢察官共同居住在甲之檢察官職務宿舍內",
      "B. 甲檢察官於下班時間在家中幫助配偶乙律師撰寫律師答辯狀",
      "C. 乙律師在其配偶甲檢察官服務之檢察署等候開庭時，甲檢察官請法警帶領乙律師先在甲檢察官與其他檢察官共用之辦公室休息等待",
      "D. 乙律師深夜接受當事人委任為辯護人，因時間急迫，在甲檢察官同意外出迴避後，請當事人至其與甲檢察官居住之檢察官職務宿舍內商討案情"
    ],
    answer: "A",
    keywords: ["忠誠義務", "委任關係", "法官迴避", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 110068,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "甲檢察官與乙律師為大學同學，兩家的小孩目前就讀同一所學校。下列敘述何者錯誤？",
    options: [
      "A. 甲和乙可以共同出席學校的親子日活動",
      "B. 甲偵辦某一背信案件，被告辯護人是乙，如無其他特別交往密切情事，甲無須自請迴避",
      "C. 乙打算參選市議員，甲可以出席乙的造勢晚會，擔任司法界推薦人",
      "D. 如甲現在所承辦案件無與乙律師所承辦案件相關者，甲和乙可以共同主辦大學同學會"
    ],
    answer: "C",
    keywords: ["忠誠義務", "法官迴避", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 110069,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "甲律師從未承辦過涉及違反證券交易法之案件，某日其客戶A 因涉及內線交易而遭訴請民事損害賠償，甲受任為A 之訴訟代理人，代理出庭及撰寫書狀，甲有無違反律師倫理？",
    options: [
      "A. 已違反律師倫理，因甲無論如何不得承辦其無經驗之業務，以免影響當事人權益",
      "B. 即使A 詢問甲有無此類案件的承辦經驗，甲誠實告知後而A 仍決定委任甲，甲仍違反律師倫理",
      "C. 若甲並未以不實之資訊誤導A 而獲取委任，但因甲無承辦相關案件的經驗，甲之受任仍違反律師倫理",
      "D. 甲固然不必主動告知A 其有無承辦類似案件之經驗，但其接任後，如努力精研此方面之法令及實務，即不違反律師倫理規範"
    ],
    answer: "D",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 110070,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "有關律師為推展業務，可於其事務所網頁中揭載之內容，下列敘述何者錯誤？",
    options: [
      "A. 過去及現在之學歷",
      "B. 專業擅長案件領域",
      "C. 兼課學校之名稱、教授科目及職稱",
      "D. 兼任法官評鑑委員會委員"
    ],
    answer: "D",
    keywords: ["法官評鑑", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 110071,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "甲律師在處理A 的車禍案件時，意外發現車子登記在A 的婚外情對象B 的名下，因而得知他們兩人的婚外情關係，後來甲律師處理另外一件債權糾紛案，發現如果將大家所不知道的A 和B 之間的婚外情關係揭發出來，會有助於該債權糾紛訴訟的事實原因說明。甲律師得否揭露A 和B 的關係？",
    options: [
      "A. 可以，A 和B 的關係和車禍案件的案情爭點無關，不在保密範圍內，可以揭露",
      "B. 不可以，所有辦案得知的資訊及秘密皆在律師的保密範圍內，除非A 同意，否則不可以揭露",
      "C. 除非A 有特別交代不可以洩漏出去，否則原則上可以",
      "D. 因為和當事人名譽有關係，所以不可以，只有和當事人名譽無關的秘密才可以洩漏"
    ],
    answer: "B",
    keywords: ["保密義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 110072,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "甲律師曾經擔任法官，有當事人找甲律師承辦訴訟案件，向甲律師明言，聽說甲律師和承辦法官熟識，特別前來委任，希望甲律師利用之前的同事情誼爭取勝訴，甲律師為了接案，回答說他跟承辦法官確實很熟，他會想想辦法。實際上甲律師並沒有私下去找承辦法官，甲律師有沒有違反律師倫理規範？",
    options: [
      "A. 甲律師並沒有答應一定會去找承辦法官，所以沒有違反",
      "B. 因為甲律師確實沒有去找承辦法官，也沒有實際影響司法的行為，所以沒有違反",
      "C. 只要與承辦法官有同事關係的案件，律師都應該迴避而不能接受委任，甲律師沒有迴避所以違反律師倫理規範",
      "D. 甲律師已經暗示其有不當影響司法的能力，即使實際上未影響司法，亦已違反律師倫理規範"
    ],
    answer: "D",
    keywords: ["委任關係", "法官迴避", "庭外接觸", "前任委任人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 110073,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "黑社會角頭老大A 惹上恐嚇糾紛，想要小弟B 出來頂罪。A 要求熟識的甲律師擔任B 的辯護人，律師費用由A 支付，不過A 要求甲律師要勸B 承擔罪責不可以中途反悔。甲律師能不能收取A 給付的律師費用？",
    options: [
      "A. 只要有人付律師費用就好，甲律師可以接受A 支付律師費用",
      "B. 如果B 自己同意承擔罪責，就可以；但如果甲律師發現B 是被詐欺脅迫的，就不可以",
      "C. 非犯罪行為人承擔他人罪責，為法律所不允許，要B 承擔刑責影響甲律師獨立專業判斷，甲律師不可收受A 代付律師費用",
      "D. 甲律師僅可以收取A 代付B 的律師費用，但不可以進一步和A 另外約定收受後酬"
    ],
    answer: "C",
    keywords: ["忠誠義務", "律師酬金", "風險代理費", "司法獨立", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 110074,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲律師從事下列行為，何者不違反律師倫理？",
    options: [
      "A. 甲律師告知受家暴客戶A 其處理離婚事件經驗豐富，保證必得讓法院將對未成年子女之親權行使及負擔判給A",
      "B. 在先前任職之X 事務所得知當事人B 之機密資訊，於案件完全結束後，甲離職轉任Y 事務所，而在Y 事務所處理的乙控告B 事件中，將B 的機密資訊揭露給Y 事務所",
      "C. 甲律師未具備專利法相關知識與經驗，但對外宣稱為專利法專家並以此招攬當事人",
      "D. 在法院閱卷之後，到看守所對刑事案件當事人告知卷宗筆錄內容，使當事人得知悉卷證之內容"
    ],
    answer: "D",
    keywords: ["保密義務", "誠信義務", "律師廣告", "前任委任人", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 110075,
    year: 110,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "債權人A 委託不同事務所之甲律師及乙律師擔任共同訴訟代理人。但因為A 與甲律師較熟識，所以只提供證據資料給甲律師。乙律師向甲律師請求提供該些證據資料，甲律師拒絕提供給乙律師。甲律師有無違反律師倫理相關規範？",
    options: [
      "A. 沒有，乙律師應該直接向當事人索取資料，不可以向甲律師要求",
      "B. 沒有，因為乙律師和甲律師為不同事務所，所以甲律師不需提供",
      "C. 有，共同受任處理同一事件之律師，應盡力互相協調合作，甲律師應該提供證據資料給乙律師",
      "D. 如果甲律師與乙律師熟識，則可以提供；如果是第一次合作，彼此沒有信賴關係則可以不必提供"
    ],
    answer: "C",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/110-comprehensive-law-1-criminal",
    sourceNote: "110年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 111061,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於法律專業倫理受規範者之職業特性，下列敘述何者錯誤？",
    options: [
      "A. 律師職務為公共職務",
      "B. 律師業具有自由獨立性",
      "C. 基於裁判安定性，法官應受高等法院法律座談會研究結論之拘束",
      "D. 檢察官職務包括公益代表人之性質"
    ],
    answer: "C",
    keywords: ["司法獨立", "公益法律服務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 111062,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "甲法官承審男性主管與女性助理間性騷擾爭議，依法不公開審理，宣判結果因與社會預期落差而遭批評。甲認為輿論抨擊與事實不符，同意接受媒體邀訪澄清誤解。甲於訪談中表示卷證顯示雙方互動細節（牽手散步、閉眼親吻），足認「並非性騷擾，而係相互試探之職場戀情，婚外情未遂」等語，然上述言論並未記載於判決書。甲之行為是否違反法官倫理規範？",
    options: [
      "A. 違反。因為甲未考慮職場權力不對等，認定不構成性騷擾，見解錯誤",
      "B. 違反。因為甲不應揭露其因職務機會所知悉之非公開訊息",
      "C. 不違反。因為甲亦享有言論自由，且其接受訪談係為促進司法公信",
      "D. 不違反。因為甲依法獨立審判，且其未將訪談言論記載於判決書"
    ],
    answer: "B",
    keywords: ["保密義務", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 111063,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "甲、乙、丙、丁四人是大學法律系同學，甲於102 年開始擔任法官職務，乙和丙則於同年開始擔任執業律師，丁則於乙、丙共同經營之A 律師事務所擔任法務助理。110 年2 月甲和丁結婚，並於同年買房、生子，下列甲法官所為，何者違反法官倫理規範？",
    options: [
      "A. 甲和丁結婚時，乙和丙出席婚宴並各自包紅包3 千元，並於甲、丁買房入厝各自致贈甲賀禮3 千元，生子時又各自贈與甲賀禮3 千元。上述禮金甲均未申報其長官或主管單位",
      "B. 丁於110 年3 月間因車禍事故被訴過失傷害和損害賠償，甲無償為丁提供法律意見並撰寫答辯狀",
      "C. 甲執行法官職務時，雖知悉乙律師確有違反律師倫理規範之行為，但認此屬律師倫理規範範疇，並未通知乙所屬之律師公會",
      "D. 甲和乙、丙同是法律系籃球隊隊員，畢業後，乙、丙在A 事務所無案件繫屬於甲法官時，每月固定邀約甲一起在某大學籃球場打籃球"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 111064,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "甲法官受邀前往某私立中學，就「法律與生活」發表演講，下列敘述何者正確？",
    options: [
      "A. 甲法官絕不得受邀發表演講",
      "B. 甲法官如受邀發表演講，不得受領任何報酬",
      "C. 甲法官受邀發表演講，須與職務直接相關事項始屬合法",
      "D. 甲法官得收受演講費，但逾一定金額者，應依司法院之規定申報"
    ],
    answer: "D",
    keywords: ["律師酬金"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 111065,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "關於法官職務監督之敘述，下列何者正確？",
    options: [
      "A. 法官所受職務監督包括確保法官裁判正確、判決前及時糾正裁判違誤及督促法官依法迅速審判",
      "B. 為發揮法官自治之精神，法官會議對於對法官為職務監督之處分有建議權",
      "C. 最高法院院長監督該法院與所轄高等法院、地方法院及其分院法官",
      "D. 法官認職務監督危及其審判獨立時，得請求公務人員保障暨培訓委員會撤銷之"
    ],
    answer: "B",
    keywords: ["司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 111066,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "關於檢察官行為之敘述，下列何者符合檢察官倫理？",
    options: [
      "A. 檢察官為求公正客觀，並受國民之信賴，除工作上之同事外，不宜與其他人士往來交友，如大學同學擔任律師者，為避免利益衝突及民眾不當聯想，任職檢察官期間，應斷絕往來，不可聯絡",
      "B. 檢察官仍有正常的社交生活，可結交朋友，只要非其承辦案件之當事人，與友人一同餐敘、或友人涉訟提供友人法律諮詢撰擬意見或陪同友人拜訪熟識之律師事務所介紹委任律師，並無不當",
      "C. 檢察官、律師、法官，在法庭上各司其職，相互制衡也相互尊重，均屬司法人員，下庭後，受同樣的倫理規範要求，性質並無不同",
      "D. 未婚的檢察官與律師，雖各有其職，但仍可自由交往談戀愛、結婚，並無不可"
    ],
    answer: "D",
    keywords: ["利益衝突", "委任關係", "道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 111067,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "檢察官執行職務，應不畏權勢，公正行使職權，是社會大眾的期待，此為檢察官在職權行使上應有之認知。下列何者符合檢察官倫理之要求？",
    options: [
      "A. 檢察官執行職務，除受法務部部長個案指揮外，應摒除一切外力干涉",
      "B. 檢察官執行職務，不管任何人，都不得干涉",
      "C. 檢察官執行職務，除受檢察一體之拘束外，對外獨立行使職權",
      "D. 檢察官執行職務，除受法院指揮不得獨立行使職權外，其餘均應獨立行使職權"
    ],
    answer: "C",
    keywords: ["司法獨立", "檢察一體"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 111068,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "有關檢察官之懲戒程序，下列敘述何者錯誤？",
    options: [
      "A. 甲檢察官於偵查中對被告辯護律師X 當庭冷嘲熱諷，致使X 相當難堪且影響被告對X 之觀感，X可以書面具狀請求檢察官評鑑委員會對甲進行個案評鑑，以進行懲戒程序之發動",
      "B. 若甲檢察官經檢察官評鑑委員會認定並無法定應付個案評鑑情事，仍得移請甲之職務監督權人為命令促其注意",
      "C. 檢察官之懲戒種類包括撤職、免除檢察官職務及申誡等",
      "D. 若懲戒法院職務法庭審理後認定甲檢察官違反檢察官倫理規範且情節重大而應受懲戒，雖甲當時已經退休，仍得為減少其退休金之懲戒處分"
    ],
    answer: "A",
    keywords: ["律師懲戒", "法官評鑑", "檢察一體"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 111069,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "律師執行職務之行為，下列何者違反律師倫理？",
    options: [
      "A. 代委任人召開記者會表示某判決認事用法不當，將提出上訴",
      "B. 向委任人表示：「我與承審法官是30 年好友，經常餐聚，感情很好」",
      "C. 因合理判斷當事人提供之本票係偽造，故拒絕依當事人指示提交予民事法院",
      "D. 因為證人A 之證言可能對律師之委任人不利，告知證人A 其得拒絕證言之相關法律規定"
    ],
    answer: "B",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 111070,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "關於律師於刑事案件執行職務時之真實義務，下列敘述何者正確？",
    options: [
      "A. 於案件進行中，被告之律師既然合理懷疑被告之陳述可能不實，就應該拒絕向法院提出之",
      "B. 律師得協助被告與證人做開庭準備，要求原本說法與被告不一致的證人統一口徑，改依據律師準備的腳本作陳述",
      "C. 對於其陳述可能對自己當事人不利的證人，只要沒有威脅利誘，律師得動之以情，要求其受傳喚時不要出庭作證",
      "D. 於案件偵查中，被告律師即使推測檢調人員即將發動偵查，仍不得教唆被告儘速湮滅證據"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 111071,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "下列何者未違反律師倫理規範？",
    options: [
      "A. 律師為維護司法尊嚴，在掌握司法人員貪污證據時不得揭露，以免大眾不信任司法",
      "B. 律師就自己承辦的案件，在報章上發表評論，不附理由攻擊檢察官迎合政治人物而濫行起訴，法官貪贓枉法裁判",
      "C. 律師將自己受委任之案件，未得到當事人同意，即轉包給其他事務所，只收取些許微薄的介紹費",
      "D. 律師在承辦行政訴訟案件中，發覺委任人所提出之證據明顯不實而拒絕向法院提出"
    ],
    answer: "D",
    keywords: ["保密義務", "委任關係", "介紹費"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 111072,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "A 女想與其夫B 離婚而向甲律師諮詢，甲律師建議A 女可以委請甲律師代擬存證信函請B 男出面。A 女稱其回家考慮是否進行，未支付律師費；A 女事後未委託甲律師辦理。2 年後，A 女委請乙律師對B 男提起離婚之訴。B 男委請甲律師為訴訟代理人。關於甲律師接受B 男委任之行為，下列敘述何者正確？",
    options: [
      "A. 因A 女未支付甲律師費用亦未委託甲律師寫存證信函，甲律師代理B 男無利害衝突",
      "B. 甲律師代理B 男有利害衝突，若A 女及乙律師在開庭時均未反對，可推定A 女已同意甲律師代理B 男，A 女嗣後不得主張甲律師違反利害衝突相關規定",
      "C. 如法官未反對甲律師可以代理B 男，縱甲律師有利害衝突也可代理B 男",
      "D. 除非告知A 女並得其書面同意，否則甲律師不得代理B 男"
    ],
    answer: "D",
    keywords: ["利益衝突", "誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 111073,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "甲律師曾為A 規劃不動產買賣契約，該案件法律程序已終結。甲律師目前代理B 公司向C 提起營業祕密訴訟。甲律師之下列行為，何者不違反律師倫理？",
    options: [
      "A. 代理B 公司，向A 提起商標侵權訴訟",
      "B. 代理A 向B 公司提起請求返還貨款訴訟",
      "C. 代理A 的離婚訴訟，約定若勝訴得收取贍養費總金額四分之一作為律師費",
      "D. 代理C 向B 公司提起勞資給付之訴"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 111074,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "律師執行業務，下列何者不違反利益衝突？",
    options: [
      "A. 甲律師受A 之委任，對B 提起傷害罪之告訴，與其合署律師事務所之乙律師受B 之委任擔任其辯護人",
      "B. 甲律師受A 之委任，對B 提起侵權行為損害賠償之訴，與其合夥事務所之乙律師受B 委任，在該侵權行為所涉刑事案件中擔任B 之辯護人",
      "C. 甲律師擔任A 與B 間仲裁事件之仲裁人，仲裁判斷作成後，受A 之委任提起撤銷該仲裁判斷之訴，並已得A 與B 之同意",
      "D. 甲律師之配偶擔任社區管委會之主委，該社區之區分所有權人A 違反社區規約，管委會欲對A 起訴，甲律師接受該管委會之委任對A 提起訴訟"
    ],
    answer: "D",
    keywords: ["利益衝突", "忠誠義務", "委任關係", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 111075,
    year: 111,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "關於律師與事件相對人之行為，下列情形何者未違反律師倫理規範？",
    options: [
      "A. A 與B 之離婚調解事件，代理A 之甲律師認為代理B 之乙律師難以溝通，故私下自行聯絡B 進行協商",
      "B. A 與B 之民事訴訟，代理A 之甲律師認為和解對A 較為有利，雖然A 明白反對和解，甲仍然未經A 授權便自行與B 洽談和解",
      "C. A 與B 之離婚後子女監護事件，代理A 之甲律師於開庭時提出B 有不適任照顧子女之事證，令B覺得受到詆譭中傷",
      "D. A 與B 之專利侵權民事訴訟中，代理A 之甲律師明知刑事告訴之部分B 已獲不起訴處分確定，卻仍發信通知B 之客戶表示B 觸犯刑責"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/111-comprehensive-law-1-criminal",
    sourceNote: "111年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 112061,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於律師專業倫理與一般倫理間之關係，下列敘述何者正確？",
    options: [
      "A. 律師違反專業倫理規範，與一般人違反一般倫理規範一樣，並不需要由特定機構經特定程序來認定",
      "B. 因為律師倫理規範的要求較高，因此律師只要遵守專業倫理規範即可，不需要遵守一般倫理規範",
      "C. 違反律師專業倫理，律師有可能因此喪失執業資格；只違反一般倫理而未違法，基本上不會讓律師喪失執業資格",
      "D. 律師須尊重其他律師，這是基於人與人相互尊重的道理，僅屬於一般倫理，不屬於律師專業倫理規範的內容"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 112062,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "A 因車禍過失傷害案件，經地方法院判決有罪後提起上訴，二審法院由甲擔任受命法官、乙擔任審判長，丙擔任陪席法官。評議期間甲主張一審判決無誤，應駁回上訴；乙主張應改判無罪，並稱A 之父親為法界同僚，審理期間曾來拜訪關心，告知業經和解，希望改判無罪。甲、乙各自堅持己見未達共識，因丙支持乙之見解，該案改判無罪。關於上述爭議，下列敘述何者正確？",
    options: [
      "A. 甲之意見與審判長乙不同，甲應得請求迴避",
      "B. 乙因受同僚請託，且自認對系爭案件掌握完全，基於審判長職責，得要求甲及丙均配合同意改判無罪",
      "C. 丙既知悉確有法界同僚向乙請託關心，自應通知相關職務監督權人",
      "D. 甲、乙、丙各自堅持法律確信，評議之後，甲得因評議結果與其見解不同，拒絕書寫判決書"
    ],
    answer: "C",
    keywords: ["誠信義務", "法官迴避"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 112063,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "關於法官與檢察官公開評論法院審理中的刑事個案之言論自由問題，下列敘述何者正確？",
    options: [
      "A. 既然已經偵查終結並對被告予以起訴，檢察官就可以公開評論該被告實屬罪大惡極，利用輿論要求法官對之判處重刑",
      "B. 只要不是該案承審法官，其他法官都可以自由公開評論該案應該如何審理與量刑，不受限制",
      "C. 該案承審法官可以在僅限司法官可登入的網路法官論壇上面，預先說明自己心證並請司法官學長姐幫忙集思廣益",
      "D. 不僅承審法官對於繫屬中的案件對外發表評論的言論自由受一定之限制，即使承審法官配屬之書記官亦受限制"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 112064,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "法官參與下列之活動，何者不違反法官倫理？",
    options: [
      "A. 至公職候選人之政見發表會聆聽候選人發表政見",
      "B. 於罷免某立法委員之罷免案徵求連署期間，在辦公室內徵求其他法官同事參與連署",
      "C. 某政治人物徵求連署以登記為總統候選人時，參與其連署並公開表示支持",
      "D. 利用公餘之時間為支持之公職候選人募款"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 112065,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "某法官於審理甲訴請乙損害賠償之第二審程序中，在準備程序中對上訴人乙表示：「我看你分明是在浪費司法資源，胡亂上訴，你最好趕快和解，否則，我一定判你賠更多」，下列敘述何者正確？",
    options: [
      "A. 如法官是為避免訟累而告知乙時，並未違反法官倫理",
      "B. 如僅乙提起上訴時，法官為訴訟經濟得為上開表示，並未違反法官倫理",
      "C. 如甲、乙均提起上訴時，法官為上開表示，仍屬其心證公開權限範圍，並未違反法官倫理",
      "D. 法官以不當方式要求當事人和解，其行為違反法官倫理"
    ],
    answer: "D",
    keywords: ["誠信義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 112066,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲於102 年擔任A 地檢署檢察官職務，於108 年1 月因生涯規劃而辭任檢察官並轉任律師，下列甲之行為，何者不違反法律倫理規範？",
    options: [
      "A. 甲於104 年出席其大學同學乙開設律師事務所舉辦之尾牙餐會，抽中價值新臺幣3 萬元之禮券，甲未申報其主管單位",
      "B. 甲於110 年3 月接受當事人委任並於A 地檢署執行律師業務",
      "C. 甲於103 年間辦理久未聯絡之高中同學因車禍案件被告過失傷害案件，未經告訴人同意下，依職權對車輛行車事故鑑定委員會之鑑定送請覆議，以釐清告訴人是否超速之待證事實",
      "D. 甲於105 年間，經常自行無償參加新聞媒體談話性節目，對於非其偵辦之現在繫屬案件，就證據調查及檢察官可能之處分提出評論及預測"
    ],
    answer: "C",
    keywords: ["委任關係", "轉任律師限制"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 112067,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "檢察官甲正偵辦某市政府公務人員涉嫌貪瀆弊案，甲於貪瀆弊案爆發前即受所屬檢察署指派擔任該市政府主辦之廉政研討會中擔任主講人。下列敘述何者錯誤？",
    options: [
      "A. 為求程序公正，無論如何甲都不可參加該研討會",
      "B. 甲經機關指派主講，如不涉及偵辦之個案，並不違反檢察官倫理規範",
      "C. 甲經機關指派主講，如不涉及偵辦個案，甲前往主講，可依規定領取車馬費",
      "D. 甲認為講題內容可能涉及其所偵辦的個案時，應主動簽請機關改派其他檢察官前往主講"
    ],
    answer: "A",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 112068,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "下列何者非屬檢察官應交付個案評鑑之情形？",
    options: [
      "A. 檢察官甲在任職期間，辦理留職停薪並交接職務後，登記參與立法委員選舉",
      "B. 被告B 涉嫌以斧頭砍斷被害人A 之手臂，A 大量失血經急救後幸免於難，檢察官甲起訴被告B 涉嫌殺人未遂，法院審理後，經判決確定，認定被告B 所為係犯重傷害罪",
      "C. 檢察官甲應其畢業之私立大學母校邀請，兼任學校董事，並經常在學校董事會提出法律意見，要求學校配合辦理",
      "D. 檢察官甲於餐廳用餐飲酒後酒後失控，認餐廳服務員C 服務不周，對C 咒罵髒話，並企圖毆打C，經友人勸阻後方作罷，C 亦不追究，但現場情狀，經在現場用餐之某電視台記者D 目擊，以手機拍下並於電視新聞報導"
    ],
    answer: "B",
    keywords: ["法官評鑑", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 112069,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "A 當事人想要委請甲律師幫他打官司，甲律師研究案情後，發覺所有的裁判及學說都對A 有利，甲應該如何對A 提出法律分析？",
    options: [
      "A. 既然裁判及學說都對A 有利，甲應該據實說明並打包票說官司百分百一定會勝訴，以增加A 打官司的信心",
      "B. 不要向A 說明學說及裁判都有利，不然A 會覺得不必委請律師還是會贏，甲就會失去A 這個客戶",
      "C. 雖然裁判及學說都對A 有利，甲除了說明有利點之外，還要說明訴訟輸贏的因素很多，打官司要謹慎為之",
      "D. 甲除了說明裁判及學說之外，還要補充說明甲律師自己過去打官司的勝訴比率，讓A 能夠全盤瞭解甲律師的能力"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 112070,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "甲律師承辦當事人A 所涉的傷害刑事案件，A 的好友B 被對造傳喚出庭作證，因B 所看到的事實對A 不利，A 要求甲律師勸B 不要出庭，甲律師可不可以勸B 不要出庭作證？",
    options: [
      "A. 可以，因為律師負忠實義務，任何律師都應該這麼做",
      "B. 不可以，但是如果A 和B 都寫下切結同意書就可以",
      "C. 不可以，因為律師不可以為幫助當事人，促使已受傳喚的證人不出庭作證",
      "D. 可以，因為律師應聽從當事人指示，謀求當事人最大利益"
    ],
    answer: "C",
    keywords: ["忠誠義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 112071,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "甲律師承辦的案件開庭時，審判長辱罵甲律師是人渣，甲律師當場異議，但是審判長不予理會。開完庭後，甲律師即將開庭受侮辱的情節透露給媒體。甲律師透露給媒體的行為有無違反律師倫理規範？",
    options: [
      "A. 有違反，法院開庭的實質內容是不公開的，所以未經准許不得錄影、錄音，更不得將開庭情況透露給媒體",
      "B. 審判長之態度確有違法官應有之行為規範，甲律師對此情事揭發，並不違反律師倫理規範",
      "C. 在訴訟程序進行當中，甲律師不得做此行為，要等到全案終結確定後，甲律師才能揭發",
      "D. 甲律師只能夠秘密向法院院長或向所屬律師公會舉發，但絕不能透露給媒體"
    ],
    answer: "B",
    keywords: ["保密義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 112072,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "A 女B 男、C 男D 女為兩對夫妻，A 女與C 男發生性關係。因此B 男委任甲律師對C 男起訴請求通姦之民事賠償。此外，D 女亦委任乙律師對A 女起訴請求通姦之民事賠償，A 女則委任甲律師應訴。關於律師倫理之敘述，下列何者正確？",
    options: [
      "A. 甲違反律師倫理，因為夫妻絕對不可共用同一律師",
      "B. 甲違反律師倫理，因為兩事件有實質關聯，且利害關係及律師角色可能衝突",
      "C. 只要甲曾經對B 說明可能的利害關係衝突，且取得B 的口頭同意，就可以同時代理A 及B",
      "D. 只要甲實際開庭時將其中一件複委任給其受僱律師丙來代理，就不會違反律師倫理"
    ],
    answer: "B",
    keywords: ["利益衝突", "委任關係", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 112073,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "A 的年邁母親B 因為與他人的債務糾紛需要打官司，A 因此和B 一起到甲律師事務所共同商談，B 表示要委任甲律師代理，A 和B 共同向甲律師表明律師費用由A 支付。甲律師可不可以向A 收取該律師費用？",
    options: [
      "A. 不可以，律師只能向委任人收取酬勞，酬勞絕對不能由第三人代付",
      "B. 如甲律師依具體狀況判斷向A 收取費用不會影響律師的獨立專業判斷，即可由A 代付律師費用",
      "C. A 可以經由B 的帳戶匯款，但無論在任何情況，絕對不可以由A 直接付款",
      "D. 如果A 要求甲律師開發票就不可以由A 代付律師費，如果A 不要求開發票就可以"
    ],
    answer: "B",
    keywords: ["委任關係", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 112074,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲律師擔任A 公司的顧問，因而得知A 公司計畫在某個區域申請核准進行大型土地開發案，想趁地主都不知道有開發案時低價收購土地。剛好其中有一個地主乙是甲律師的小學同學，在同學會上和甲同桌，甲律師能不能夠告知乙有關開發案計畫並勸乙不要現在賣土地？",
    options: [
      "A. 可以，基於同學的情誼，甲律師本來就有義務告知",
      "B. 可以，A 公司的開發案會讓現在賣地的地主損失很大，甲律師基於律師的良心本來就應該揭露",
      "C. 律師應該為當事人保守秘密，所以甲律師不可以將開發案的計畫洩露",
      "D. 如地主乙委託甲律師處理土地買賣事宜，就可以。否則就不可以"
    ],
    answer: "C",
    keywords: ["保密義務", "誠信義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 112075,
    year: 112,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "關於甲受僱律師離開原任職的X 法律事務所自行執業時，其下列行為何者較符合律師倫理？",
    options: [
      "A. 甲電話通知過去自己承辦案件的當事人「日後毋需再委任X 法律事務所，請改為直接聯絡我處理案件」",
      "B. 甲離職前主動聯絡其當事人說明自己無法繼續承辦其案件，並告知會將案件資料及準備進度交接給該事務所的乙律師",
      "C. 甲原本承辦的案件於其離職之後尚未訴訟終結，當事人聯絡詢問相關訴訟進度，甲表示「我已離職，這件訴訟完全不關我的事」",
      "D. 甲離職時將X 法律事務所所有客戶名單造冊，將甲開幕邀請函寄發該等客戶，函中並註記歡迎轉委任甲律師"
    ],
    answer: "B",
    keywords: ["誠信義務", "委任關係", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/112-comprehensive-law-1-criminal",
    sourceNote: "112年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 113061,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於法官、檢察官及律師依照專業倫理應遵守事項，下列何者錯誤？",
    options: [
      "A. 法官於任職期間，不但應該避免參加政治活動，也不可以在上班以外的時間公開支持、反對或評論任何政黨、政治團體",
      "B. 檢察官應嚴守偵查不公開原則，但媒體報導之內容與偵查案件事實不符而有澄清之必要時，得經所屬機關首長授權，對外就案情為必要之說明",
      "C. 律師先受房屋租約雙方委任，擔任某租賃契約之見證人。嗣後，律師受該出租人委任向該承租人起訴請求返還系爭租賃物，其受委任毋庸取得該承租人之同意",
      "D. 提升專業能力為法律人重要的基本倫理，法官、檢察官及律師均負有從事在職進修之義務"
    ],
    answer: "C",
    keywords: ["利益衝突", "委任關係", "見證人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 113062,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "法官甲及法官乙為夫妻關係，服務於同一法院。法官甲審理承租人A 主張終止租約，請求出租人B 返還押租金之爭議。言詞辯論期日，對於A 與B 間是否繼續存在租賃關係之爭點，當庭致電法官乙（另案承辦A 與B 間給付租金事件）詢問其對於系爭爭點之心證，並以該心證作為勸諭和解之基礎。法官甲之行為是否違反法官倫理規範？",
    options: [
      "A. 違反，因為法官甲、乙既為配偶關係，不應分別承辦相關案件，應屬當然迴避事由",
      "B. 違反，因為法官甲當庭致電法官乙，逕依法官乙之認定作為和解基礎，易使當事人對於法官審判獨立性產生疑慮",
      "C. 不違反，因為法官甲用心良苦，係為避免兩案見解歧異，產生裁判矛盾之風險",
      "D. 不違反，因為法官甲基於便民措施，目的乃為促成和解，減少訟源"
    ],
    answer: "B",
    keywords: ["風險代理費", "法官迴避", "司法獨立"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 113063,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "甲法官擔任刑事審判工作多年，經驗豐富著有聲譽，獲某大學邀聘講學，甲即合法申報，並獲機關首長許可後兼職授課。下列行為何者違反法官倫理規範？",
    options: [
      "A. 甲於授課內容批評最高法院之確定判決見解錯誤，重大影響當事人權利",
      "B. 甲應邀參加學校期末聚餐，席間並與多名學生合影。嗣後學生乙將合影照片張貼於社群媒體，並標註甲之司法公職身分",
      "C. 甲於授課過程中，學生A 因家族成員之民事糾紛涉訟，向甲請教相關法律問題。經甲詢問案情後即於課堂答覆A，並提供具體之法律意見及訴訟策略",
      "D. 甲選擇由某出版社為其出版之著作，以之作為課程教材，並商請出版社以七折特別價惠價出售給修課學生"
    ],
    answer: "C",
    keywords: ["法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 113064,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "甲法官與其夫乙為某航空公司貴賓會員，某日在使用機場貴賓室時，乙因故摔倒受傷，甲法官當場表明法官身分揚言提告，航空公司依甲當場之要求，隔日派員至甲之辦公室商談和解事宜，下列敘述何者正確？",
    options: [
      "A. 甲法官如係利用下班時間為之，並未違反法官倫理規範",
      "B. 甲法官如獲乙授權談判，並未違反法官倫理規範",
      "C. 甲法官表明法官身分，利用辦公處所進行私人事務之行為已違反法官倫理規範",
      "D. 甲法官所為係行使其法定權利，並未違反法官倫理規範"
    ],
    answer: "C",
    keywords: ["藉身分謀私"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 113065,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "關於法院首長對於所屬法官進行職務監督時，下列何者非屬法院首長職務監督的處分樣態？",
    options: [
      "A. 制止法官違法行使職權",
      "B. 糾正法官不當言行",
      "C. 督促法官依法迅速執行職務",
      "D. 命令移轉法官審理中之個案，改由其他法官審理"
    ],
    answer: "D",
    keywords: ["檢察一體"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 113066,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲、乙、丙、丁四人為大學同學，甲為執業律師，乙、丙、丁於民國105 年間擔任檢察官，惟丙於109年轉任律師，並與甲合夥經營律師事務所，甲於111 年和A 女結婚。下列何者違反檢察官倫理？",
    options: [
      "A. 丙轉任律師時，乙和丁基於同事情誼，具名致送花籃書寫「開幕致慶」",
      "B. 乙出席甲和A 的婚宴時，包禮金3,000 元給甲",
      "C. 甲律師、乙檢察官同時擔任行政院公共工程委員會之申訴委員",
      "D. 乙出席甲和A 的婚宴時，丙當時擔任乙承辦案件中被告B 的辯護人，且婚宴中乙與丙、B 同桌，因屬正常社交，乙繼續用餐至婚宴結束"
    ],
    answer: "D",
    keywords: ["忠誠義務", "刑事辯護", "轉任律師限制"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 113067,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "甲檢察官偕同書記官、法醫外出執行相驗屍體外勤任務，於現場相驗完畢後，已逾中午用餐時間，下列何者不違反檢察官倫理規範之要求？",
    options: [
      "A. 為求方便且有助於檢、警聯繫，甲檢察官與共同前往相驗書記官、法醫，接受報驗之轄區司法警察招待用餐",
      "B. 甲檢察官自行出錢，就近請書記官、法醫便餐",
      "C. 甲檢察官自行前往他處用餐，請報驗之轄區司法警察招待書記官、法醫便餐",
      "D. 甲檢察官與所率書記官、法醫，均不可接受報驗之轄區司法警察招待用餐，但可接受相驗之家屬付費訂餐"
    ],
    answer: "B",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 113068,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "為端正檢察官風紀、促使檢察官嚴守辦案程序、遵守檢察官倫理規範，對違反之檢察官有懲戒之規定。下列敘述何者正確？",
    options: [
      "A. 檢察官應受懲戒之同一行為，不受二次懲戒",
      "B. 檢察官應受懲戒之同一行為已受刑罰或行政罰之處罰者，因一行為不二罰，不得再予以懲戒",
      "C. 法官與檢察官性質不同，法官之懲戒由懲戒法院職務法庭審理，檢察官之懲戒由法務部下設檢察官人事審議委員會審理",
      "D. 檢察官違反檢察官倫理規範，不分情節輕重，均應付個案評鑑，認有懲戒之必要者，得移送懲戒"
    ],
    answer: "A",
    keywords: ["律師懲戒", "法官評鑑"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 113069,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "律師之執行職務行為，下列何者不違反律師倫理？",
    options: [
      "A. 擔任詐欺罪之刑事案件之辯護人，與被告約定若獲無罪判決，以詐欺所得金額的百分之二十作為後酬",
      "B. 代理原告起訴請求移轉不動產所有權，約定若勝訴，原告應以該不動產價值之十分之一作為後酬",
      "C. 代理土地所有權人請求拆屋還地，在訴訟進行中，受讓該土地所有權",
      "D. 代理妻起訴同時請求離婚及離婚後之剩餘財產，並約定全部勝訴後，以法院判決剩餘財產金額之百分之十作為後酬"
    ],
    answer: "B",
    keywords: ["忠誠義務", "律師酬金", "風險代理費", "刑事辯護"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 113070,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "當事人A 委任甲律師進行民事訴訟，訴訟進行中，A 要求甲律師將卷宗資料全部影印一份給A，甲律師應如何處理？",
    options: [
      "A. 訴訟還在進行中，不可以影印給A，要等到訴訟終結之後才可以影印給A",
      "B. 甲律師自己寫的狀紙以及法院筆錄可以影印給當事人，對造律師的狀紙則必須先取得對造律師同意才可以影印",
      "C. 甲應該依照A 的要求將卷宗內的資料全部影印給A",
      "D. 甲律師自己寫的狀紙可以影印給當事人，但法院筆錄及對造律師的狀紙要取得法院及對造律師同意才可以影印給A"
    ],
    answer: "C",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 113071,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "有關利益衝突之敘述，下列何者未違反律師倫理規範？",
    options: [
      "A. A 曾委託甲律師處理其對B 之請求禁止B 侵害A 之專利權訴訟事件。該案件終結後，第三人C 委託甲律師對A 提起分割某不動產之訴訟",
      "B. A 與B 原為夫妻，後協議離婚，A 委請甲律師擔任離婚協議書之見證人。後A 與B 因離婚協議書約定事項發生爭議，B 委任甲律師對A 提起訴訟",
      "C. 甲律師曾受A 公司委任對於董事B 的競業禁止事項出具意見。甲後來接受B 的委任，對A 公司請求停止執行關於B 的競業禁止之董事會決議",
      "D. 甲律師聘僱乙律師，甲允許乙自行接案。若乙律師受當事人A 之委任，甲得同時接受同一案件對造B 的委任"
    ],
    answer: "A",
    keywords: ["利益衝突", "委任關係", "見證人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 113072,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "甲律師擔任A 公司之法律顧問，因而得知A 公司所推出的金融商品其實是一個詐欺騙局，會讓投資大眾遭受重大的財產損失。其後，甲律師終止與A 公司的委任關係。在某次參加大學同學聚會時，甲律師的同學乙談到想要投資A 公司的該金融商品，甲可不可以警告乙該商品其實是一個詐欺騙局？",
    options: [
      "A. 可以，A 公司推出的金融商品是會造成乙財產重大損害的犯罪行為，可以揭露",
      "B. 不可以，律師應該為當事人保守秘密，絕對不可以洩漏",
      "C. 不可以，因為金融詐欺只會造成財產損害，沒有危害到生命或身體",
      "D. 如果甲律師還是A 公司的顧問就不可以，現在已經不是顧問，應該就可以"
    ],
    answer: "A",
    keywords: ["保密義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 113073,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "某大學法律系甲教授擔任A 及B 兩人間工程承攬爭議事件之主任仲裁人，仲裁判斷有利於A。不久，甲教授便離開教職，從事律師工作。B 因不服該仲裁結果，提起撤銷仲裁判斷之訴訟，A 欲聘請甲律師擔任其訴訟代理人，下列敘述何者正確？",
    options: [
      "A. 因仲裁判斷結果有利於A，甲可以受任擔任A 之訴訟代理人，因其熟悉案情，有助於維護A 之權益",
      "B. 甲律師先前擔任仲裁人，即使得A 與B 之同意，甲律師仍不得在撤銷仲裁判斷之訴訟中擔任A 之訴訟代理人",
      "C. 因A 聘請甲律師擔任訴訟代理人時，等同A 已認可並接受該利害衝突，故甲律師接受委任未違反律師倫理",
      "D. 甲不可接受委任，因其未得仲裁協會同意"
    ],
    answer: "B",
    keywords: ["利益衝突", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 113074,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲是律師事務所的合夥人，乙為事務所的受僱律師。乙為求勝訴，私下會見已委任律師之對造當事人。下列敘述何者正確？",
    options: [
      "A. 乙之行為有助於當事人勝訴，縱使違反其他法令，但不違反律師倫理規範",
      "B. 委任人是委任甲處理案件，乙只是甲的受僱律師，乙之行為不影響甲的律師倫理義務",
      "C. 乙律師知道對造已委任律師，不應該私下會見對造",
      "D. 因乙為甲所僱用，甲不得將此事通知乙所屬之律師公會進行懲戒程序"
    ],
    answer: "C",
    keywords: ["律師懲戒", "委任關係", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 113075,
    year: 113,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "甲律師受僱於某事務所並被指派承辦當事人A 的案件，因為甲律師即將離職，受僱於另一事務所，甲律師就向A 說明因只有他最清楚案情，希望A 能夠與原事務所終止委任，繼續由甲律師承辦。甲律師之行為有沒有違反律師倫理相關規範？",
    options: [
      "A. 有，受僱律師離職時不能夠促使當事人轉委任自己為受任人",
      "B. 沒有，律師業務的競爭本來就各憑本事，除非甲律師有惡意詐欺脅迫之行為，否則要求並促使當事人轉委任自己，為法之所許",
      "C. 如果這個案件真的只有甲律師瞭解，甲律師可以促請當事人轉委任自己。如果原事務所還有其他律師瞭解案情就不可以",
      "D. 如果甲律師新任職的事務所同意就可以，不同意就不行"
    ],
    answer: "A",
    keywords: ["委任關係", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/113-comprehensive-law-1-criminal",
    sourceNote: "113年司法官/律師考試第一試第75題",
    explanation: ""
  },
  {
    id: 114061,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 61,
    content: "關於道德、法律及倫理性質之敘述，下列何者正確？",
    options: [
      "A. 道德、法律及倫理，皆應形諸明文規定，才能具有社會行為之拘束力",
      "B. 甲法官夜間駕車行經鄉村道路，發現陌生機車騎士倒臥路旁，但因擔心誤會被控肇事，因此並未停車救助。甲法官不僅道德有損，倫理有違，如因不作為而導致騎士死亡，即應承擔法律責任",
      "C. 乙法官與丙律師兩人為大學同學，有感於法學教育與實務應用之落差，共同投資設立「法律實務教育訓練中心」提供課程講授，以合理學費招收有志學習法律以提昇職場競爭力之上班族。上述舉措符合道德標準、法律規定及倫理價值",
      "D. 道德即是人性尊嚴的本質，但標準及內涵可能因人而異。法律則是最低的道德標準，所有人都必須遵守的義務。倫理乃是社會群體基於某些特殊屬性，共同形成的價值規範"
    ],
    answer: "D",
    keywords: ["道德法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第61題",
    explanation: ""
  },
  {
    id: 114062,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 62,
    content: "甲檢察官因未接受檢察長不應起訴之書面命令，自行起訴，遭檢察長移送評鑑。關於檢察一體及檢察官職權之行使，下列敘述何者正確？",
    options: [
      "A. 因為檢察一體，檢察官並無任何獨立辦案之空間，檢察長之命令，檢察官一定要遵守",
      "B. 檢察官收到檢察長之書面指揮監督命令，檢察官不同意時，得以書面敘明理由，請求檢察長行使職務移轉權",
      "C. 檢察官與法官同屬司法官，故享有與法官完全相同之獨立保障，可自行決定是否起訴",
      "D. 檢察官可以獨立行使職權，但基於檢察一體，如法律意見與檢察長不同，應遭受懲戒"
    ],
    answer: "B",
    keywords: ["律師懲戒", "司法獨立", "法官評鑑", "檢察一體"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第62題",
    explanation: ""
  },
  {
    id: 114063,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 63,
    content: "甲法官在審理A 與B（外國籍）間之感情及債務糾紛所引發之刑事詐欺案件時，不認同B 態度輕佻，於審理中糾正斥責：「你們外國人就是想賺錢」、「你們都來臺灣騙臺灣人的錢」、「你以為我們臺灣啊是隨便你這樣子的喔！」、「你對我們臺灣這個社會有什麼幫助啊！蛤？」等語。下列何者不是甲法官所違反法官倫理規範之內容？",
    options: [
      "A. 法官執行職務，應保持公正、客觀、中立，不得有損及人民對司法信賴之行為",
      "B. 法官不得因性別、種族、地域、宗教、國籍、年齡而有差別待遇行為",
      "C. 法官應維持法庭莊嚴，不得對在庭之人辱罵、無理之責備或有其他損其尊嚴之行為",
      "D. 法官對於繫屬中或即將繫屬之案件，不得公開發表可能影響裁判或程序公正之言論"
    ],
    answer: "D",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第63題",
    explanation: ""
  },
  {
    id: 114064,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 64,
    content: "關於法官參與集會、結社等活動，下列敘述何者正確？",
    options: [
      "A. 集會、結社係憲法保障之基本人權，法官亦屬公民，不受任何限制",
      "B. 法官不得為無黨籍候選人之募款餐會從事募款",
      "C. 法官不得成為大學校友會會員",
      "D. 法官不得成為救援流浪動物協會會員"
    ],
    answer: "B",
    keywords: ["委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第64題",
    explanation: ""
  },
  {
    id: 114065,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 65,
    content: "下列情形，何者不違反法官倫理規範？",
    options: [
      "A. 甲法官審理某政治人物貪污案，判決公布後許多新聞媒體認為量刑過輕，連日批評已造成法院不堪其擾。甲法官為維護司法獨立形象，上政論節目表明立場，與現場來賓辯論",
      "B. 乙法官在某件合議審判案件擔任受命法官，評議時與審判長丙對法律意見不同，雖陪席法官丁表示與丙意見相同。乙仍堅持應再開辯論，否則判決書應改由審判長撰寫",
      "C. 戊法官審理一件民事賠償案件，該案原告訴狀理由有明顯瑕疵，但被告因未委任律師而未能提出有效抗辯，戊乃私下打電話給被告建議其可提出某等攻擊防禦方法",
      "D. 己法官經任職法院同意在某大學兼課每週2 小時，並經常利用週末參與法律座談會或演講"
    ],
    answer: "D",
    keywords: ["委任關係", "司法獨立", "庭外接觸", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第65題",
    explanation: ""
  },
  {
    id: 114066,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 66,
    content: "甲律師受僱於A 律師事務所，即將離職。甲的行為，下列何者不違反律師倫理？",
    options: [
      "A. 通知自己所承辦案件客戶，告知其即將離職，並檢附A 事務所內接手律師的連絡資訊",
      "B. 通知A 事務所全部客戶，告知其即將離職，到下一個單位任職，有案件歡迎聯繫委託",
      "C. 通知自己承辦案件的客戶，表明自己最熟悉該案件，促請其轉委託自己承辦",
      "D. 離職後，未知會A 事務所，逕行通知其在A 事務所時所承辦案件的客戶，歡迎他們諮詢與前案相關的問題"
    ],
    answer: "A",
    keywords: ["誠信義務", "受僱律師離職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第66題",
    explanation: ""
  },
  {
    id: 114067,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 67,
    content: "法官甲於審理案件時，當庭於被告A 及其辯護律師乙面前，向被告A 說：「……選任律師要小心，有些律師到處在外招搖撞騙，沒學問也沒時間研究案情，告的辯的一塌糊塗……；像這個辯護狀雖然有律師具名，一點也不像律師寫的……」。針對法官甲之行為，下列敘述何者正確？",
    options: [
      "A. 法官甲當庭的言行，僅為善意提醒，有助於當事人慎選律師，沒有違反法官倫理",
      "B. 法官甲當庭的言行，並不至於損及律師的尊嚴，沒有違反法官倫理",
      "C. 法官甲對律師的意見，應私下告知當事人，不可在法庭上講",
      "D. 法官甲當庭的言行不當，有違法官倫理"
    ],
    answer: "D",
    keywords: ["誠信義務", "庭外接觸"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第67題",
    explanation: ""
  },
  {
    id: 114068,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 68,
    content: "甲檢察官與乙律師是好朋友，乙邀請甲投資房地產。甲因資金不足，乙表示可以借貸新臺幣500 萬元給甲。關於甲之行為，下列敘述何者正確？",
    options: [
      "A. 因借貸契約屬私法自治，只要甲未因償還借款而貪污，其行為並未違反檢察官倫理規範",
      "B. 因為甲為檢察官，基於倫理規範，甲不應為任何商業投資行為，避免受到輿論批評",
      "C. 因為甲為檢察官，甲不應與擔任律師的乙有金錢借貸關係，以避免損害司法公正形象",
      "D. 因甲、乙為好友，甲向乙借款並無不當。重點是甲應該依據借貸契約規定，準時還錢"
    ],
    answer: "C",
    keywords: ["法律倫理"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第68題",
    explanation: ""
  },
  {
    id: 114069,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 69,
    content: "檢察官為避免違反檢察官倫理規範，不得兼任或擔任下列何種職務或工作？",
    options: [
      "A. 兼任財團法人法律扶助基金會各地分會的審查委員會委員",
      "B. 兼任私立大學董事會的監察人",
      "C. 應邀擔任私立高中開學典禮的法治宣講講座",
      "D. 擔任法務部移送懲戒法院審理案件之代理人"
    ],
    answer: "B",
    keywords: ["律師懲戒", "公益法律服務", "法官兼職"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第69題",
    explanation: ""
  },
  {
    id: 114070,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 70,
    content: "律師下列之行為，何者不違反律師倫理規範？",
    options: [
      "A. 在民事訴訟中提出對造當事人聲請傳訊之證人有偽證之前科，並主張該證人之證詞完全不具可信度",
      "B. 於受A 公司監察人委任到A 公司查帳時，因認為A 公司之職員甲不配合，對甲稱：「因你不配合，我會告你，我事務所做別的不會，做毀滅性的東西很會」",
      "C. 為蒐集證據以供談判破裂時訴訟使用，與對造當事人協調和解意願與條件時私下錄音，未告知對造當事人",
      "D. 與原不認識且初次到事務所諮詢的當事人，在諮詢後利用當事人的無助心理狀態下隨即在辦公室發生性行為"
    ],
    answer: "A",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第70題",
    explanation: ""
  },
  {
    id: 114071,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 71,
    content: "甲律師受任為A 撰寫遺囑並為遺囑的見證人。A 死亡後其繼承人X、Y、Z 對遺囑之真實性、內容及解釋有不同見解而進行民事訴訟。甲律師可否在訴訟中擔任X 之代理人？",
    options: [
      "A. 可以，但若甲律師在訴訟中充當證人時，必須據實陳述",
      "B. 可以，因為甲律師最瞭解遺囑的來龍去脈，有助於真實發現",
      "C. 不可以，除非得到訴訟中所有當事人的同意",
      "D. 不可以，因為甲律師為A 撰寫遺囑並為遺囑的見證人，依法即不得再擔任該訟爭性事件之代理人"
    ],
    answer: "C",
    keywords: ["利益衝突", "委任關係", "見證人"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第71題",
    explanation: ""
  },
  {
    id: 114072,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 72,
    content: "甲律師擔任A 公司法律顧問。A 公司對外都宣稱公司所擁有的核心專利是由老板B 親自設計，但甲擔任顧問處理相關侵害專利權糾紛，因而得知實際上是由C 所設計。現在該專利權已經過期，甲也不再擔任A 公司顧問，而最近B、C 相繼過世，社會上對該專利發明人究竟為誰多有傳聞，記者想要訪問甲，甲律師對該專利發明人為誰的情事，是否還負有保密義務？",
    options: [
      "A. 沒有，甲已經不再是公司的顧問，對於因擔任公司顧問而得知的情事已經不負保密義務",
      "B. 沒有，該專利都已經過期，與該專利有關的設計事務當然也不再受保密義務約束",
      "C. 有，但B、C 如果僅有一人死亡，甲就不負保密義務",
      "D. 有，律師的保密義務會一直存在，只要該秘密之情事沒有公開，律師都還是負保密義務"
    ],
    answer: "D",
    keywords: ["保密義務"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第72題",
    explanation: ""
  },
  {
    id: 114073,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 73,
    content: "甲擔任臺灣臺北地方法院法官，其子乙先在臺灣彰化地方法院擔任司法替代役，1 年服役期滿，即至臺灣基隆地方法院任職法官助理。任職滿3 個月時，乙考上律師。乙考上律師屆滿1 年，甲也立即離職轉任律師，同時與乙共同開設律師事務所。下列何者未違反律師法或律師倫理規範？",
    options: [
      "A. 甲在臺灣臺北地方法院曾經審理之某案件，該案件被告上訴二審時委託甲擔任辯護人",
      "B. 在臺灣彰化地方法院提起家事訴訟事件的當事人，委託乙擔任訴訟代理人",
      "C. 開設事務所當天，在臺灣臺北地方法院提起訴訟之刑事案件當事人，委託甲擔任辯護人",
      "D. 乙在臺灣基隆地方法院協助法官處理的某民事事件，該案件當事人上訴二審時委任乙擔任訴訟代理人"
    ],
    answer: "B",
    keywords: ["忠誠義務", "委任關係", "刑事辯護", "受僱律師離職", "轉任律師限制"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第73題",
    explanation: ""
  },
  {
    id: 114074,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 74,
    content: "甲律師和A 代書是多年好友，甲律師的客戶如果有不動產登記案件，甲律師都介紹給A 代書，A 代書的客戶如果有訴訟案件，A 代書也都引介給甲律師。對於每一個A 代書引介來的案件，甲律師都回饋A 代書引介案件的費用。甲律師的回饋行為有無違反律師倫理規範的規定？",
    options: [
      "A. 違反，律師不能對引介案件的人支付報酬",
      "B. 沒有違反，因為雙方本來就有業務合作的關係",
      "C. 如果雙方互相在引介案件時都有支付回饋金就沒有違反，如果只有單方面有支付就不可以",
      "D. 必須雙方先簽定互相引介案件條件對等的合作協定才沒有違反，否則就違反律師倫理規範的要求"
    ],
    answer: "A",
    keywords: ["律師酬金", "介紹費"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第74題",
    explanation: ""
  },
  {
    id: 114075,
    year: 114,
    examType: "律師考試",
    examDetail: "第一試（兼司法官考試）",
    questionType: "單選題",
    questionNum: 75,
    content: "甲律師和當事人A 初步商談案情之後，甲查閱相關法令及實務見解，判斷該訴訟案件應會勝訴，A 問甲該案件會不會勝訴，甲應如何回應始符合法律倫理的要求？",
    options: [
      "A. 甲應向A 擔保該案件將獲有利之結果，以取得信賴",
      "B. 甲應向A 說明依現行的法律見解，初步判斷該案件對A 有利，有勝訴機會",
      "C. 甲不可將法律意見告知A，以免A 認為無委任專業律師之必要而不委任律師",
      "D. 甲可向A 說明該訴訟案件對A 不利，如果不委任律師，將會敗訴，以促請A 委任甲"
    ],
    answer: "B",
    keywords: ["誠信義務", "委任關係"],
    sourceUrl: "https://lawplayer.com/exam/judicial-officer/114-comprehensive-law-1-criminal",
    sourceNote: "114年司法官/律師考試第一試第75題",
    explanation: ""
  }
];

const ALL_TOPICS = [
  "保密義務", "利益衝突", "忠誠義務", "誠信義務",
  "律師懲戒", "律師廣告", "律師酬金", "風險代理費",
  "委任關係", "法官迴避", "司法獨立", "庭外接觸",
  "法官評鑑", "檢察官客觀義務", "公益法律服務", "法律扶助",
  "刑事辯護", "雙方代理", "前任委任人", "法官兼職",
  "受僱律師離職", "轉任律師限制", "見證人", "介紹費",
  "檢察一體", "法官廉潔", "藉身分謀私", "道德法律倫理"
];
