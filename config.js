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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielRmQ2FQdG9VOGVJd2x6L0pqTFZ5MDJPVCt5cmhmOG9zanJzTHFSeUpuRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzY4MjE3NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGOEM4M0MwNjY3QzZFRDMwRURFREU4MkVCRDAxM0JEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUyMTAyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtVVkwNW5tbVMzYXRPaXo3eVB6blBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAwNDg5Njg5LTkyYmQtNGViZS05ZDNjLWE2NjJiMzBhNmY2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxOTMsXG4gICAgICAxODEsXG4gICAgICAyMzUsXG4gICAgICAxMzAsXG4gICAgICAxOTMsXG4gICAgICAxNCxcbiAgICAgIDE1NyxcbiAgICAgIDIwMSxcbiAgICAgIDI0NixcbiAgICAgIDExNixcbiAgICAgIDE3MixcbiAgICAgIDcwLFxuICAgICAgMjIzLFxuICAgICAgMjI0LFxuICAgICAgNjcsXG4gICAgICAxOTEsXG4gICAgICA5NSxcbiAgICAgIDU0LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgNDEsXG4gICAgICAxMjMsXG4gICAgICAxNzIsXG4gICAgICAyMjMsXG4gICAgICAxMzEsXG4gICAgICA3NSxcbiAgICAgIDk1LFxuICAgICAgNDAsXG4gICAgICAxNTYsXG4gICAgICAxMjEsXG4gICAgICAxMTMsXG4gICAgICAxOTEsXG4gICAgICAyNDcsXG4gICAgICA0MyxcbiAgICAgIDEzMSxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAxMDMsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTQxM0w0R1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NjgyMTc2NjozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODY4MTkxOTA3OTQ0OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095RjNLZ0VFTGVycnJVR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTC9rVDlLNWdQdjljODE4WE5ING9WNTc3R1pGdk5xbXMrbTVtY1cxcVFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoUGkzTlRFYzlrUWZ1Z3gvUGptbi9LUmdGZ3hXYlBnbEYvK29kY1BpUmZ6cENUM0JlVkx6VUhwSEtMNGY4REwxajh6Sm1pclpybXQ1T3VyY0FJQUtCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6SEtGSWF2WmtRcDh4cklINXN5L05jd3kzUGxvaVYyRkFSeS9HSjN3M01GUU5Wdi9NQ0FGa3I1dVk3Qk5jN1FQTHg4YkJ4aDJNQldNNFVjUHhqSkREZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY4MjE3NjY6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTIxMDIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwMEdKd0VqSklTMHgxbmlGSUVrd2ozaWYrQUlDQlJrVFREbjV3RDRBdEs4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTkxMzU5NzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


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
 
