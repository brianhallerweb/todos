const app = require("../index");
const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");
const Todo = require("../models/todo");

const todos = [
  {
    _id: new ObjectID(),
    todo: "first test todo"
  },
  {
    _id: new ObjectID(),
    todo: "second test todo"
  }
];

beforeEach(done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
});

describe("POST /todos", () => {
  it("should create a new todo", done => {
    const todo = "test todo text";
    request(app)
      .post("/todos")
      .send({ todo })
      .expect(200)
      .expect(res => {
        expect(res.body.todo).toBe(todo);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({ todo })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].todo).toBe(todo);
            done();
          })
          .catch(e => done(e));
      });
  });
});
