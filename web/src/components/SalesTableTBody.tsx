import { NotificationButton } from "./NotificationButton";

export function SalesTableTBody() {
    return (
        <tbody className="text-sm font-normal text-center text-[#cfcfcf] md:text-lg">
            <tr className="h-[74px] border-t border-t-[#5f6e82] md:h-14">
                <td className="show992 hidden hover:bg-[#384459] lg:table-cell">#341</td>
                <td className="show576 hidden hover:bg-[#384459] md:table-cell">08/07/2022</td>
                <td className="hover:bg-[#384459]">Anakin</td>
                <td className="show992 hidden hover:bg-[#384459] lg:table-cell">15</td>
                <td className="show992 hidden hover:bg-[#384459] lg:table-cell">11</td>
                <td className="hover:bg-[#384459]">R$ 55300.00</td>

                <td className="flex justify-center items-center mt-3 md:mt-1">
                    <NotificationButton />
                </td>
            </tr>

        </tbody>
    );
}