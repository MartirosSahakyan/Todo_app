import { Button } from "../Button/Button";
import "./FilterButtons.css";
import { STATUS } from "../../helpers/constants";
import classNames from "classnames";

export function FilterButtons({ status, handleClick }) {
  return (
    <div className="filterBtns-container">
      <Button
        className={classNames("filterBtns", {
          active_filterBtn: status === STATUS.ALL,
        })}
        handleClick={() => handleClick(STATUS.ALL)}
        text="All"
      />
      <Button
        className={classNames("filterBtns", {
          active_filterBtn: status === STATUS.ACTIVE,
        })}
        handleClick={() => handleClick(STATUS.ACTIVE)}
        text="Active"
      />
      <Button
        className={classNames("filterBtns", {
          active_filterBtn: status === STATUS.COMPLETE,
        })}
        handleClick={() => handleClick(STATUS.COMPLETE)}
        text="Complete"
      />
    </div>
  );
}
