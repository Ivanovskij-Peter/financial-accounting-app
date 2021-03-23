import { Link } from "react-router-dom";
import svg from "../../images/sprite.svg";
import "./report.scss";

export default function Balance() {
  return (
    <div className="report">
      <Link to="/reports" className="report_link-deskription">
        Перейти к отчетам
      </Link>
      <svg className="report_icon">
        <use href={svg + "#chart"} />
      </svg>
    </div>
  );
}
