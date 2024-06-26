import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

//CREATE
export const createAction = async ({ request }: any) => {
  const formData = await request.formData();

  const newPause = {
    length: parseInt(formData.get("length")),
    before: formData.get("before"),
    after: "",
    thoughts: "",
    user: formData.get("user"),
  };

  await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPause),
  });
  return redirect("/pause");
};

//CREATE PT 2/PARTIAL UPDATE
export const create2Action = async ({ request, params }: any) => {
  const id: number = parseInt(params.id);
  const formData = await request.formData();

  const updatedPause = {
    length: parseInt(formData.get("length")),
    before: formData.get("before"),
    after: formData.get("after"),
    thoughts: formData.get("thoughts"),
    user: formData.get("user"),
  };

  await fetch(`${URL}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPause),
  });
  return redirect("/index");
};

//UPDATE
export const updateAction = async ({ request, params }: any) => {
  const id: number = parseInt(params.id);
  const formData = await request.formData();

  const updatedPause = {
    length: parseInt(formData.get("length")),
    before: formData.get("before"),
    after: formData.get("after"),
    thoughts: formData.get("thoughts"),
    user: formData.get("user"),
  };

  await fetch(`${URL}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPause),
  });
  return redirect(`/index`);
};

//DELETE
export const deleteAction = async ({ params }: any) => {
  if (params === undefined) {
    return <h1>That is undefined. Try again.</h1>;
  } else {
    const id: number = parseInt(params.id);
    await fetch(`${URL}/${id}`, {
      method: "delete",
    });
    return redirect(`/index`);
  }
};
