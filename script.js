//script.js

import {sum,PI} from  "./math.js";

console.log(sum(1,2));

/*
PS C:\Users\HP\OneDrive\Desktop\BACKEND> node script.js
(node:16136) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
C:\Users\HP\OneDrive\Desktop\BACKEND\script.js:3
import {sum,PI} from  "./math.js";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (node:internal/modules/cjs/loader:1281:20)
    at Module._compile (node:internal/modules/cjs/loader:1321:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.16.0
PS C:\Users\HP\OneDrive\Desktop\BACKEND>
*/