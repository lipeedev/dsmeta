export function SalesTableTHead() {
    return (
        <thead className="h-14 text-[#e9e9e9] font-bold">
            <tr>
                <th className="show992 hidden">ID</th>
                <th className="show576 hidden">Data</th>
                <th>Vendedor</th>
                <th className="show992 hidden">Visitas</th>
                <th className="show992 hidden">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
            </tr>
        </thead>
    );
}