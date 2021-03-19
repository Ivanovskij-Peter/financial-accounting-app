import { Link } from "react-router-dom";
import svg from "../../images/sprite.svg";
import "./report.scss";

export default function Balance() {
  return (
    <div className="report">
      <a href="" className="report_link">
        <Link to="/reports" className="report_link-deskription">
          Перейти к отчетам
        </Link>
      </a>
      <svg className="report_icon">
        <use href={svg + "#chart"} />
      </svg>
    </div>
  );
}
