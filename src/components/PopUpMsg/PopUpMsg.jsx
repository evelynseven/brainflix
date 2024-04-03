import "./PopUpMsg.scss";

const PopUpMsg = ({ message }) => {
  return (
    <div className="pop-up">
      <p className="pop-up__msg">{message} </p>
    </div>
  );
};

export default PopUpMsg;
