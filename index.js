#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Load configuration file
const configPath = path.join(__dirname, 'config.json');
let config;

try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error("Error reading configuration file:", error);
  process.exit(1);
}

// Retrieve command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Usage: serve-app <app-name>");
  console.log("Available apps:", Object.keys(config.apps).join(", "));
  process.exit(1);
}

const appName = args[0];
const appConfig = config.apps[appName];

if (!appConfig) {
  console.log(`App "${appName}" not found in configuration.`);
  console.log("Available apps:", Object.keys(config.apps).join(", "));
  process.exit(1);
}

// Change directory and execute command
const appPath = appConfig.path;
const appCommand = appConfig.command;

console.log(`Starting ${appName}...`);
process.chdir(appPath);
exec(appCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
