const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_58_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrSDgvblRvVjk4eUpjK2hIRFIyVlBsblZwV1pPY3pKMk5JSDJEMldnQlNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzgzNDc2MTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MjQyODNBQjkwNzMzNzQ2NjRENzk1OUE1OEI5RUVDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MjQyODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHdCSFNDbHRUbmkyVGY1TTFKWVk4d1wiLFxuICBcInBob25lSWRcIjogXCIwMjhlYjBlMC0wYzlhLTQwMGYtOGE3Zi0zMzBlNjY1ZjFmZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTMxLFxuICAgICAgMjUsXG4gICAgICAxODgsXG4gICAgICAyNDEsXG4gICAgICAyMzcsXG4gICAgICAyMjUsXG4gICAgICA3MSxcbiAgICAgIDIwNSxcbiAgICAgIDEzNyxcbiAgICAgIDIzNyxcbiAgICAgIDE5OSxcbiAgICAgIDI5LFxuICAgICAgNDEsXG4gICAgICAyMSxcbiAgICAgIDEyNCxcbiAgICAgIDExOCxcbiAgICAgIDI0NCxcbiAgICAgIDgwLFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxNixcbiAgICAgIDMxLFxuICAgICAgMTY0LFxuICAgICAgMTc5LFxuICAgICAgMTk1LFxuICAgICAgMTcyLFxuICAgICAgMjI2LFxuICAgICAgMTMsXG4gICAgICAxNzEsXG4gICAgICAxNzAsXG4gICAgICAxMTQsXG4gICAgICAxMzIsXG4gICAgICAyNDcsXG4gICAgICAyNTEsXG4gICAgICA0LFxuICAgICAgMTQzLFxuICAgICAgMTE1LFxuICAgICAgMjIzLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhSUFlWWktTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzc4MzQ3NjEyMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwixYLDrsWCIMSldW5jaG9cIixcbiAgICBcImxpZFwiOiBcIjI2MDYwNjI4NDMwNDYxMzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043Qnpud1E5Y1N1dFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlp4amZFTktaWFh2WmJ4Zm9QU1d1RWxuME5pWVVsTGFEWVdXMXhTa0FrST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCa2plTWpjTzdOTXRWQVZPWW5oaU4wNzdXVkw3dnJCUmxJeFIxRzdBaGdNTVJhMzdzVWZ2ZlBCd3BKNVNWcFd0SkZiVjFTOXBNS2phVG5TQUkya3ZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYcVduRExtcmZpWk8vRFVObFZVZFVTT29VdWY2TE1nWHZzaEFwSk1BQlJKU2lhWkYrenl5RWZEVytEeXU1YXlDS2VrUVpUVUhRTW9rNnArMjRENlloUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzc4MzQ3NjEyMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTI0MjgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlo4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3WHFDdDBMa2FiQWxsWnVhVlREUFhCakNYWGFtNjVpU1V6alV5YldEUG1RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MTMzMzIxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDk2NjAxMzkzXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
