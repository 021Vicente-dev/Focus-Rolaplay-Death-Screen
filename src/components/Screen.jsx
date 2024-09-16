import { useState } from "react";
import Timer from "./Timer";

export const Screen = () => {
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleTimeUp = () => {
    setIsTimeUp(true); // Ativa a pulsação quando o tempo acabar
  };

  return (
    <div>
      <div className="fixed flex justify-center items-center h-[100vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="667"
          height="341"
          viewBox="0 0 702 341"
          fill="none"
        >
          <path
            d="M702 184.519C702 188.937 698.418 192.519 694 192.519C689.582 192.519 686 188.937 686 184.519C686 180.101 689.582 176.519 694 176.519C698.418 176.519 702 180.101 702 184.519ZM457.209 184.519V186.019H455.98L455.739 184.814L457.209 184.519ZM438.471 91.0602L437 90.7633L439.941 90.7653L438.471 91.0602ZM388.216 340L389.687 340.297L386.723 340.139L388.216 340ZM356.701 1L355.218 0.772904L358.195 0.861151L356.701 1ZM328.593 184.519L330.076 184.746L329.881 186.019H328.593V184.519ZM-22 184.519C-22 188.937 -25.5817 192.519 -30 192.519C-34.4183 192.519 -38 188.937 -38 184.519C-38 180.101 -34.4183 176.519 -30 176.519C-25.5817 176.519 -22 180.101 -22 184.519ZM694 186.019H457.209V183.019H694V186.019ZM455.739 184.814L437 91.355L439.941 90.7653L458.68 184.224L455.739 184.814ZM439.941 91.357L389.687 340.297L386.746 339.703L437 90.7633L439.941 91.357ZM386.723 340.139L355.208 1.13885L358.195 0.861151L389.71 339.861L386.723 340.139ZM358.184 1.2271L330.076 184.746L327.11 184.292L355.218 0.772904L358.184 1.2271ZM328.593 186.019H-30V183.019H328.593V186.019Z"
            fill="url(#paint0_linear_469_374)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_469_374"
              x1="-30"
              y1="170.5"
              x2="694"
              y2="170.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#460017" />
              <stop offset="0.555" stopColor="#FF0053" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="fixed right-0 flex justify-center h-[100vh] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="663"
          height="343"
          viewBox="0 0 699 343"
          fill="none"
        >
          <path
            d="M0 185.602C0 190.02 3.58172 193.602 8 193.602C12.4183 193.602 16 190.02 16 185.602C16 181.183 12.4183 177.602 8 177.602C3.58172 177.602 0 181.183 0 185.602ZM244.791 185.602V187.102H246.021L246.262 185.895L244.791 185.602ZM263.529 91.5915L265 91.2963L262.058 91.2983L263.529 91.5915ZM313.784 342L312.313 342.295L315.277 342.138L313.784 342ZM345.299 1L346.782 0.774206L343.805 0.861958L345.299 1ZM373.407 185.602L371.924 185.827L372.118 187.102H373.407V185.602ZM724 185.602C724 190.02 727.582 193.602 732 193.602C736.418 193.602 740 190.02 740 185.602C740 181.183 736.418 177.602 732 177.602C727.582 177.602 724 181.183 724 185.602ZM8 187.102H244.791V184.102H8V187.102ZM246.262 185.895L265 91.8847L262.058 91.2983L243.32 185.308L246.262 185.895ZM262.059 91.8866L312.313 342.295L315.254 341.705L265 91.2963L262.059 91.8866ZM315.277 342.138L346.792 1.13804L343.805 0.861958L312.29 341.862L315.277 342.138ZM343.816 1.22579L371.924 185.827L374.89 185.376L346.782 0.774206L343.816 1.22579ZM373.407 187.102H732V184.102H373.407V187.102Z"
            fill="url(#paint0_linear_469_373)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_469_373"
              x1="732"
              y1="171.5"
              x2="8"
              y2="171.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#460017" />
              <stop offset="0.555" stopColor="#FF0053" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="h-screen bg-custom-gradient flex flex-col items-center justify-around pt-20">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="135"
            viewBox="0 0 131 131"
            fill="none"
          >
              <path
                d="M35.0781 45.2188C32.2443 45.2188 29.4741 46.0591 27.1178 47.6335C24.7616 49.2079 22.9251 51.4456 21.8407 54.0637C20.7562 56.6819 20.4725 59.5628 21.0253 62.3422C21.5782 65.1215 22.9428 67.6746 24.9466 69.6784C26.9504 71.6822 29.5035 73.0468 32.2828 73.5997C35.0622 74.1525 37.9431 73.8688 40.5613 72.7843C43.1794 71.6999 45.4171 69.8634 46.9915 67.5072C48.5659 65.1509 49.4062 62.3807 49.4062 59.5469C49.4062 55.7468 47.8967 52.1024 45.2096 49.4154C42.5226 46.7283 38.8782 45.2188 35.0781 45.2188ZM35.0781 65.6875C33.8636 65.6875 32.6764 65.3274 31.6666 64.6526C30.6568 63.9779 29.8697 63.0188 29.4049 61.8968C28.9402 60.7747 28.8186 59.5401 29.0555 58.3489C29.2924 57.1577 29.8773 56.0636 30.736 55.2048C31.5948 54.346 32.689 53.7612 33.8801 53.5242C35.0713 53.2873 36.306 53.4089 37.428 53.8737C38.5501 54.3384 39.5091 55.1255 40.1839 56.1353C40.8586 57.1451 41.2188 58.3324 41.2188 59.5469C41.2188 61.1755 40.5718 62.7374 39.4202 63.889C38.2686 65.0405 36.7067 65.6875 35.0781 65.6875ZM71.9219 45.2188C69.088 45.2188 66.3178 46.0591 63.9616 47.6335C61.6053 49.2079 59.7689 51.4456 58.6844 54.0637C57.6 56.6819 57.3162 59.5628 57.8691 62.3422C58.4219 65.1215 59.7865 67.6746 61.7904 69.6784C63.7942 71.6822 66.3472 73.0468 69.1266 73.5997C71.906 74.1525 74.7869 73.8688 77.405 72.7843C80.0231 71.6999 82.2609 69.8634 83.8353 67.5072C85.4097 65.1509 86.25 62.3807 86.25 59.5469C86.25 55.7468 84.7404 52.1024 82.0534 49.4154C79.3663 46.7283 75.7219 45.2188 71.9219 45.2188ZM71.9219 65.6875C70.7074 65.6875 69.5201 65.3274 68.5103 64.6526C67.5005 63.9779 66.7134 63.0188 66.2487 61.8968C65.7839 60.7747 65.6623 59.5401 65.8992 58.3489C66.1362 57.1577 66.721 56.0636 67.5798 55.2048C68.4386 54.346 69.5327 53.7612 70.7239 53.5242C71.9151 53.2873 73.1497 53.4089 74.2718 53.8737C75.3938 54.3384 76.3529 55.1255 77.0276 56.1353C77.7024 57.1451 78.0625 58.3324 78.0625 59.5469C78.0625 61.1755 77.4155 62.7374 76.2639 63.889C75.1124 65.0405 73.5505 65.6875 71.9219 65.6875ZM53.5 0.1875C24.1529 0.1875 0.28125 23.1432 0.28125 51.3594C0.28125 68.809 9.63035 85.1328 24.8438 94.487V102.531C24.8438 104.703 25.7064 106.785 27.2418 108.321C28.7773 109.856 30.8598 110.719 33.0312 110.719H73.9688C76.1402 110.719 78.2227 109.856 79.7582 108.321C81.2936 106.785 82.1562 104.703 82.1562 102.531V94.487C97.3697 85.1328 106.719 68.809 106.719 51.3594C106.719 23.1432 82.8471 0.1875 53.5 0.1875ZM76.077 88.5562C75.4378 88.9107 74.9052 89.4299 74.5345 90.0598C74.1637 90.6897 73.9684 91.4073 73.9688 92.1382V102.531H65.7812V90.25C65.7812 89.1643 65.3499 88.123 64.5822 87.3553C63.8145 86.5876 62.7732 86.1562 61.6875 86.1562C60.6018 86.1562 59.5605 86.5876 58.7928 87.3553C58.0251 88.123 57.5938 89.1643 57.5938 90.25V102.531H49.4062V90.25C49.4062 89.1643 48.9749 88.123 48.2072 87.3553C47.4395 86.5876 46.3982 86.1562 45.3125 86.1562C44.2268 86.1562 43.1855 86.5876 42.4178 87.3553C41.6501 88.123 41.2188 89.1643 41.2188 90.25V102.531H33.0312V92.1382C33.0316 91.4073 32.8363 90.6897 32.4655 90.0598C32.0948 89.4299 31.5622 88.9107 30.923 88.5562C17.0707 80.8804 8.46875 66.6291 8.46875 51.3594C8.46875 27.6566 28.6714 8.375 53.5 8.375C78.3286 8.375 98.5312 27.6566 98.5312 51.3594C98.5312 66.6239 89.9293 80.8804 76.077 88.5562Z"
                fill="#FF0053"
              />
            </svg>
        </div>
        <div className="flex justify-center flex-col items-center h-[100vh] ">
          <h1 className="text-white font-sora-bold text-[30px] text-center -mb-6 -mt-24">
            VOCÊ ESTÁ
          </h1>
          <h1 className="text-white text-[100px] font-sora-bold ">MORTO</h1>
          <Timer onTimeUp={handleTimeUp} />
        </div>
        {/* Exibir o botão somente se o tempo tiver acabado */}
        {isTimeUp && (
          <div
            className={`flex items-center gap-5 ml-2 border border-[#FF0053] p-2 rounded-[20px] -mt-[8.5rem] mb-16 `}
          >
            <div
              className={`w-[48px] h-[50px] text-center items-center flex justify-center rounded-lg bg-[#FF0053] animate-pulse-custom`}
            >
              <h1 className="text-white font-sora-bold text-[30px]">E</h1>
            </div>
            <p className="w-[130px] text-white font-sora-bold text-[18px]">
              Aperte a letra para reviver
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
