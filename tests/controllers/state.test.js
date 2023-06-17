const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app');

describe('States Controller', () => {

    describe('GET /state', () => {
        it('should get all states', async () => {

            const res = await request(app).get('/state');

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.be.gte(10);
        });
    });
  });
