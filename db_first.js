const mongoose = require('mongoose')
const dns = require('dns')

// Use Google's public DNS to avoid local resolver ECONNREFUSED on SRV lookups
dns.setServers(['8.8.8.8', '8.8.4.4'])

async function connectDB() {
    await mongoose.connect('mongodb+srv://dbuser:zhrVGsaCVODX71zX@restapi.teed7om.mongodb.net/firstrest')
    console.log('Connected to Database')
}

module.exports = connectDB
