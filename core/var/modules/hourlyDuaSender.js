import cron from "node-cron";
import fs from "fs-extra";
import moment from "moment-timezone";

// 🕒 إعداد المنطقة الزمنية
const TIMEZONE = "Africa/Khartoum";

// 📜 قائمة الأدعية والأذكار
const messages = [
  "🤲 اللهم ارزقنا حُسن الخاتمة.",
  "🕊️ اللهم صل وسلم على سيدنا محمد.",
  "💖 لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
  "🌙 سبحان الله وبحمده، سبحان الله العظيم.",
  "📿 اللهم اجعل هذا اليوم شاهدًا لنا لا علينا.",
  "🕌 اللهم اجعل القرآن ربيع قلوبنا ونور صدورنا.",
  "✨ اللهم ارزقنا توبةً لا ننتكس بعدها أبدًا.",
  "🌸 استغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه.",
  "💫 اللهم صل وسلم على نبينا محمد عدد ما ذكره الذاكرون وغفل عن ذكره الغافلون.",
  "🌤️ اللهم اجعل هذا اليوم مليئًا بالخير والبركة والسعادة."
];

// 📂 المسار إلى ملف المجموعات
const GROUPS_FILE = './data/groups.json';

// جلب كل معرفات المجموعات
const getAllGroupIDs = async () => {
  if (!fs.existsSync(GROUPS_FILE)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(GROUPS_FILE));
    return Object.keys(data);
  } catch {
    return [];
  }
};

// تفعيل الجدولة
export default async function startHourlyDuaSender(api) {
  cron.schedule("0 * * * *", async () => {
    const now = moment().tz(TIMEZONE).format("HH:mm");
    const msg = messages[Math.floor(Math.random() * messages.length)];

    const groupIDs = await getAllGroupIDs();
    for (const threadID of groupIDs) {
      api.sendMessage(`🕒 ${now} - ${msg}`, threadID);
    }

    console.log(`[✔] تم إرسال دعاء الساعة ${now} إلى ${groupIDs.length} مجموعة.`);
  }, {
    timezone: TIMEZONE
  });

  console.log("[✔] تم تفعيل إرسال الأذكار التلقائي كل ساعة.");
}
