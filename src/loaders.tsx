const URL: string = import.meta.env.VITE_BASE_URL;

export const indexLoader = async () => {
  const response = await fetch(`${URL}`);
  const allPauses = await response.json();
  return allPauses;
};

export const showLoader = async ({ params }: any) => {
  const id: number = parseInt(params.id);
  const response = await fetch(`${URL}/${id}`);
  const aPause = await response.json();
  return aPause;
};
