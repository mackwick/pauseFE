import { Form, FormMethod } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

type Props = {
  action: string;
  method: FormMethod;
  buttontxt: string;
};

const Create1: React.FC<Props> = ({ action, method, buttontxt }) => {
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
        <label htmlFor="before">
          How are you doing (in five words or less)?
          <input type="text" name="before" id="before" className="form-input" />
        </label>
        <label htmlFor="length">
          How many minutes do you want to meditate?
          <input
            type="number"
            name="length"
            id="length"
            className="form-input"
          />
        </label>
        <button>{buttontxt}</button>
      </Form>
    </div>
  );
};

export default Create1;
