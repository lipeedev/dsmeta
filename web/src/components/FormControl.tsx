import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormControlProps {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
}

export function FormControl({ date, setDate }: FormControlProps) {
    return (
        <div>
            <div className="mb-4 max-w-[300px]">
                <DatePicker
                    selected={date}
                    onChange={(date: Date) => setDate(date)}
                    className="w-full h-[46px] bg-[#1b2531] border border-[#384459] rounded-md text-[#9aaabe] pt-0 px-5 text-lg"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        </div>
    );
}