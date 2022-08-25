/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const NotiSchema = new mongoose.Schema({
  NotificationId: { type: String, require: true },
  NotificationType: { type: String, require: true },
  NotificationContent: { type: String, require: true },
  NotificationTime: { type: String, require: true },
  isRead:{type:Boolean, require:true},
});
mongoose.models = {};
export default mongoose.model(`Notification`, NotiSchema);
