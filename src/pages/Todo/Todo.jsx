import axios from "axios";
import { Component } from "react";
import { BsPinAngle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      input: {
        name: "",
        status: "pending",
      },
    };
  }

  componentDidMount = () => {
    axios.get(`http://localhost:5050/todo`).then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        todo: [...res.data],
      }));
    });
  };

  handleChangeInput = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        [e.target.name]: e.target.value,
      },
    }));
  };
  handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    axios
      .post(`http://localhost:5050/todo`, this.state.input)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todo: [...prevState.todo, res.data],
          input: {
            name: "",
            status: "pending",
          },
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleDeleteItem = (id) => {
    axios
      .delete(`http://localhost:5050/todo/${id}`)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todo: [...prevState.todo.filter((data) => data.id !== id)],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const todoList = this.state.todo;
    const { input } = this.state;
    return (
      <>
        <section style={{ marginTop: "20px" }}>
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={this.handleTodoSubmit}
                      className="d-flex my-2"
                    >
                      <input
                        onChange={this.handleChangeInput}
                        value={input.name}
                        name="name"
                        className="form-control"
                        type="text"
                      />
                      <select
                        onChange={this.handleChangeInput}
                        value={input.status}
                        className="form-select"
                        name="status"
                        id=""
                      >
                        <option value="pending">pending</option>
                        <option value="running">running</option>
                        <option value="complete">complete</option>
                        <option value="cancel">cancel</option>
                      </select>
                      <button className="btn btn-primary" type="submit">
                        add
                      </button>
                    </form>
                    <hr />
                    <ul className="list-group">
                      {todoList.map((item, index) => {
                        let bgColor = "";
                        switch (item.status) {
                          case "running":
                            bgColor = "#845EC2";
                            break;
                          case "pending":
                            bgColor = "#C34A36";
                            break;
                          case "complete":
                            bgColor = "#008F7A";
                            break;
                          case "cancel":
                            bgColor = "red";
                            break;
                        }

                        return (
                          <li
                            style={{ backgroundColor: bgColor }}
                            key={index}
                            className="list-group-item"
                          >
                            <div className="row">
                              <div className="col-md-1">
                                <BsPinAngle
                                  style={{ fontSize: "25px", color: "#fff" }}
                                />
                              </div>
                              <div className="col-md-10">
                                <h5
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#fff",
                                  }}
                                >
                                  {item.name}
                                </h5>
                              </div>
                              <div className="col-md-1">
                                <button
                                  onClick={() => this.handleDeleteItem(item.id)}
                                >
                                  <GrClose
                                    style={{
                                      fontSize: "25px",
                                      marginLeft: "-10px",
                                      fill: "#fff",
                                    }}
                                  />
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Todo;
