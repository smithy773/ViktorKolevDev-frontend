import { useNavigate } from "react-router";

function TitleButton() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>TITLE BUTTON</button>
      </div>
    </div>
  );
}

export default TitleButton;
