import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const SelectFilter = ({ label, options, value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] border-2 border-black bg-[#cbd5e1] text-xs rounded-none hover:scale-[1.03] hover:brightness-110 transition duration-200">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem className="text-xs font-mono" key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
