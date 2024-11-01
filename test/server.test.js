const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Server Tests', () => {
    describe('GET /', () => {
        it('should return a welcome message', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    console.log("Error is:", err);
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Hello from homepage');
                    done();
            });
        });
    });
});