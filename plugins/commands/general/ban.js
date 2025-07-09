export default {
  name: "طرد",
  aliases: ["kick", "ban"],
  description: " طرد عضو من المجموعة (للمشرفين فقط)",
  usage: "[رد على العضو أو منشنه]",
  cooldown: 3,
  permission: 0,
  category: "group",

  async execute({ api, event }) {
    const threadID = event.threadID;
    const senderID = event.senderID;
    const messageID = event.messageID;
    const mentions = event.mentions;
    const messageReply = event.messageReply;

    const threadInfo = await api.getThreadInfo(threadID);
    const adminIDs = threadInfo.adminIDs.map(admin => admin.id);

    if (!adminIDs.includes(senderID)) {
      return api.sendMessage("❌ هذا الأمر مخصص للمشرفين فقط.", threadID, messageID);
    }

    let targetID;

    if (Object.keys(mentions).length > 0) {
      targetID = Object.keys(mentions)[0];
    } else if (messageReply) {
      targetID = messageReply.senderID;
    } else {
      return api.sendMessage("📌 من فضلك قم بالرد على رسالة الشخص أو منشنه للطرد.", threadID, messageID);
    }

    if (adminIDs.includes(targetID)) {
      return api.sendMessage("⚠️ لا يمكن طرد مشرف آخر.", threadID, messageID);
    }

    try {
      await api.removeUserFromGroup(targetID, threadID);
      return api.sendMessage("✅ تم طرد المستخدم من المجموعة.", threadID, messageID);
    } catch (err) {
      return api.sendMessage("❌ فشل في تنفيذ عملية الطرد. تأكد أن البوت لديه صلاحيات مشرف.", threadID, messageID);
    }
  }
};
