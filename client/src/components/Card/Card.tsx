import Modal from "../modal/Modal";
import { useState } from "react";
import { Flash } from "../../types/game/Flash";

const Card = ({ flashes }: { flashes: Flash }): JSX.Element => {
  const [modalActive, setModalActive] = useState(true);

  const onHandleClick = (): void => {};

  return (
    <div key={flashes.id} className="Card" onClick={() => setModalActive(true)}>
      {/* {flashes.opened === false ? ( */}
        <div className="closed-card" onClick={onHandleClick}>
          {flashes.score}
          {flashes.question}
        </div>
      {/* ) : ( */}
        <Modal active={modalActive} setActive={setModalActive} />
      {/* )} */}
    </div>
  );
};

export default Card;
