const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to      : email,
		from    : 'BUxXxAS@gmail.com',
		subject : 'Welcome to Task-Manager-App!',
		text    : `Welcome ta the Task-Manager-App, ${name}. Let me know how much do you like it ;-) !!!`
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to      : email,
		from    : 'BUxXxAS@gmail.com',
		subject : 'Task-Manager-App',
		text    : `We are sorry that you didn't like the Task-Manager-App at the moment, ${name}. 
        We will be working very hard to improve our App and will always Welcome you back, ${name}!`
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
};
