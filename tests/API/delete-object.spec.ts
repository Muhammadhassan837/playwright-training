import { test, expect } from '@playwright/test';

// Verify delete object api test 
// This test will delete an object by its id and verify the response
// The test will check the status code and the response message to ensure that the object has been deleted successfully
// object id will be taken from the post object api test which will create a new object and return the id of the created object

test('delete object api test to remove an object by id', async ({ request }) => {

    const objectId = 'ff8081819d82fab6019ed49aebfe23ba';

    const response = await request.delete(`https://api.restful-api.dev/objects/${objectId}`);

    console.log(response.status());
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.message).toBe(`Object with id = ${objectId} has been deleted.`);

});
