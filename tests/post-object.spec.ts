import { test, expect } from '@playwright/test';

// Verify post object api test
// This test will create a new object and verify the response
// The test will check the status code and the response body to ensure that the object has been created successfully
// The test will also check the properties of the created object to ensure that they match the request body

test('post object api test to create a new object', async ({ request }) => {

    const requestBody = {
        name: 'Apple MacBook Pro 16',
        data: {
            year: 2019,
            price: 1849.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB'
        }
    };

    const response = await request.post('https://api.restful-api.dev/objects', {
        data: requestBody,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response.status());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('data');
    expect(responseBody).toHaveProperty('createdAt');

    expect(responseBody.name).toBe('Apple MacBook Pro 16');
    expect(responseBody.data.year).toBe(2019);
    expect(responseBody.data.price).toBe(1849.99);
    expect(responseBody.data['CPU model']).toBe('Intel Core i9');
    expect(responseBody.data['Hard disk size']).toBe('1 TB');

});
