const config = {
  name: "هل-تعلم",
  aliases: ["معلومة", "معلومة-عشوائية"],
  description: "يعطيك معلومة عشوائية ممتعة",
  usage: "",
  cooldown: 3,
  credits: "XaviaTeam"
};

const facts = [
  "هل تعلم أن النحلة ترفرف بجناحيها 200 مرة في الثانية؟ 🐝",
  "هل تعلم أن أطول كلمة في القرآن هي (فأسقيناكموه)؟ 📖",
  "هل تعلم أن قلب الحوت الأزرق بحجم سيارة؟ 🐋",
  "هل تعلم أن هناك أكثر من 200 جين في جسم الإنسان لا نعرف وظيفتها بعد؟ 🧬",
  "هل تعلم أن القمر يبتعد عن الأرض 3.8 سم كل سنة؟ 🌕"
];

async function onCall({ message }) {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  return message.reply(fact);
}

export default { config, onCall };
