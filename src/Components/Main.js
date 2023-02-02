import questions from "../data";
import Question from "./Question";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="heading text-center mb-5">
          <h2>Our Question</h2>
        </div>
        <div className="questionList">
          {questions.map((items) => {
            return <Question key={items.id} {...items} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
