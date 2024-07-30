const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_14_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3ZZc0lOSG9qdnNmeHRCWS9SSTZwaVRSb1I3QWQvZVNKdW5Xb0VkVWtBRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmRMcVZ6NkhTOGFKcFJGX3Ftc2FQZ1wiLFxuICBcInBob25lSWRcIjogXCI4NDc4MDcyNC1jYzdmLTRkMmUtYmUxYS1mYjMwYzk4N2E1ZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTUxLFxuICAgICAgNzIsXG4gICAgICA4MyxcbiAgICAgIDE2NyxcbiAgICAgIDQ3LFxuICAgICAgMjUwLFxuICAgICAgNjYsXG4gICAgICAyMjcsXG4gICAgICAxOSxcbiAgICAgIDIyNCxcbiAgICAgIDQxLFxuICAgICAgMjcsXG4gICAgICAxOTIsXG4gICAgICAxNTcsXG4gICAgICAxMTgsXG4gICAgICA5NyxcbiAgICAgIDQ3LFxuICAgICAgMTM4LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMjM3LFxuICAgICAgOTEsXG4gICAgICA4MyxcbiAgICAgIDE5NixcbiAgICAgIDEyNCxcbiAgICAgIDE3MixcbiAgICAgIDE5MSxcbiAgICAgIDQzLFxuICAgICAgMzcsXG4gICAgICAyMjcsXG4gICAgICAyMzMsXG4gICAgICAyNDgsXG4gICAgICAxNDksXG4gICAgICA3OSxcbiAgICAgIDEyNCxcbiAgICAgIDEwNyxcbiAgICAgIDEsXG4gICAgICAxMjIsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU43RzY5WTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NjgyMTc2NjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODY4MTkxOTA3OTQ0OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xRjNLZ0VFUERkb3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTC9rVDlLNWdQdjljODE4WE5ING9WNTc3R1pGdk5xbXMrbTVtY1cxcVFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVY25mNjJ3a0NoeFk4cXVqRVN2TDJZU3pqVUVLb0RhU1pJQklpUkNPSU9UUk9OVHU4WnpVdEhUZlBsTjZseW1iZTZnNmkwUUhhdjlYR0lTbW9scWxDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxL2dDQ0djNHk2Wit3cHcxK2U5SVhNWEwzQjVBOGgvQWkxZlNNcGhBbFphWnZGSE52ZDQvUlV1OWR6ZjBqN3U1TFZNQzJPWDF0eE9WNjRlV3lYckNBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY4MjE3NjY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzMwODY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlhOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0RVU0YVlPNXF1Tk9QUG9SY0lhSFB4MCtvTE1hbmtUYzZKK0FFajFjZUFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTkxMzU5NzcsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
