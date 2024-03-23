import React from 'react';
import logo from './logo.png';

export function FooterPage() {
    return (
        <footer className="bg-gray-800 text-white py-20 mt-5">
            <div className="container mx-auto flex flex-wrap justify-center align-center items-center">
                <div className="flex items-center mx-2">
                    {/* Sử dụng biến 'logo' đã import để đặt đường dẫn hình ảnh */}
                    <img src={logo} alt="Logo" className="h-8 mr-4" />
                    <p className="text-sm">© 2024 GPLX_STU All Rights Reserved.</p>
                </div>
                <div className="flex items-center space-x-6 mx-2">
                    <a href="#" className="text-sm hover:text-gray-300">Home</a>
                    <a href="#" className="text-sm hover:text-gray-300">Học lý thuyết</a>
                    <a href="#" className="text-sm hover:text-gray-300">Thi thử</a>
                </div>
            </div>
        </footer>
    );
}
