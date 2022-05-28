import React, { Component } from 'react';
import "./Explore.css"

class Explore extends Component {
    render() {
        return (
            <div class="accordion" id="accordionExample">
                <h4 class="title-explore">Đặt biệt thự đẹp siêu dễ dàng trên Traveloka ở tất cả các điểm đến hấp dẫn</h4>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Trải nghiệm biệt thự siêu đẳng cấp cho chuyến du lịch thêm màu mới mẻ cùng Traveloka
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Bạn ơi! Đã đến lúc gia đình mình cần một kỳ nghỉ ngắn ngày để gắn kết, các cặp đôi cần một chuyến du lịch thiệt lãng mạn để hâm nóng tình cảm sau những ngày làm việc chăm chỉ. Đám bạn thân chúng mình cũng cần một chuyến vi vu để trải nghiệm thật đã những năm tháng tuổi trẻ. Tận hưởng chuyến đi là việc của bạn, còn đặt biệt thự xịn sò cho cả nhóm thoải mái vui chơi đã có Traveloka lo!
                        
                        Từ tháng 7/ 2019, Traveloka ra mắt thêm dịch vụ đặt biệt thự trên ứng dụng du lịch “3 trong 1” giúp bạn tha hồ lựa chọn thêm nhiều loại hình lưu trú cho chuyến đi của mình. Bạn có thể dễ dàng đặt biệt thự trên website chính của Traveloka hoặc ứng dụng Traveloka (phiên bản từ 3.6 trở lên).
                        </div>
                    </div>    
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Chỉ với 1 chạm - chạm ngay tới căn biệt thự bạn hằng mong ước
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Với danh sách hàng ngàn biệt thự tuyệt vời đa dạng từ phong cách thiết kế ấn tượng và đầy đủ tiện nghi tới vị trí đắc địa thuận lời nằm ở trong và ngoài nước, việc đặt biệt thự trên Traveloka, từ các điểm du lịch HOT nhất cho đến những thành phố đậm chất địa phương, vô cùng nhanh chóng, tiện lợi và an toàn.  
                        
                        Để chọn ra biệt thự ưng ý, bạn chỉ cần đánh dấu vào các yêu cầu trong phần lọc tính năng, trong tích tắc, hàng hà các biệt thự đẹp phù hợp xuất hiện trên cùng giao diện cực thân thiện khiến bạn dễ dàng so sánh. Bạn chỉ cần xem hình ảnh, thông tin chi tiết, điều khoản sử dụng phòng cùng những đánh giá chân thật từ khách hàng đã trải nghiệm rồi đặt ngay biệt thự “hút hồn” bạn nhất. Chưa hết, chưa hết, nếu có yêu cầu gì đặc biệt thì bạn cứ việc ghi lại trong phần lưu ý, Traveloka sẽ gửi trực tiếp đến chủ nhà.
                        </div>
                    </div>    
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Thanh toán dễ dàng - an tâm
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Với Traveloka, yên tâm đặt biệt thự bạn thích và không cần quan tâm về giá. Không phí ẩn, giá cuối cùng là giá tốt nhất mà ưu đãi thường xuyên còn giúp bạn đặt được biệt thự với giá miễn chê. Thêm vào đó, thanh toán tại Traveloka cũng vô cùng đơn giản với 5 hình thức đa dạng: thẻ thanh toán quốc tế, ATM nội địa, chuyển khoản, thanh toán tại bưu điện và hệ thống cửa hàng có liên kết với Payoo. Để tránh rủi ro khi giao dịch trực tuyến, thông tin thẻ của khách hàng được mã hóa và quản lý bởi một trong những nhà cung cấp dịch vụ quản lý giao dịch thanh toán trực tuyến lớn nhất thế giới thuộc tổ chức thẻ VISA - CyberSource.
                        
                        Điều kiện cần cho một chuyến đi hứng khởi là tinh thần, điều kiện đủ là tìm được nơi lưu trú để có không gian thư giãn với nhau. Vậy còn chần chừ gì mà không đặt biệt thự cho chuyến du lịch nghỉ dưỡng trên Traveloka ngay bạn ơi!
                        </div>
                    </div>    
                </div>
            </div>
        )
            
    }
}

export default Explore;