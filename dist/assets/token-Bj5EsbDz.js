import{a as o}from"./entry/index-DvPJ5Vzs-1718250502895.js";const r=(s,e="notice")=>o.post({url:"/mms-api/token/list",params:s},{errorMessageMode:e}),a=(s,e="notice")=>o.post({url:"/mms-api/token/update",params:s},{errorMessageMode:e,successMessageMode:e}),n=(s,e="notice")=>o.post({url:"/mms-api/token/delete",params:s},{errorMessageMode:e,successMessageMode:e}),u=(s,e="notice")=>o.post({url:"/mms-api/token/logout",params:{id:s}},{errorMessageMode:e,successMessageMode:e});export{n as d,r as g,u as l,a as u};
