const config = {
  name: "موزان",
  description: "يرد تلقائيًا بكلام موزان عند ذكر اسمه + يجاوب على الأسئلة الموجهة له",
  usage: "اكتب كلمة موزان في الرسالة",
  cooldown: 3,
  credits: "XaviaTeam",
  trigger: true // عشان يشتغل تلقائيًا بدون أمر مباشر
};

// اقتباسات عشوائية من شخصية موزان
const mozanQuotes = [
  "هل تظن أنك بقوتك هذه ستقتلني؟ يا للسخرية.",
  "الخوف هو الوسيلة الأفضل للسيطرة.",
  "من يعارضني... مصيره الموت.",
  "أنا موزان كيبوتسوجي، بداية ونهاية الشياطين.",
  "لا يهم من تكون، فأنت مجرد أداة في لعبتي.",
  "الصمت... صوت النجاة الوحيد لمن أمامي.",
  "هل تجرؤ على النظر في عيني؟",
  "الخلود... هو ما أبحث عنه، وليس تفاهاتكم البشرية.",
];

// ردود ذكية على أسئلة فيها "موزان"
const aiReplies = [
  {
    pattern: /ليه.*شرير|ليه.*أنت.*شرير/,
    reply: "الشر؟ هه... أنا فقط أفعل ما يجب لأحكم هذا العالم الضعيف."
  },
  {
    pattern: /هل.*تخاف|بتخاف/,
    reply: "الخوف؟ كلمة لا وجود لها في قاموسي."
  },
  {
    pattern: /من.*أقوى.*شيطان/,
    reply: "أنا... وما عداي مجرد ظل."
  },
  {
    pattern: /هل.*تموت|هل.*فيك تموت/,
    reply: "أنا الخلود بعينه. الموت لا يعرف طريقي."
  },
  {
    pattern: /شنو.*هدفك/,
    reply: "هدفي؟ عالم بلا شمس... حيث أكون الإله الوحيد."
  }
];

async function onCall({ message }) {
  const content = message.body?.toLowerCase() || "";
  if (!content.includes("موزان")) return;

  // لو الرسالة سؤال موجه لموزان، رد بذكاء اصطناعي بسيط
  for (const rule of aiReplies) {
    if (rule.pattern.test(content)) {
      return message.reply(`🤖 موزان: ${rule.reply}`);
    }
  }

  // رد عشوائي عادي من اقتباسات موزان
  const quote = mozanQuotes[Math.floor(Math.random() * mozanQuotes.length)];
  return message.reply(`😈 موزان: ${quote}`);
}

export default {
  config,
  onCall
};
