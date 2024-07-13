import { Helmet } from "react-helmet";
import Description from "../section/HomePage/AboutHome";

function GioiThieuPage() {
    return(
        <div>
            <Helmet>
                <title>Liên Hệ - GiaSuOnline.vn</title>
            </Helmet>
            <Description />
        </div>
    );
}
export default GioiThieuPage;