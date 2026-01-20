import React, { useState } from 'react'
import { useEffect } from 'react';
import { Form, Row, Col, Button, Container, ListGroup, ListGroupItem, Badge } from 'react-bootstrap'

export const Home = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks_list");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [priority, setPriority] = useState("Medium")

  const addTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      priority: priority,
      isComplete: false
    }

    setTasks([...tasks, newTask]);

    setTaskInput("");
  }


  const deleteTask = (id) => {
    const updatedTask = tasks.filter(task => task.id !== id);

    setTasks(updatedTask)
  }

  const taskDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task);

    setTasks(updatedTasks)
  };

  useEffect(() => {
    localStorage.setItem("my_tasks_list", JSON.stringify(tasks));
  }, [tasks])





  return (
    <div>
      <h1 className="mx-3 my-1" >TaskMaster</h1>
      <Form onSubmit={addTask}>
        <Container>
          <Row className="mb-4 ">
            <Col className="col-md-8">
              <Form.Control
                type="text"
                placeholder="Add task"
                value={taskInput}
                className="custom-input"

                onChange={(e) => setTaskInput(e.target.value)}
              />
            </Col>

            <Col className="col-md-2">
              <Form.Select className="custom-select custom-padding" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Select>
            </Col>

            <Col className="col-md-2">
              <Button type="submit" variant="dark" className="w-100 custom-padding">
                Add Task
              </Button>
            </Col>

          </Row>      </Container>
      </Form>

      <Container>
        <ListGroup>

          {tasks.map((task) => (
            <ListGroupItem key={task.id} className="my-3 p-3 task-box col-md-12 m-2 d-flex justify-content-between align-items-center">
              <div>
                <span className="task-text  " style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
                  {task.text}
                </span>

                <Badge bg={task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'info'} className="ms-2">

                  {task.priority}</Badge>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Check
                  type="checkbox"
                  checked={task.isComplete}

                  className='mx-3 custom-check'
                  onChange={() => taskDone(task.id)}
                />
                <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}

        </ListGroup>
      </Container>
    </div>
  )
}
