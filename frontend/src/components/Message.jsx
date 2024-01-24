import Cta from "./Cta";

const Message = (text, onClick, icon, pitch, message) => {
  return (
    <div>
      {message}
      <Cta onClick={onClick} text={text} icon={icon} pitch={pitch} />
    </div>
  );
};

export default Message;
