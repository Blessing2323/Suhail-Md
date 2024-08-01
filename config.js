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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_13_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkenJHRThBS1k2RnN6QldQYUhpVXpRWnZvTm50SkliMjJ2Szh1azZXY040PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVS1Vfbkd1QlNYaTd5dU1UUG5BRlp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhNjYzZTViLTZiNDgtNDg5OS1hNTAyLWMzZGU3YWI1Nzk3N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxNDgsXG4gICAgICAxMTAsXG4gICAgICAxMzMsXG4gICAgICAyMjUsXG4gICAgICA5NyxcbiAgICAgIDIxOSxcbiAgICAgIDEzNCxcbiAgICAgIDMwLFxuICAgICAgMTQ4LFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgMTEwLFxuICAgICAgMjI0LFxuICAgICAgMTc2LFxuICAgICAgNTQsXG4gICAgICAxODAsXG4gICAgICA5NCxcbiAgICAgIDE4MyxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAyMzMsXG4gICAgICAxMDksXG4gICAgICAxNjEsXG4gICAgICAxNzUsXG4gICAgICAyMDcsXG4gICAgICAxNDQsXG4gICAgICA5OSxcbiAgICAgIDIyMixcbiAgICAgIDg2LFxuICAgICAgMTY0LFxuICAgICAgMTM0LFxuICAgICAgMjQ0LFxuICAgICAgMTg2LFxuICAgICAgNDEsXG4gICAgICA0NixcbiAgICAgIDIyNCxcbiAgICAgIDksXG4gICAgICAxMTgsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFAyTFlGM1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzgzNDc2MTIyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLFgsOuxYIgxKV1bmNob1wiLFxuICAgIFwibGlkXCI6IFwiMjYwNjA2Mjg0MzA0NjEzOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNCem53UStPcXN0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2WnhqZkVOS1pYWHZaYnhmb1BTV3VFbG4wTmlZVWxMYURZV1cxeFNrQWtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY2NC85RHdqK0FJSzZyYk81Ryt3Q205bmNsOUdqR2JrN1pxZ3B6bFNZZWk1VW12YkhnMUpaaDZoUjZacGRVZ3RoSHcwUk5EdlJaSHB3Skc4YjQ0RUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5XdDNtdGtDN3ZOR3JsOXZDZ1NjUHlHWWFpbzBNbVpXWmt3ZEUyTGdpVUJEMkIwMWxsOEoyaFdzQ0czR2JhWFJrNHdaYUpSK2s0RFh3TXo0L0pGN2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzgzNDc2MTIyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTYzODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZadS5qc29uIjogIntcImtleURhdGFcIjpcIk43OFRmdjNKNDZBZE16ams5QWV4QWwvT1g5MjMzVUhTNmRTZWFZekpwVUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYxMzMzMjEwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMzUyMzQyMDMzXCJ9Igp9"  // PUT your SESSION_ID 


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
