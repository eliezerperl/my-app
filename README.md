
## Adding MongoDB as DB

Create .env file and add the mongoDb driver connection string to a variable

## Adding Authentication

In you .env file add variables for:
NEXTAUTH_SECRET (this can be whatever you want)
NEXTAUTH_URL (You base website URL)

FOR GOOGLE AUTH:
Go to cloud.google.com --> console --> APIs & services --> Credentials --> +CREATE CREDENTIAL --> create and you will receive these: (add to .env file)
GOOGLE_CLIENT_ID <br>
GOOGLE_CLIENT SECRET
