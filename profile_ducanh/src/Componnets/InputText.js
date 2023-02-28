function InputText({ width = 50, label = "Ho va ten", placeholder }) {
  return (
    <div className={`w-[${width}%] flex flex-col gap-1`}>
      <p htmlFor="">{label}</p>
      <input
        type=""
        name=""
        value=""
        placeholder={placeholder}
        className="border-[#7E69D3] border-[1px] rounded-[4px] outline-none w-full px-2 h-[42px]"
      />
    </div>
  );
}

export default InputText;
