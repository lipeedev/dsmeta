import { useState } from "react";
import { FormControl } from "./FormControl"
import { SalesTableTBody } from "./SalesTableTBody";
import { SalesTableTHead } from "./SalesTableTHead"

export function SalesCard() {

    const ONE_YEAR_IN_MILISSECONDS = 31536e6;

    const [minDate, setMinDate] = useState(new Date(Date.now() - ONE_YEAR_IN_MILISSECONDS));
    const [maxDate, setMaxDate] = useState(new Date());

    return (
        <div className="bg-[#283142] rounded-lg pt-[30px] px-5 md:p-9">
            <h2 className="text-[#676fff] text-2xl mb-5">Vendas</h2>

            <FormControl date={minDate} setDate={setMinDate} />
            <FormControl date={maxDate} setDate={setMaxDate}/>

            <div>
                <table className="w-full border-spacing-0 border-collapse">
                    <SalesTableTHead />
                    <SalesTableTBody />
                </table>
            </div>

        </div>
    );
}