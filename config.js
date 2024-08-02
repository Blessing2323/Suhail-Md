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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_13_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwcHIvZzZCYTlvUS9mZlQwSE5HNXhLS09zNlhoVERkZ3gyN0s2U0dWZSswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzgzNDc2MTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMEVFRDBENkNGRDRFMUE2NzAwOThDNjE1NkI2NDNCOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1Mjg4MzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0dPVE1Lb3BScnlnV2dYeVFjQnNEZ1wiLFxuICBcInBob25lSWRcIjogXCJkYmE5NDZhNy1mMTIzLTQwYmUtOGMwMi05ODkxMTlmNGZkZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMTM2LFxuICAgICAgMTUxLFxuICAgICAgMzMsXG4gICAgICAxMzEsXG4gICAgICAxMDUsXG4gICAgICAxMTIsXG4gICAgICAyNTIsXG4gICAgICA4MixcbiAgICAgIDI2LFxuICAgICAgMTQ4LFxuICAgICAgMjU1LFxuICAgICAgODgsXG4gICAgICAwLFxuICAgICAgMjM5LFxuICAgICAgMTE0LFxuICAgICAgMTgyLFxuICAgICAgODUsXG4gICAgICA5MCxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICA4NixcbiAgICAgIDEzMyxcbiAgICAgIDE5LFxuICAgICAgNzQsXG4gICAgICA4OCxcbiAgICAgIDI0NyxcbiAgICAgIDY1LFxuICAgICAgMyxcbiAgICAgIDY2LFxuICAgICAgMTQ5LFxuICAgICAgNDQsXG4gICAgICAyMTMsXG4gICAgICA0OSxcbiAgICAgIDkzLFxuICAgICAgMjUsXG4gICAgICA2OCxcbiAgICAgIDYzLFxuICAgICAgMTIyLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY1WEdMTVlFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzc4MzQ3NjEyMjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsWCw67FgiDEpXVuY2hvXCIsXG4gICAgXCJsaWRcIjogXCIyNjA2MDYyODQzMDQ2MTM6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdCem53UXVPaXV0UVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2WnhqZkVOS1pYWHZaYnhmb1BTV3VFbG4wTmlZVWxMYURZV1cxeFNrQWtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9jZ0tDY1N6c2ZNanpJelJjaFNjbC9hOFJaWTBJZURhc3pnK09kNTEzNExCSVo1endmK0FLMjQ3Yk9pdGFkcU1WTmtCZ3ZTUFJFZUJiR2ZYSkVFeEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNSR1ZOdDRJMk9TRys3S3orei9jdGxBK3Q2K1hOSFkvU0wzdERIWG41Y0hPMXV3TW1CS3h5Z25zS0RqZkF5WmdZUG1KM3lNWjUrZW5jUFpzRlR2bEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzgzNDc2MTIyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTI4ODI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlo4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWjguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3WHFDdDBMa2FiQWxsWnVhVlREUFhCakNYWGFtNjVpU1V6alV5YldEUG1RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MTMzMzIxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDk2NjAxMzkzXCJ9Igp9" ;


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
 
