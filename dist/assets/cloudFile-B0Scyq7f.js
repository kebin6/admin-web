import{a as o}from"./entry/index-C41ZFr6n-1718602026943.js";const r=(s,e="notice")=>o.post({url:"/fms-api/cloud_file/list",params:s},{errorMessageMode:e}),l=(s,e="notice")=>o.post({url:"/fms-api/cloud_file/create",params:s},{errorMessageMode:e,successMessageMode:e}),u=(s,e="notice")=>o.post({url:"/fms-api/cloud_file/update",params:s},{errorMessageMode:e,successMessageMode:e}),a=(s,e="notice")=>o.post({url:"/fms-api/cloud_file/delete",params:s},{errorMessageMode:e,successMessageMode:e});function i(s,e){return o.uploadFile({url:"/fms-api/cloud_file/upload",onUploadProgress:e,timeout:300*1e3},s)}export{u as a,l as c,a as d,r as g,i as u};
