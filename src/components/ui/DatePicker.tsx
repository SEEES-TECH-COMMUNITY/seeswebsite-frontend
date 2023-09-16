"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@utils/function"
import { Button } from "@components/ui/shadn-button/button"
import { Calendar } from "@components/ui/calendar/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@components/ui/popover/popover"
interface IDatePickerProps {
    className?: string
    placeholder?: string
}
export default function DatePicker({ className, placeholder }: IDatePickerProps) {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(`text-bold h-fit w-full items-center justify-start rounded-lg border-2 border-transparent bg-grey-600 py-3 pl-10 pr-12 font-sans text-xs text-blue-placeholder-600 placeholder-blue-placeholder-600 placeholder-opacity-70 transition-colors duration-300 ease-in focus:border-blue-500 focus:outline-none focus:ring-blue-500 data-true:border-red-500/75`, className)}
                >
                    {date ? format(date, "PPP") : <span className="text-blue-placeholder-600 text-opacity-70 font-normal">{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
