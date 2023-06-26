const fs = require('fs');

// Specify the file name and content
const fileName = 'welcome.txt';
const fileContent = 'Hello Node';

// Create the file with the specified content
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
  } else {
    console.log('File created successfully!');
  }
});