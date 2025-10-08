#!/usr/bin/env node

/**
 * Script to check Vue files for common syntax issues that can cause "Invalid end tag" errors
 * Usage: node check-vue-syntax.js file1.vue file2.vue
 */

import fs from 'fs';

// Patterns that commonly cause Vue template syntax errors
const problematicPatterns = [
  {
    pattern: /class="[^"]*\s+"\s*\/?>/g,
    message: 'Found trailing spaces in class attributes before closing tag'
  },
  {
    pattern: /<[^>]*\s+\/>/g, 
    message: 'Found space before self-closing tag slash - ensure no space before "/>"'
  },
  {
    pattern: /<[^>/]*[^/]\s+>/g,
    message: 'Found space before closing tag ">"'
  }
];

// Process each file passed as argument
const filesToCheck = process.argv.slice(2);

if (filesToCheck.length === 0) {
  // If no files are provided, find all Vue files in the src directory
  try {
    console.log('No files specified, checking all Vue files in the src directory...');
    const getAllFiles = (dir, fileList = []) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = `${dir}/${file}`;
        if (fs.statSync(filePath).isDirectory()) {
          getAllFiles(filePath, fileList);
        } else if (file.endsWith('.vue')) {
          fileList.push(filePath);
        }
      });
      return fileList;
    };
    
    const allVueFiles = getAllFiles('src');
    checkFiles(allVueFiles);
  } catch (error) {
    console.error('Error finding Vue files:', error);
    process.exit(1);
  }
} else {
  checkFiles(filesToCheck);
}

function checkFiles(files) {
  let errorFound = false;

  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      problematicPatterns.forEach(({ pattern, message }) => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          // Find the line number of the match
          const matchedContent = match[0];
          const position = match.index;
          let lineNumber = 0;
          let currentPos = 0;
          
          for (let i = 0; i < lines.length; i++) {
            if (position >= currentPos && position < currentPos + lines[i].length + 1) {
              lineNumber = i + 1;
              break;
            }
            currentPos += lines[i].length + 1; // +1 for the newline character
          }
          
          console.error(`⚠️ ${file}:${lineNumber}: ${message}`);
          console.error(`  ${matchedContent}`);
          errorFound = true;
        }
      });
      
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
      errorFound = true;
    }
  });

  if (errorFound) {
    console.error('\n❌ Vue template syntax issues found. Please fix them before committing.');
    process.exit(1);
  } else {
    console.log('✅ No Vue template syntax issues found.');
  }
}