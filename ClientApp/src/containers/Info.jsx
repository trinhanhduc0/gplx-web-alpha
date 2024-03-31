import React from 'react';
import Feature from './../components/Feature';
import '../styles/Info.css';
const Info = ({ Hang }) => (
    <div className="info section__margin" id="info">
        {Hang && (
            <>
                <div className="info-feature">
                    <Feature title="Giới Thiệu" text={Hang.thongtin} />
                </div>
                <div className="info-heading">
                    <h1 className="">{`Cấu trúc bài thi hạng ${Hang.thongtin}`}</h1>
                </div>
                <div className="info-container">
                    <Feature className="features-container__feature" title="Thời Gian" text={`Thời gian làm bài: ${Hang.thoigianthi}`} />
                    <Feature className="features-container__feature" title="Số lượng" text={`Số lượng câu hỏi: ${Hang.diemtoida} câu.`} />
                    <Feature className="features-container__feature" title="Tổng Thể" text={`Số câu hỏi cần trả lời đúng: ${Hang.diemtoitheu}/${Hang.diemtoida} câu là ĐẠT.`} />
                    <Feature classNam="features-container__feature" title="Cấu trúc" text="Mỗi câu hỏi có từ 2 – 4 sự lựa chọn nhưng chỉ có 01 đáp án đúng" />
                </div>
            </>
        )}
    </div>
);


export default Info;
