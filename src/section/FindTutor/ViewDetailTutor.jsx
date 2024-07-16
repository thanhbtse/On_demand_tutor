import React, { useEffect } from "react";
import { Rate, Image, Breadcrumb, List, Avatar } from "antd";
import useTutor from "../../hooks/useTutor";
import { useParams } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "@ant-design/icons";
const ViewDetailTutor = () => {
  const { id } = useParams();
  const { tutorDetail, fetchTutorDetail, isLoadingTutorDetail } = useTutor();

  useEffect(() => {
    fetchTutorDetail(id);
  }, [id]);

  if (isLoadingTutorDetail) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  if (!tutorDetail || !tutorDetail.info) {
    return <div>No details found for this tutor.</div>;
  }

  const { description, ratings = [], moreProducts = [] } = tutorDetail;

  const { name, image, address } = tutorDetail.info;

  return (
    <div className="flex flex-col space-y-10 2xl:px-64 lg:px-16 xl:px-16 md:px-16 py-20">
      <div className="container mx-auto p-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>
            <a href="/">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/tutors">Gia sư</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>{name}</span>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex">
            <div className="w-1/3">
              <Image src={image} alt={name} className="rounded-lg shadow-lg" />
            </div>
            <div className="w-2/3 pl-6">
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="mt-2 text-lg text-gray-600">{address}</p>
              <div className="mt-4">
                <Rate
                  disabled
                  defaultValue={
                    ratings.length
                      ? ratings.reduce((a, b) => a + b, 0) / ratings.length
                      : 0
                  }
                />
                <span className="ml-2 text-gray-600">
                  ({ratings.length} đánh giá)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Mô tả</h2>
            <p className="mt-2 text-lg text-gray-600">{description}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sản phẩm khác
          </h2>
          <List
            className="mt-4"
            itemLayout="horizontal"
            dataSource={moreProducts}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image || "default_image_url"} />}
                  title={<a href={`/products/${item._id}`}>{item.name}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewDetailTutor;
