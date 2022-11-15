import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function FormControl() {
    return (
        <div>
            <div className="mb-4 max-w-[300px]">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="w-full h-[46px] bg-[#1b2531] border border-[#384459] rounded-md text-[#9aaabe] pt-0 px-5 text-lg"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        </div>
    );
}