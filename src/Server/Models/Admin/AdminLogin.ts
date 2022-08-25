/* eslint-disable prettier/prettier */
const mongoose = require(`mongoose`);
const jwt = require(`jsonwebtoken`)
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  pages: { type: [Object], require: true },
  tokens: [{
    token: {
      type: String, require: true
    }
  }]
});
userSchema.methods.generateAuthToken = async function () {
  try {
    //Temperay Add secret key 
    const tokenUser = jwt.sign({ _id: this._id },`secret123`)
    this.tokens = this.tokens.concat({token:tokenUser})
    await this.save()
    return tokenUser 
  } catch (err) {
    console.log(err)
  }
}
mongoose.models = {};
//JSON Token Generation

export default mongoose.model(`AdminLogin`, userSchema);
// role: { type: String, require: true },

