type CompanyDropdownProps = {
  companyOpen: boolean;
};

const CompanyDropdownDesktop = ({ companyOpen }: CompanyDropdownProps) => {
  return (
    companyOpen && (
      <div className="absolute left-[305px] top-[70px] rounded-xl bg-white px-[26px] py-5 shadow-[0_0_35px_-12px_#696969]">
        <div className="flex flex-col  gap-[12px]   ">
          <p className="cursor-pointer tracking-[0.015em] hover:font-semibold text-[14px] font-[400]">
            History
          </p>
          <p className="cursor-pointer tracking-[0.015em] hover:font-semibold text-[14px] font-[400]">
            Our Team
          </p>
          <p className="cursor-pointer tracking-[0.015em] hover:font-semibold text-[14px] font-[400]">
            Blog
          </p>
        </div>
      </div>
    )
  );
};

export default CompanyDropdownDesktop;
