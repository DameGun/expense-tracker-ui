const fs = require('node:fs');

console.log(
  `[expense-tracker-ui-internal] Copying "dist" folder to main project`
);

fs.cpSync('./dist', '../expense-tracker/node_modules/expense-tracker-ui', {
  recursive: true,
});

console.log(`[expense-tracker-ui-internal] Build post script completed`);
