import react from "react";
import "./Modal.css";

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ active, setActive }: ModalProps): JSX.Element => {
  const handleFormSubmit = (event: react.FormEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };
  
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form>
          <div className="question" onSubmit={handleFormSubmit}>
            {/*flash.question*/}
          </div>
          <input type="text" className="input" placeholder="Ваш ответ?" />
          <button className="button">Ответить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
