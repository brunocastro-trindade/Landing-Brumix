import { useRef, useState } from "react";
import svgPaths from "./svg-paths";
import imgBrumixLogo1024X386Webp from "./brumix-logo.png";
import imgHero from "./hero.png";
import imgPagamentoImagePlaceholder from "./pagamento.png";
import imgObraParada from "./obra-parada.png";
import { useScrollAnimations } from "./useScrollAnimations";
type ComponentProps = {
  className?: string;
  variant?: "3" | "4" | "5" | "6" | "7" | "8" | "9" | "16";
};

function Component({ className, variant = "3" }: ComponentProps) {
  const is16 = variant === "16";
  const is3 = variant === "3";
  const is3Or5Or6 = ["3", "5", "6"].includes(variant);
  const is3Or6 = ["3", "6"].includes(variant);
  const is4 = variant === "4";
  const is5 = variant === "5";
  const is6 = variant === "6";
  const is7 = variant === "7";
  const is8 = variant === "8";
  const is9 = variant === "9";
  return (
    <div className={className || `overflow-clip relative ${is9 ? "size-[14px]" : ["7", "8", "16"].includes(variant) ? "size-[18px]" : "size-[78px]"}`}>
      {["3", "4", "5", "6", "8", "9", "16"].includes(variant) && (
        <div className={`absolute ${is16 ? "inset-[15.63%]" : is9 ? "inset-[8.33%_8.33%_12.5%_8.33%]" : is8 ? "inset-[4.16%_0_6.25%_8.33%]" : is6 ? "inset-[23.26%_14.6%_16.18%_28.25%]" : is5 ? "inset-[32.94%_13.16%_17.48%_11.57%]" : is4 ? "inset-[15.67%_19.32%_15.61%_19.34%]" : "inset-[53.74%_15.98%_16.63%_14.7%]"}`} data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height={is16 ? "12.375" : is9 ? "11.0833" : is8 ? "16.1258" : is6 ? "47.2381" : is5 ? "38.6731" : is4 ? "53.605" : "23.1123"} preserveAspectRatio="none" viewBox={is16 ? "0 0 12.375 12.375" : is9 ? "0 0 11.6667 11.0833" : is8 ? "0 0 16.4996 16.1258" : is6 ? "0 0 44.5804 47.2381" : is5 ? "0 0 58.7087 38.6731" : is4 ? "0 0 47.8478 53.605" : "0 0 54.0749 23.1123"} width={is16 ? "12.375" : is9 ? "11.6667" : is8 ? "16.4996" : is6 ? "44.5804" : is5 ? "58.7087" : is4 ? "47.8478" : "54.0749"}>
            <path d={is16 ? svgPaths.p18917c70 : is9 ? svgPaths.p37547f00 : is8 ? svgPaths.p10009d00 : is6 ? svgPaths.p2136c5f2 : is5 ? svgPaths.p2d239cf0 : is4 ? svgPaths.p1b8b8080 : svgPaths.p16423000} fill={is16 ? "#E40404" : is9 ? "#FBBC04" : is8 ? "#E8121F" : "#E1030C"} id="Vector" />
          </svg>
        </div>
      )}
      {["3", "4", "5", "6"].includes(variant) && (
        <div className={`absolute ${is6 ? "inset-[22.12%_29.99%_55.42%_35.68%]" : is5 ? "inset-[70.11%_22%_22.05%_62.55%]" : is4 ? "inset-[33.91%_50.91%_61.77%_48.16%]" : "inset-[67.93%_28.4%_23.15%_60.73%]"}`} data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "17.5116" : is5 ? "6.11942" : is4 ? "3.37469" : "6.95157"} preserveAspectRatio="none" viewBox={is6 ? "0 0 26.7765 17.5116" : is5 ? "0 0 12.0553 6.11942" : is4 ? "0 0 0.727638 3.37469" : "0 0 8.48091 6.95157"} width={is6 ? "26.7765" : is5 ? "12.0553" : is4 ? "0.727638" : "8.48091"}>
            <path d={is6 ? svgPaths.p371e0680 : is5 ? svgPaths.p7c95500 : is4 ? svgPaths.p157ad0f2 : svgPaths.p32459100} fill="#E1030C" fillOpacity={is4 ? "0.972549" : undefined} id="Vector" />
          </svg>
        </div>
      )}
      {is3Or5Or6 && (
        <>
          <div className={`absolute ${is6 ? "inset-[30%_71.75%_46.28%_14.55%]" : is5 ? "inset-[73.22%_44.32%_21.21%_50.1%]" : "inset-[20.2%_14.68%_49.25%_54.69%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "18.5013" : is5 ? "4.35129" : "23.8235"} preserveAspectRatio="none" viewBox={is6 ? "0 0 10.6874 18.5013" : is5 ? "0 0 4.35101 4.35129" : "0 0 23.8929 23.8235"} width={is6 ? "10.6874" : is5 ? "4.35101" : "23.8929"}>
              <path d={is6 ? svgPaths.p2f28bf00 : is5 ? svgPaths.p1b0bbb00 : svgPaths.p2c64da00} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[16.2%_35.63%_69.27%_41.3%]" : is5 ? "inset-[66.94%_44.33%_27.49%_50.1%]" : "inset-[38.23%_51.67%_26.67%_17.72%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "11.3306" : is5 ? "4.34518" : "27.376"} preserveAspectRatio="none" viewBox={is6 ? "0 0 17.9897 11.3306" : is5 ? "0 0 4.34504 4.34518" : "0 0 23.8731 27.376"} width={is6 ? "17.9897" : is5 ? "4.34504" : "23.8731"}>
              <path d={is6 ? svgPaths.p1376d000 : is5 ? svgPaths.p32c9bef0 : svgPaths.p34d24e00} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[17.89%_37.52%_71.07%_43.12%]" : is5 ? "inset-[60.34%_72.34%_32.05%_20.06%]" : "inset-[28.11%_46.23%_50.07%_15.89%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "8.60665" : is5 ? "5.93331" : "17.017"} preserveAspectRatio="none" viewBox={is6 ? "0 0 15.1021 8.60665" : is5 ? "0 0 5.93342 5.93331" : "0 0 29.5401 17.017"} width={is6 ? "15.1021" : is5 ? "5.93342" : "29.5401"}>
              <path d={is6 ? svgPaths.p2ace8200 : is5 ? svgPaths.p2d5f6080 : svgPaths.p20c83c80} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[41.91%_30.17%_43.24%_35.82%]" : is5 ? "inset-[16.08%_42.12%_68.51%_48.19%]" : "inset-[16.7%_59.43%_61.15%_21.41%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "11.5821" : is5 ? "12.02" : "17.2783"} preserveAspectRatio="none" viewBox={is6 ? "0 0 26.528 11.5821" : is5 ? "0 0 7.55481 12.02" : "0 0 14.945 17.2783"} width={is6 ? "26.528" : is5 ? "7.55481" : "14.945"}>
              <path d={is6 ? svgPaths.p73fdf00 : is5 ? svgPaths.p356b9200 : svgPaths.p2c6b3b80} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[69.12%_64.61%_16.21%_20.72%]" : is5 ? "inset-[19.19%_52.49%_68.52%_39.26%]" : "inset-[65.57%_67.39%_19.33%_19.93%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "11.4454" : is5 ? "9.58327" : "11.7791"} preserveAspectRatio="none" viewBox={is6 ? "0 0 11.4457 11.4454" : is5 ? "0 0 6.44051 9.58327" : "0 0 9.88827 11.7791"} width={is6 ? "11.4457" : is5 ? "6.44051" : "9.88827"}>
              <path d={is6 ? svgPaths.p9456000 : is5 ? svgPaths.p214aea00 : svgPaths.p2dbe9c00} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[72.8%_68.31%_19.88%_24.37%]" : is5 ? "inset-[19.19%_33.21%_68.53%_58.54%]" : "inset-[22.45%_74.43%_57.86%_15.93%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "5.70679" : is5 ? "9.5836" : "15.3573"} preserveAspectRatio="none" viewBox={is6 ? "0 0 5.70692 5.70679" : is5 ? "0 0 6.43919 9.5836" : "0 0 7.52114 15.3573"} width={is6 ? "5.70692" : is5 ? "6.43919" : "7.52114"}>
              <path d={is6 ? svgPaths.p2b135300 : is5 ? svgPaths.p3a1d5040 : svgPaths.p201e4c80} fill="#E1030C" id="Vector" />
            </svg>
          </div>
        </>
      )}
      {is3Or6 && (
        <>
          <div className={`absolute ${is6 ? "inset-[30.1%_28.12%_51.94%_33.85%]" : "inset-[17.48%_52.74%_69.34%_30.44%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "14.0131" : "10.2757"} preserveAspectRatio="none" viewBox={is6 ? "0 0 29.663 14.0131" : "0 0 13.114 10.2757"} width={is6 ? "29.663" : "13.114"}>
              <path d={is6 ? svgPaths.p16420ef0 : svgPaths.p2204200} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[53.77%_62.64%_40.96%_32.16%]" : "inset-[33.78%_36.2%_57.9%_55.48%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "4.11276" : "6.48843"} preserveAspectRatio="none" viewBox={is6 ? "0 0 4.05319 4.11276" : "0 0 6.48839 6.48843"} width={is6 ? "4.05319" : "6.48839"}>
              <path d={is6 ? svgPaths.peb79500 : svgPaths.p6342b00} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className={`absolute ${is6 ? "inset-[53.8%_26.38%_40.93%_68.42%]" : "inset-[42.13%_31.04%_39.99%_61.37%]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "4.11243" : "13.9456"} preserveAspectRatio="none" viewBox={is6 ? "0 0 4.05148 4.11243" : "0 0 5.92157 13.9456"} width={is6 ? "4.05148" : "5.92157"}>
              <path d={is6 ? svgPaths.p36eb3100 : svgPaths.p2803d200} fill="#E1030C" id="Vector" />
            </svg>
          </div>
        </>
      )}
      {is3 && (
        <>
          <div className="absolute inset-[42.1%_42.09%_39.99%_50.34%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="13.9686" preserveAspectRatio="none" viewBox="0 0 5.90908 13.9686" width="5.90908">
              <path d={svgPaths.p3e6fbf80} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[42.41%_31.6%_54.13%_65.4%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.69562" preserveAspectRatio="none" viewBox="0 0 2.34231 2.69562" width="2.34231">
              <path d={svgPaths.p1eb56c00} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[42.37%_46.06%_54.23%_51.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="2.65222" preserveAspectRatio="none" viewBox="0 0 2.03609 2.65222" width="2.03609">
              <path d={svgPaths.p331b6570} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[45.04%_39.05%_53.62%_58.28%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="1.04526" preserveAspectRatio="none" viewBox="0 0 2.08483 1.04526" width="2.08483">
              <path d={svgPaths.p15bd4ff2} fill="#E1030C" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[30.51%_39.82%_67.52%_59.12%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="1.53521" preserveAspectRatio="none" viewBox="0 0 0.832518 1.53521" width="0.832518">
              <path d={svgPaths.p1abb1280} fill="#E1030C" id="Vector" />
            </svg>
          </div>
        </>
      )}
      {is7 && (
        <>
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[20.83%_4.17%_12.47%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.0047" preserveAspectRatio="none" viewBox="0 0 16.5 12.0047" width="16.5">
              <path d={svgPaths.p1219fa00} fill="#E8121F" id="Vector" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function BrumixLogo1024X386Webp() {
  return (
    <div className="h-[52px] w-[138px] sm:h-[73.27px] sm:w-[194.39px] relative shrink-0" data-name="brumix-logo-1024x386.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgBrumixLogo1024X386Webp} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <a href="#top" aria-label="Brumix — início" className="bg-white flex items-center relative shrink-0 transition-opacity duration-200 hover:opacity-80" data-name="Frame">
      <BrumixLogo1024X386Webp />
    </a>
  );
}

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

function Frame1() {
  return (
    <nav className="[word-break:break-word] bg-white flex font-['Inter',sans-serif] font-medium gap-[36px] items-center leading-[normal] not-italic relative shrink-0 text-[#33383d] text-[15px] whitespace-nowrap" data-name="Frame">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative shrink-0 transition-colors duration-200 hover:text-[#d91b29] after:absolute after:bg-[#d91b29] after:bottom-[-6px] after:h-[2px] after:left-0 after:w-0 after:transition-[width] after:duration-200 hover:after:w-full"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

const TEL_HREF = "tel:+5547996834908";
const WHATSAPP_HREF = "https://api.whatsapp.com/send?phone=5547996834908&text=Tenho%20interesse%20em%20concreto%20usinado";

function Frame3() {
  return (
    <a
      href={TEL_HREF}
      className="[word-break:break-word] bg-white flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap group"
      data-name="Frame"
    >
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#12161a] text-[15px] transition-colors duration-200 group-hover:text-[#d91b29]">(47) 99683-4908</p>
      <p className="font-['Inter',sans-serif] font-normal relative shrink-0 text-[#9ea6ad] text-[11px]">Fale agora</p>
    </a>
  );
}

function Frame4() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#28af5a] flex items-center justify-center overflow-clip px-[22px] py-[12px] relative rounded-[999px] shrink-0 transition-all duration-200 hover:bg-[#229a4e] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(40,175,90,0.35)] active:translate-y-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Solicitar orçamento</p>
    </a>
  );
}

function Frame2() {
  return (
    <div className="bg-white flex gap-[20px] items-center relative shrink-0" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white relative shrink-0 sticky top-0 w-full z-50 shadow-[0_1px_0_rgba(18,22,26,0.08)]" data-name="Header">
      <div className="flex gap-4 items-center justify-between max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] py-3 md:py-[18px] relative w-full">
        <Frame />
        <div className="hidden lg:block">
          <Frame1 />
        </div>
        <div className="hidden lg:block">
          <Frame2 />
        </div>
        <div className="flex gap-3 items-center lg:hidden">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#28af5a] font-['Inter',sans-serif] font-semibold px-[16px] py-[9px] rounded-[999px] text-[13px] text-white whitespace-nowrap transition-colors duration-200 hover:bg-[#229a4e]"
          >
            Orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid place-items-center size-[40px] rounded-[10px] text-[#12161a] transition-colors duration-200 hover:bg-[#f1f2f3]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-[#eceef0] flex flex-col lg:hidden px-5 md:px-10 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#f2f3f4] font-['Inter',sans-serif] font-medium last:border-0 py-[14px] text-[#33383d] text-[15px] transition-colors duration-200 hover:text-[#d91b29]"
            >
              {link.label}
            </a>
          ))}
          <a href={TEL_HREF} className="font-['Inter',sans-serif] font-bold py-[14px] text-[#12161a] text-[15px]">
            (47) 99683-4908
          </a>
        </div>
      )}
    </header>
  );
}

function Frame6() {
  return (
    <div className="bg-[#d91b29] content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">CONCRETO SEM ATRASAR SUA OBRA</p>
    </div>
  );
}

function Frame8() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#28af5a] flex items-center justify-center overflow-clip px-[30px] py-[16px] relative rounded-[999px] shrink-0 w-full sm:w-auto transition-all duration-200 hover:bg-[#229a4e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(40,175,90,0.4)] active:translate-y-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Solicitar orçamento agora</p>
    </a>
  );
}

function Frame9() {
  return (
    <a href={TEL_HREF} className="group relative rounded-[999px] shrink-0 w-full sm:w-auto transition-all duration-200 hover:-translate-y-0.5" data-name="Frame">
      <div className="flex items-center justify-center sm:justify-start px-[30px] py-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">(47) 99683-4908</p>
      </div>
      <div aria-hidden className="absolute border-[#666b73] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999px] transition-colors duration-200 group-hover:border-white group-hover:bg-white/5" />
    </a>
  );
}

function Frame7() {
  return (
    <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-stretch sm:items-start relative shrink-0 w-full sm:w-auto" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <p data-count="10" className="font-['Inter',sans-serif] font-extrabold relative shrink-0 text-[32px] text-white whitespace-nowrap">10</p>
      <p className="font-['Inter',sans-serif] font-normal relative shrink-0 text-[#999ea6] text-[13px] w-[140px]">anos concretando obras</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <p data-count="8" className="font-['Inter',sans-serif] font-extrabold relative shrink-0 text-[32px] text-white whitespace-nowrap">8</p>
      <p className="font-['Inter',sans-serif] font-normal relative shrink-0 text-[#999ea6] text-[13px] w-[140px]">caminhões na frota</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Frame">
      <p data-count="4" className="font-['Inter',sans-serif] font-extrabold relative shrink-0 text-[32px] text-white whitespace-nowrap">4</p>
      <p className="font-['Inter',sans-serif] font-normal relative shrink-0 text-[#999ea6] text-[13px] w-[140px]">bombas prontas pra usar</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] flex flex-wrap gap-x-[32px] gap-y-[18px] sm:gap-[40px] items-start leading-[normal] not-italic pt-[20px] relative shrink-0" data-name="Frame">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div data-hero-content className="relative w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] py-20 md:py-24 lg:py-[120px]" data-name="Frame">
      <div className="flex flex-col gap-6 md:gap-[28px] items-start max-w-[640px]">
        <Frame6 />
        <h1 className="[word-break:break-word] font-['Inter',sans-serif] font-extrabold leading-[1.1] lg:leading-[60px] not-italic relative shrink-0 text-[32px] sm:text-[42px] lg:text-[52px] text-white">O concreto chega na hora. O pagamento cabe no seu bolso.</h1>
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26px] md:leading-[28px] not-italic relative shrink-0 text-[#bfc4c9] text-[16px] md:text-[18px] max-w-[560px]">Fuja do improviso: com frota própria e parcelamento facilitado, sua obra não fica esperando concreto chegar.</p>
        <Frame7 />
        <Frame10 />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex items-center min-h-[560px] md:min-h-[680px] lg:min-h-[820px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <img data-hero-img alt="Caminhão betoneira da Brumix descarregando concreto em obra" className="absolute inset-0 max-w-none object-cover object-[62%_center] pointer-events-none size-full scale-105" src={imgHero} />
      <div className="absolute bg-gradient-to-r from-[rgba(11,14,17,0.95)] inset-0 to-[rgba(11,14,17,0.35)] md:to-[rgba(11,14,17,0.15)] via-[55%] via-[rgba(11,14,17,0.8)]" data-name="Overlay escurecido (legibilidade do texto)" />
      <Frame5 />
    </div>
  );
}

function DiferencialItem({ children }: { children: string }) {
  return (
    <div className="flex gap-[8px] items-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)" />
        <path d="M7 12.5l3 3 7-7.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-white whitespace-nowrap">{children}</span>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] flex flex-col gap-[16px] items-start max-w-[620px] not-italic relative shrink-0" data-name="Frame">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[13px] text-white/80 tracking-[0.16em]">PREÇO SEM SURPRESA</p>
      <h2 className="font-['Inter',sans-serif] font-extrabold leading-[1.15] lg:leading-[44px] relative shrink-0 text-[26px] sm:text-[31px] lg:text-[37px] text-white">Preço justo, sem pegadinha no orçamento.</h2>
      <p className="font-['Inter',sans-serif] font-normal leading-[24px] max-w-[540px] relative shrink-0 text-[#ffd9d9] text-[16px]">Concreto de qualidade, aplicação inclusa e parcelas que cabem no seu caixa.</p>
      <div className="flex flex-wrap gap-x-[24px] gap-y-[10px] pt-[6px]">
        <DiferencialItem>Aplicação inclusa</DiferencialItem>
        <DiferencialItem>Parcelamos em até 10x</DiferencialItem>
        <DiferencialItem>Sem taxa escondida</DiferencialItem>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white flex gap-[10px] items-center px-[30px] py-[17px] relative rounded-[999px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.3)] active:translate-y-0"
      data-name="Frame"
    >
      <span className="font-['Inter',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-[#d91b29] whitespace-nowrap">Fale com a gente agora</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="#d91b29" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Diferenciais() {
  return (
    <div
      id="diferenciais"
      className="bg-gradient-to-br from-[#e0273a] overflow-clip relative scroll-mt-[88px] shrink-0 to-[#b3141f] via-[#d91b29] w-full"
      data-name="Diferenciais"
    >
      <div aria-hidden className="absolute bg-white/[0.06] pointer-events-none rounded-full size-[360px] -right-[90px] -top-[130px]" />
      <div aria-hidden className="absolute bg-black/[0.05] pointer-events-none rounded-full size-[320px] -bottom-[170px] -left-[110px]" />
      <div data-reveal className="flex flex-wrap gap-[40px] items-center justify-between max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] py-14 md:py-[72px] relative w-full">
        <Frame14 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 text-center" data-name="Frame">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#d91b29] text-[13px]">NOSSAS FRENTES DE TRABALHO</p>
      <h2 className="font-['Inter',sans-serif] font-extrabold relative shrink-0 text-[#12161a] text-[25px] sm:text-[30px] lg:text-[34px] text-center max-w-[520px]">Como ajudamos sua obra a andar</h2>
    </div>
  );
}

function Frame19() {
  return (
    <div className="overflow-clip relative shrink-0 size-[56px] transition-transform duration-200 group-hover:scale-110" data-name="Frame">
      <div className="absolute left-0 size-[56px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="56" preserveAspectRatio="none" viewBox="0 0 56 56" width="56">
          <circle cx="28" cy="28" fill="#D91B29" id="Ellipse" r="28" />
        </svg>
      </div>
      <div className="absolute left-[2px] overflow-clip size-[52px] top-[1.73px]" data-name="Component 2">
        <div className="absolute inset-[53.74%_15.98%_16.63%_14.7%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.4082" preserveAspectRatio="none" viewBox="0 0 36.05 15.4082" width="36.05">
            <path d={svgPaths.pba1c100} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[67.93%_28.4%_23.15%_60.73%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.63438" preserveAspectRatio="none" viewBox="0 0 5.65394 4.63438" width="5.65394">
            <path d={svgPaths.p1ff7a6c0} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[20.2%_14.68%_49.25%_54.69%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.8823" preserveAspectRatio="none" viewBox="0 0 15.9286 15.8823" width="15.9286">
            <path d={svgPaths.p1db47380} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[38.23%_51.67%_26.67%_17.72%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.2507" preserveAspectRatio="none" viewBox="0 0 15.9154 18.2507" width="15.9154">
            <path d={svgPaths.pd8ac000} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[28.11%_46.23%_50.07%_15.89%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.3447" preserveAspectRatio="none" viewBox="0 0 19.6934 11.3447" width="19.6934">
            <path d={svgPaths.pe003a40} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[16.7%_59.43%_61.15%_21.41%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.5189" preserveAspectRatio="none" viewBox="0 0 9.96332 11.5189" width="9.96332">
            <path d={svgPaths.pc353870} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[65.57%_67.39%_19.33%_19.93%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.85272" preserveAspectRatio="none" viewBox="0 0 6.59218 7.85272" width="6.59218">
            <path d={svgPaths.pa638f00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.45%_74.43%_57.86%_15.93%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.2382" preserveAspectRatio="none" viewBox="0 0 5.01409 10.2382" width="5.01409">
            <path d={svgPaths.p18132200} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.48%_52.74%_69.34%_30.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.85045" preserveAspectRatio="none" viewBox="0 0 8.74265 6.85045" width="8.74265">
            <path d={svgPaths.p16b12900} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[33.78%_36.2%_57.9%_55.48%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.32562" preserveAspectRatio="none" viewBox="0 0 4.32559 4.32562" width="4.32559">
            <path d={svgPaths.pc8b2880} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.13%_31.04%_39.99%_61.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.29707" preserveAspectRatio="none" viewBox="0 0 3.94772 9.29707" width="3.94772">
            <path d={svgPaths.p165db72} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.1%_42.09%_39.99%_50.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.31238" preserveAspectRatio="none" viewBox="0 0 3.93939 9.31238" width="3.93939">
            <path d={svgPaths.p355b9a80} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.41%_31.6%_54.13%_65.4%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.79708" preserveAspectRatio="none" viewBox="0 0 1.56154 1.79708" width="1.56154">
            <path d={svgPaths.p2c9d8000} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[42.37%_46.06%_54.23%_51.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.76814" preserveAspectRatio="none" viewBox="0 0 1.35739 1.76814" width="1.35739">
            <path d={svgPaths.p16491000} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.04%_39.05%_53.62%_58.28%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="0.696843" preserveAspectRatio="none" viewBox="0 0 1.38989 0.696843" width="1.38989">
            <path d={svgPaths.p102b1980} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[30.51%_39.82%_67.52%_59.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="1.02347" preserveAspectRatio="none" viewBox="0 0 0.555012 1.02347" width="0.555012">
            <path d={svgPaths.p2ab05700} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="group bg-[#f6f7f8] h-full relative rounded-[16px] shrink-0 w-full max-w-[300px] sm:w-[260px] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_44px_rgba(18,22,26,0.12)]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[28px] py-[36px] relative rounded-[inherit] size-full">
        <Frame19 />
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#12161a] text-[17px] text-center max-w-[204px]">Canteiro de obras</p>
      </div>
      <div aria-hidden className="absolute border border-[#eceef0] border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200 group-hover:border-[#f2c2c6]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="overflow-clip relative shrink-0 size-[56px] transition-transform duration-200 group-hover:scale-110" data-name="Frame">
      <div className="absolute left-0 size-[56px] top-[-0.27px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="56" preserveAspectRatio="none" viewBox="0 0 56 56" width="56">
          <circle cx="28" cy="28" fill="#D91B29" id="Ellipse" r="28" />
        </svg>
      </div>
      <div className="absolute left-[2px] overflow-clip size-[52px] top-[1.73px]" data-name="Component 2">
        <div className="absolute inset-[15.67%_19.32%_15.61%_19.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="35.7367" preserveAspectRatio="none" viewBox="0 0 31.8985 35.7367" width="31.8985">
            <path d={svgPaths.p1fad7300} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[33.91%_50.91%_61.77%_48.16%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.24979" preserveAspectRatio="none" viewBox="0 0 0.485092 2.24979" width="0.485092">
            <path d={svgPaths.p1ef66c00} fill="#E1030C" fillOpacity="0.972549" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="group bg-[#f6f7f8] h-full relative rounded-[16px] shrink-0 w-full max-w-[300px] sm:w-[260px] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_44px_rgba(18,22,26,0.12)]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[28px] py-[36px] relative rounded-[inherit] size-full">
        <Frame21 />
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#12161a] text-[17px] text-center max-w-[204px]">Projetos especiais</p>
      </div>
      <div aria-hidden className="absolute border border-[#eceef0] border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200 group-hover:border-[#f2c2c6]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="overflow-clip relative shrink-0 size-[56px] transition-transform duration-200 group-hover:scale-110" data-name="Frame">
      <div className="absolute left-0 size-[56px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="56" preserveAspectRatio="none" viewBox="0 0 56 56" width="56">
          <circle cx="28" cy="28" fill="#D91B29" id="Ellipse" r="28" />
        </svg>
      </div>
      <div className="absolute left-0 overflow-clip size-[52px] top-[-0.27px]" data-name="Component 2">
        <div className="absolute inset-[32.94%_13.16%_17.48%_11.57%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="25.7821" preserveAspectRatio="none" viewBox="0 0 39.1392 25.7821" width="39.1392">
            <path d={svgPaths.p5aadf00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[70.11%_22%_22.05%_62.55%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.07961" preserveAspectRatio="none" viewBox="0 0 8.03686 4.07961" width="8.03686">
            <path d={svgPaths.p3bd59100} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[73.22%_44.32%_21.21%_50.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.90086" preserveAspectRatio="none" viewBox="0 0 2.90068 2.90086" width="2.90068">
            <path d={svgPaths.p1cb42a00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[66.94%_44.33%_27.49%_50.1%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.89679" preserveAspectRatio="none" viewBox="0 0 2.89669 2.89679" width="2.89669">
            <path d={svgPaths.p105e1300} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[60.34%_72.34%_32.05%_20.06%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.95554" preserveAspectRatio="none" viewBox="0 0 3.95562 3.95554" width="3.95562">
            <path d={svgPaths.p9165600} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[16.08%_42.12%_68.51%_48.19%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.01334" preserveAspectRatio="none" viewBox="0 0 5.03654 8.01334" width="5.03654">
            <path d={svgPaths.p1b11a300} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[19.19%_52.49%_68.52%_39.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.38885" preserveAspectRatio="none" viewBox="0 0 4.29367 6.38885" width="4.29367">
            <path d={svgPaths.pe212e00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[19.19%_33.21%_68.53%_58.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.38907" preserveAspectRatio="none" viewBox="0 0 4.29279 6.38907" width="4.29279">
            <path d={svgPaths.p3b326800} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="group bg-[#f6f7f8] h-full relative rounded-[16px] shrink-0 w-full max-w-[300px] sm:w-[260px] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_44px_rgba(18,22,26,0.12)]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[28px] py-[36px] relative rounded-[inherit] size-full">
        <Frame23 />
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#12161a] text-[17px] text-center max-w-[204px]">Suporte técnico direto na obra</p>
      </div>
      <div aria-hidden className="absolute border border-[#eceef0] border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200 group-hover:border-[#f2c2c6]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="overflow-clip relative shrink-0 size-[56px] transition-transform duration-200 group-hover:scale-110" data-name="Frame">
      <div className="absolute left-0 size-[56px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="56" preserveAspectRatio="none" viewBox="0 0 56 56" width="56">
          <circle cx="28" cy="28" fill="#D91B29" id="Ellipse" r="28" />
        </svg>
      </div>
      <div className="absolute left-[2px] overflow-clip size-[52px] top-[1.73px]" data-name="Component 2">
        <div className="absolute inset-[23.26%_14.6%_16.18%_28.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="31.4921" preserveAspectRatio="none" viewBox="0 0 29.7203 31.4921" width="29.7203">
            <path d={svgPaths.p26b9200} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.12%_29.99%_55.42%_35.68%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6744" preserveAspectRatio="none" viewBox="0 0 17.851 11.6744" width="17.851">
            <path d={svgPaths.p37775100} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[30%_71.75%_46.28%_14.55%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.3342" preserveAspectRatio="none" viewBox="0 0 7.12495 12.3342" width="7.12495">
            <path d={svgPaths.p259d0f80} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[16.2%_35.63%_69.27%_41.3%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.55376" preserveAspectRatio="none" viewBox="0 0 11.9931 7.55376" width="11.9931">
            <path d={svgPaths.p167d4b80} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.89%_37.52%_71.07%_43.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="5.73777" preserveAspectRatio="none" viewBox="0 0 10.0681 5.73777" width="10.0681">
            <path d={svgPaths.p25533480} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[41.91%_30.17%_43.24%_35.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.72143" preserveAspectRatio="none" viewBox="0 0 17.6853 7.72143" width="17.6853">
            <path d={svgPaths.p212cd300} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[69.12%_64.61%_16.21%_20.72%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="7.63029" preserveAspectRatio="none" viewBox="0 0 7.63045 7.63029" width="7.63045">
            <path d={svgPaths.p3319fa00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[72.8%_68.31%_19.88%_24.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.80453" preserveAspectRatio="none" viewBox="0 0 3.80461 3.80453" width="3.80461">
            <path d={svgPaths.p235be200} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[30.1%_28.12%_51.94%_33.85%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.34208" preserveAspectRatio="none" viewBox="0 0 19.7753 9.34208" width="19.7753">
            <path d={svgPaths.p282a8d00} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[53.77%_62.64%_40.96%_32.16%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.74184" preserveAspectRatio="none" viewBox="0 0 2.70212 2.74184" width="2.70212">
            <path d={svgPaths.p2e9b4580} fill="white" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[53.8%_26.38%_40.93%_68.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.74162" preserveAspectRatio="none" viewBox="0 0 2.70099 2.74162" width="2.70099">
            <path d={svgPaths.p16009cf0} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="group bg-[#f6f7f8] h-full relative rounded-[16px] shrink-0 w-full max-w-[300px] sm:w-[260px] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_44px_rgba(18,22,26,0.12)]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[28px] py-[36px] relative rounded-[inherit] size-full">
        <Frame25 />
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#12161a] text-[17px] text-center max-w-[204px]">Bombeamento e espalhamento sob medida</p>
      </div>
      <div aria-hidden className="absolute border border-[#eceef0] border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200 group-hover:border-[#f2c2c6]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-stretch justify-items-center max-w-[1120px] w-full relative shrink-0" data-name="Frame">
      <Frame18 />
      <Frame20 />
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="bg-[#28af5a] flex items-center justify-center overflow-clip px-[30px] py-[16px] relative rounded-[999px] shrink-0 transition-all duration-200 hover:bg-[#229a4e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(40,175,90,0.4)] active:translate-y-0" data-name="Frame"><p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Peça seu orçamento sem compromisso</p></a>
  );
}

function Servicos() {
  return (
    <div id="servicos" className="bg-white relative scroll-mt-[120px] shrink-0 w-full" data-name="Serviços">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div data-reveal className="content-stretch flex flex-col gap-[56px] items-center px-5 md:px-10 lg:px-[100px] py-16 md:py-24 lg:py-[100px] relative size-full">
          <Frame16 />
          <Frame17 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Frame">
      <div className="absolute left-0 size-[28px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
          <circle cx="14" cy="14" fill="#28AF5A" id="Ellipse" r="14" />
        </svg>
      </div>
      <div className="absolute left-[5px] overflow-clip size-[18px] top-[5px]" data-name="Component 2">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[20.83%_4.17%_12.47%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.0047" preserveAspectRatio="none" viewBox="0 0 16.5 12.0047" width="16.5">
            <path d={svgPaths.p1219fa00} fill="#EEEEEE" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame29 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#12161a] text-[16px] max-w-[470px]">Parcelamos em até 10x no cartão para sua obra continuar rodando.</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Frame">
      <div className="absolute left-0 size-[28px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
          <circle cx="14" cy="14" fill="#28AF5A" id="Ellipse" r="14" />
        </svg>
      </div>
      <div className="absolute left-[5px] overflow-clip size-[18px] top-[5.23px]" data-name="Component 2">
        <div className="absolute inset-[4.16%_0_6.25%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.1258" preserveAspectRatio="none" viewBox="0 0 16.4996 16.1258" width="16.4996">
            <path d={svgPaths.p10009d00} fill="#F0F0F0" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame31 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#12161a] text-[16px] max-w-[470px]">Zero equipe parada, zero cronograma perdido.</p>
    </div>
  );
}

function Frame33() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="bg-[#28af5a] flex items-center justify-center overflow-clip px-[30px] py-[16px] relative rounded-[999px] shrink-0 transition-all duration-200 hover:bg-[#229a4e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(40,175,90,0.4)] active:translate-y-0" data-name="Frame"><p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Quero parcelar meu concreto</p></a>
  );
}

function Frame32() {
  return (
    <div className="flex items-start pt-[8px] relative shrink-0" data-name="Frame">
      <Frame33 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:max-w-[560px]" data-name="Frame">
      <h2 className="[word-break:break-word] font-['Inter',sans-serif] font-extrabold leading-[1.15] lg:leading-[40px] not-italic relative shrink-0 text-[#12161a] text-[25px] sm:text-[30px] lg:text-[34px] max-w-[540px]">Todo mestre de obra já passou por isso:</h2>
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4d5259] text-[17px] max-w-[500px]">Aqui, o cronograma da obra não depende do seu caixa estar cheio.</p>
      <Frame28 />
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function PagamentoImagePlaceholder() {
  return (
    <div className="group h-[260px] sm:h-[380px] lg:h-[480px] overflow-hidden relative rounded-[20px] lg:rounded-[24px] shadow-[0_30px_70px_rgba(18,22,26,0.18)] shrink-0 w-full lg:w-[600px]" data-name="Pagamento image placeholder">
      <img
        alt="Equipe da Brumix trabalhando na concretagem de uma obra"
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-[600ms] ease-out group-hover:scale-105"
        src={imgPagamentoImagePlaceholder}
      />
    </div>
  );
}

function PagamentoFacilitado() {
  return (
    <div className="bg-[#f6f7f8] relative shrink-0 w-full" data-name="Pagamento Facilitado">
      <div className="flex flex-row items-center rounded-[inherit] size-full">
        <div data-reveal className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start lg:items-center max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] py-16 md:py-24 lg:py-[100px] relative w-full">
          <Frame27 />
          <PagamentoImagePlaceholder />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-center" data-name="Frame">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[#d91b29] text-[13px]">AVALIAÇÕES REAIS</p>
      <h2 className="font-['Inter',sans-serif] font-extrabold relative shrink-0 text-[25px] sm:text-[30px] lg:text-[34px] text-white">A satisfação de quem já construiu com a gente</h2>
    </div>
  );
}

function GoogleGLogo() {
  return (
    <svg className="block shrink-0" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" data-name="Google">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleStars() {
  return (
    <div className="flex gap-[1px] items-center" data-name="Rating" aria-label="5 de 5 estrelas">
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="9" />
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="9" />
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="9" />
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="9" />
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="9" />
    </div>
  );
}

function GoogleReview({ initial, name, text }: { initial: string; name: string; text: string }) {
  return (
    <div
      className="bg-white flex flex-col gap-[12px] h-full p-[24px] relative rounded-[8px] shadow-[0_1px_2px_0_rgba(60,64,67,0.10),0_2px_6px_2px_rgba(60,64,67,0.08)] shrink-0 w-full max-w-[340px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.20)]"
      data-name="Google review"
    >
      <div className="flex gap-[12px] items-center relative shrink-0">
        <div className="bg-[#d91b29] flex items-center justify-center rounded-full shrink-0 size-[40px]">
          <span className="font-['Inter',sans-serif] font-semibold leading-none text-[17px] text-white">{initial}</span>
        </div>
        <div className="flex flex-col grow min-w-0">
          <p className="font-['Inter',sans-serif] font-medium leading-[20px] text-[#202124] text-[14px]">{name}</p>
          <p className="font-['Inter',sans-serif] font-normal leading-[16px] text-[#5f6368] text-[12px]">Avaliação no Google</p>
        </div>
        <GoogleGLogo />
      </div>
      <GoogleStars />
      <p className="font-['Inter',sans-serif] font-normal leading-[21px] text-[#3c4043] text-[14px]">{text}</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] items-stretch justify-items-center max-w-[1092px] w-full relative shrink-0" data-name="Frame">
      <GoogleReview
        initial="R"
        name="Renato Machado"
        text="Muito bom trabalhar com esta empresa. Desde os vendedores até os seus colaboradores, todos bem instruídos para fazer o melhor serviço."
      />
      <GoogleReview initial="J" name="Jéssica Albuquerque" text="Excelente atendimento e competência!" />
      <GoogleReview initial="E" name="Edson Pereira" text="Excelente atendimento, e trabalho muito bem executado." />
    </div>
  );
}


function Depoimentos() {
  return (
    <div id="depoimentos" className="bg-[#12161a] relative scroll-mt-[120px] shrink-0 w-full" data-name="Depoimentos">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div data-reveal className="content-stretch flex flex-col gap-[56px] items-center px-5 md:px-10 lg:px-[100px] py-16 md:py-24 lg:py-[100px] relative size-full">
          <Frame34 />
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function SpanElementorIconListIcon() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[3px] pr-[4.5px] size-[18px] top-[calc(50%-0.27px)]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Component 2">
        <div className="absolute inset-[15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.375" preserveAspectRatio="none" viewBox="0 0 12.375 12.375" width="12.375">
            <path d={svgPaths.p18917c70} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <div className="absolute left-0 size-[24px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#D91B29" id="Ellipse" r="12" />
        </svg>
      </div>
      <SpanElementorIconListIcon />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame51 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e5e5e8] text-[16px] max-w-[420px]">Time de braços cruzados esperando o caminhão</p>
    </div>
  );
}

function SpanElementorIconListIcon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[3px] pr-[4.5px] size-[18px] top-[calc(50%-0.27px)]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Component 2">
        <div className="absolute inset-[15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.375" preserveAspectRatio="none" viewBox="0 0 12.375 12.375" width="12.375">
            <path d={svgPaths.p18917c70} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <div className="absolute left-0 size-[24px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#D91B29" id="Ellipse" r="12" />
        </svg>
      </div>
      <SpanElementorIconListIcon1 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame53 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e5e5e8] text-[16px] max-w-[420px]">Prazo da obra comprometido</p>
    </div>
  );
}

function SpanElementorIconListIcon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[3px] pr-[4.5px] size-[18px] top-[calc(50%-0.27px)]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Component 2">
        <div className="absolute inset-[15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.375" preserveAspectRatio="none" viewBox="0 0 12.375 12.375" width="12.375">
            <path d={svgPaths.p18917c70} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <div className="absolute left-0 size-[24px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#D91B29" id="Ellipse" r="12" />
        </svg>
      </div>
      <SpanElementorIconListIcon2 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame55 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e5e5e8] text-[16px] max-w-[420px]">Cliente cobrando satisfações</p>
    </div>
  );
}

function SpanElementorIconListIcon3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[3px] pr-[4.5px] size-[18px] top-[calc(50%-0.27px)]" data-name="span.elementor-icon-list-icon">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Component 2">
        <div className="absolute inset-[15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.375" preserveAspectRatio="none" viewBox="0 0 12.375 12.375" width="12.375">
            <path d={svgPaths.p18917c70} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <div className="absolute left-0 size-[24px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" fill="#D91B29" id="Ellipse" r="12" />
        </svg>
      </div>
      <SpanElementorIconListIcon3 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <Frame57 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e5e5e8] text-[16px] max-w-[420px]">Cada hora parada tem um custo real</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip pt-[8px] relative shrink-0" data-name="Frame">
      <Frame50 />
      <Frame52 />
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function ObraChip({ children }: { children: string }) {
  return (
    <div className="bg-white/[0.08] border border-white/15 flex gap-[7px] items-center px-[13px] py-[7px] rounded-full">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M5 13l4 4L19 7" stroke="#3ec77a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] text-white whitespace-nowrap">{children}</span>
    </div>
  );
}

function Frame58() {
  return (
    <div className="flex flex-wrap gap-[10px] items-start pt-[2px] relative shrink-0" data-name="Frame">
      <ObraChip>Parcelamento sem burocracia</ObraChip>
      <ObraChip>Acompanhamento em tempo real</ObraChip>
      <ObraChip>Pontualidade garantida</ObraChip>
    </div>
  );
}

function Frame62() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="bg-[#28af5a] flex items-center justify-center overflow-clip px-[30px] py-[16px] relative rounded-[999px] shrink-0 transition-all duration-200 hover:bg-[#229a4e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(40,175,90,0.4)] active:translate-y-0" data-name="Frame"><p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Quero evitar prejuízo na minha obra</p></a>
  );
}

function Frame48() {
  return (
    <div
      data-reveal
      className="[word-break:break-word] backdrop-blur-[3px] bg-[rgba(11,14,17,0.52)] border border-white/10 flex flex-col gap-5 lg:gap-[22px] items-start max-w-[588px] p-6 sm:p-8 lg:p-[44px] relative rounded-[24px] lg:rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.4)] shrink-0 w-full"
      data-name="Frame"
    >
      <h2 className="flex flex-col gap-[6px]">
        <span className="font-['Inter',sans-serif] font-extrabold leading-[1.15] lg:leading-[40px] not-italic relative shrink-0 text-[25px] sm:text-[29px] lg:text-[33px] text-white">Hora parada no canteiro não é imprevisto.</span>
        <span className="font-['Inter',sans-serif] font-extrabold leading-[1.15] lg:leading-[40px] not-italic relative shrink-0 text-[#ff4d58] text-[25px] sm:text-[29px] lg:text-[33px]">É prejuízo saindo direto do seu bolso.</span>
      </h2>
      <Frame49 />
      <p className="font-['Inter',sans-serif] font-normal leading-[25px] not-italic relative shrink-0 text-[#c9ced4] text-[16px]">Com a Brumix, o concreto chega no dia e horário combinados — sua equipe segue produtiva, sem esperar e sem perder ritmo de obra.</p>
      <Frame58 />
      <Frame62 />
    </div>
  );
}

function ObraParada() {
  return (
    <div
      id="atendimento"
      className="flex items-center min-h-[600px] lg:min-h-[720px] overflow-clip py-16 lg:py-0 relative scroll-mt-[120px] shrink-0 w-full"
      data-name="Obra Parada"
    >
      <img
        alt="Caminhão betoneira da Brumix pronto para a entrega — evite a obra parada"
        className="absolute inset-0 max-w-none object-cover object-[62%_58%] pointer-events-none size-full"
        src={imgObraParada}
      />
      <div aria-hidden className="absolute bg-gradient-to-r from-[rgba(11,14,17,0.88)] md:from-[rgba(11,14,17,0.8)] inset-0 to-[rgba(11,14,17,0.35)] md:to-transparent via-[42%] via-[rgba(11,14,17,0.35)] md:via-[rgba(11,14,17,0.28)]" data-name="Overlay" />
      <div aria-hidden className="absolute bg-gradient-to-t bottom-0 from-[rgba(11,14,17,0.6)] inset-x-0 pointer-events-none to-transparent h-[220px]" data-name="Vinheta inferior" />
      <div aria-hidden className="absolute bg-gradient-to-b from-[rgba(11,14,17,0.82)] inset-x-0 pointer-events-none to-transparent top-0 h-[88px]" data-name="Costura superior" />
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] relative w-full">
        <Frame48 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center not-italic overflow-clip relative shrink-0 text-center" data-name="Frame">
      <h2 className="font-['Inter',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[24px] sm:text-[28px] lg:text-[32px] text-white">Cobrindo toda a região do litoral norte catarinense</h2>
      <p className="font-['Inter',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ffe0e0] text-[16px] max-w-[620px]">De Penha às cidades vizinhas, levamos concreto com agilidade e parcelamento facilitado até a sua obra.</p>
    </div>
  );
}

function CityPill({ name }: { name: string }) {
  return (
    <div
      className="group bg-white/0 cursor-default relative rounded-[999px] shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
      data-name="Frame"
    >
      <div className="flex items-start px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white transition-colors duration-200 group-hover:text-[#d91b29] whitespace-nowrap">
          {name}
        </p>
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

const CIDADES = ["Penha", "Navegantes", "Itajaí", "Balneário Piçarras", "Barra Velha", "Ilhota"];

function Frame64() {
  return (
    <div className="flex flex-wrap gap-[12px] items-start justify-center max-w-[760px] relative shrink-0" data-name="Frame">
      {CIDADES.map((c) => (
        <CityPill key={c} name={c} />
      ))}
    </div>
  );
}

function Frame71() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#12161a] flex items-center justify-center overflow-clip px-[30px] py-[16px] relative rounded-[999px] shrink-0 transition-all duration-200 hover:bg-[#1f262e] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)] active:translate-y-0"
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Ver se atendemos sua cidade</p>
    </a>
  );
}

function CoberturaGeografica() {
  return (
    <div className="bg-[#d91b29] relative shrink-0 w-full" data-name="Cobertura Geográfica">
      <div className="flex flex-col items-center rounded-[inherit] size-full">
        <div data-reveal className="flex flex-col gap-[36px] items-center max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] py-16 md:py-20 lg:py-[90px] relative w-full">
          <Frame63 />
          <Frame64 />
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function BrumixLogo1024X386Webp1() {
  return (
    <div className="h-[52px] w-[138px] sm:h-[73.27px] sm:w-[194.39px] relative shrink-0" data-name="brumix-logo-1024x386.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgBrumixLogo1024X386Webp} />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Frame">
      <BrumixLogo1024X386Webp1 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[380px]" data-name="Frame">
      <Frame74 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#9499a1] text-[14px] max-w-[360px]">Concretamos obras no litoral catarinense há 10 anos, com frota própria, agilidade na entrega e o compromisso de nunca deixar sua equipe esperando.</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_0_81)" id="Frame">
          <circle cx="4" cy="4" fill="#28AF5A" id="Ellipse" r="4" />
        </g>
        <defs>
          <clipPath id="clip0_0_81">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <a href={TEL_HREF} className="flex gap-[10px] items-center relative shrink-0 group" data-name="Frame">
      <Frame77 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15px] text-white transition-colors duration-200 group-hover:text-[#28af5a] whitespace-nowrap">(47) 99683-4908</p>
    </a>
  );
}

function Frame75() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[300px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contatos</p>
      <Frame76 />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#9499a1] text-[14px] max-w-[280px]">Rod. Paulo Stuart Wright, 1285 – Nossa Sra. de Fátima, Penha – SC, 88385-000</p>
    </div>
  );
}

const BRUMIX_ENDERECO = "Rod. Paulo Stuart Wright, 1285 - Nossa Sra. de Fátima, Penha - SC, 88385-000";

function MapPinIcon() {
  return (
    <svg className="block shrink-0" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function Frame79() {
  const query = encodeURIComponent(BRUMIX_ENDERECO);
  return (
    <div className="bg-[#1d2227] overflow-clip relative rounded-[12px] shrink-0 w-full sm:w-[320px]" data-name="Mapa Brumix">
      <div className="bg-[#d91b29] content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative shrink-0 text-white">
        <MapPinIcon />
        <p className="font-['Inter',sans-serif] font-semibold leading-[16px] not-italic text-[12px]">Penha · Santa Catarina</p>
      </div>
      <iframe
        title="Mapa da Brumix Concreto em Penha, SC"
        src={`https://www.google.com/maps?q=${query}&z=17&output=embed`}
        className="block border-0 h-[220px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#28af5a] block font-['Inter',sans-serif] font-semibold leading-[normal] not-italic py-[11px] relative shrink-0 text-[13px] text-center text-white"
      >
        Como chegar
      </a>
      <div aria-hidden className="absolute border border-[#d91b29] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:w-[320px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Localização</p>
      <Frame79 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div data-reveal className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start lg:justify-between max-w-[1440px] mx-auto pb-12 md:pb-16 lg:pb-[60px] pt-14 md:pt-20 lg:pt-[80px] px-5 md:px-10 lg:px-[100px] relative w-full">
          <Frame73 />
          <Frame75 />
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#1d2227] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="flex items-center justify-center px-5 md:px-10 lg:px-[100px] py-[24px] relative size-full">
          <p className="font-['Inter',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#9499a1] text-[12px] sm:text-[13px] text-center">© 2026 Brumix — Todos os direitos reservados&nbsp;&nbsp;|&nbsp;&nbsp;Desenvolvido por Sekoia Marketing</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="contato" className="bg-[#12161a] flex flex-col items-start overflow-clip relative scroll-mt-[120px] shrink-0 w-full" data-name="Footer">
      <Frame72 />
      <Frame80 />
    </div>
  );
}

/**
 * Costura entre seções: uma faixa fina cuja cor no topo é igual ao fim da
 * seção anterior e no rodapé é igual ao início da seção seguinte, então a
 * troca de cor acontece em ~64px em vez de uma borda dura. Fica em fluxo
 * normal e `w-full`, então acompanha qualquer largura de tela.
 */
function SectionSeam({ className }: { className: string }) {
  return <div aria-hidden className={`h-[64px] pointer-events-none shrink-0 w-full ${className}`} data-name="Costura entre seções" />;
}

export default function BrumixLanding() {
  const root = useRef<HTMLDivElement>(null);
  useScrollAnimations(root);

  return (
    <div ref={root} id="top" className="bg-white flex flex-col items-stretch relative size-full" data-name="BRUMIX — Nova Versão (Redesign)">
      <div data-progress className="bg-[#d91b29] fixed left-0 origin-left pointer-events-none scale-x-0 top-0 h-[3px] w-full z-[60]" aria-hidden />
      <Header />
      <Hero />
      <Diferenciais />
      <Servicos />
      <PagamentoFacilitado />
      <Depoimentos />
      <SectionSeam className="bg-gradient-to-b from-[#12161a] to-[#0b0e11]" />
      <ObraParada />
      <CoberturaGeografica />
      <Footer />
    </div>
  );
}