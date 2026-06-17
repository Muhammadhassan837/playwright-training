import { test, expect } from '@playwright/test';
import { APIResponse } from '@playwright/test';

test('get object api test to return list of objects', async ({ request }) => {

    const response= await request.get('https://api.restful-api.dev/objects');
    console.log (response);

    expect(response.status()).toBe(200);
    const responseBody= await response.json();
        console.log (responseBody);

    expect(responseBody.length).toBeGreaterThan(0);

    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('name');
    expect(responseBody[0]).toHaveProperty('data');
    expect(responseBody[0].data).toHaveProperty('color');
    expect(responseBody[0].data).toHaveProperty('capacity');


});
