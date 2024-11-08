
# serve-cli
A flexible and customizable CLI tool for serving Angular applications and executables. With a simple configuration file, serve-cli makes it easy to serve multiple projects from any location.

### Installation
To install globally from npm, run:
```bash
npm  install  -g  serve-cli
```

### Configuration
Edit `config.json` in the root of the package to specify your application paths and commands. Example:

```json
{
  "apps": {
    "appraisal": {
      "path": "H:\\SG\\UI2\\apps\\hcm\\appraisal",
      "command": "ng s"
    },
    "appraisal-portal": {
      "path": "H:\\SG\\UI2\\apps\\hcm\\appraisal-portal",
      "command": "ng s"
    },
    "gateway": {
      "path": "H:\\SG\\Alborz\\SGIBS\\HCM3\\Dvp\\Bin\\Gateway",
      "command": ".\\Gateway.exe --environment development"
    }
  }
}
```
Each entry in `apps` should include:

- `path`: The directory path where the application or executable is located.

- `command`: The command to start or run the application.

###  Usage
To serve an application, use the command format:
```bash
serve-app <app-name>
```
Replace `<app-name>` with the specific application defined in `config.json`. Here are some examples:

#### Examples
**Start the Appraisal Application**:
```bash
serve-app appraisal
```
This command will:
-   Navigate to `H:\SG\UI2\apps\hcm\appraisal`.
-   Run `ng s` to start the Angular application.

### Customizing Configurations
To add more applications, simply modify `config.json`. For instance, to add an additional app:
```json
{
  "apps": {
    ...
    "new-app": {
      "path": "/path/to/new-app",
      "command": "your-command-to-run-new-app"
    }
  }
}
```

## Features
-  **Cross-Platform**: Works on Windows, macOS, and Linux.
-  **Configurable Paths and Commands**: Define your own paths and commands for each application.
-  **Global Access**: Once installed, use the tool from any directory.

## Installation

### Prerequisites
-  **Node.js** (v12 or later) and **npm** should be installed on your machine.
### Steps to Install
To install globally from npm, run:
```bash
npm  install  -g  serve-cli
```
### Configuration

Edit `config.json` in the root of the package to specify your application paths and commands. Example:

```json
{
  "apps": {
    "appraisal": {
      "path": "H:\\SG\\UI2\\apps\\hcm\\appraisal",
      "command": "ng s"
    },
    "appraisal-portal": {
      "path": "H:\\SG\\UI2\\apps\\hcm\\appraisal-portal",
      "command": "ng s"
    },
    "gateway": {
      "path": "H:\\SG\\Alborz\\SGIBS\\HCM3\\Dvp\\Bin\\Gateway",
      "command": ".\\Gateway.exe --environment development"
    }
  }
}
```
Each entry in `apps` should include:

- `path`: The directory path where the application or executable is located.

- `command`: The command to start or run the application.

###  Usage
To serve an application, use the command format:
```bash
serve-app <app-name>
```
Replace `<app-name>` with the specific application defined in `config.json`. Here are some examples:
#### Examples
**Start the Appraisal Application**:
```bash
serve-app appraisal
```
This command will:
-   Navigate to `H:\SG\UI2\apps\hcm\appraisal`.
-   Run `ng s` to start the Angular application.

### Customizing Configurations
To add more applications, simply modify `config.json`. For instance, to add an additional app:
```json
{
  "apps": {
    ...
    "new-app": {
      "path": "/path/to/new-app",
      "command": "your-command-to-run-new-app"
    }
  }
}
```
