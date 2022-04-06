import { Alert } from "react-bootstrap";

type StateProps = {
  errors?: Array<{ msg: string }>;
};

export const Error = ({ errors }: StateProps) => {
  return (
    <>
      {errors?.map((err) => (
        <Alert key={err.msg} variant="danger">{err?.msg}</Alert>
      ))}
    </>
  );
};
