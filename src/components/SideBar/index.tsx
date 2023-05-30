import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FilterCard from "./FilterCard";
import * as enums from "../../utils/enums/Tasks";
import { RootReducer } from "../../Store";
import { changeTerm } from "../../Store/reducers/filter";

import * as S from "./styles";
import { Button, Field } from "../../styles/styles";

type Props = {
  showFilters: boolean;
};

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
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
          </>
        ) : (
          <Button onClick={() => navigate("/")}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  );
};

export default SideBar;
