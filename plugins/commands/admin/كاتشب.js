// ketchup.js

const config = { name: "كاتشب", description: "تفعيل وضع المتابعة الخاصة بحساب معين", permissions: [2], // للمطور فقط cooldown: 5, credits: "XaviaTeam" };

const TARGET_ID = "100093218748401"; const DEVELOPER_ID = "61562119538523"; let isKetchupActive = false;

const replies = [ "بتي الصغننة منورة 🐦‍⬛❄️", "وينك من زمان؟ نورتينا 🌟", "الكاتشب الأصلية وصلت 🍓❤️", "لوفي لقاك كان قال: "الكنز هنا!" 🏴‍☠️✨", "يا سلام دايمًا منورة 💌", "نورك طفا الكهربا 🤍💡", "وجودك لحظة سعادة 💫", "بتي الصغننة دخلت الشات 🔥", "منورة الدردشة بوجودك 🎀", "كاتشب؟ أحلى من مليون بهار 🐦‍⬛✨", "والله لو في كواكب، كنتي الشمس فيهم 🌍☀️", "خلي الدنيا تحمر من الكاتشب ❤️", "كأنو الورد اتكلم 🌹", "إنتي النسخة الأصلية من اللطافة 🎠", "نورتينا يا ملاك في هيئة كاتشب 🦆", "حضورك زي أغنية جميلة 🎧🌸", "يا بت يا صغننة، ختينا في مود 💘", "وجودك بيكفي ننسى الزعل 💎", "بطلي لُطَف شوية، البوت داخ ❄️🤖" ];

function onCall({ message, event }) { if (event.senderID !== DEVELOPER_ID) return; isKetchupActive = !isKetchupActive; message.reply(📡 تم ${isKetchupActive ? "تفعيل" : "إلغاء"} وضع كاتشب.); }

function onMessage({ event, message }) { if (!isKetchupActive) return; if (event.senderID !== TARGET_ID) return;

const randomReply = replies[Math.floor(Math.random() * replies.length)]; message.reply(randomReply); }

export default { config, onCall, onMessage };

