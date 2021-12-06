TypeScript commands

```
- tsc - compile everything to .js
- tsc src/index.ts - compile index.ts to .js
- tsc -w - compile watch mode
- node out/index.js - run the project
```

tsconfig.json

```
- outDir: "out", - compile directory
- "resolveJsonModule": true", - for importing jsons
Typescript 2.9.0 has a bug with this JSON feature, it was fixed with 2.9.2
- "esModuleInterop": true - for importing jsons
The esModuleInterop is only necessary for the default import of the colorsJson. If you leave it set to false then you have to import it with import * as colorsJson from '../colors.json'
Note: Option "resolveJsonModule" cannot be specified without "node" module resolution strategy, so you also need to put "moduleResolution": "node" into your tsconfig.json. It also comes with the downside, that the *.json files you want to import need to be inside of "rootDir".
Source: https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript
```

Node Modules:

-   `npm install discord.js`

Big Notes:

-   For OAUTH2 URL generation, make sure to check "bot" and "applications.commands" in the scopes tab.
-   See `command.ts` for an interface example.

Google Cloud:

-   Compute Engine > VM instances > Create new Instance
-   Use lowest CPU
-   Keep everything default
-   \*maybe enble HTTPS firewall checkboxes (2)
-   `sudo apt install npm` 1. install node package manager
-   `sudo apt install git` 2. install git
-   `python3 --version` 3. check python version
-   `npm --version` 4. check npm version
-   `git --version` 5. check git version
-   `sudo apt -y update && sudo apt -y upgrade` 6. Get Node 17
-   `curl -sL https://deb.nodesource.com/setup_17.x | sudo bash -`
-   `sudo apt-get install -y nodejs`
-   `node -v`7. Check node version
-   `git clone <url>` 8. Clone git hub repo OR
-   `gcloud init` 9. Initialize google cloud, login, enter project details, etc. (only needed if using buckets)
-   `sudo nano out/index.js` - edit out/index.js and insert token (Ctrl X to exit and save)
-   `node out/index.js` to run
-   `nohup node out/index.js &>> activity.log &` - NO hang up command, runs bot 24/7 without SSH window open, then put terminal logs in activity.log

todo automatic delete-
todo leaderboard
todo count command
