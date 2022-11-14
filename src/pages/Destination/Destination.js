import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Destination.scss";
import UiInput from "../../components/Form/UiInput";

const Destination = ({
  className,
  onFocus,
  onChange,
  bold,
  from,
  to,
  onBlur,
}) => {
  return (
    <section className={`destination-container ${className}`}>
      <div className="destination-body">
        <div className="form-body">
          <UiInput
            onChange={onChange}
            id="from"
            name="from"
            value={from}
            placeholder="From"
            onFocus={onFocus}
            bold={bold}
          />
          <div className="left-right">
            <FontAwesomeIcon icon={faRightLeft} />
          </div>
          <UiInput
            onChange={onChange}
            id="to"
            name="to"
            value={to}
            placeholder="To"
            onFocus={onFocus}
            bold={bold}
            onBlur={onBlur}
          />
        </div>
      </div>
    </section>
  );
};

export default Destination;
