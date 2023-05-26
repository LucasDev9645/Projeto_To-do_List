import { useDispatch } from "react-redux";

import FilterCard from "./FilterCard";

import * as S from "./styles";
import * as enums from "../../utils/enums/Tasks";
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
          <FilterCard
            value={enums.Status.PENDENTE}
            criterion="status"
            subtitle="Pendentes"
          />
          <FilterCard
            value={enums.Status.CONCLUIDA}
            criterion="status"
            subtitle="Concluídas"
          />
          <FilterCard
            value={enums.Priority.URGENTE}
            criterion="priority"
            subtitle="Urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANTE}
            criterion="priority"
            subtitle="Importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            criterion="priority"
            subtitle="Normal"
          />
          <FilterCard criterion="all" subtitle="Todas" />
        </S.Filters>
      </div>
    </S.Aside>
  );
};

export default SideBar;
