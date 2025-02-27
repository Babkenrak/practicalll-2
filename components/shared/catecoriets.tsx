import {cn} from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface Props {
    className?: string;
}

{/*<ChevronDown>*/}
const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
{/*</ChevronDown>*/}

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ clasName }) => {
    return (
        <div className={cn('inline-flex gap-1' bg-gray-50 p-1 rounded 2x1, clasName)}></div>
    )
}