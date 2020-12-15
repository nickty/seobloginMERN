const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    username: {
        type:String, 
        trim: true, 
        required: true, 
        max: 32, 
        unique: true, 
        index:true, 
        lowercase:true
    }, 
    name: {
        type:String, 
        trim: true, 
        required: true, 
        maxlength: 32, 
  
    }, 
    email: {
        type:String, 
        trim: true, 
        required: true, 
        unique: true, 
        lowercase:true
      
    }, 
    profile: {
        type:String, 
        required: true
    }, 
    hashed_password: {
        type: String, 
        required: true
    }, 
    salt: String, 
    about:{
        type:String
    }, 
    role: {
        type:Number, 
        trim:true
    }, 
    photo:{
        data:Buffer, 
        contentType: String
    }, 
    resetPasswordLink: {
        data:String, 
        default: ''
    }
}, {timestamps: true})

userSchema.virtual('password')
    .set(function(password){
        //temporary variable to password
        this._password = password
        //generate salt
        this.salt = this.makeSalt()
        //encryptPasswrod
        this.hashed_password = this.entryptPassword(password)
    })
    .get(function(){
        return this._password
    })
userSchema.methods =   {  

    authenticate: function(plainText){
        return this.entryptPassword(plainText) == this.hashed_password
    },

    entryptPassword: function(password){
        if(!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }, 

    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + ''; 
    }

}

module.exports = mongoose.model('User', userSchema)