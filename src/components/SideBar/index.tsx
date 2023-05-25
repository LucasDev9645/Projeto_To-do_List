import { useDispatch } from "react-redux";

import FilterCard from "./FilterCard";

import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../Store";
import { changeTerm } from "../../Store/reducers/filter";

const SideBar = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
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
