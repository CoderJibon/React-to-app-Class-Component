import { Component } from "react";
import { BsPinAngle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
class ToDOAppList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { listName, listData, deleteItem, handleChangeSelectItem } =
      this.props;

    return (
      <div className="col-md-4">
        <h2>{listName}</h2>
        <hr />
        <ul className="list-group">
          {listData.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <div className="row">
                  <div className="col-md-1">
                    <BsPinAngle style={{ fontSize: "25px" }} />
                  </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-7">
                        <h5
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {item.title}
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <form action="">
                          <select
                            onChange={(e) =>
                              handleChangeSelectItem(item.id, e.target.value)
                            }
                            className="form-select"
                            name="status"
                          >
                            <option value="">--select--</option>
                            <option value="pending">pending</option>
                            <option value="running">running</option>
                            <option value="complete">complete</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button>
                      <GrClose
                        onClick={() => deleteItem(item.id)}
                        style={{
                          fontSize: "25px",
                          marginLeft: "-20px",
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
    );
  }
}

export default ToDOAppList;
