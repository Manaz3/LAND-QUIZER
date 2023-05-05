import { useSelector } from "react-redux";
import { RootState } from "../../types/redux/store";
import Card from "../Card/Card";
import { store } from "../../types/redux/store";

function MainPage(): JSX.Element {
  const { themes } = useSelector((store: RootState) => store.themes);
  return (
    <div className="container">
      {themes.map((theme) => (
        <Card flash={flash} />
      ))}
    </div>
  );
}

export default MainPage;
