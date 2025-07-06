'use client';
import React, { useState, useEffect } from 'react';
import { 
  Input, 
  Select, 
  SelectItem, 
  Button, 
  Card,
  Chip
} from "@nextui-org/react";
import { FiMapPin, FiHexagon, FiX, FiFilter } from "react-icons/fi";
import { PiLaptopThin } from "react-icons/pi";
import { useTheme } from "next-themes";
import { useRef } from 'react';
import Link from "next/link";

interface CareersSearchProps {
  onSearch: (searchTerm: string, locationFilter: string, industryFilter: string) => void;
  industries: string[];
}

const CareersSearchComponent: React.FC<CareersSearchProps> = ({
  onSearch,
  industries
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  // Main cities for UAE, Saudi Arabia, Jordan
  const cityOptions = [
    // UAE
    "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain", "Khor Fakkan",
    // Saudi Arabia
    "Riyadh", "Jeddah", "Dammam", "Khobar", "Mecca",
    // Jordan
    "Amman", "Zarqa", "Irbid"
  ];
  const { theme } = useTheme();

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm, locationFilter, industryFilter);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, locationFilter, industryFilter, onSearch]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setIndustryFilter('');
  };

  const hasActiveFilters = searchTerm || locationFilter || industryFilter;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 bg-white dark:bg-[#212121] border border-gray-200 dark:border-neutral-700/30 rounded-xl shadow-md px-3 py-2 w-full">
      <Input
        placeholder="Search jobs, companies, or keywords..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        startContent={<PiLaptopThin className="h-5 w-5 text-gray-400" />}
        size="sm"
        classNames={{
          input: "text-xs sm:text-sm",
          inputWrapper: "bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-neutral-700/30 rounded-md"
        }}
        isClearable
        onClear={() => setSearchTerm('')}
        className="mb-2 sm:mb-0 sm:mr-2 flex-1 min-w-[160px] max-w-[240px]"
      />
      <Select
        placeholder="City"
        selectedKeys={locationFilter ? [locationFilter] : []}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          setLocationFilter(selectedKey || '');
        }}
        startContent={<FiMapPin className="h-4 w-4 text-gray-400" />}
        classNames={{
          trigger: "bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-neutral-700/30 rounded-md"
        }}
        size="sm"
        className="min-w-[120px] sm:mr-2"
        aria-label="City"
      >
        {cityOptions.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </Select>
      <Select
        placeholder="Industry"
        selectedKeys={industryFilter ? [industryFilter] : []}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          setIndustryFilter(selectedKey || '');
        }}
        startContent={<FiHexagon className="h-4 w-4 text-gray-400" />}
        classNames={{
          trigger: "bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-neutral-700/30 rounded-md"
        }}
        size="sm"
        className="min-w-[120px] sm:mr-2"
        aria-label="Industry"
      >
        {industries.map((industry) => (
          <SelectItem key={industry} value={industry}>
            {industry}
          </SelectItem>
        ))}
      </Select>
      <Button
        variant="light"
        color="danger"
        onClick={handleClearFilters}
        startContent={<FiX className="h-4 w-4" />}
        size="sm"
        className="sm:mr-2"
      >
        Clear
      </Button>
      <Link href="/careers/add" className="ml-2">
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg px-4 py-2 shadow hover:from-blue-700 hover:to-purple-700 transition-all"
          size="sm"
        >
          Add Job
        </Button>
      </Link>
    </div>
  );
};

export default CareersSearchComponent;