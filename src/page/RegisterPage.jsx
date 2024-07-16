import { Helmet } from "react-helmet";
import RegisterView from "../section/Authencation/views/RegisterView";

function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterView />
    </>
  );
}
export default RegisterPage;
