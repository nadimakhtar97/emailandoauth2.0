# emailandoauth2.0

WAY TO USE THE APP.

1. CLONE THE PROJECT FORM GITHUB REPOSITORY.
2. GO INSIDE THE PROJECT'S DIRECTORY.
3. CREATE A FILE WITH NAME "variables.env"
4. IN "variables.env" file WRITE THE VALUE OF
   "GOOGLE_CLIENT_ID =" and "GOOGLE_CLIENT_SECRET ="  obtained from developer.console.google
   after enabling the gmail API and getting credentials.
5. OPEN THE PROJECT DIRECTORY IN CONSOLE/TERMINAL.
6. IN CONSOLE TYPE "npm install" TO INSTALL REQUIRED DEPENDENCIES.
7. AFTER DEPENDENCIES ARE INSTALLED THEN IN CONSOLE TYPE "node app" without quotes.
8. NOW THE SERVER HAS STARTED LISTENING ON A PORT MENTIONED IN CONSOLE
9. GO TO BROWSER AND GOTO "http://localhost:PORT/authorize" TO INITIATE OAUTH2.0 PROCESS.
10. AFTER YOU HAVE AGREED WITH THE CONSENT PAGE THEN GOTO "http://localhost:PORT/sendmail" to send mail
   from your account to the account mentioned in the "./controller/mailController.js" line no. 28 .
