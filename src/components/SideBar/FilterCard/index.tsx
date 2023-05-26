import { useDispatch } from "react-redux";

import * as enums from "../../../utils/enums/Tasks";

import * as S from "./styles";
import { changeFilter } from "../../../Store/reducers/filter";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../Store";

export type Props = {
  subtitle: string;
  criterion: "priority" | "status" | "all";
  value?: enums.Priority | enums.Status;
};

const FilterCard = ({ subtitle, criterion, value }: Props) => {
  const dispatch = useDispatch();
  const { filter, tasks } = useSelector((state: RootReducer) => state);
  const checkThisActive = () => {
    const sameCriterion = filter.criterion === criterion;
    const sameValue = filter.value === value;

    return sameCriterion && sameValue;
  };

  const taskCount = () => {
    if (criterion === "all") return tasks.itens.length;
    if (criterion === "priority") {
      return tasks.itens.filter((item) => item.priority === value).length;
    }
    if (criterion === "status") {
      return tasks.itens.filter((item) => item.status === value).length;
    }
  };

  const filters = () => {
    dispatch(
      changeFilter({
        criterion,
        value,
      })
    );
  };

  const counter = taskCount();
  const active = checkThisActive();

  return (
    <S.Card active={active} onClick={filters}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  );
};

export default FilterCard;
