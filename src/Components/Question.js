import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { title, info } = props;
  const [plus, setPlus] = useState(false);

  return (
    <div className="questionOne">
      <h3>
        {title}{" "}
        <button onClick={() => setPlus(!plus)} className="btn btn-danger">
          {plus ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </h3>
      <p>{plus && info}</p>
    </div>
  );
};

export default Question;
