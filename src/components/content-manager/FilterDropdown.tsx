import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  { value: "all", label: "Alle Kategorien" },
  { value: "vegetarian", label: "Vegetarisch" },
  { value: "vegan", label: "Vegan" },
  { value: "meat", label: "Fleisch" },
  { value: "fish", label: "Fisch" },
  { value: "dessert", label: "Dessert" },
  { value: "thermomix", label: "Thermomix" },
  { value: "quick", label: "Quick & Easy" },
  { value: "healthy", label: "Gesund" },
  { value: "lowcarb", label: "Low Carb" },
];

export function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Nach Kategorie filtern" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}