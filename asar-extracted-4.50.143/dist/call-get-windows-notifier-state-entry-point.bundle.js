(()=>{"use strict";var r={};process.parentPort.on("message",t=>{try{process.parentPort.postMessage({state:-1,error:"Not Windows"});return}catch(e){console.error("notifier-state-check: Failed to get notifier state",e),process.parentPort.postMessage({state:-1,error:String(e)})}}),module.exports=r})();

//# sourceMappingURL=call-get-windows-notifier-state-entry-point.bundle.js.map