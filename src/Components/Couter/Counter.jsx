import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: "",
    };
  }

  handleCounterDec = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  handleCounterInc = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter - 1,
    }));
  };
  render() {
    const { counter } = this.state;
    return (
      <section style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row justify-content-center d-flex ">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body text-center">
                  <h1 style={{ fontSize: "200px" }}>{counter}</h1>
                  <hr />
                  <button
                    onClick={this.handleCounterInc}
                    style={{ marginRight: "20px" }}
                    className="btn btn-primary"
                  >
                    --
                  </button>
                  <button
                    onClick={this.handleCounterDec}
                    className="btn btn-danger"
                  >
                    ++
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;
