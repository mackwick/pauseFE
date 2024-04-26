import { useLoaderData, Form } from "react-router-dom";
import Forms from "../components/FullUpdate";
import { useState } from "react";
import Header from "../components/Header";

const Show: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const aPause: any = useLoaderData();
  const date: string = aPause.date.split("T")[0];
  const displayDate: string =
    date.split("-")[1] + "." + date.split("-")[2] + "." + date.split("-")[0];

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header />
      <div className="show">
        {!showForm && (
          <div className="show-content">
            <h2>
              {aPause.length}-minute meditation on {displayDate}
            </h2>
            <p>
              <b>Feelings before: </b>
              {aPause.before}
            </p>
            <p>
              <b>Feelings after: </b>
              {aPause.after}
            </p>
            <h6>
              <b>What came up during this session:</b>
            </h6>
            <p>{aPause.thoughts}</p>
          </div>
        )}

        <div className="show-form">
          {showForm && (
            <Forms
              action={`/update/${aPause.id}`}
              method="put"
              buttontxt="Update"
              defaultval_after={aPause.after}
              defaultval_before={aPause.before}
              defaultval_length={aPause.length}
              defaultval_thoughts={aPause.thoughts}
            />
          )}
          <div className="action-buttons">
            <button className="go-back-button" onClick={toggleForm}>
              {showForm ? "Go back" : "Edit"}
            </button>

            <Form
              className="delete-button"
              action={`/delete/${aPause.id}`}
              method="post"
            >
              <button>Delete</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
