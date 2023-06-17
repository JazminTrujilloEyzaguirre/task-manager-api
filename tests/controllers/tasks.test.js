const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app');
const Task = require('../../src/models/Task');

describe('Tasks Controller', () => {

    describe('POST /tasks', () => {
        it('should create a new task', async () => {
            const res = await request(app)
            .post('/tasks')
            .send({
                title: 'New Task',
                description: 'Task description',
                user_id: 1,
                state_id: 1,
            });

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('id');
            expect(res.body.title).to.equal('New Task');
        });
    });

    describe('PUT /tasks/{id}', () => {
        it('should update an existing task', async () => {
            // Crear una tarea previamente
            const task = await Task.create({
            title: 'Existing Task',
            description: 'Task description',
            user_id: 1,
            state_id: 1,
            });

            const res = await request(app)
            .put(`/tasks/${task.id}`)
            .send({
                title: 'Updated Task',
                description: 'Updated description',
                user_id: 1,
                state_id: 2,
            });

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.equal('Updated Task');
        });
    });

    describe('DELETE /tasks/{id}', () => {
        it('should delete an existing task', async () => {
            // Crear una tarea previamente
            const task = await Task.create({
            title: 'Task to delete',
            description: 'Task description',
            user_id: 1,
            state_id: 1,
            });

            const res = await request(app).delete(`/tasks/${task.id}`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.equal('Tarea eliminada correctamente.');
        });
    });

    describe('GET /tasks', () => {
        it('should get all tasks', async () => {
            // Crear algunas tareas previamente
            await Task.bulkCreate([
            {
                title: 'Task 1',
                description: 'Task 1 description',
                user_id: 1,
                state_id: 1,
            },
            {
                title: 'Task 2',
                description: 'Task 2 description',
                user_id: 1,
                state_id: 1,
            },
            {
                title: 'Task 3',
                description: 'Task 3 description',
                user_id: 1,
                state_id: 1,
            },
            ]);

            const res = await request(app).get('/tasks');

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array').and.to.have.length.gte(3);
        });
    });

    describe('GET /tasks/{id}', () => {
        it('should get a specific task', async () => {
            // Crear una tarea previamente
            const task = await Task.create({
            title: 'Specific Task',
            description: 'Task description',
            user_id: 1,
            state_id: 1,
            });

            const res = await request(app).get(`/tasks/${task.id}`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.equal('Specific Task');
        });
    });

    describe('GET /tasks/state/:stateId', () => {
        it('should return tasks with matching state_id', async () => {
          const res = await request(app).get('/tasks/state/1');

          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('Array');

          // Verificar que todas las tareas tengan el state_id correcto
          const tasks = res.body;
          tasks.forEach((task) => {
            expect(task.state_id).to.equal(1);
          });
        });

        it('should return an empty array if no tasks match the state_id', async () => {
          const res = await request(app).get('/tasks/state/100');

          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('Array');
          expect(res.body.length).to.be.gte(0);
        });
    });

    describe('GET /tasks/user/:userId', () => {
        it('should return tasks with matching user_id', async () => {
          const res = await request(app).get('/tasks/user/1');

          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('Array');

          // Verificar que todas las tareas tengan el user_id correcto
          const tasks = res.body;
          tasks.forEach((task) => {
            expect(task.user_id).to.equal(1);
          });
        });

        it('should return an empty array if no tasks match the user_id', async () => {
          const res = await request(app).get('/tasks/user/100');

          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('Array');
          expect(res.body.length).to.be.gte(0);
        });
    });
});
