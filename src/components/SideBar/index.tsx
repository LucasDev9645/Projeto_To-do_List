import FilterCard from "./FilterCard";

import * as S from "./styles";

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Field type="text" placeholder="Buscar" />
        <S.Filters>
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard active />
          <FilterCard />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
