import axios from "axios";
import { Component } from "react";
import ToDOAppList from "../../Components/Couter/ToDoAppList/ToDoAppList";

class ToDOApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoData: [],
      input: {
        title: "",
        status: "pending",
      },
      selectItem: "",
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5050/todo`)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todoData: [...res.data],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        [e.target.name]: e.target.value,
      },
    }));
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5050/todo`, this.state.input)
      .then((res) => {
        alert("Add new Item Successfully..");
        this.setState((prevState) => ({
          ...prevState,
          todoData: [...prevState.todoData, res.data],
          input: {
            title: "",
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
          todoData: [...prevState.todoData.filter((data) => data.id !== id)],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleChangeSelectItem = (id, status) => {
    const getData = this.state.todoData.find((item) => item.id === id);
    const updateData = {
      ...getData,
      status: status,
    };
    const index = this.state.todoData.findIndex((index) => index.id === id);

    let updateDataAll = this.state.todoData;
    updateDataAll[index] = { ...updateData };

    axios
      .put(`http://localhost:5050/todo/${id}`, updateData)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todoData: [...updateDataAll],
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { todoData, input } = this.state;
    const pending = todoData.filter((item) => item.status === "pending");
    const running = todoData.filter((item) => item.status === "running");
    const complete = todoData.filter((item) => item.status === "complete");
    return (
      <>
        <section style={{ marginTop: "20px" }}>
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={this.handleFormSubmit}
                      className="justify-content-center d-flex"
                    >
                      <input
                        onChange={this.handleInputChange}
                        value={input.title}
                        placeholder="Add To Do List"
                        className="form-control"
                        type="text"
                        name="title"
                      />
                      <select
                        value={input.status}
                        onChange={this.handleInputChange}
                        className="form-select"
                        name="status"
                      >
                        <option value="pending">pending</option>
                        <option value="running">running</option>
                        <option value="complete">complete</option>
                      </select>
                      <button className="btn btn-primary" type="submit">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div className="row">
              <ToDOAppList
                deleteItem={this.handleDeleteItem}
                listData={pending}
                listName="Pending"
                handleChangeSelectItem={this.handleChangeSelectItem}
              ></ToDOAppList>
              <ToDOAppList
                deleteItem={this.handleDeleteItem}
                listData={running}
                listName="Running"
                handleChangeSelectItem={this.handleChangeSelectItem}
              ></ToDOAppList>
              <ToDOAppList
                deleteItem={this.handleDeleteItem}
                listData={complete}
                listName="Complete"
                handleChangeSelectItem={this.handleChangeSelectItem}
              ></ToDOAppList>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ToDOApp;
