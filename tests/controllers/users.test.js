const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app');
const Users = require('../../src/models/User');

describe('Users Controller', () => {

    describe('POST /users', () => {
      it('should create a new user', async () => {
        const res = await request(app)
          .post('/users')
          .send({ username: 'TestUser', password: 'password_test' });

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        expect(res.body.username).to.equal('TestUser');

        // Verificar que el usuario se haya creado correctamente en la base de datos
        const user = await Users.findByPk(res.body.id);
        expect(user).to.exist;
        expect(user.username).to.equal('TestUser');
      });
    });

    describe('PUT /users/:id', () => {
      it('should update an existing user', async () => {
        // Crear un usuario de prueba en la base de datos
        const user = await Users.create({ username: 'OldUsername', password: 'old_password' });

        const res = await request(app)
          .put(`/users/${user.id}`)
          .send({ username: 'NewUsername', password: 'old_password' });

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal('NewUsername');

        // Verificar que el usuario se haya actualizado correctamente en la base de datos
        const updatedUser = await Users.findByPk(user.id);
        expect(updatedUser).to.exist;
        expect(updatedUser.username).to.equal('NewUsername');
      });
    });

    describe('DELETE /users/:id', () => {
      it('should delete an existing user', async () => {
        // Crear un usuario de prueba en la base de datos
        const user = await Users.create({ username: 'TestUser', password: 'password_test' });

        const res = await request(app).delete(`/users/${user.id}`);

        expect(res.status).to.equal(200);

        // Verificar que el usuario se haya eliminado correctamente de la base de datos
        const deletedUser = await Users.findByPk(user.id);
        expect(deletedUser).to.be.null;
      });
    });

    describe('GET /users', () => {
      it('should get all users', async () => {
        // Crear algunos usuarios de prueba en la base de datos
        await Users.bulkCreate([
          { username: 'User1', password: 'password1' },
          { username: 'User2', password: 'password2' },
          { username: 'User3', password: 'password3' },
        ]);

        const res = await request(app).get('/users');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array').and.to.have.length.gte(3);
      });
    });

    describe('GET /users/:id', () => {
      it('should get a specific user', async () => {
        // Crear un usuario de prueba en la base de datos
        const user = await Users.create({ username: 'TestUser', password: 'password_test' });

        const res = await request(app).get(`/users/${user.id}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.username).to.equal('TestUser');
      });
    });
  });
