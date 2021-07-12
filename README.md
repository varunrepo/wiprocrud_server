# Wiprocrud

This server code contains two api 
1. Create Patient 
    To Create the Patient use the following api `http://localhost:8080/` -  POST Method
2. view List of Patient
    To List the Patient use the following api `http://localhost:8080/list`- GET Method

## Run the Project

Run `nodemon start` to start the server

## DB setup

1. Install Mongodb
2. start the mongodb server using mongod 

## Sample API
1. Create new patient 
URL - http://localhost:8080/
METHOD - POST

Sample Request
```json
{
    "patientNo": "11",
    "name": "Varun"
}
```
Sample Response

```json
{
    "_id": "60ebe7a807882f3a105b9d56",
    "rollNo": "11",
    "name": "Varun",
    "status": "A",
    "__v": 0
}
```





