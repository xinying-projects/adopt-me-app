import { useParams } from "react-router-dom";

function Details() {
  var { id } = useParams();
  return <div>{id}</div>;
}

export default Details;
