import React, { useEffect } from "react";
import useTutor from "../../hooks/useTutor";
import Protype from "prop-types";

function VenderInfo({ courseDetail }) {
  console.log("courseDetail", courseDetail);
  return (
    <div>
      <h2 className="text-2xl font-medium leading-loose ">
        Vendor Information
      </h2>
      <ul className="list-disc ml-4 mt-2">
        <li className="text-xl ">
          <span>Store Name:</span> {courseDetail.info.name}
        </li>
        <li className="text-xl">
          <span className="font-medium">Vendor:</span>{" "}
          <a href="#" className="text-pink-500">
            {courseDetail.info.name}
          </a>
        </li>
        <li className="text-xl">
          <span>Address:</span> 46, đường số 18, khu phố 5, Linh Trung, Thủ Đức,
          Thành Phố Hồ Chí Minh
        </li>
        <li className="text-xl">No ratings found yet!</li>
      </ul>
    </div>
  );
}

VenderInfo.propTypes = {
  id: Protype.string,
};

export default VenderInfo;
