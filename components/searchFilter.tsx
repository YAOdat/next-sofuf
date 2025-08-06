import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@heroui/react";
import {CiFilter} from "react-icons/ci";

interface SearchFilterProps {
    careers: string[];
    industries: string[];
    dates: string[];
    countries: string[];
    cities: string[];
    onFilter: (filters: {
        career: string;
        industry: string;
        date: string;
        country: string;
        city: string;
    }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
    careers,
    industries,
    dates,
    countries,
    cities,
    onFilter,
}) => {
    const [selectedFilters, setSelectedFilters] = useState({
        career: '',
        industry: '',
        date: '',
        country: '',
        city: '',
    });

    const handleFilterChange = (filterName: string, value: string) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const handleApplyFilter = () => {
        onFilter(selectedFilters);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <CiFilter  onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>Filter</ModalHeader>
                    <ModalBody>
                        <select
                            value={selectedFilters.career}
                            onChange={(e) => handleFilterChange('career', e.target.value)}
                        >
                            <option value="">Select Career</option>
                            {careers.map((career) => (
                                <option key={career} value={career}>
                                    {career}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedFilters.industry}
                            onChange={(e) => handleFilterChange('industry', e.target.value)}
                        >
                            <option value="">Select Industry</option>
                            {industries.map((industry) => (
                                <option key={industry} value={industry}>
                                    {industry}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedFilters.date}
                            onChange={(e) => handleFilterChange('date', e.target.value)}
                        >
                            <option value="">Select Date</option>
                            {dates.map((date) => (
                                <option key={date} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedFilters.country}
                            onChange={(e) => handleFilterChange('country', e.target.value)}
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedFilters.city}
                            onChange={(e) => handleFilterChange('city', e.target.value)}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleApplyFilter}>Apply Filter</Button>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default SearchFilter;
