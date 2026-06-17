import { test, expect } from '@playwright/test';

test('put object api test to update an existing object', async ({ request }) => {

    const objectId = 'ff8081819d82fab6019ed494e44023b4';

    const requestBody = {
        name: 'Apple MacBook Pro 16',
        data: {
            year: 2019,
            price: 2049.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
            color: 'silver'
        }
    };

    const response = await request.put(`https://api.restful-api.dev/objects/${objectId}`, {
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
    expect(responseBody).toHaveProperty('updatedAt');

    expect(responseBody.id).toBe(objectId);
    expect(responseBody.name).toBe('Apple MacBook Pro 16');
    expect(responseBody.data.year).toBe(2019);
    expect(responseBody.data.price).toBe(2049.99);
    expect(responseBody.data['CPU model']).toBe('Intel Core i9');
    expect(responseBody.data['Hard disk size']).toBe('1 TB');
    expect(responseBody.data.color).toBe('silver');

});
