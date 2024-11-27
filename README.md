# Frontend for the Freejack Name Change App (Educational Purposes Only)

> **Disclaimer**  
> This project was created solely for **educational purposes**. The findings were responsibly disclosed to the development team of Freejack during its beta phase before sharing this project publicly.

## Overview

This project replicates parts of the Freejack login system and demonstrates how its networking logic was functioning during its beta phase. While playing the game, I identified certain vulnerabilities in their use of a third-party API. This exploration revealed issues with unprotected endpoints that could be exploited to change usernames or access game-related data such as an exploit in their verification system to access "patreon keys" during beta.

Using this project, you can:
- Log in using replicated authentication.[you need to have an account already made for their beta] [the api is still up and the game servers as well at the time of writing this if you want to test it]
- Send requests to modify data, including changing usernames.

Additionally, I discovered a way to utilize Unity's RTF (Rich Text Formatting) in the username field, enabling unintended effects like colored or bold usernames, which disrupted the game UI.

**Note:** The vulnerabilities identified here have been disclosed to the Freejack development team.

---

## Features

- **Login System:** Mimics Freejack's authentication to access API functionality.
- **Name Change UI:** A simple interface for changing usernames using API requests.
- **RTF Exploits:** Demonstrates how Unity's UI can interpret Markdown-like formatting for text effects such as bold or colored usernames.

---

## Screenshots

### 1. Login Interface  
![Login Interface](https://i.postimg.cc/R09HNCsD/Screenshot-1.png)  

### 2. Success Alert
![Name Changer](https://i.postimg.cc/dVGCsZBC/Screenshot-3.png)  

### 3. Name Changer UI
![Success Alert](https://i.postimg.cc/rpJtW67F/Screenshot-2.png)  

---

## Background

While testing the game during its beta release, I observed the following issues:  

1. **Unprotected API Endpoints:**  
   The third-party API used for online logic lacked sufficient security, allowing any tool like Postman to send requests to modify data (e.g., usernames).

2. **Verification System Exploits:**  
   Poorly coded verification allowed visibility into beta access "patreon keys."

3. **RTF Exploits in Unity UI:**  
   Username fields supported unintended formatting through Rich Text, enabling custom effects such as bold or colored usernames that were not part of the official features.

These issues highlight the importance of securing API endpoints and validating user input properly in games and applications.

---

## Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/freejack-namechange-frontend.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

---

## Usage

1. **Login:** Use the login page to authenticate with the replicated system.  
2. **Name Change:** Enter your desired username in the Name Changer UI and submit the request.  
3. **Success Alert:** Upon a successful request, you'll see a confirmation message.  

---

## Important Notes

- **Ethical Responsibility:** The purpose of this project is to educate about secure coding practices and vulnerabilities. Do not use it for malicious purposes.  
- **Disclosure:** All issues discovered were reported to the Freejack development team.  
- **No Longer Functional:** This project was designed for an earlier beta version of the game and may not work on current versions.  

---


Let me know if you need further adjustments or want me to create markdown placeholders for the screenshots.
