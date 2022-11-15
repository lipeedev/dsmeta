export function SalesTableTHead() {
    return (
        <thead className="h-14 text-[#e9e9e9] font-bold">
            <tr>
                <th className="show992 hidden lg:table-cell">ID</th>
                <th className="show576 hidden md:table-cell ">Data</th>
                <th>Vendedor</th>
                <th className="show992 hidden lg:table-cell">Visitas</th>
                <th className="show992 hidden lg:table-cell">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
            </tr>
        </thead>
    );
}