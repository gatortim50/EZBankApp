# EZBankApp

## EZBankApp Coding Exercise

### At EZBank we think banking should be simple. We have a web API that consists of only 2 methods: GET Balance and POST Payment

- GET

```js
  http://ezbanking.gear.host/api/Money/Balance
```

- POST

```js
  http://ezbanking.gear.host/api/Money/Payment
```

#### To become more familiar with these methods look at our API reference

```js
http://ezbanking.gear.host/swagger/
```

### Requirements

#### Deliver source shareable on Github, built using NativeScript - Angular:

- Displays an initial balance from api/Money/Balance
- Allows a user to enter an Amount when making a payment
- Make sure to include the Android device id along with location lat/lng when making a payment using api/Money/Payment
- Manually update the balance after payments are made since the API does not keep track of payments at this time

#### We would like to be able to clone your source from GitHub to evaluate the assignment and run the Android app.
