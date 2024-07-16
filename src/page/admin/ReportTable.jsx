import { Helmet } from "react-helmet";
import { ReportView } from "../../section/Admin/Report/views";

function ReportTable() {
  return (
    <div>
      <Helmet>
        <title>Report - GiaSuOnline.vn</title>
      </Helmet>
      <ReportView />
    </div>
  );
}
export default ReportTable;
