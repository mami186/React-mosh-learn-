import { useParams } from "react-router-dom";


const UserDetail = () => {
  const param =useParams()
  return <p>User{param.id}</p>;
};

export default UserDetail;
