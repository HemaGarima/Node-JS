const path = require('path');

console.log(path.basename('c:\\temp\\myfile.html'));
console.log(path.dirname('c:\\temp\\myfile.html'));
console.log(path.extname('c:\\temp\\myfile.html'));
console.log(path.extname(__filename));
console.log(__filename);