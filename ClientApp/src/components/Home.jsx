import React, { useEffect, useState } from 'react';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

export function Home() {
    const [typeGPLX, setTypeGPLX] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("HANG"));
        setTypeGPLX(storedData);
        console.log(storedData);
    }, []);

    
    return (
        <div style = {{ padding: '50px' }} >
            <div>
                <Title level={1}>Chào mừng bạn đến với trang chủ</Title>
                <Paragraph>
                    Chúng tôi cung cấp các khóa học lái xe chất lượng và đáng tin cậy để giúp bạn trở thành một lái xe an toàn và tự tin.
                    Dù bạn mới bắt đầu hoặc muốn cải thiện kỹ năng lái xe của mình, chúng tôi đều có các khóa học phù hợp với nhu cầu của bạn.
                </Paragraph>
                <Paragraph>
                    Hãy khám phá các khóa học của chúng tôi ngay hôm nay và bắt đầu hành trình của bạn để có được bằng lái xe!
                </Paragraph>
                <Button type="primary" size="large">Khám phá ngay</Button>
            </div>
            {
                typeGPLX && (<ul>
                    <li>Thời gian làm bài: <strong><span className="has-inline-color has-vivid-red-color">{typeGPLX.thoigianthi} phút</span></strong></li>
                    <li>Số lượng câu hỏi: <strong><span className="has-inline-color has-vivid-red-color">{typeGPLX.diemtoida} câu</span></strong></li>
                    <li>Số câu hỏi cần trả lời đúng: <strong><span className="has-inline-color has-vivid-red-color">{typeGPLX.diemtoitheu+ "/" + typeGPLX.diemtoida}</span></strong> câu là <strong><span className="has-inline-color has-vivid-red-color">ĐẠT</span></strong></li>
                    <li>Mỗi câu hỏi có từ 2 – 4 sự lựa chọn nhưng chỉ có <strong><span className="has-inline-color has-vivid-red-color">01 đáp án đúng</span></strong></li>
                </ul>)
            }
        </div>
    );
}

