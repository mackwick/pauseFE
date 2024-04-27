import { Form, FormMethod } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

type Props = {
  action: string;
  method: FormMethod;
  buttontxt: string;
  defaultval_length: string;
  defaultval_before: string;
  defaultval_after: string;
  defaultval_thoughts: string;
};

const Create2Form: React.FC<Props> = ({
  action,
  method,
  buttontxt,
  defaultval_after,
  defaultval_before,
  defaultval_length,
  defaultval_thoughts,
}) => {
  const { user } = useUser();
  return (
    <div className="create-container">
      <Form action={action} method={method} className="create-form">
        <label htmlFor="user" className="hide">
          User
          <input
            type="text"
            name="user"
            id="user"
            defaultValue={user?.id || "non-user"}
            className="hide"
          />
        </label>

        <label htmlFor="length" className="hide">
          How many minutes did you meditate?
          <input
            type="number"
            name="length"
            id="length"
            defaultValue={defaultval_length}
            className="hide"
          />
        </label>
        <label htmlFor="before" className="hide">
          How did you feel before?
          <input
            type="text"
            name="before"
            id="before"
            defaultValue={defaultval_before}
            className="hide"
          />
        </label>
        <label htmlFor="after">
          How are you doing now (in five words or less)?
          <input
            type="text"
            name="after"
            id="after"
            defaultValue={defaultval_after}
            className="form-input"
          />
        </label>
        <label htmlFor="thoughts">
          Did any thoughts come up?
          <textarea
            name="thoughts"
            id="thoughts"
            defaultValue={defaultval_thoughts}
            className="form-input"
          />
        </label>
        <button>{buttontxt}</button>
      </Form>
    </div>
  );
};

export default Create2Form;
