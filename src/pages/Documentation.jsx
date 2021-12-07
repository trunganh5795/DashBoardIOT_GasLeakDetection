import React from 'react'

export default function Documentation() {
    return (
        <div>
            <div className="text-center">
                <h1>
                    HƯỚNG DẪN SỬ DỤNG
                </h1>
            </div>
            <font size="+2">
                <p>
                    <i>Người dùng cần tuân thủ theo hướng dẫn sử dụng để hệ thống có thể cảnh báo chính xác và kịp thời.</i>
                </p>
                <ol>
                    <li> <b>Nơi đặt:</b><br />
                        Cảm biến khí gas cần được đặt ở nơi khí gas được sử dụng, có tiềm ẩn khả năng gây cháy nổ.
                    </li>
                    <li><b>Thông tin tài khoản:</b><br />
                        Người dùng cần đăng ký thông tin tài khoản đặc biệt là số điện thoại trong mục Information để hệ thống có thể gửi cảnh báo khi có rò rỉ khí gas. <br />
                        Người dùng có thể cập nhật lại số điện thoại khi có thay đổi.
                    </li>
                    <li><b>Đăng nhập:</b><br />
                        Người dùng cần đăng nhập bằng thông tin đã đăng ký vào hệ thống để có thể sử dụng các tính năng History (Xem lịch sử rò rỉ), điều khiển quạt...
                    </li>
                    <li><b>History (Xem lịch sử rò rỉ):</b><br />
                        Có thể xem được thời gian xảy ra, thời gian kết thúc của việc rò rỉ.
                    </li>
                    <li><b>Điều khiển quạt:</b><br />
                        Có thế bật/tắt quạt theo ý muốn ở bất kỳ thời điểm nào.
                    </li>
                </ol>
            </font>
        </div>
    )
}