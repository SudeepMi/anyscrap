const mongoose = require( 'mongoose' );
// const bcrypt = require( 'bcryptjs');

const apiSchema = mongoose.Schema({
    apiName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    endpoint: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
      default: "GET",
    },
  },
  {
    timestamps: true,
  }
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

const API = mongoose.model('API', apiSchema)

module.exports=API