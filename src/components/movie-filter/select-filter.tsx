import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  placeholder: string;
  data: { value: number | string; label: string }[];
  setValue: Dispatch<SetStateAction<string>>;
  defaultValue?: string;
}

export default function SelectFilter(props: IProps) {
  const { data, placeholder, setValue, defaultValue } = props;
  return (
    <Select defaultValue={defaultValue} onValueChange={setValue}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.map((item, inx: number) => (
            <SelectItem key={inx} value={String(item.value)}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
