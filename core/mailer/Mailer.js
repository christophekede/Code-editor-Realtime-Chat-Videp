const nodemailer = require("nodemailer")

const { mail } = require("../../config/credentials")



const Mailer = class {
  constructor() {

    const transporterOptions = {
      service: mail.service,
      secure: true,
      auth: {
        user: mail.user,
        pass: mail.pass,
      }

    }


    this.transporter = nodemailer.createTransport(transporterOptions)
    // this.transporter.sendMail({ from: mail.user, to: mail.user, subject: "test", text: "hello" }, (err, infos) => { console.log(err) })
  }


  async sendMail(user, subject, text) {
    const data = await this.transporter.sendMail({ from: mail.user, to: user, subject, text })
    return data
  }


}


module.exports = Mailer