const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  group_name: {
    type: String,
    required: true
  },
  members: [], //[{name,email,paidInGroup,lentInGroup}]
  expenses: [] //[{paid_by : payee_email, description:desc, participants : [emails], amount_paid: total_amount_paid}]
})

const Groups = mongoose.model('groups', GroupSchema);
module.exports = Groups;

