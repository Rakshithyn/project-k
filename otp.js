const accountSid = 'ACdb5ae155857cfa1d1c0b0b6a15ef735c';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services("VAb6488030cb2c27b32cb85f93eb9d6fef")
      .verifications
      .create({to: '+918904432137', channel: 'sms'})
      .then(verification => console.log(verification.sid));