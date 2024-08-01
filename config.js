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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_58_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibjl0M1BEa3VKSzBzU3duT3l6NjlhV0F0WHgyNDFBL3dQdkRab1BLOEpqbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEJWRHdrYnNRXzJHN1lwMjVGNExwZ1wiLFxuICBcInBob25lSWRcIjogXCIxOWUwZDI3MS04MTFhLTQ2MDctOGE4Yi1iODdkMjU4ZWFkNzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxNDEsXG4gICAgICAxNDIsXG4gICAgICAxNjEsXG4gICAgICAyMjAsXG4gICAgICA4MCxcbiAgICAgIDM1LFxuICAgICAgMTI0LFxuICAgICAgMjUzLFxuICAgICAgMTgxLFxuICAgICAgMCxcbiAgICAgIDExNSxcbiAgICAgIDEwNixcbiAgICAgIDksXG4gICAgICA1OCxcbiAgICAgIDEsXG4gICAgICAxMTUsXG4gICAgICAxODAsXG4gICAgICAxNDAsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE4LFxuICAgICAgMTI1LFxuICAgICAgMzQsXG4gICAgICA3MSxcbiAgICAgIDIwNCxcbiAgICAgIDE0LFxuICAgICAgMTA0LFxuICAgICAgNDcsXG4gICAgICAxODksXG4gICAgICAxODksXG4gICAgICAxLFxuICAgICAgMjMsXG4gICAgICAxMjAsXG4gICAgICA5MSxcbiAgICAgIDI1MixcbiAgICAgIDE0MCxcbiAgICAgIDI0NCxcbiAgICAgIDE0NCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNZRURDNVBYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY4MjE3NjY6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTg2ODE5MTkwNzk0NDozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeUYzS2dFRUxTNHJiVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkwva1Q5SzVnUHY5YzgxOFhOSDRvVjU3N0daRnZOcW1zK201bWNXMXFRVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUkpoOVlmOWlmSDBTeTdZTFo5Ym1jbU5MVVpPWTN3UXp5TzFqL1Z4RGNIT3BKOFdYQm5lU3IyK2hRTFpEcnROZ0pLdXcrQWFnU0xuMXpHeFZMODlhQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiajRyaHhVZHRGOVZVRk1GWHZ0VXA1NktNRWo2OFRkK2hLc09FYjhIaVVtanRlemQ1ODB1OVdjdHpaWUxNTlJtdHIyZFFmUzYwcXZWSFlQU1h2QW1mRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc2ODIxNzY2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwNjI5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
