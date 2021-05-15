const nodemailer = require('nodemailer');
const config = require('config');

/**
 * Sends registration email
 * @param {Object} user - user object
 */
const sendRegistrationEmailMessage = (user = {}) => {
    const subject = `Welcome ${user.name}`;
    const htmlMessage = `<p>Hello ${user.name},</p> <p>Welcome! Thanks for creating an account with us.<p>Thank you.</p>`

    let transporter = nodemailer.createTransport({
        service: config.get('service'),
        auth: {
            user: config.get('email'),
            pass: config.get('pass')
        }
    })

    const mailOptions = {
        from: config.get('email'),
        to: user.email,
        subject: subject,
        html: htmlMessage
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log('Mail Sent Error', err);
        }
    })
}

module.exports = { sendRegistrationEmailMessage }
