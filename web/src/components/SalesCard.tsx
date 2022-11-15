import { FormControl } from "./FormControl"
import { SalesTableTBody } from "./SalesTableTBody";
import { SalesTableTHead } from "./SalesTableTHead"

export function SalesCard() {
    return (
        <div className="bg-[#283142] rounded-lg pt-[30px] px-5 md:p-9">
            <h2 className="text-[#676fff] text-2xl mb-5">Vendas</h2>

            <FormControl />
            <FormControl />

            <div>
                <table className="w-full border-spacing-0 border-collapse">
                    <SalesTableTHead />
                    <SalesTableTBody />
                </table>
            </div>

        </div>
    );
}