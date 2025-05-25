    Feature: Create a new object via the API

    To test adding data to the API

    Scenario: Send a POST request to create an object
        Given the API endpoint is "https://api.restful-api.dev/objects"
        And the request body is:
            """
            {
                "name": "Laptop",
                "data": {
                    "brand": "Dell",
                    "ram": "16GB",
                    "storage": "512GB SSD"
                }
            }
            """
        When I send a POST request to the API
        Then the response status code should be 200 or 201
        And the response should contain the name "Laptop"