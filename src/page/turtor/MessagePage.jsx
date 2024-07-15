import { Helmet } from "react-helmet";
import { MessageView } from "../../section/TurtorDashBoard/Message/views";

function MessagePage() {
  return (
    <div>
      <Helmet>
      <title>My Message - GiaSuOnline.vn</title>
      </Helmet>
      <MessageView />
    </div>
  );
}
export default MessagePage;
