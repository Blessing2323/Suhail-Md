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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_52_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXBvWlVxUWx5QzlxRWNBMi84cE5ZNTBtZ0txRWo3VWdIR0I4dUxUM2ptND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTdJX1BqZEZRYmFxZE84UkR4TUpJZ1wiLFxuICBcInBob25lSWRcIjogXCI3YzU0MGFkYi05MDJhLTQyZTYtOGM1MS0xMDE4MGJkMWZkNjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAxNTEsXG4gICAgICAxNzUsXG4gICAgICAyMDcsXG4gICAgICAxOTEsXG4gICAgICA4NixcbiAgICAgIDQ5LFxuICAgICAgMzMsXG4gICAgICAyNDQsXG4gICAgICAxNTYsXG4gICAgICA2OCxcbiAgICAgIDkwLFxuICAgICAgMzEsXG4gICAgICA4MSxcbiAgICAgIDIzNSxcbiAgICAgIDE4MSxcbiAgICAgIDEzOSxcbiAgICAgIDE4LFxuICAgICAgMjQ4LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxODQsXG4gICAgICAyOSxcbiAgICAgIDExMixcbiAgICAgIDIzOCxcbiAgICAgIDk5LFxuICAgICAgOTgsXG4gICAgICA1LFxuICAgICAgMjEzLFxuICAgICAgMTExLFxuICAgICAgNjMsXG4gICAgICAxNTksXG4gICAgICA1OSxcbiAgICAgIDEwOSxcbiAgICAgIDE2OCxcbiAgICAgIDE5LFxuICAgICAgMTk4LFxuICAgICAgMTE3LFxuICAgICAgMTEwLFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1JWQlE0VDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NjgyMTc2NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODY4MTkxOTA3OTQ0OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095RjNLZ0VFTEhockxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTC9rVDlLNWdQdjljODE4WE5ING9WNTc3R1pGdk5xbXMrbTVtY1cxcVFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvODMwKzN4Wkhlb2Vib0s4emRFQ1lIL0NXdjhseHVmMW04SjR4QVM2QVlDdnRVMXY5ditxcEpkSndiWExOVGRLMVlWL0NqNVp5NkswTHdQeC9HZGZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrRUozaThBU25lUTI1SWxnczF3K3JrWStZeU1Lazc5V0thUUF6alBHUmd2NnRqQWxUWmdlOVIzQjJlbWZXSm5jVDNGUmhqZ3FBYk5jUmpxVlI5OS9qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY4MjE3NjY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDk1MTU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwMEdKd0VqSklTMHgxbmlGSUVrd2ozaWYrQUlDQlJrVFREbjV3RDRBdEs4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTkxMzU5NzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
