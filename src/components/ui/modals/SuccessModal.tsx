import LinkButton from "../link-button/LinkButton";
import CheckedButton from "../../../assets/images/ckecked.svg";

const SuccessModal = () => {
  return (
    <div className="w-full h-[800px] absolute top-0 left-0 z-50 flex items-center justify-center">
      <div className="w-[565px] border bg-white border-[#C4C4C4] rounded-2xl h-[323px] flex flex-col gap-4 items-center justify-center">
        <img src={CheckedButton} alt="checked-button" />
        <p className="text-black font-semibold mb-3 text-lg text-center">
          Email verified successfully
        </p>
        <LinkButton
          className="flex items-center justify-center gap-5 py-[14px] px-10 rounded-lg text-sm font-bold bg-primary w-fit"
          href="/reset-password"
        >
          <p className="text-white">Done</p>
        </LinkButton>
      </div>
    </div>
  );
};

export default SuccessModal;
