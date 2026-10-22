/**
 * 試卷錯題資料庫與解析內容
 * 智光商工日間部 115學年度第1學期 第一次段考 國語文試卷
 * 考生：資處一仁 17號 徐奕甯
 */

const EXAM_META = {
  school: "智光商工日間部",
  semester: "115 學年度第 1 學期 第一次段考",
  subject: "高一 國語文 試卷",
  student: {
    department: "資處科",
    class: "一仁",
    seat: "17",
    name: "徐奕甯"
  },
  score: {
    total: 32,
    max: 100,
    sections: [
      { name: "一、字音題", score: 14, max: 16, wrongCount: 1, totalCount: 8 },
      { name: "二、配合題", score: 2, max: 12, wrongCount: 5, totalCount: 6, note: "老師卷面標註 -12，但第2題作答 B 實為正確！總分核算時已給2分" },
      { name: "三、翻譯題", score: 1, max: 12, wrongCount: 1, totalCount: 1, note: "僅拿 1 分，扣 11 分" },
      { name: "四、綜合測驗", score: 15, max: 60, wrongCount: 15, totalCount: 20, note: "答對 5 題（2, 6, 11, 13, 15），答錯 15 題" }
    ]
  },
  diagnosticSummary: {
    accuracyRate: "32%",
    totalErrors: 22, // 包含配合題第2題的疑點說明
    weaknesses: [
      { category: "閱讀審題盲點", desc: "題目問「何者錯誤」或「何者不妥」，卻下意識選了正確敘述（如綜合測驗第7題、第14題）。" },
      { category: "成語與字詞誤用", desc: "將「深以為然」誤以為不對、不理解「身無長物」的長物是多餘之物、誤判「孤芳自賞」與「代人捉刀」。" },
      { category: "邏輯偏誤與課文觀念混淆", desc: "〈從感覺到事實的差距〉核心為反思與打破直覺，卻誤選「聽從直覺」或「順從大眾想法」，掉入同溫層思維。" },
      { category: "文言翻譯不完整", desc: "文言文翻譯未逐句對照，遺漏核心提問句，直接抄錄原文或寫成口語病句，導致12分痛失11分。" },
      { category: "文學常識掉包陷阱", desc: "魏晉南北朝筆記小說中，「志人」與「志怪」互相混淆；《世說新語》是分類編排而非按年編排。" }
    ]
  }
};

const ERROR_ITEMS = [
  // ================= 大題一：字音題 =================
  {
    id: "part1-q5",
    section: "一、字音題",
    qNum: 5,
    title: "字音辨正：第5題「齏」臼（《世說新語》曹娥碑字謎典故）",
    category: "phonetic",
    categoryName: "字音字形",
    clipImage: "assets/clip_ziyin_q5.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "5. 「齏」臼（考卷第5題・注音填空）",
    studentAnswer: "ㄙㄨˋ",
    correctAnswer: "ㄐㄧ",
    points: 2,
    deduction: 2,
    errorAnalysis: "【考點真相大還原】題幹出自本次段考重點課文《世說新語·捷悟》中極負盛名的曹娥碑字謎：『黃絹幼婦，外孫齏臼』。考卷第 5 題測驗「齏臼」的「齏」，正確讀音為「ㄐㄧ」（陰平聲）。考生因字形結構複雜、筆畫多達 23 畫，誤看字形寫成「ㄙㄨˋ」，老師在答案欄用紅筆劃掉扣 2 分並清楚訂正為「ㄐㄧ」。",
    detailedExplanation: `
      <div class="explain-box">
        <div class="special-badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 4px 12px; border-radius: 999px; display: inline-block; font-size: 0.85rem; font-weight: 600; margin-bottom: 14px;">
          📌 考卷原題版面與批改筆跡還原
        </div>
        
        <div class="comparison-grid" style="margin-bottom: 20px;">
          <div class="comp-card" style="border-left: 4px solid #22c55e; background: rgba(34, 197, 94, 0.05);">
            <h5 style="color: #22c55e;">✅ 第 1 題：1.「晦」奧（得分題）</h5>
            <p style="margin: 0 0 6px 0; font-size: 0.95rem;"><strong>考生作答：</strong><code>ㄏㄨㄟˋ</code>（正確無扣分，得 2 分）</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">「晦奧」意為文意或道理隱晦深奧。奕甯此題掌握得非常好！</p>
          </div>
          <div class="comp-card" style="border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.05);">
            <h5 style="color: #ef4444;">❌ 第 5 題：5.「齏」臼（本題錯題）</h5>
            <p style="margin: 0 0 6px 0; font-size: 0.95rem;"><strong>考生作答：</strong><span style="text-decoration: line-through; color: #ef4444;">ㄙㄨˋ</span> ➔ <strong>老師紅筆訂正：</strong><code>ㄐㄧ</code>（扣 2 分）</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">「齏」筆畫繁複（齊+韭，共23畫），奕甯誤讀為「ㄙㄨˋ」，正確注音為 <code>ㄐㄧ</code>。</p>
          </div>
        </div>

        <h4>🏛️ 課本典故深度探源：《世說新語·捷悟》「絕妙好辭」</h4>
        <div class="ancient-story-box" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
          <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 10px;">
            曹操與楊修經過曹娥碑下，見碑陰題寫了八個字：<strong>「黃絹幼婦，外孫齏臼」</strong>。曹操思索了三十里才解出，而楊修早已一眼看破：
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px;">
            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
              <strong>黃絹</strong> ➔ 色絲 ➔ <strong>「絕」</strong>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
              <strong>幼婦</strong> ➔ 少女 ➔ <strong>「妙」</strong>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
              <strong>外孫</strong> ➔ 女子（女之子） ➔ <strong>「好」</strong>
            </div>
            <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 10px; border-radius: 8px;">
              <strong>齏臼</strong> ➔ 受辛之器 ➔ <strong>「辭（辤）」</strong>
            </div>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px; margin-bottom: 0;">
            💡 <strong>解謎關鍵：</strong>「齏」（ㄐㄧ）是搗碎的薑、蒜、韭菜等辛辣醃菜；「臼」（ㄐㄧㄡˋ）是搗藥搗菜的石臼。齏臼就是「受辛」的器具，「受」加「辛」即古字「辤」（辭）。合起來即讚揚曹娥碑文乃<strong>「絕妙好辭」</strong>！
          </p>
        </div>

        <h4>🔍 核心考點一：「齏」字形音義與重要成語</h4>
        <div class="comparison-grid">
          <div class="comp-card correct-border">
            <h5>✅ 正確字音與重要詞彙</h5>
            <ul>
              <li><strong>「齏」</strong>：注音 <code>ㄐㄧ</code>。本義為細切的醃菜、碎末。</li>
              <li><strong>齏臼</strong>（ㄐㄧ ㄐㄧㄡˋ）：搗辛辣香料的臼，代指「受辛」。</li>
              <li><strong>齏粉</strong>（ㄐㄧ ㄈㄣˇ）：粉碎成細末，比喻粉身碎骨或徹底毀滅（例如：化為齏粉）。</li>
              <li><strong>斷齏畫粥</strong>（ㄉㄨㄢˋ ㄐㄧ ㄏㄨㄚˋ ㄓㄡ）：形容宋代名臣范仲淹少年求學時生活清寒刻苦，將冷粥劃分為四塊、切碎醃菜佐食。</li>
            </ul>
          </div>
          <div class="comp-card warning-border">
            <h5>⚠️ 常見形似字・同音字超級大陷阱</h5>
            <ul>
              <li><strong>「齎」</strong>（貝部）：注音 <code>ㄐㄧ</code>，攜帶、贈送。例如：<strong>齎志以歿</strong>（懷抱宏願而死，未能實現）。</li>
              <li><strong>「霽」</strong>（雨部）：注音 <code>ㄐㄧˋ</code>，雨後天晴。例如：<strong>光風霽月</strong>、<strong>雨過天霽</strong>。</li>
              <li><strong>「儕」</strong>（人部）：注音 <code>ㄔㄞˊ</code>，同輩同類。例如：<strong>同儕</strong>。</li>
              <li><strong>「躋」</strong>（足部）：注音 <code>ㄐㄧ</code>，登高。例如：<strong>躋身</strong>。</li>
            </ul>
          </div>
        </div>
        <div class="memory-tip" style="margin-top: 12px;">
          💡 <strong>「齏、齎、霽」三秒速記法：</strong>
          <br>「臼中受辛是<strong>齏</strong>（ㄐㄧ），化作粉末為<strong>齏粉</strong>；
          <br>帶著錢財是<strong>齎</strong>（ㄐㄧ），抱憾而亡<strong>齎志歿</strong>；
          <br>雨後天青便是<strong>霽</strong>（ㄐㄧˋ），胸懷坦蕩<strong>光風霽月</strong>。」
        </div>

        <hr style="border: none; border-top: 1px dashed rgba(255,255,255,0.15); margin: 24px 0;">

        <h4>🔍 延伸考點二：第 1 題「晦」奧 vs 易混淆同音字「誨、悔」</h4>
        <p>段考第 1 題「晦奧」奕甯已答對，此處同步加強「晦、誨、悔」的辨正：</p>
        <div class="comparison-grid">
          <div class="comp-card" style="border-left: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.05);">
            <h5 style="color: #38bdf8;">☀️「晦」（日部）音 <code>ㄏㄨㄟˋ</code></h5>
            <ul>
              <li><strong>晦奧</strong>：文義隱晦深奧、不易參透。</li>
              <li><strong>風雨如晦</strong>：風雨交加、天色昏暗，比喻局勢動盪混亂。</li>
              <li><strong>韜光養晦</strong>：比喻隱藏才能、不露鋒芒。</li>
            </ul>
          </div>
          <div class="comp-card" style="border-left: 4px solid #eab308; background: rgba(234, 179, 8, 0.05);">
            <h5 style="color: #eab308;">🗣️「誨」（言部）音 <code>ㄏㄨㄟˋ</code></h5>
            <ul>
              <li><strong>誨人不倦</strong>：耐心地教導別人而不厭倦（孔子名言）。</li>
              <li><strong>諄諄教誨</strong>：懇切耐心地教導。</li>
              <li><strong>慢藏誨盜</strong>：收藏財物不嚴密，容易誘引盜賊來偷。</li>
            </ul>
          </div>
          <div class="comp-card" style="border-left: 4px solid #a855f7; background: rgba(168, 85, 247, 0.05);">
            <h5 style="color: #a855f7;">💔「悔」（心部）音 <code>ㄏㄨㄟˇ</code></h5>
            <ul>
              <li><strong>悔不當初</strong>：後悔當初的作為。</li>
              <li><strong>追悔莫及</strong>：事後後悔也來不及了。</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "下列各文句「」中的字音與用字配對，何者完全正確？",
      options: [
        "楊修解開曹娥碑上「齏」臼（ㄐㄧ）之謎，驚嘆其為絕妙好辭",
        "這場突如其來的大火，讓整棟百年木造古建築化為「齎」粉（ㄐㄧ）",
        "暴風雨過後天色放晴，呈現一片光風「齏」月（ㄐㄧˋ）的開朗景象",
        "諸葛亮六出祁山未能匡復漢室，最終「霽」志以歿（ㄐㄧˋ），令人惋惜"
      ],
      correctIndex: 0,
      explanation: "【解析】(A) 正確。「齏臼」讀 ㄐㄧ，指受辛之器，典出《世說新語·捷悟》。(B) 應作「齏粉」，韭部表切碎粉末。(C) 應作光風「霽」月，雨部指雨過天晴。(D) 應作「齎志以歿」，貝部表懷抱志願而終。"
    }
  },

  // ================= 大題二：配合題 =================
  {
    id: "part2-q1",
    section: "二、配合題",
    qNum: 1,
    title: "思考偏誤：學比爾蓋茲休學創業",
    category: "logic",
    categoryName: "思考偏誤",
    clipImage: "assets/clip_peihe_part1.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "1. 讀書無用，不如學比爾·蓋茲休學創業。",
    studentAnswer: "(B) 現成偏誤",
    correctAnswer: "(A) 存活者偏誤",
    points: 2,
    deduction: 2,
    errorAnalysis: "考生將「存活者偏誤」與「現成偏誤」混淆。比爾蓋茲創業成功是極端罕見的倖存案例，盲目仿效是忽視了無數失敗的沉默分母。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 為什麼是「存活者偏誤（生存者偏差）」？</h4>
        <p><strong>存活者偏誤（Survivorship Bias）</strong>是指：在分析某事物時，只聚焦於成功通過某種考驗的「存活者」，而忽略了在過程中失敗、未被看見的大多數「死者 / 淘汰者」，從而得出嚴重偏頗的結論。</p>
        <div class="bias-diagram">
          <div class="bias-step survivor">
            <span class="icon">🏆</span>
            <h6>看到少數存活者</h6>
            <p>比爾·蓋茲、賈伯斯、佐克柏<br><small>休學創業成為全球巨富</small></p>
          </div>
          <div class="bias-arrow">➡️ 盲目推論 ➡️</div>
          <div class="bias-step mistake">
            <span class="icon">❌</span>
            <h6>產生錯誤認知</h6>
            <p>「讀書無用，休學創業就能成功」<br><small>忽略 99.9% 休學創業破產的無名氏</small></p>
          </div>
        </div>
        <p class="mt-2"><strong>為什麼不是「現成偏誤」？</strong> 現成偏誤是受手邊容易回想起來的經驗、最近重大新聞或強烈情緒影響而做的誤判。而「只看到成功休學者」屬於典型的忽視失敗分母，正是存活者偏誤！</p>
      </div>
    `,
    quiz: {
      question: "二戰期間盟軍想加固返航戰機的裝甲，發現返航飛機機翼彈孔最多，因而主張加強機翼。統計學家沃德卻主張加強彈孔最少的引擎，因為引擎中彈的飛機都墜毀無法返航。此案例展現何種思維？",
      options: [
        "破除「存活者偏誤」",
        "陷入「現成偏誤」",
        "破除「同溫層效應」",
        "陷入「以偏概全偏誤」"
      ],
      correctIndex: 0,
      explanation: "沃德看見了無法返航的飛機（未存活者），成功破除了僅觀察返航飛機的「存活者偏誤」。"
    }
  },

  {
    id: "part2-q2-special",
    section: "二、配合題",
    qNum: 2,
    title: "【重要申訴點】用過去經驗否定 AI 發展",
    category: "logic",
    categoryName: "思考偏誤",
    clipImage: "assets/clip_peihe_part1.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "2. 用過去的工作經驗否定人工智慧的發展。",
    studentAnswer: "(B) 現成偏誤",
    correctAnswer: "(B) 現成偏誤",
    points: 2,
    deduction: 0,
    isSpecialReview: true,
    errorAnalysis: "【注意！】考卷配合題右上方被老師用紅筆寫「-12」，但仔細看答案格第2格，考生寫的「B」是完全正確的！老師在總分核算 32 分時實際上已經給了這 2 分，但卷面標註 -12 容易造成考生誤解為全錯。",
    detailedExplanation: `
      <div class="explain-box special-box">
        <div class="special-badge">💡 卷面批改疑點特別提醒</div>
        <h4>🎉 恭喜！這題你的答案 (B) 是完全正確的！</h4>
        <p><strong>現成偏誤（Availability Bias / 可得性偏差）：</strong> 指人們在做判斷與決策時，傾向於依賴大腦中最容易提取、最現成的記憶與經驗，而忽視了整體局勢或新技術的客觀發展。</p>
        <p>題幹中「用過去習慣的經驗」直接套用並否定全新的「人工智慧發展」，正是典型的依賴既有現成經驗的「現成偏誤」！</p>
        <div class="teacher-mark-tip">
          📌 <strong>給奕甯的建議：</strong> 考卷上配合題標了「-12」，但 14 (字音) + 2 (配合題第2題) + 1 (翻譯) + 15 (綜合測驗) = 32 分。老師核算總分是有加上這 2 分的，下次訂正考卷時可以向老師禮貌確認紅筆標示！
        </div>
      </div>
    `,
    quiz: {
      question: "發生空難後，許多人即使知道飛機事故率遠低於汽車，仍因新聞畫面太震撼而不敢搭飛機。這是屬於：",
      options: [
        "存活者偏誤",
        "現成偏誤（可得性偏差）",
        "刻板印象",
        "破窗效應"
      ],
      correctIndex: 1,
      explanation: "空難畫面強烈深刻，最容易在大腦中被現成提取，導致過度高估空難風險，是標準的「現成偏誤」。"
    }
  },

  {
    id: "part2-q3",
    section: "二、配合題",
    qNum: 3,
    title: "世說新語成語：投資失敗破產四處流浪",
    category: "idiom",
    categoryName: "成語辨正",
    clipImage: "assets/clip_peihe_part2.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "3. 自從投資失敗破產後，他顯在□□□□四處流浪。",
    studentAnswer: "(C) 口若懸河",
    correctAnswer: "(E) 身無長物",
    points: 2,
    deduction: 2,
    errorAnalysis: "不了解成語「身無長物」的含義。考生誤選了 (C) 口若懸河（話說個沒完），放在破產流浪的語境下完全不通順。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 成語典故與字義深度剖析</h4>
        <p><strong>身無長物</strong>（注音：ㄕㄣ ㄨˊ ㄔㄤˊ ㄨˋ）：</p>
        <ul>
          <li><strong>典故出處：</strong>《世說新語·德行》記載東晉名士王恭從會稽回來，王忱看他坐著一張漂亮的竹席，便向他討要，王恭慷慨相贈。後來王恭自己只能坐在草蓆上，王忱驚訝問之，王恭淡然回答：「丈人不悉恭，<strong>恭作人無長物</strong>。」</li>
          <li><strong>字詞關鍵：</strong>「長」（ㄓㄤˋ），多餘的。全句指身上除日常生活必需品外，<strong>沒有多餘的物品</strong>。</li>
          <li><strong>現代用法：</strong>形容生活極其貧困，一無所有；或比喻人品儉樸清高。</li>
        </ul>
        <div class="wrong-reason">
          ❌ <strong>為什麼不能選「口若懸河」？</strong> 「口若懸河」是形容能言善道、滔滔不絕，與破產、流浪毫無關聯。
        </div>
      </div>
    `,
    quiz: {
      question: "成語「身無長物」中的「長」字，正確的讀音與字義為何？",
      options: [
        "ㄔㄤˊ，長度很長",
        "ㄓㄤˇ，年紀較大",
        "ㄓㄤˋ，多餘的、多出來的",
        "ㄓㄤˇ，生長、長出"
      ],
      correctIndex: 2,
      explanation: "「身無長物」的「長」音 ㄓㄤˋ，意為多餘的。全句指身邊沒有多餘之物。"
    }
  },

  {
    id: "part2-q4",
    section: "二、配合題",
    qNum: 4,
    title: "世說新語成語：一說到專業便話說個沒完",
    category: "idiom",
    categoryName: "成語辨正",
    clipImage: "assets/clip_peihe_part2.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "4. 一說到專業，他便□□□□，話說個沒完。",
    studentAnswer: "(B) 小時了了",
    correctAnswer: "(C) 口若懸河",
    points: 2,
    deduction: 2,
    errorAnalysis: "成語配對完全錯置。考生誤將形容幼年聰慧的「小時了了」填在「話說個沒完」的句子裡。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 成語典故與語意精準對應</h4>
        <p><strong>口若懸河</strong>（注音：ㄎㄡˇ ㄖㄨㄛˋ ㄒㄩㄢˊ ㄏㄜˊ）：</p>
        <ul>
          <li><strong>典故出處：</strong>《世說新語·賞譽》：「郭子玄語議如懸河瀉水，注而不竭。」形容西晉哲學家郭象談論哲理時像瀑布奔流一樣流暢不絕。</li>
          <li><strong>語義：</strong>形容人口才極佳，能言善辯，發言流暢生動，像傾瀉的瀑布般滔滔不絕。題幹「話說個沒完」正是最直接的提示！</li>
        </ul>
        <div class="wrong-reason">
          ❌ <strong>為什麼「小時了了」大錯特錯？</strong> 出自《世說新語·言語》孔融十歲拜訪李膺時的名句：「小時了了，大未必佳。」形容人幼年時很聰明伶俐，與說話多寡完全無關。
        </div>
      </div>
    `,
    quiz: {
      question: "下列《世說新語》成語與人物的對應，何者錯誤？",
      options: [
        "小時了了 —— 孔融",
        "口若懸河 —— 郭象（郭子玄）",
        "身無長物 —— 王恭",
        "詠絮之才 —— 曹操"
      ],
      correctIndex: 3,
      explanation: "「詠絮之才」是指晉代才女「謝道韞」，而非曹操；曹操與楊脩的故事衍生為「絕妙好辭」。"
    }
  },

  {
    id: "part2-q5",
    section: "二、配合題",
    qNum: 5,
    title: "析字法字謎：十月十日",
    category: "culture",
    categoryName: "修辭與析字",
    clipImage: "assets/clip_peihe_part3.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "5. 十月十日（猜一字）",
    studentAnswer: "(E) 妙",
    correctAnswer: "(F) 萌",
    points: 2,
    deduction: 2,
    errorAnalysis: "不理解「析字法」中的離合拆拼原理。考生亂猜 (E) 妙（女+少），忽略了「十月十日」剛好可以拼成「萌」字。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 析字謎底拆解圖解</h4>
        <div class="char-puzzle">
          <div class="puzzle-elements">
            <span class="puzzle-item">十</span> + 
            <span class="puzzle-item">十</span> = 
            <span class="puzzle-result">艹（草字頭原本即為兩隻十）</span>
          </div>
          <div class="puzzle-elements mt-1">
            <span class="puzzle-result">艹</span> + 
            <span class="puzzle-item">日</span> + 
            <span class="puzzle-item">月</span> = 
            <span class="puzzle-highlight">萌</span>！
          </div>
        </div>
        <p class="mt-2">「十月十日」包含了兩個「十」、一個「日」、一個「月」，合體正是「萌」字！</p>
        <div class="wrong-reason">
          ❌ <strong>選項 (E) 妙 怎麼拆？</strong> 「妙」由「女」和「少」組成，傳統字謎通常是「少女」或「妙齡女子」，與十月十日無關。
        </div>
      </div>
    `,
    quiz: {
      question: "字謎「少女」運用析字法，猜一字為：",
      options: ["安", "好", "妙", "如"],
      correctIndex: 2,
      explanation: "「女」+「少」=「妙」。"
    }
  },

  {
    id: "part2-q6",
    section: "二、配合題",
    qNum: 6,
    title: "析字法字謎：七十二小時",
    category: "culture",
    categoryName: "修辭與析字",
    clipImage: "assets/clip_peihe_part3.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "6. 七十二小時（猜一字）",
    studentAnswer: "(F) 萌",
    correctAnswer: "(A) 晶",
    points: 2,
    deduction: 2,
    errorAnalysis: "缺乏時間換算與拆字聯想。72小時等於3天（3個日），三個日疊在一起即為「晶」。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 析字謎底拆解：數學換算 + 拆字結合</h4>
        <div class="math-char-box">
          <div class="math-line">1 天 = 24 小時</div>
          <div class="math-line">72 小時 ÷ 24 小時 = <strong>3 天（三天即為三個「日」）</strong></div>
          <div class="char-line">日 + 日 + 日 = <span class="puzzle-highlight">晶</span>！</div>
        </div>
        <p class="mt-2">三個「日」字上下堆疊組合，就是「晶瑩剔透」的「晶」字！</p>
      </div>
    `,
    quiz: {
      question: "字謎「千言萬語」運用析字法，猜一字為：",
      options: ["訓", "誓", "誥", "話"],
      correctIndex: 2,
      explanation: "「千」+「言」+「口（代表萬語的口）」或「言」+「告」=「誥」。另一常見謎題：「一日廿四小時」猜一字為「舊」或「旦」。"
    }
  },

  // ================= 大題三：翻譯題 =================
  {
    id: "part3-translation",
    section: "三、翻譯題",
    qNum: 1,
    title: "文言文翻譯：謝安雪夜詠絮（扣11分重災區）",
    category: "translation",
    categoryName: "文言文精譯",
    clipImage: "assets/clip_translation.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "俄而雪驟，公欣然曰：「白雪紛紛何所似？」兄子胡兒曰：「撒鹽空中差可擬。」兄女曰：「未若柳絮因風起。」公大笑樂。",
    studentAnswer: "「不久雪下得更大了公欣然曰：『灑白雪紛紛差可擬』兄女曰『未若柳絮因風起』公大笑了」「不久雪下的更大了公欣然甚至到大笑了」",
    correctAnswer: "不久，雪下得更急，謝太傅興致勃勃地說：「紛飛的白雪像什麼呢？」姪子胡兒說：「把鹽撒在空中大約可以比擬了。」姪女謝道韞說：「不如說像柳絮憑藉風勢在空中飛揚。」謝太傅聽了樂得開懷大笑。",
    points: 12,
    deduction: 11,
    errorAnalysis: "【失分最嚴重的一題！】12分僅拿1分，扣了11分！主要致命傷：(1) 完全漏譯靈魂提問句「白雪紛紛何所似」；(2) 胡兒與謝道韞的回答直接抄原文未做白話翻譯；(3) 錯別字與病句（『雪下的更大』的應為『得』，『甚至到大笑了』語法崩潰）。",
    detailedExplanation: `
      <div class="explain-box danger-border">
        <h4>🚨 為什麼被狠扣 11 分？四大致命失分剖析</h4>
        <div class="deduction-breakdown">
          <div class="deduct-card">
            <span class="d-icon">❌</span>
            <div><strong>致命傷 1：核心靈魂句漏譯</strong><br>謝安出題的「白雪紛紛何所似？」完全沒有翻譯成白話文！這是整個對話情境的核心。</div>
          </div>
          <div class="deduct-card">
            <span class="d-icon">❌</span>
            <div><strong>致命傷 2：直接抄原文，未轉白話</strong><br>胡兒的「撒鹽空中差可擬」和謝道韞的「未若柳絮因風起」幾乎原文照抄，閱卷老師認定「未完成翻譯」。</div>
          </div>
          <div class="deduct-card">
            <span class="d-icon">❌</span>
            <div><strong>致命傷 3：字詞翻譯錯誤與錯別字</strong><br>「雪下『的』更大」用錯字（動詞後補語應為「得」）；「欣然」直接抄寫沒翻成「興致勃勃地／高興地」。</div>
          </div>
          <div class="deduct-card">
            <span class="d-icon">❌</span>
            <div><strong>致命傷 4：自創怪異病句</strong><br>考生塗改重寫寫出「公欣然甚至到大笑了」，文法嚴重錯亂。</div>
          </div>
        </div>

        <h4 class="mt-3">📚 逐字逐句標準精譯對照表（段考標準範本版）</h4>
        <table class="trans-table">
          <thead>
            <tr><th>文言文原句</th><th>重點字詞釋義</th><th>白話文標準翻譯</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>俄而</strong>雪<strong>驟</strong></td><td>俄而：不久。雪驟：雪下得又大又急。</td><td>不久，雪下得更急，</td></tr>
            <tr><td><strong>公</strong><strong>欣然</strong>曰</td><td>公：指謝太傅（謝安）。欣然：興致勃勃的樣子。</td><td>謝太傅興致勃勃地說：</td></tr>
            <tr><td>「白雪紛紛<strong>何所似</strong>？」</td><td>何所似：像什麼呢？（倒裝句）</td><td>「紛飛的白雪像什麼呢？」</td></tr>
            <tr><td><strong>兄子胡兒</strong>曰</td><td>兄子：姪子。胡兒：謝朗乳名。</td><td>姪子胡兒說：</td></tr>
            <tr><td>「撒鹽空中<strong>差可擬</strong>。」</td><td>差：大約、大致。擬：比擬、相比。</td><td>「把鹽撒在空中大約可以比擬了。」</td></tr>
            <tr><td><strong>兄女</strong>曰</td><td>兄女：姪女（指才女謝道韞）。</td><td>姪女謝道韞說：</td></tr>
            <tr><td>「<strong>未若</strong>柳絮<strong>因</strong>風起。」</td><td>未若：不如說。因：憑藉。起：飛揚。</td><td>「不如說像柳絮憑藉風勢在空中飛揚。」</td></tr>
            <tr><td>公<strong>大笑樂</strong>。</td><td>大笑樂：樂得開懷大笑。</td><td>謝太傅聽了樂得開懷大笑。</td></tr>
          </tbody>
        </table>

        <div class="exam-strategy mt-2">
          🎯 <strong>段考翻譯得分秘笈：</strong>
          <ol>
            <li><strong>字字落實：</strong>文言文每字多為單音節詞，必須將每個文言詞轉譯為現代雙音節詞（如「俄而」=「不久」，「欣然」=「興致勃勃」）。</li>
            <li><strong>補出主語：</strong>古文常省略人名，翻譯時補上「謝太傅」、「姪子胡兒」、「姪女謝道韞」讓語意完整精準。</li>
            <li><strong>句意流暢：</strong>翻完後在心中默讀一次，確認符合現代漢語文法，嚴禁出現「甚至到大笑了」這種生硬拼湊。</li>
          </ol>
        </div>
      </div>
    `,
    quiz: {
      question: "文言文「未若柳絮因風起」中的「未若」與「因」，正確意思分別為：",
      options: [
        "未能；因為",
        "不如；憑藉、順著",
        "未必；原因",
        "不像；因而"
      ],
      correctIndex: 1,
      explanation: "「未若」意為「不如」；「因」意為「憑藉、順著」。全句意為「不如比作柳絮憑藉著風在空中飛舞」。"
    }
  },

  // ================= 大題四：綜合測驗 =================
  {
    id: "part4-q1",
    section: "四、綜合測驗",
    qNum: 1,
    title: "字形辨正：鼓吹、邏輯與反駁",
    category: "phonetic",
    categoryName: "字音字形",
    clipImage: "assets/clip_q1.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "01. 下列文句，何者用字完全正確？",
    optionsText: [
      "(1) 眼前繁榮進步的景象，是多位專家學者數年來奮力股吹的成果",
      "(2) 透過蘇格拉底詰問法，能有效釐清自己的想法與鍛鍊思考邏輯（原卷輯字印錯）",
      "(3) 不被既定框架限制，跳脫固有思路，才能打造耳目一新的傑作",
      "(4) 針對園遊會的販售商品，同學看法歧異，對不同意見大聲反駁（原卷駁字印錯）"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(3)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生誤選了 (1)，沒有看出「奮力股吹」的錯別字（應為『鼓吹』）。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 各選項錯別字詳細抓漏</h4>
        <ul>
          <li><span class="bad">❌ (1) 奮力「股」吹</span> ➡️ 應改為<strong>「鼓吹」</strong>。鼓為擊鼓之意，引申為大肆宣傳倡導。而「股」是大腿或股票。</li>
          <li><span class="bad">❌ (2) 思考邏「輯」</span> ➡️ 考卷上印成了錯別字，老師在旁邊紅筆寫「輯」標示訂正。</li>
          <li><span class="good">✅ (3) 跳脫固有思路，才能打造耳目一新的傑作</span> ➡️ <strong>完全正確無誤！</strong>「跳脫」、「框架」、「思路」、「耳目一新」、「傑作」用字皆正確。</li>
          <li><span class="bad">❌ (4) 大聲反「駁」</span> ➡️ 考卷原印錯字，老師在旁邊紅筆寫「駁」標示訂正。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "下列各組詞語，何者用字完全正確？",
      options: [
        "大肆股吹",
        "邏輯縝密",
        "大聲反駁（駁寫為面乂）",
        "固手成規"
      ],
      correctIndex: 1,
      explanation: "應為「鼓吹」、「墨守成規」。「邏輯縝密」用字完全正確。"
    }
  },

  {
    id: "part4-q3",
    section: "四、綜合測驗",
    qNum: 3,
    title: "課文詮釋：女權鼓吹者與時代跳脫",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q3.jpg",
    fullImage: "assets/p1_upright.jpg",
    questionText: "03. 〈從「感覺」到「事實」的差距〉：「當整個時代大多認同某種觀念時，想要跳脫就更困難了。就像當整個世界都傾向於重男輕女時，站在最前端的女權鼓吹者，就容易被視為異端而遭受迫害。」關於此段話的詮釋，下列何者正確？",
    optionsText: [
      "(1) 人們常因為害怕改變，故遵循守舊、偏頗的常規而不自知",
      "(2) 少數人的權利或價值觀因與多數人的立場不同，容易遭受剝奪與忽視",
      "(3) 女權鼓吹者雖非大眾認同的觀念，但對世界仍具一定影響力",
      "(4) 若想跳脫世俗認定的框架，就必須要能夠承擔更多的責任"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(2)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生選了 (1)，抓到了「害怕改變守舊」，但忽略了引文的真正聚焦核心是「少數人的主張因與大眾不同而遭受迫害與忽視」。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 文本核心意旨剖析</h4>
        <p>原文關鍵句：「站在最前端的女權鼓吹者，就容易<strong>被視為異端而遭受迫害</strong>。」</p>
        <ul>
          <li><strong>選項 (2) 為什麼正確：</strong> 精準扣合「少數人 vs 多數人立場不同」，少數站在前鋒的人因為與大眾認知相悖，其權利或價值觀極易被主流社會排擠、剝奪與忽視。</li>
          <li><strong>選項 (1) 為什麼不夠好：</strong> (1) 偏重在「大眾為何不改變」的心理描繪，但引文著重的是「少數敢於跳脫的人面臨的險境（被視為異端、遭迫害）」。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "哥白尼提出「日心說」時曾被宗教裁判所視為異端迫害，這段歷史最適合印證哪種現象？",
      options: [
        "少數人的真知灼見常因違背時代主流共識而遭受排擠壓迫",
        "人類天性熱愛追求未知的真理",
        "主流共識往往建立在科學實證的基礎上",
        "只要擁有信心，任何異端想法都能迅速獲得採納"
      ],
      correctIndex: 0,
      explanation: "少數前瞻思想挑戰時代主流框架時，極易遭受大眾視為異端與打壓。"
    }
  },

  {
    id: "part4-q4",
    section: "四、綜合測驗",
    qNum: 4,
    title: "文意邏輯推論：反思習慣的重要性",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q4_combined.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "04. 〈從「感覺」到「事實」的差距〉：「經常反思，就有機會找出自己在理由不足的情況下視為理所當然的想法。缺乏反思習慣，就容易具有自以為正確但卻錯誤的知識而不自知，也就容易做出錯誤抉擇。」根據此段文句，下列敘述何者正確？",
    optionsText: [
      "(1) 透過反思可以找出自己認知上的盲點",
      "(2) 人會做出錯誤決定都是因為不懂得反思",
      "(3) 錯誤的認知在經過反思之後便能完全改善",
      "(4) 在理由不足的情況下所產生的想法一定有問題"
    ],
    studentAnswer: "(2)",
    correctAnswer: "(1)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生掉入選擇題常見的「絕對化字眼」陷阱！選項 (2) 的「都是因為」、選項 (3) 的「完全改善」、選項 (4) 的「一定有問題」都犯了以偏概全的邏輯漏洞。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 國文閱讀測驗必勝破解法：避開「絕對化」陷阱</h4>
        <div class="comparison-grid">
          <div class="comp-card correct-border">
            <h5>✅ 選項 (1) 完美對應</h5>
            <p>原文說「找出自己在理由不足的情況下視為理所當然的想法」，這就是找出<strong>認知上的盲點</strong>，語意客觀且恰如其分。</p>
          </div>
          <div class="comp-card danger-border">
            <h5>❌ 選項 (2)(3)(4) 邏輯漏洞</h5>
            <ul>
              <li>(2)「<strong>都是因為</strong>」：太絕對！做錯決定的原因很多（如資訊不足、運氣等），不懂反思只是「容易」做錯，而非唯一原因。</li>
              <li>(3)「<strong>完全改善</strong>」：過度誇大反思的效果。</li>
              <li>(4)「<strong>一定有問題</strong>」：過度武斷。</li>
            </ul>
          </div>
        </div>
        <div class="memory-tip mt-2">
          💡 <strong>考場金律：</strong> 凡是選項中出現「都是、必定、完全、絕對」等極端詞彙，通常 90% 都是錯誤干擾項！
        </div>
      </div>
    `,
    quiz: {
      question: "在閱讀測驗中，遇到下列哪種敘述風格的選項時應提高警覺，通常為過度推論？",
      options: [
        "適度的反思有助於減少偏見",
        "所有的失敗全都是因為不夠努力所導致",
        "多數人在面對複雜情境時可能受直覺影響",
        "部分歷史事件的詮釋會隨新史料出現而改變"
      ],
      correctIndex: 1,
      explanation: "「所有的...全都是...」語氣極端武斷，犯了以偏概全的邏輯推論錯誤。"
    }
  },

  {
    id: "part4-q5",
    section: "四、綜合測驗",
    qNum: 5,
    title: "課文理解：跳脫認知困境的方法",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q5.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "05. 根據〈從「感覺」到「事實」的差距〉一文，作者認為我們以為正確無誤的事情，有時並非事實，因此可透過下列哪一種方式跳脫此困境？",
    optionsText: [
      "(1) 理解周圍多數人的想法",
      "(2) 接收「同溫層」內的共識",
      "(3) 多結交觀念、興趣類似的朋友",
      "(4) 了解錯誤知識形成的原因"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(4)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生選了 (1)，但「理解周圍多數人的想法」、「接收同溫層共識」、「結交類似朋友」剛好全部都是讓偏誤更加嚴重的行為！唯有從根本了解錯誤知識如何形成，才能破除偏誤。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 為什麼選 (1)、(2)、(3) 剛好掉入陷阱？</h4>
        <ul>
          <li><strong>(1) 理解多數人想法：</strong> 多數人的想法往往就是「集體盲從」或「時代偏見」（如古代重男輕女），跟隨多數人無法跳脫困境。</li>
          <li><strong>(2) 接收同溫層共識：</strong> 同溫層只會強化既有偏見，讓人更深陷其中。</li>
          <li><strong>(3) 結交類似朋友：</strong> 這正是形成同溫層的原因！</li>
          <li><span class="good">✅ (4) 了解錯誤知識形成的原因：</span> <strong>作者冀劍制教授在課文中的核心解方！</strong> 當我們明白大腦如何透過現成偏誤、存活者偏誤製造出假事實，我們就能啟動自我反思機制，審視自己的認知。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "社群演算法會不斷推薦我們喜歡看或立場相同的貼文，容易導致下列何種現象？",
      options: [
        "拓寬多元文化視野",
        "強化同溫層效應，加深認知偏見",
        "有效提升批判性反思能力",
        "自動消除存活者偏誤"
      ],
      correctIndex: 1,
      explanation: "演算法推薦相似內容會形成過濾氣泡（Filter Bubble）與同溫層效應，使偏見更為根深蒂固。"
    }
  },

  {
    id: "part4-q7",
    section: "四、綜合測驗",
    qNum: 7,
    title: "逆向審題：課文觀點何者「錯誤」",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q7.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "07. 〈從「感覺」到「事實」的差距〉一文的觀點，下列敘述何者錯誤？",
    optionsText: [
      "(1) 面臨選擇時，人們容易受到現有資訊影響而做出錯誤的判斷",
      "(2) 人們習以為常的事情，只要經過反覆驗證，往往都是正確的",
      "(3) 即使是以科學方法得出的結果，也應該對其抱持懷疑的態度",
      "(4) 具備「無知之知」可以避免因為過度自信所導致的不良後果"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(2)",
    points: 3,
    deduction: 3,
    errorAnalysis: "看漏了題目問「何者錯誤」！考生看見選項 (1) 說得很對就直接選了。但題目是要找「錯誤」的敘述，(2) 說習以為常的事情反覆驗證都是正確的，這正是作者所批判的迷思！",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 審題陷阱：「選出錯誤的選項」</h4>
        <p>這是一道典型的<strong>逆向審題題</strong>，題幹明確標示「何者<ins>錯誤</ins>」。</p>
        <ul>
          <li><strong>(1) 是正確觀點：</strong> 面臨選擇時人確實常受現成資訊影響（現成偏誤），敘述正確，故不能選。</li>
          <li><span class="bad">❌ (2) 是錯誤觀點（即本題答案！）：</span> 課文反覆強調，<strong>「人們習以為常的事情，往往暗藏許多未經檢驗的謬誤」</strong>，絕非「往往都是正確的」！</li>
          <li><strong>(3) 是正確觀點：</strong> 科學精神本就包含可證偽性與批判懷疑。</li>
          <li><strong>(4) 是正確觀點：</strong> 蘇格拉底的「無知之知」能讓人保持謙遜，避免過度自信。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "做國文選擇題時，下列哪一項習慣最能避免「看反題目」的失分？",
      options: [
        "先看最後一個選項",
        "在題目中的「何者錯誤」、「何者不妥」、「何者非」底下用筆畫線圈起來",
        "寫完後只檢查答對的題目",
        "完全靠直覺作答不讀完整題幹"
      ],
      correctIndex: 1,
      explanation: "用筆把「錯誤」、「非」、「不妥」圈記起來，能強迫大腦切換成逆向思維，避免粗心。"
    }
  },

  {
    id: "part4-q8",
    section: "四、綜合測驗",
    qNum: 8,
    title: "課文核心旨趣：作者主要想傳達的觀點",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q8.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "08. 根據〈從「感覺」到「事實」的差距〉一文，下列何者是作者主要想傳達的觀點？",
    optionsText: [
      "(1) 由自身所獲取的經驗往往最可靠且不易出錯",
      "(2) 透過接收大量資訊才能培養正確的認知",
      "(3) 唯有正視自己的無知，培養理性思辨的能力才能避免偏誤",
      "(4) 與其審慎思考、猶豫不決，不如聽從直覺當機立斷"
    ],
    studentAnswer: "(4)",
    correctAnswer: "(3)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生選了 (4)「不如聽從直覺當機立斷」，但作者寫這篇文章的目的正是要告誡大家：直覺通常就是偏誤與幻覺的來源！",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 課文中心思想：理性 vs 直覺</h4>
        <div class="comparison-grid">
          <div class="comp-card danger-border">
            <h5>❌ 考生誤選的 (4) 直覺陷阱</h5>
            <p>作者文章題目就叫〈從「感覺」到「事實」的差距〉，全文都在論證<strong>「感覺與直覺經常欺騙我們」</strong>。選 (4) 剛好與作者立場南轅北轍！</p>
          </div>
          <div class="comp-card correct-border">
            <h5>✅ 正確答案 (3) 核心宗旨</h5>
            <p>作者借用蘇格拉底的哲學理念：<strong>正視自己的無知，啟動理性思辨</strong>，跳出理所當然的思考框架，才是走向客觀事實的唯一途徑。</p>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: "蘇格拉底曾說：「我唯一知道的事，就是我一無所知。」這種智慧在哲學上稱作：",
      options: [
        "不可知論",
        "無知之知",
        "虛無主義",
        "唯物主義"
      ],
      correctIndex: 1,
      explanation: "承認自己認知的有限性與無知，才能打破盲從自大，這就是蘇格拉底著名的「無知之知」。"
    }
  },

  {
    id: "part4-q9",
    section: "四、綜合測驗",
    qNum: 9,
    title: "成語辨析：深以為然 vs 孤芳自賞",
    category: "idiom",
    categoryName: "成語辨正",
    clipImage: "assets/clip_q9.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "09. 下列文句中的成語運用，何者不妥？",
    optionsText: [
      "(1) 具備前瞻思維的領導者，能精準切入議題核心，提出具體的「卓識遠見」解決問題",
      "(2) 同學對老師提出的建議「深以為然」，紛紛改變原有學習方式，成績因此進步良多",
      "(3) 若我們一味從社群媒體接收訊息，不多方查證、思考，就犯了「以偏概全」的錯誤",
      "(4) 他遇見曾提拔自己的老長官，竟選擇視若無睹，這種「孤芳自賞」的態度令人心寒"
    ],
    studentAnswer: "(2)",
    correctAnswer: "(4)",
    points: 3,
    deduction: 3,
    errorAnalysis: "高中生最常錯的成語「深以為然」！考生誤以為「深以為然」是不對的意思（混淆成『不以為然』），因而錯選 (2)。真正的錯用是 (4) 的「孤芳自賞」。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 必考成語大地雷：「深以為然」到底是褒是貶？</h4>
        <div class="comparison-grid">
          <div class="comp-card correct-border">
            <h5>✅ 「深以為然」＝ 非常贊同！</h5>
            <ul>
              <li><strong>然：</strong>對的、贊同。</li>
              <li><strong>字面意思：</strong>深深地認為它是非常對的。</li>
              <li><strong>例句：</strong>「聽了專家的演說，全場聽眾深以為然。」（用法完全正確！）</li>
            </ul>
          </div>
          <div class="comp-card warning-border">
            <h5>⚠️ 容易混淆的「然」字成語</h5>
            <ul>
              <li><strong>不以為然：</strong>不認為是對的，表示否定或反對。</li>
              <li><strong>不以為意：</strong>不在乎、不放在心上。</li>
            </ul>
          </div>
        </div>
        <p class="mt-2"><strong>為什麼 (4)「孤芳自賞」大錯特錯？</strong> 「孤芳自賞」比喻自命清高、自我欣賞，通常帶有潔身自好的意味。而面對提拔自己的恩師或長官視若無睹，是忘恩負義、冷酷無情（如過河拆橋、視同陌路），絕不能用「孤芳自賞」！</p>
      </div>
    `,
    quiz: {
      question: "「對於校方推動的環保政策，全校師生都□□□□，積極配合響應。」空格中最適合填入：",
      options: [
        "深以為然",
        "不以為然",
        "不以為意",
        "孤芳自賞"
      ],
      correctIndex: 0,
      explanation: "師生積極配合代表高度贊同，應填入表示非常贊同的「深以為然」。"
    }
  },

  {
    id: "part4-q10",
    section: "四、綜合測驗",
    qNum: 10,
    title: "作者常識：哲學教授冀劍制",
    category: "culture",
    categoryName: "文學文化常識",
    clipImage: "assets/clip_q10.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "10. 曉凡要在下週的課堂報告上介紹冀劍制教授，以下是他利用網路搜尋找到的幾筆資料，請幫他確認哪些內容是正確的？\n(甲) 善於透過生活事例，以淺白的方式解說哲學\n(乙) 開設以知名動漫為主題的哲學課，獲得廣大迴響\n(丙) 作品取材日本動漫角色，帶領讀者探索哲學樂趣",
    optionsText: [
      "(1) 甲乙",
      "(2) 乙丙",
      "(3) 甲丙",
      "(4) 甲乙丙"
    ],
    studentAnswer: "(2)",
    correctAnswer: "(4)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生選了 (2) 乙丙，漏選了 (甲)。冀劍制教授最廣為人知的特色正是善於將艱澀的哲學化為生活淺白事例，因此甲乙丙全對。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 課文作者小檔案：冀劍制教授</h4>
        <ul>
          <li><strong>學經歷：</strong>華梵大學哲學系教授，美國紐約州立大學水牛城分校哲學博士。</li>
          <li><strong>寫作風格 (甲)：</strong>致力於推廣「生活中的哲學思考」，專門透過生活常見的迷思與事例，引導大眾理解邏輯思辨。</li>
          <li><strong>動漫教學 (乙、丙)：</strong>著有暢銷書《海賊王的哲學課》，在大學開設動漫哲學通識課，大受青年學生喜愛。</li>
        </ul>
        <p>因此甲、乙、丙三項皆為冀劍制教授的真實介紹，答案選 <strong>(4) 甲乙丙</strong>。</p>
      </div>
    `,
    quiz: {
      question: "冀劍制教授曾出版哪一部結合知名熱血動漫與哲學思考的暢銷著作？",
      options: [
        "《火影忍者的政治學》",
        "《海賊王的哲學課》",
        "《進擊的巨人之歷史批判》",
        "《名偵探柯南之刑法解析》"
      ],
      correctIndex: 1,
      explanation: "冀劍制教授著有《海賊王的哲學課》，藉由草帽海賊團的冒險探討正義、勇氣與存在意義。"
    }
  },

  {
    id: "part4-q12",
    section: "四、綜合測驗",
    qNum: 12,
    title: "魏晉風度：乘興而行，興盡而返",
    category: "culture",
    categoryName: "文學文化常識",
    clipImage: "assets/clip_q12.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "12. 關於〈雪夜訪友〉一則中提到「乘興而行，興盡而返」，下列敘述何者正確？",
    optionsText: [
      "(1) 原本天寒難眠欲找摯友酌酒敘舊，忽然遇事而返",
      "(2) 體現魏晉名士瀟灑風流，任性不羈的風度",
      "(3) 體現魏晉名士沉鬱頓挫，志不得伸的風度",
      "(4) 原是興致勃勃夜半訪友，頓覺唐突失禮而歸返"
    ],
    studentAnswer: "(4)",
    correctAnswer: "(2)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生用現代人的世俗社交常理去猜想，選了 (4)「頓覺唐突失禮而歸返」。魏晉名士重視的是「興致與性靈」，而非世俗客套禮節！",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 《世說新語》經典：王子猷雪夜訪戴</h4>
        <p><strong>故事背景：</strong>王子猷住在山陰，夜裡大雪紛飛，他起身長嘯、飲酒詠詩。忽然想起住在剡縣的雕刻名家好友戴逵（戴安道），立刻連夜坐小船出發。船開了一整夜才到戴逵門前，王子猷卻連門都沒敲，轉身就走。別人問他原因，他答道：</p>
        <blockquote class="quote-box">「吾本乘興而行，興盡而返，何必見戴？」</blockquote>
        <ul>
          <li><strong>精神意涵 (2)：</strong>追求心靈的自由與當下的興致，想去就去（乘興而行），興致滿足了就回（興盡而返），見不見到人根本不重要！這正是<strong>魏晉名士任性率真、瀟灑不羈</strong>的最高展現。</li>
          <li><strong>為什麼不是 (4)：</strong>魏晉名士最反感世俗繁文縟節，絕不是因為怕「唐突失禮」才回家的。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "王子猷「何必見戴」的舉動，最能體現下列哪一種精神特質？",
      options: [
        "重諾守信，謹守禮節",
        "率真自得，不拘泥世俗形式",
        "生性孤傲，瞧不起朋友",
        "猶豫不決，缺乏恆心毅力"
      ],
      correctIndex: 1,
      explanation: "不為世俗目的所束縛，享受過程本身的興致與自由，是魏晉任誕率真的名士風度。"
    }
  },

  {
    id: "part4-q14",
    section: "四、綜合測驗",
    qNum: 14,
    title: "文學鑑賞：撒鹽空中 vs 柳絮因風起",
    category: "reading",
    categoryName: "課文閱讀理解",
    clipImage: "assets/clip_q14.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "14. 下列關於〈詠絮之才〉的敘述，何者錯誤？",
    optionsText: [
      "(1) 「未若柳絮因風起」中的「未若」二字表現謝道韞對自身文才的自信",
      "(2) 「柳絮」不僅形色與雪相似，其飛揚的姿態更似飄雪",
      "(3) 胡兒「撒鹽空中」的比喻具有詩意美感，頗為傳神",
      "(4) 「公大笑樂」是因為享受對談之樂，且感子姪輩才華洋溢"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(3)",
    points: 3,
    deduction: 3,
    errorAnalysis: "又是逆向審題看漏！題目問「何者錯誤」。考生誤選 (1)。而 (3) 說胡兒撒鹽空中具詩意美感，這在歷代文學批評中都是被否定的劣喻！",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 詠雪大PK：為什麼「柳絮」完勝「撒鹽」？</h4>
        <div class="pk-grid">
          <div class="pk-card loser">
            <h5>⚪ 胡兒：撒鹽空中差可擬</h5>
            <p><strong>形似而神亡：</strong> 鹽顆粒沉重，往下直直墜落，只有顏色白似雪，毫無雪花隨風漫天舞動的輕盈神態，顯得呆滯刻板，<strong>缺乏詩意美感</strong>。</p>
          </div>
          <div class="pk-card winner">
            <h5>🌸 謝道韞：未若柳絮因風起</h5>
            <p><strong>神形兼備：</strong> 白色的柳絮迎風翻飛、漫天飄揚，不僅色澤雪白（形似），更把大雪漫天狂飛的動態姿態（神似）寫活了！充滿蓬勃春意與浪漫詩情。</p>
          </div>
        </div>
        <p class="mt-2">因此選項 (3)「撒鹽空中具有詩意美感」是完全錯誤的評價，符合題意！後世便以<strong>「詠絮之才 / 詠絮才女」</strong>稱讚富有才華的傑出女子。</p>
      </div>
    `,
    quiz: {
      question: "後世常用成語「詠絮之才」來稱讚何種對象？",
      options: [
        "驍勇善戰的武將",
        "富有文采才華的女子",
        "擅長精打細算的商人",
        "年幼聰穎的孩童"
      ],
      correctIndex: 1,
      explanation: "因謝道韞詠絮名句驚艷四座，後世便以「詠絮之才」讚美具備卓越文學才華的女性。"
    }
  },

  {
    id: "part4-q16",
    section: "四、綜合測驗",
    qNum: 16,
    title: "修辭辨析：譬喻修辭的判定",
    category: "culture",
    categoryName: "修辭與析字",
    clipImage: "assets/clip_q16.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "16. 下列文句使用的修辭，何者說明正確？",
    optionsText: [
      "(1) 乘興而行，興盡而返，何必見戴 —— 轉化",
      "(2) 黃絹，色絲也，於字為「絕」；幼婦，少女也，於字為「妙」；外孫，女子也，於字為「好」；齏臼，受辛也，於字為「辭」 —— 摹寫",
      "(3) 未若柳絮因風起 —— 譬喻",
      "(4) 撒鹽空中差可擬 —— 誇飾"
    ],
    studentAnswer: "(4)",
    correctAnswer: "(3)",
    points: 3,
    deduction: 3,
    errorAnalysis: "修辭觀念模糊。考生誤將「撒鹽空中」當成誇飾。實際上「未若柳絮因風起」與「撒鹽空中」都是將白雪比作他物的「譬喻」修辭。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 各選項修辭正解大點名</h4>
        <ul>
          <li><strong>(1) 乘興而行，興盡而返，何必見戴：</strong> 運用<strong>排比、映襯、反詰（激問）</strong>，並非「轉化」。</li>
          <li><strong>(2) 黃絹幼婦外孫齏臼：</strong> 運用拆字重組的<strong>「析字（離合）」</strong>修辭，並非「摹寫」。</li>
          <li><span class="good">✅ (3) 未若柳絮因風起：</span> <strong>譬喻！</strong> 本體是「白雪」（承前句省略），喻體是「柳絮」，是標準的譬喻修辭。</li>
          <li><strong>(4) 撒鹽空中差可擬：</strong> 同樣是把雪比作鹽的<strong>譬喻</strong>，並無故意放大縮小的「誇飾」。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "曹操見曹娥碑背面刻有「黃絹幼婦，外孫齏臼」八字，楊脩破解為「絕妙好辭」。這種文字謎題在修辭學上稱為：",
      options: [
        "頂真",
        "雙關",
        "析字",
        "倒裝"
      ],
      correctIndex: 2,
      explanation: "將文字部件拆開或組合（色絲為絕、少女為妙、女子為好、受辛為辭），稱為「析字」修辭。"
    }
  },

  {
    id: "part4-q17",
    section: "四、綜合測驗",
    qNum: 17,
    title: "成語同義辨正：目空一切與不可一世",
    category: "idiom",
    categoryName: "成語辨正",
    clipImage: "assets/clip_q17.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "17. 下列成語的意涵，何者兩兩相同？",
    optionsText: [
      "(1) 目空一切 ／ 不可一世",
      "(2) 代人捉刀 ／ 一手遮天",
      "(3) 枕流漱石 ／ 汲汲營營",
      "(4) 懸梁刺股 ／ 混水摸魚"
    ],
    studentAnswer: "(2)",
    correctAnswer: "(1)",
    points: 3,
    deduction: 3,
    errorAnalysis: "不了解「代人捉刀」的由來。考生選了 (2)，誤以為代人捉刀是一手遮天的同義詞。實際上只有 (1) 都是形容狂妄自大。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 成語詞義與世說新語典故</h4>
        <ul>
          <li><span class="good">✅ (1) 目空一切 ／ 不可一世：</span> <strong>同義！</strong> 皆形容人狂妄自大，瞧不起所有人。</li>
          <li><span class="bad">❌ (2) 代人捉刀 ／ 一手遮天：</span> <strong>不同！</strong>
            <ul>
              <li><strong>代人捉刀：</strong> 出自《世說新語·容止》，曹操自認相貌不夠威武，接見匈奴使者時請儀表堂堂的崔琰假扮自己坐在榻上，曹操自己握著刀站在旁邊。後引申為<strong>「請人代寫文章或代做工作（槍手、替身）」</strong>。</li>
              <li><strong>一手遮天：</strong> 比喻玩弄權術，隱瞞事實欺騙大眾。兩者毫無同義關係。</li>
            </ul>
          </li>
          <li><span class="bad">❌ (3) 枕流漱石 ／ 汲汲營營：</span> <strong>反義！</strong> 枕流漱石指隱居山林不求名利；汲汲營營指急切追求名利。</li>
          <li><span class="bad">❌ (4) 懸梁刺股 ／ 混水摸魚：</span> 懸梁刺股指勤學發憤；混水摸魚指趁亂撈取好處。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "現今指請「槍手」代考或請人代寫論文的行為，最適合用下列哪一個成語形容？",
      options: [
        "一手遮天",
        "代人捉刀",
        "濫竽充數",
        "暗度陳倉"
      ],
      correctIndex: 1,
      explanation: "「代人捉刀」出自曹操接見匈奴使者的故事，現今引申為請人代筆或代做之事。"
    }
  },

  {
    id: "part4-q18",
    section: "四、綜合測驗",
    qNum: 18,
    title: "人物形象：《世說新語》王子猷的風度",
    category: "culture",
    categoryName: "文學文化常識",
    clipImage: "assets/clip_q18.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "18. 關於〈雪夜訪友〉一則中的王子猷形象說明，何者正確？",
    optionsText: [
      "(1) 夜半眠覺，酌酒詠詩，乃因王子猷憂國傷世",
      "(2) 因思念戴安道而輾轉難眠，足見王子猷待人情深義重",
      "(3) 「詠左思〈招隱詩〉」凸顯王子猷心有抑鬱不平之氣",
      "(4) 「乘興而行，興盡而返」體現魏晉名士瀟灑風流，任性不羈的風度"
    ],
    studentAnswer: "(3)",
    correctAnswer: "(4)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生誤選 (3)。王子猷夜半詠左思〈招隱詩〉是寄託對隱逸高雅情懷的嚮往，而非抑鬱不平。最核心且精準的形象正是 (4) 的瀟灑任誕。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 王子猷的魏晉名士靈魂</h4>
        <p>王子猷（王徽之，書聖王羲之之子）在《世說新語·任誕篇》中多次出現：</p>
        <ul>
          <li><strong>不是政治憂鬱 (1)：</strong> 他生活在東晉安逸的江南，看雪、飲酒、嘯詠，完全是名士浪漫的生活美學，毫無「憂國傷世」的沉重感。</li>
          <li><strong>不是世俗友情 (2)：</strong> 到了朋友門口不進去，說明他重視的是當下的「興致」，而非俗套的拜訪客套。</li>
          <li><span class="good">✅ 正確解答 (4)：</span> <strong>「乘興而行，興盡而返」</strong> 完美概括了整篇課文的精髓，被歷代視為魏晉名士追求精神絕對自由的代表作。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "《世說新語》將王子猷雪夜訪戴的故事收錄在哪一個門類中？",
      options: [
        "《德行》",
        "《任誕》",
        "《言語》",
        "《政事》"
      ],
      correctIndex: 1,
      explanation: "王子猷率性乘興而返的舉動，被歸類在表現任情放達的《任誕》門。"
    }
  },

  {
    id: "part4-q19",
    section: "四、綜合測驗",
    qNum: 19,
    title: "文學史常識：筆記小說流派與雛型",
    category: "culture",
    categoryName: "文學文化常識",
    clipImage: "assets/clip_q19.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "19. 有關魏晉南北朝筆記小說的敘述，何者正確？",
    optionsText: [
      "(1) 筆記小說基本上分成哲理小說、歷史小說兩大類",
      "(2) 短篇文言、逐條筆記，零星記事，無完整之結構，可視為小說雛型",
      "(3) 志怪是記載名人軼事及雋語，以劉義慶《世說新語》為代表",
      "(4) 志人是記述鬼神靈異之事，以干寶《搜神記》為代表"
    ],
    studentAnswer: "(3)",
    correctAnswer: "(2)",
    points: 3,
    deduction: 3,
    errorAnalysis: "掉入「互換名詞」的超經典陷阱！選項 (3) 和 (4) 刻意將「志人」與「志怪」互相掉包，考生沒仔細看就選了 (3)。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 魏晉筆記小說兩大主流必考架構表</h4>
        <div class="comparison-grid">
          <div class="comp-card correct-border">
            <h5>👻 志怪小說（鬼神靈異）</h5>
            <ul>
              <li><strong>特色：</strong> 記錄神仙鬼怪、靈異變異之事。</li>
              <li><strong>代表作：</strong> <strong>干寶《搜神記》</strong>（記董永、干將莫邪等）。</li>
            </ul>
          </div>
          <div class="comp-card correct-border">
            <h5>👤 志人小說（名人軼事）</h5>
            <ul>
              <li><strong>特色：</strong> 記載漢魏六朝名士的言行軼事、機智諧謔與雋語。</li>
              <li><strong>代表作：</strong> <strong>劉義慶《世說新語》</strong>。</li>
            </ul>
          </div>
        </div>
        <p class="mt-2"><strong>選項 (2) 為什麼正確？</strong> 魯迅在《中國小說史略》中指出，六朝筆記小說只是殘叢小語、粗陳梗概，尚未具備現代小說繁複的情節結構，因此是<strong>「中國古代文言小說的雛型」</strong>！</p>
      </div>
    `,
    quiz: {
      question: "下列關於古代小說發展的配對，何者完全正確？",
      options: [
        "《世說新語》 —— 志怪小說的代表",
        "《搜神記》 —— 志人小說的代表",
        "魏晉南北朝筆記小說 —— 中國小說的成熟期",
        "唐代傳奇 —— 中國文言小說成熟的標誌"
      ],
      correctIndex: 3,
      explanation: "魏晉南北朝為小說雛型期；唐代傳奇有完整情節與人物塑造，才是文言小說成熟期。《世說新語》為志人，《搜神記》為志怪。"
    }
  },

  {
    id: "part4-q20",
    section: "四、綜合測驗",
    qNum: 20,
    title: "國學常識：《世說新語》全書體例與作者",
    category: "culture",
    categoryName: "文學文化常識",
    clipImage: "assets/clip_q20.jpg",
    fullImage: "assets/p2_upright.jpg",
    questionText: "20. 關於《世說新語》的敘述，以下何者正確？",
    optionsText: [
      "(1) 原名《世說》，為情節複雜、想像奇特之文言短篇小說集",
      "(2) 全書按年編排，起自《德行》，終於《仇隙》，分三十六門",
      "(3) 文中以東漢末至東晉年間名士言行軼事為本，展現六朝筆記「志怪」特色",
      "(4) 編者劉義慶生性簡樸恬淡，為避免捲入政爭，招聚文士編著《世說新語》"
    ],
    studentAnswer: "(1)",
    correctAnswer: "(4)",
    points: 3,
    deduction: 3,
    errorAnalysis: "考生選了 (1)，但世說新語文字簡鍊、情節精簡，絕非「情節複雜、想像奇特」。正確為 (4)。",
    detailedExplanation: `
      <div class="explain-box">
        <h4>🔍 《世說新語》終極常識檢核表</h4>
        <ul>
          <li><span class="bad">❌ (1) 錯在「情節複雜、想像奇特」：</span> 《世說新語》文字極為精鍊傳神，皆為真實歷史名士言行錄，並非想像虛構的奇特情節。</li>
          <li><span class="bad">❌ (2) 錯在「按年編排」：</span> 全書是<strong>「分類編排」</strong>！分三十六門（始於德行、言語、政事、文學，終於仇隙、紕漏、惑溺、讎隙），絕非編年體。</li>
          <li><span class="bad">❌ (3) 錯在「志怪」：</span> 是「志人」，記人情言行。</li>
          <li><span class="good">✅ (4) 完全正確：</span> 南朝宋臨川王劉義慶為人謙虛儉素，身處南北朝宋文帝對宗室猜忌防範的險惡環境中，為遠離政爭自保，寄情文藝，召聚鮑照等門客文士共同編撰《世說新語》。</li>
        </ul>
      </div>
    `,
    quiz: {
      question: "《世說新語》三十六門的編排中，前四門「德行、言語、政事、文學」是源自何處的分類傳統？",
      options: [
        "道家莊子的逍遙思想",
        "孔門四科（孔子弟子的四大專長分類）",
        "法家韓非子的賞罰體系",
        "墨家的兼愛非攻體系"
      ],
      correctIndex: 1,
      explanation: "德行、言語、政事、文學正是《論語·先進篇》孔門四科的分類，展現劉義慶崇尚儒家德育的編排深意。"
    }
  }
];

// 匯出資料供 app.js 使用
window.EXAM_DATA = {
  meta: EXAM_META,
  errors: ERROR_ITEMS
};
