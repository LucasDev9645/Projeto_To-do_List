import FilterCard from "./FilterCard";

import * as S from "./styles";

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Field type="text" placeholder="Buscar" />
        <S.Filters>
          <FilterCard subtitle="Pendentes" counter={1} />
          <FilterCard subtitle="Concluídas" counter={2} />
          <FilterCard subtitle="Urgentes" counter={3} />
          <FilterCard subtitle="Importantes" counter={4} />
          <FilterCard subtitle="Normal" counter={5} />
          <FilterCard subtitle="Todas" counter={10} active />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
