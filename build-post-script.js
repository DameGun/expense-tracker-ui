const fs = require('node:fs');

console.log(
  `[expense-tracker-ui-internal] Copying "lib" folder to main project`
);

fs.cpSync('./lib', '../expense-tracker/node_modules/expense-tracker-ui/lib', {
  recursive: true,
});

console.log(`[expense-tracker-ui-internal] Build post script completed`);
