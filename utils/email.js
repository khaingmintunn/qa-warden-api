const fs = require('fs')
const jsYaml = require('js-yaml')
const nodemailer = require('nodemailer')

class Email {
  /**
   * to send the email to the address
   * @param {Object} params
   */
  static async send(params) {
    if (!params.email || params.email === undefined) return 0
    const email = await this.loadConfig()

    let transporter = nodemailer.createTransport({
      host: email.host,
      port: email.port,
      secure: false,
      auth: {
        user: email.address,
        pass: email.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    return await transporter.sendMail({
      from: email.address, // sender address
      to: params.email, // list of receivers
      subject: params.subject, // Subject line
      text: params.text, // plain text body
      html: params.html, // html body
    })
  }

  /**
   * to load the email config data
   */
  static async loadConfig() {
    const yaml = await fs.readFileSync('./config/email.yml', 'utf-8')
    const config = jsYaml.safeLoad(yaml)

    let email = {}
    switch (process.env.NODE_ENV) {
      case 'test':
        email = config.test
        break
      case 'dev':
        email = config.dev
        break
      case 'prod':
        email = config.prod
        break
      default:
        email = config.dev
        break
    }
    return email
  }
}

module.exports = Email
