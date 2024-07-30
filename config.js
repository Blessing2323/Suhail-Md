const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "SUHAIL_13_45_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6MGNMNHJFYzRPUmhxU3VEbHFrKytaYk4vdlI5Qld2ano1T2QzV1ZMU3UwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzgzNDc2MTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTZBQTc1NjI5ODRGMzMxODk1MzU1MUVFOTNDMzY0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzNDcxNTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXVoWElIZ0hSZlNBRGF3d05xXzBJUVwiLFxuICBcInBob25lSWRcIjogXCJjOTcyODVmOC02M2Q5LTQzMGQtOTljNi03MzlmYTIwY2Q5Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMjQyLFxuICAgICAgMTEwLFxuICAgICAgMTc2LFxuICAgICAgMzgsXG4gICAgICAxMjMsXG4gICAgICAyMTYsXG4gICAgICAyMjQsXG4gICAgICAxOTgsXG4gICAgICAyMjAsXG4gICAgICA4MCxcbiAgICAgIDE3NCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDE3LFxuICAgICAgMSxcbiAgICAgIDEwNyxcbiAgICAgIDc0LFxuICAgICAgMTMzLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDY2LFxuICAgICAgNDIsXG4gICAgICA2OSxcbiAgICAgIDExMixcbiAgICAgIDc3LFxuICAgICAgMjUxLFxuICAgICAgMTEwLFxuICAgICAgMTI5LFxuICAgICAgMjUxLFxuICAgICAgMTMxLFxuICAgICAgMjgsXG4gICAgICA3MyxcbiAgICAgIDI0MCxcbiAgICAgIDE4MCxcbiAgICAgIDM3LFxuICAgICAgMjM0LFxuICAgICAgMjUxLFxuICAgICAgMTQzLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzVXQkFZTDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzgzNDc2MTIyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLFgsOuxYIgxKV1bmNob1wiLFxuICAgIFwibGlkXCI6IFwiMjYwNjA2Mjg0MzA0NjEzOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJCem53UWhkMmp0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2WnhqZkVOS1pYWHZaYnhmb1BTV3VFbG4wTmlZVWxMYURZV1cxeFNrQWtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldmWDBGUDNST20vQng1b20yTVJkKzhPd0VCdXd2MTQwNUx4bnFGSVI3MHoreVBielNCOUdHK1Jwd3JkSXFsV090bGptSmFnZnVIdElqQTQwU3hQTERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkY4MVNOcGgzL2N5ZDV5THB6ZlpNUDdLWVFGaDJyamNnb01NclFFeTFYSFpMY0pRMGFtOXJyK2p5Z2tZcFFmRWdXei9XbE1vVkVFMmpqK1I4b2RTTENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzgzNDc2MTIyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNDcxNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZacS5qc29uIjogIntcImtleURhdGFcIjpcIlYyTmYyWmd3cXhLK1hTcWtFYjBhM2RHME5IbVd4NVkyZElaR1ZvcU5qSU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYxMzMzMjA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
