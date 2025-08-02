// --- 1. 設定項目 ---

// 1-1. 質問リスト (全75問)
const questions = [
    // R/S (関係性)
    { text: "これまで、恋人がいたことがある。", effect: { r: 6, v: 0, a: 0, h: 0 } },
    { text: "一人でいることは、苦痛というより自由だと感じる。", effect: { r: -1, v: 1, a: 0, h: 0 } },
    { text: "恋愛関係は、人生に不可欠なものだと思う。", effect: { r: 1, v: 0, a: 1, h: 0 } },
    { text: "誰かと深く関わるのは、面倒だと感じることが多い。", effect: { r: -1, v: 0, a: -1, h: 0 } },
    { text: "もし恋人ができたら、自分の人生はもっと良くなると思う。", effect: { r: 1, v: -1, a: 0, h: 0 } },
    { text: "パートナーがいる人々を見ると、疎外感を覚える。", effect: { r: 1, v: -1, a: 0, h: 0 } },
    { text: "自分の趣味や時間を、他人のために犠牲にしたくない。", effect: { r: -1, v: 1, a: 0, h: 0 } },
    { text: "結局、人は一人で生まれ、一人で死んでいくものだ。", effect: { r: -1, v: -1, a: 1, h: 0 } },
    { text: "異性から、魅力的だと思われている自信がある。", effect: { r: 1, v: 1, a: 0, h: 1 } },
    { text: "恋愛の駆け引きやアプローチは、得意な方だ。", effect: { r: 2, v: 1, a: 0, h: 0 } },
    { text: "たとえ恋人がいなくても、友人や家族がいれば満足だ。", effect: { r: -1, v: 0, a: 1, h: 0 } },
    { text: "自分は、恋愛市場において「負け組」だと感じる。", effect: { r: 1, v: -1, a: 0, h: -1 } },
    { text: "他人の恋愛話を聞くのは、あまり好きではない。", effect: { r: -1, v: 0, a: -1, h: 0 } },
    { text: "性的な経験がないことに、コンプレックスを感じる。", effect: { r: 1, v: -1, a: 0, h: 0 } },
    { text: "結婚や家庭を持つことに、強い憧れがある。", effect: { r: 1, v: 0, a: 1, h: 0 } },
    { text: "自分から積極的に、異性に話しかけることができる。", effect: { r: 1, v: 1, a: 0, h: 0 } },
    { text: "孤独感に、押しつぶされそうになる夜がある。", effect: { r: 1, v: -1, a: 0, h: 0 } },
    { text: "自分は、誰かに愛される価値のある人間だと思う。", effect: { r: 1, v: 1, a: 0, h: 0 } },

    // V/N (生命観)
    { text: "自分の人生には、明確な目標がある。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "結局、何をしても最後は無意味だと感じる。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "自分を改善するための努力は、楽しいと感じる。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "朝、目が覚めた時、今日も一日が始まることに憂鬱になる。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "自分の将来は、明るいと信じている。", effect: { r: 0, v: 1, a: 1, h: 0 } },
    { text: "物事がうまくいかないのは、自分のせいではなく運命だと思う。", effect: { r: 0, v: -1, a: 0, h: -1 } },
    { text: "困難な状況でも、諦めずに解決策を探す方だ。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "「死んだらどうなるか」について、よく考える。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "自分の人生は、自分でコントロールできると思う。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "過去の失敗や後悔に、よく囚われる。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "新しい知識やスキルを学ぶことに、喜びを感じる。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "自分の人生を、一つの物語として楽しんでいる。", effect: { r: 0, v: 1, a: 0, h: 0 } },
    { text: "「生きているだけで丸儲け」という言葉に、共感できる。", effect: { r: 0, v: 1, a: 1, h: 0 } },
    { text: "自分は、他の人よりも不幸な人生を歩んでいると思う。", effect: { r: 0, v: -1, a: 0, h: -1 } },
    { text: "何事にも、やる気が起きないことが多い。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "自分の長所を、いくつか挙げることができる。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "人生は、苦しみの連続だと思う。", effect: { r: 0, v: -1, a: 0, h: 0 } },
    { text: "たとえ失敗しても、それは良い経験だったと思える。", effect: { r: 0, v: 1, a: 0, h: 0 } },
    { text: "自分の存在価値について、深く悩むことがある。", effect: { r: 0, v: -1, a: 0, h: 0 } },

    // A/M (人間観)
    { text: "ほとんどの人は、自分の利益のために行動している。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "世の中は、基本的に公正にできていると思う。", effect: { r: 0, v: 0, a: 1, h: 0 } },
    { text: "他人の善意を、素直に信じることができる。", effect: { r: 0, v: 0, a: 1, h: 0 } },
    { text: "ニュースで見る社会問題に、強い憤りを感じる。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "人は、見かけや肩書で他人を判断するものだ。", effect: { r: 0, v: 0, a: -1, h: 1 } },
    { text: "困っている人がいれば、見返りを求めずに助けたい。", effect: { r: 0, v: 0, a: 1, h: 0 } },
    { text: "約束は、破られるのが当たり前だと思っている。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "友人や同僚は、ライバルというより仲間だと思う。", effect: { r: 0, v: 0, a: 1, h: 0 } },
    { text: "社会のルールや常識には、常に疑問を持つべきだ。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "人間は、本質的に愚かな生き物だと思う。", effect: { r: 0, v: -1, a: -1, h: 0 } },
    { text: "SNSで見る他人の幸せそうな姿は、ほとんどが演技だと思う。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "自分とは違う意見を持つ人とも、敬意をもって話せる。", effect: { r: 0, v: 0, a: 1, h: 0 } },
    { text: "人間関係は、信頼よりも駆け引きが重要だ。", effect: { r: 0, v: 0, a: -1, h: 1 } },
    { text: "人類の未来は、明るいと思う。", effect: { r: 0, v: 1, a: 1, h: 0 } },
    { text: "他人の成功を、心から祝福することができる。", effect: { r: 0, v: 1, a: 1, h: 0 } },
    { text: "世の中の「常識」に、強い違和感を覚える。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "自分を裏切った人間を、絶対に許すべきではない。", effect: { r: 0, v: 0, a: -1, h: 0 } },
    { text: "多様性や平等といった理念は、ただの綺麗事だと思う。", effect: { r: 0, v: 0, a: -1, h: 0 } },

    // H/L (地位)
    { text: "自分の学歴や経歴に、満足している。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "社会的な成功は、幸福にとって重要ではない。", effect: { r: 0, v: 0, a: 0, h: -1 } },
    { text: "自分は、社会の競争から取り残されていると感じる。", effect: { r: 0, v: -1, a: 0, h: -1 } },
    { text: "経済的な豊かさは、心の余裕に直結する。", effect: { r: 0, v: 0, a: 0, h: 1 } },
    { text: "他人から、尊敬されるような人間になりたい。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "地位や名誉よりも、自由な時間の方が価値がある。", effect: { r: 0, v: 0, a: 0, h: -1 } },
    { text: "自分は、同年代の他の人々と比べて劣っていると思う。", effect: { r: 0, v: -1, a: 0, h: -1 } },
    { text: "リーダーとして、集団を率いる役割は得意な方だ。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "高価なものを身につけることで、自信が湧いてくる。", effect: { r: 0, v: 0, a: 0, h: 1 } },
    { text: "社会の底辺で生きる人々の気持ちが、よく分かる。", effect: { r: 0, v: 0, a: 1, h: -1 } },
    { text: "自分の能力は、もっと高い収入を得るに値すると思う。", effect: { r: 0, v: 0, a: 0, h: 1 } },
    { text: "競争の激しい環境に身を置くのは、好きではない。", effect: { r: 0, v: 0, a: 0, h: -1 } },
    { text: "将来、大きな富を築くことを夢見ている。", effect: { r: 0, v: 1, a: 0, h: 1 } },
    { text: "権力や権威に対して、強い反感を覚える。", effect: { r: 0, v: 0, a: -1, h: -1 } },
    { text: "自分は、社会の「勝ち組」ではなく「負け組」だと感じる。", effect: { r: 0, v: -1, a: 0, h: -1 } },
    { text: "質素な生活の中にこそ、本当の豊かさがあると思う。", effect: { r: 0, v: 1, a: 0, h: -1 } },
    { text: "他人を見下すことで、優越感に浸ることがある。", effect: { r: 0, v: 0, a: -1, h: 1 } },
    { text: "自分の仕事や学業に、誇りを持っている。", effect: { r: 0, v: 1, a: 0, h: 1 } }
];
const results = {
    "SNML": { name: "トゥルーセル（Truecel）", description: "全ての希望を失った、運命論の体現者。遺伝や環境によって自らの運命は決定づけられたと確信しており、恋愛、社会、そして自己の生そのものに価値を見出さない。社会との関わりを断ち、静かに時が過ぎるのを待つ状態にある。最も純粋な絶望の形。" },
    "SNAL": { name: "ブルーピル・ドゥーマー（Bluepilled Doomer）", description: "人や社会の善性を信じたいと願いつつも、現実は非情であるという諦観に支配されている。パートナーがいないことや地位の低さに苦しみながらも、その原因を社会の不寛容さや運の悪さに帰し、人間不信にまでは至らない。「いつか誰かが分かってくれるはず」という淡い希望と、深い絶望の間で引き裂かれている。" },
    "SVML": { name: "男磨きセル（Striving-cel）", description: "社会システムを信じず、他人は敵だと認識しているが、その逆境を自らの力で乗り越えようとする強い意志を持つ。ルックスや能力を磨くことに傾倒し、現状の地位から脱却しようと奮闘する。パートナーがいないのは、まだ自分がそのレベルに達していないからだと考え、努力を続ける。" },
    "SVAL": { name: "隠セル（Sheltered-cel）", description: "パートナーはいないが、人生そのものは肯定的。社会や他者を信じており、自分の魅力や価値がまだ見出されていないだけだと考える。特定の趣味や研究に没頭することで自己を確立しようとする。社会との競争からは距離を置き、自らの内なる世界に安らぎと価値を見出す。" },
    "SNMH": { name: "虚無セル（Nihi-cel）", description: "社会的地位や経済的な成功は手に入れたが、その先にあるのが完全な虚無であることを知ってしまったタイプ。人間関係や愛情を信じず、全てを冷笑的に見下している。パートナーがいないのは、他者を必要としないからか、あるいは他者が自分のレベルに値しないからだと考えている。" },
    "SNAH": { name: "エリートセル（Elite-cel）", description: "社会的には成功者だが、深い孤独感と虚無感を抱えている。人を信じ、関係を築きたいと願いながらも、その方法が分からない、あるいは自らの地位が邪魔をして真の関係が築けないと感じている。成功と引き換えに、人間的な温かみを失ってしまったのではないかと恐れている。" },
    "SVMH": { name: "侍（Notcel）", description: "自らの能力で社会的成功を収め、その地位に満足している。人間社会の欺瞞を見抜いているが、それを超越した視点から利用し、楽しむことさえできる。パートナーがいないのは、自らの基準が高すぎるか、あるいは孤高であることが自らの哲学に合致しているから。" },
    "SVAH": { name: "フェイクセル（Fakecel）", description: "社会的地位も自己肯定感も高く、いつでもパートナーを作れる潜在能力があるにも関わらず、自らの意思で独身を選んでいる。仕事や趣味、自己実現を優先し、恋愛を必要としていない。インセルではないが、結果的にパートナーがいない状態であるため、この名が与えられる。" },
    "RNML": { name: "元インセル（Ex-cel）", description: "かつてパートナーを得て「インセル」を卒業したものの、関係が破綻したか、あるいは関係の中に救いを見出せなかった。結果、以前よりも深い虚無と人間不信に陥っている。「インセルを抜けても地獄だった」という現実に直面し、全てを呪っている。" },
    "RNAL": { name: "名誉インセル（Honorary Incel）", description: "パートナーはいるが、人生に意味を見出せず、関係は惰性で続いている。人を信じたい気持ちはあるが、日々の生活や将来への不安から無気力になっている。インセルの苦悩はないが、代わりに「ノーミー（一般人）」としての虚無と倦怠を抱えている。" },
    "RVML": { name: "軟セル（Comeback Cel）", description: "過去の恋愛経験を糧に、現状の低い地位から脱却しようと努力する。社会や他人は信用していないが、自分の力で人生を好転させられると信じている。過去のパートナーを見返す、あるいはより良いパートナーを得ることを目標に、自己改善に励む。" },
    "RVAL": { name: "生存者（Alive）", description: "社会的地位は高くないが、パートナーとの関係の中に確かな幸福を見出している。人間や社会を信じ、ささやかな日常に感謝しながら生きている。この診断の中では最も穏健で、精神的に安定したタイプの一つ。" },
    "RNMH": { name: "腐敗セル（Corrup-cel）", description: "地位もパートナーもいるが、その両方を含め、世界の一切を信じていない。人間関係を権力維持や快楽のためのツールとしか見ておらず、深い虚無感を抱えている。愛や信頼といった価値を嘲笑し、シニカルな態度で世界を支配しようとする。" },
    "RNAH": { name: "仮面セル（Masked-cel）", description: "社会的な体面を保つためにパートナーとの関係を維持しているが、心は満たされていない。内なる虚無を隠し、成功者としての役割を演じ続けている。人を信じたいという気持ちと、地位が作り出す人間関係の空虚さとの間で葛藤している。" },
    "RVMH": { name: "ギガチャド（GigaChad）", description: "圧倒的な成功と自信に満ち溢れている。人間社会の力学を熟知し、それを巧みに利用して自らの目的を達成する。パートナーとの関係も、自らの人生を彩る一つの要素として完全にコントロールしている。その自信と態度は、時に傲慢と見られることもある。" },
    "RVAH": { name: "チャド（Chad）", description: "この診断における、いわば「祝福された存在」。社会的成功、自己肯定感、人間への信頼、そして良好なパートナーシップの全てを手にしている。悩みや葛藤とは無縁に見え、その存在自体が、他の類型にとっては眩しく、時に嫉妬の対象となる理想像。" }
};

// --- 2. プログラム本体 ---
const startButton = document.getElementById('start-button');
const introArea = document.getElementById('intro-area');
const mainTestArea = document.getElementById('main-test-area');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultArea = document.getElementById('result-area');
const resultType = document.getElementById('result-type');
const resultDescription = document.getElementById('result-description');
const progressCounter = document.getElementById('progress-counter');
const finalScoresDisplay = document.getElementById('final-scores');
const backButton = document.getElementById('back-button');

let currentQuestionIndex = 0;
let scores = { r: 0, v: 0, a: 0, h: 0 };
let answerHistory = [];

startButton.addEventListener('click', startDiagnosis);
answerButtons.addEventListener('click', handleAnswer);
backButton.addEventListener('click', goBack);

function startDiagnosis() {
    introArea.classList.add('hidden');
    mainTestArea.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    questionText.textContent = `Q${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].text}`;
    progressCounter.textContent = `残り ${questions.length - currentQuestionIndex} 問`;
    backButton.style.visibility = currentQuestionIndex === 0 ? 'hidden' : 'visible';
}

function handleAnswer(event) {
    const clickedButton = event.target.closest('.answer-btn');
    if (!clickedButton) return;

    answerHistory.push({
        scores: { ...scores },
        questionIndex: currentQuestionIndex
    });

    const answer = clickedButton.dataset.answer;
    const effect = questions[currentQuestionIndex].effect;
    
    let multiplier = 0;
    switch (answer) {
        case 'agree': multiplier = 1; break;
        case 'somewhat_agree': multiplier = 0.5; break;
        case 'unsure': multiplier = 0; break;
        case 'somewhat_disagree': multiplier = -0.5; break;
        case 'disagree': multiplier = -1; break;
    }

    for (const key in scores) {
        scores[key] += (effect[key] || 0) * multiplier;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function goBack() {
    if (answerHistory.length === 0) return;
    const lastState = answerHistory.pop();
    scores = lastState.scores;
    currentQuestionIndex = lastState.questionIndex;
    showQuestion();
}

function showResult() {
    mainTestArea.classList.add('hidden');
    resultArea.classList.remove('hidden');

    const finalTypeCode = determineType(scores);
    const resultData = results[finalTypeCode];

    resultType.innerHTML = `${finalTypeCode} - <span style="color: white;">${resultData.name}</span>`;
    resultDescription.textContent = resultData.description;

    const normalize = (score, maxAbs) => Math.max(-10, Math.min(10, Math.round((score / maxAbs) * 100) / 10));
    const maxAbsScores = { r: 25, v: 25, a: 25, h: 25 };

    finalScoresDisplay.innerHTML = `
        関係性 (R/S): ${normalize(scores.r, maxAbsScores.r)}<br>
        生命観 (V/N): ${normalize(scores.v, maxAbsScores.v)}<br>
        人間観 (A/M): ${normalize(scores.a, maxAbsScores.a)}<br>
        地位認識 (H/L): ${normalize(scores.h, maxAbsScores.h)}
    `;
}

function determineType(finalScores) {
    let typeCode = "";
    typeCode += finalScores.r >= 0 ? 'R' : 'S';
    typeCode += finalScores.v >= 0 ? 'V' : 'N';
    typeCode += finalScores.a >= 0 ? 'A' : 'M';
    typeCode += finalScores.h >= 0 ? 'H' : 'L';
    return typeCode;
}

