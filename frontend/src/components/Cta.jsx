import Button from "./Button";

const Cta = ({ text, onClick, icon, pitch }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1.5rem" }}>
      <p>{pitch}</p>
      <Button onClick={onClick} childre={text} icon={icon} />
    </div>
  );
};

export default Cta;
