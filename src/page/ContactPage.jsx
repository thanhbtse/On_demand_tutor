import { Helmet } from "react-helmet";
import ContactView from "../section/HomePage/views/Contact";

function ContactPage() {
    return(
        <div>
            <Helmet>
                <title>Liên Hệ - GiaSuOnline.vn</title>
            </Helmet>
            <ContactView />
        </div>
    );
}
export default ContactPage;