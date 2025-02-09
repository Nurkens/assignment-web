BMI Calculator API
This is a simple API that calculates Body Mass Index (BMI) and provides a weight classification based on the BMI value.

How to Set Up

1. Install Node.js
   Make sure you have Node.js installed on your computer. Download Node.js here.

2. Clone the Project
   Download or clone this repository to your local machine.

3. Install Dependencies
   Open a terminal in the project folder and run this command to install required libraries:

npm install

4. Start the Server
   Start the server with this command:

npm start

The server will run at: http://localhost:5000

How to Use the API
Endpoint
URL: http://localhost:5000/api/calculate_bmi
Method: POST
Content-Type: application/json

Example Request
Here’s an example of what to send to the server:

{
"height": 1.75,
"weight": 70
}

Example Response
If your input is valid, you will get a response like this:

{
"bmi": 22.86,
"classification": "Normal weight"
}

Error Handling
If something goes wrong, the API will return helpful error messages.

1. Common Errors:
   Missing Input:

Request:
{}
Response:

{
"error": "Weight and height are required."
}

2. Invalid Input:
   Request:
   {
   "height": "abc",
   "weight": 70
   }
   Response:
   {
   "error": "Weight and height must be positive numbers."
   }
3. Negative or Zero Values
   Request:
   {
   "height": 0,
   "weight": -10
   }
   Response:
   {
   "error": "Weight and height must be positive numbers."
   }

Testing the API
Use any tool like Postman, Insomnia, or curl to test the API.

Example curl Command:
curl -X POST http://localhost:5000/api/calculate_bmi \
-H "Content-Type: application/json" \
-d '{"height": 1.75, "weight": 70}'
