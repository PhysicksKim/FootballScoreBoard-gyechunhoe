(()=>{let a=null;onmessage=t=>{"stop"===t.data?clearInterval(a):"start"===t.data&&(a&&clearInterval(a),a=setInterval((()=>{postMessage("tick")}),100))}})();