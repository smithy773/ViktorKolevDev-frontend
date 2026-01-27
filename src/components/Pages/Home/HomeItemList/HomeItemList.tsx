import { homeItemsCont } from "../../../../const/HomeItems/HomeItems";
import HomeItem from "../HomeItem/HomeItem";

function HomeItemList() {
  return (
    <div>
      <div>
        {homeItemsCont.map((item) => {
          return (
            <HomeItem
              title={item.title}
              description={item.description}
              navPath={item.navPath}
              navIcon={item.navIcon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeItemList;
