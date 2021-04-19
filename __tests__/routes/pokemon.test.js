//routes.test.js
const request = require('supertest');
const server = require('../../app.js');

afterAll(() => {
	server.close();
});

describe('Route Tests', () => {
	test('GET /', async () => {
		const response = await request(server).get('/');
		expect(response.status).toEqual(200);
		expect(response.text).toContain('Hello World!');
	});
});
