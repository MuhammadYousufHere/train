import PropTypes from "prop-types";

export default function GlideDots({ length, clicked, active }) {
    return (
        <ul className="glide__dots">
            {[...new Array(length)].map((i, idx) => (
                <li
                    className={`glide__dot ${active === idx ? "active" : ""}`}
                    key={idx}
                    onClick={() => clicked(idx)}
                >
                    {idx + 1}
                </li>
            ))}
        </ul>
    );
}

GlideDots.propTypes = {
    length: PropTypes.number.isRequired,
    clicked: PropTypes.func.isRequired,
    active: PropTypes.number.isRequired
};
