import avatar from "../asset/avatar.png";
import icon1 from "../asset/Strategy&Direction.png";
import icon2 from "../asset/Branding&Logo.png";
import icon3 from "../asset/UI&UX Design.png";
import icon4 from "../asset/WebflowDevelopment.png";
import pj1 from "../asset/331423911_880414686502622_5153539820094693987_n.png";
import pj2 from "../asset/330734330_554092509994286_578515081432232794_n.png";
import pj3 from "../asset/331107409_684533910120354_1732132783218607621_n.png";
import fb from "../asset/Facebook.png";
import ig from "../asset/Vector (1).png";
import tw from "../asset/Vector (2).png";
import vecto from "../asset/Vector (3).png";
import linked from "../asset/Vector.png";
import InputText from "./InputText";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="text-sm h-[60px] flex justify-center bg-white items-center relative">
        <div className="p-3 hover:text-[#5E3BEE] cursor-pointer">Home</div>
        <div className="p-3 hover:text-[#5E3BEE] cursor-pointer">Profolio</div>
        <div className="p-3 hover:text-[#5E3BEE] cursor-pointer">About Me</div>
        <div className="p-3 hover:text-[#5E3BEE] cursor-pointer">
          Contact Me
        </div>
      </div>
      <div className="absolute h-[70px] bg-gradient-to-b from-[#807f7f12] w-full"></div>
      <div className="px-[50px] h-[900px] bg-[#F5FCFF] flex items-center w-full">
        <div className=" flex w-full">
          <div className="text-[15px] font-semibold w-[50%] flex flex-col gap-2">
            <p>Chào mọi người</p>
            <p className="text-[70px]">
              CHÀO MỪNG MỌI NGƯỜI ĐẾN VỚI
              <span className="mx-4 text-[#5E3BEE]">TRANG CÁ NHÂN</span>
              CỦA TÔI
            </p>
            <button className="animate-bounce h-[60px] w-[180px] bg-[#5E3BEE] flex justify-center items-center text-white rounded-lg text-xl font-medium">
              LIÊN HỆ
            </button>
          </div>
          <div className="text-[15px] font-semibold w-[50%] relative">
            <div className="bg-[#CBE0EB] h-full rounded-[30px]"></div>
            <div className="absolute bottom-0 w-full flex justify-center h-[120%]">
              <img src={avatar} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex bg-white "
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        <div className="w-1/3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha">
              <path
                fill="#5E3BEE"
                d="M45.2,-70.2C57,-62.7,64,-47.6,70.5,-32.5C77,-17.3,83,-2.3,78.2,9.2C73.3,20.7,57.7,28.5,47.4,41.9C37.1,55.4,32.3,74.4,21.9,79.8C11.6,85.2,-4.3,77,-19.4,70.6C-34.5,64.1,-48.8,59.4,-60.9,50.1C-73,40.9,-82.9,27.1,-85.1,12.2C-87.2,-2.7,-81.5,-18.7,-72.6,-31.1C-63.8,-43.6,-51.6,-52.5,-39,-59.6C-26.3,-66.7,-13.2,-72,1.8,-74.7C16.7,-77.4,33.4,-77.7,45.2,-70.2Z"
                transform="translate(100 100)"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                fill="#5E3BEE"
                d="M45.2,-70.2C57,-62.7,64,-47.6,70.5,-32.5C77,-17.3,83,-2.3,78.2,9.2C73.3,20.7,57.7,28.5,47.4,41.9C37.1,55.4,32.3,74.4,21.9,79.8C11.6,85.2,-4.3,77,-19.4,70.6C-34.5,64.1,-48.8,59.4,-60.9,50.1C-73,40.9,-82.9,27.1,-85.1,12.2C-87.2,-2.7,-81.5,-18.7,-72.6,-31.1C-63.8,-43.6,-51.6,-52.5,-39,-59.6C-26.3,-66.7,-13.2,-72,1.8,-74.7C16.7,-77.4,33.4,-77.7,45.2,-70.2Z"
                transform="translate(100 100)"
              />
              <image xlinkHref={avatar} className="w-[120px] " x="35" y="40" />
            </g>
          </svg>
        </div>
        <div className="w-2/3 p-5 flex items-center">
          <div className="w-3/4 m-auto p-9 bg-[#F5FCFF] shadow-lg rounded-3xl">
            <p className="text-[12px]">About</p>
            <p className="text-[35px] font-medium">Giới Thiệu</p>
            <div className="flex gap-2 flex-col text-xl ">
              <div className="flex ml-10">
                <p className="w-1/3">Họ và tên : </p>
                <p className="font-medium">Nguyễn Đức Anh</p>
              </div>
              <div className="flex ml-10">
                <p className="w-1/3">Mã sinh viên : </p>
                <p className="font-medium w-1/2">B20DCVT024</p>
              </div>
              <div className="flex ml-10">
                <p className="w-1/3">Ngành : </p>
                <p className="font-medium">Điện tử viễn thông</p>
              </div>
              <div className="flex ml-10">
                <p className="w-1/3">Lớp : </p>
                <p className="font-medium">D20CQVT08-B</p>
              </div>
              <div className="flex ml-10">
                <p className="w-1/3"> Cố vấn học tập :</p>
                <p className="font-medium">Nguyễn Trọng Trung Anh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skill */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="h-[500px] px-[50px] relative bg-[#eaf4f9]"
      >
        <svg
          viewBox="100 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          height="400"
          className="absolute z-10 left-0"
        >
          <path
            fill="#FF0066"
            d="M61.3,-38.5C67,-25.5,50.6,-2.8,36.7,19.4C22.8,41.6,11.4,63.4,-4.3,65.9C-20.1,68.4,-40.2,51.6,-53.7,29.7C-67.1,7.7,-73.9,-19.4,-63.8,-35C-53.8,-50.6,-26.9,-54.6,0.4,-54.8C27.8,-55.1,55.5,-51.6,61.3,-38.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute z-20 pr-[50px]">
          <div className="pt-[100px]">
            <p className="text-[12px]">My Skills</p>
            <p className="text-[35px] font-medium">Kỹ năng của tôi</p>
          </div>
          <div className="flex justify-between pb-[100px]">
            <div className="w-1/5  bg-[#F5FCFF] shadow-lg pb-4 rounded-md">
              <div className="h-[80px] ">
                <img src={icon1} alt="" className="h-full" />
              </div>
              <div className="px-4">
                <b>Tư duy logic</b>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis animi incidunt nemo, quam cupiditate quis vero sunt.
                  Et incidunt culpa veniam odit deserunt perferendis
                </p>
              </div>
            </div>
            <div className="w-1/5  bg-[#F5FCFF] shadow-lg pb-4 rounded-md">
              <div className="h-[80px]">
                <img src={icon2} alt="" className="h-full" />
              </div>
              <div className="px-4">
                <b>Thiết kế & sử dụng Figma</b>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis animi incidunt nemo, quam cupiditate quis vero sunt.
                  Et incidunt culpa veniam odit deserunt perferendis
                </p>
              </div>
            </div>
            <div className="w-1/5  bg-[#F5FCFF] shadow-lg pb-4 rounded-md">
              <div className="h-[80px]">
                <img src={icon3} alt="" className="h-full" />
              </div>
              <div className="px-4">
                <b>Tư duy logic</b>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis animi incidunt nemo, quam cupiditate quis vero sunt.
                  Et incidunt culpa veniam odit deserunt perferendis
                </p>
              </div>
            </div>
            <div className="w-1/5  bg-[#F5FCFF] shadow-lg pb-4 rounded-md">
              <div className="h-[80px]">
                <img src={icon4} alt="" className="h-full" />
              </div>
              <div className="px-4">
                <b>Tư duy logic</b>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis animi incidunt nemo, quam cupiditate quis vero sunt.
                  Et incidunt culpa veniam odit deserunt perferendis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profolio */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="h-[800px] px-[50px] relative bg-white"
      >
        <div className="">
          <div className="py-[100px]">
            <p className="text-[12px]">Dự án gần đây</p>
            <p className="text-[35px] font-medium">Profolio</p>
          </div>
          <div className="flex justify-between pb-[100px] gap-3">
            <div className="w-1/3 bg-[#F5FCFF] shadow-lg rounded-md ">
              <div className=" h-[300px] rounded-xl ">
                <img
                  src={pj1}
                  alt=""
                  className="w-full object-center h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 ">
                <p className="mb-2 font-bold text-[18px]">MỘT KHOẢNG KHẮC</p>
                <p className="text-[14px]">
                  Trang web khám phá những danh lam cảnh đẹp của Việt Nam
                </p>
                <div className="mt-2 font-[500] text-[14px] cursor-pointer hover:bg-[#5E3BEE] hover:text-white flex items-center gap-2 border-b-2 border-[#5E3BEE] w-fit rounded-[3px] px-3">
                  <p>Xem trên Github</p>
                  <img src={vecto} alt="" className="h-[12px]" />
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-[#F5FCFF] shadow-lg rounded-md ">
              <div className=" h-[300px] rounded-xl ">
                <img
                  src={pj2}
                  alt=""
                  className="w-full object-center h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 ">
                <p className="mb-2 font-bold text-[18px]">
                  TRANG THƯƠNG MẠI ĐIỆN TỬ
                </p>
                <p className="text-[14px]">
                  Trang thương mại điện tử buôn bán đa dạng nhiều mặt hàng
                </p>
                <div className="mt-2 font-[500] text-[14px] cursor-pointer hover:bg-[#5E3BEE] hover:text-white flex items-center gap-2 border-b-2 border-[#5E3BEE] w-fit rounded-[3px] px-3">
                  <p>Xem trên Github</p>
                  <img src={vecto} alt="" className="h-[12px]" />
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-[#F5FCFF] shadow-lg rounded-md ">
              <div className=" h-[300px] rounded-xl ">
                <img
                  src={pj3}
                  alt=""
                  className="w-full object-center h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 ">
                <p className="mb-2 font-bold text-[18px]">SHOP QUẦN ÁO</p>
                <p className="text-[14px]">
                  Trang web bán những món đồ thời trang
                </p>
                <div className="mt-2 font-[500] text-[14px] cursor-pointer hover:bg-[#5E3BEE] hover:text-white flex items-center gap-2 border-b-2 border-[#5E3BEE] w-fit rounded-[3px] px-3">
                  <p>Xem trên Github</p>
                  <img src={vecto} alt="" className="h-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
        className=" bg-white flex justify-center py-[100px] w-full"
      >
        <div className="w-[60%]  flex flex-col gap-3">
          <div className="text-center">
            <p>Get in Touch</p>
            <p className="font-semibold text-[30px]">LIÊN HỆ VỚI TÔI</p>
            <p className="text-gray-400">
              Vui lòng nhập đủ các trường thông tin dưới đây
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <InputText
                width="50"
                label="Tên và tên đệm"
                placeholder="Văn A"
              />
              <InputText width="50" label="Họ" placeholder="Nguyễn " />
            </div>
            <div className="flex gap-2">
              <InputText width="50" label="Email" />
              <InputText width="50" label="Số điện thoại" />
            </div>
            <p>Lời nhắn</p>
            <textarea
              rows="5"
              className="outline-none border-[#7E69D3] border-[1px] rounded-[4px] px-2"
            ></textarea>
            <button className="h-[50px] w-[180px] bg-[#5E3BEE] flex justify-center items-center text-white rounded-lg text-xl font-medium">
              LIÊN HỆ
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700"
        className="bg-[#F5FCFF] h-[300px] p-[50px]"
      >
        <div className="flex justify-center gap-10  pb-[50px] mb-[50px] border-b-2 relative">
          <div className="hover:text-[#5E3BEE] cursor-pointer">Home</div>
          <div className="hover:text-[#5E3BEE] cursor-pointer">Profolio</div>
          <div className="hover:text-[#5E3BEE] cursor-pointer">About Me</div>
          <div className="hover:text-[#5E3BEE] cursor-pointer">Contact Me</div>
          <div className="absolute right-0 flex gap-4 h-[25px]">
            <div className="h-full">
              <img src={fb} alt="" className="h-full object-contain" />
            </div>
            <div className="">
              <img src={ig} alt="" />
            </div>
            <div className="">
              <img src={tw} alt="" />
            </div>
            <div className="">
              <img src={linked} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Made by Ducanh 💖</span>
          <div className="flex gap-3">
            <span className="hover:text-[#5E3BEE] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#5E3BEE] cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#5E3BEE] cursor-pointer">
              Cookies Settings
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
