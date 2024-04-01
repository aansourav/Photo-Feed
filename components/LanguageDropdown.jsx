import Image from "next/image";

const LanguageDropdown = () => {
    return (
        <div className="relative">
            <button className="flex items-center gap-2">
                <Image
                    className="max-w-8"
                    src="/assets/images/bd.png"
                    alt="bangla"
                    width={20}
                    height={20}
                />
                Bangla
            </button>

            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image
                        className="max-w-8"
                        src="/assets/images/bd.png"
                        alt="bangla"
                        width={20}
                        height={20}
                    />
                    Bangla
                </li>
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image
                        className="max-w-8"
                        src="/assets/images/usa.png"
                        alt="usa"
                        width={20}
                        height={20}
                    />
                    English
                </li>
            </div>
        </div>
    );
};

export default LanguageDropdown;
