import logoDSMeta from '../assets/logo.svg';

export function Heading() {
    return (
        <header className="flex h-56 items-center justify-center bg-gradient-to-b from-[#102347] to-[#181818]">
            <div className="flex flex-col items-center">
                <img src={logoDSMeta} alt="DSMeta" className="w-60"/>
                <h1 className="text-2xl font-bold mt-4 ">DSMeta</h1>

                <p className="text-sm font-light text-gray-300">
                    Desenvolvido por <a href="https://github.com/1Leep">@Leep</a>
                </p>
            </div>
        </header>
    );
}