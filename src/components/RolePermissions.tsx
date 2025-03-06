import * as React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function RolePermissions() {
  const [selectAll, setSelectAll] = useState(false);
  const [categories, setCategories] = useState({
    Finance: { selectAll: false, permissions: { permission1: false, permission2: false } },
    Voucher: { selectAll: false, permissions: { permission3: false, permission4: false } },
    Broucher: { selectAll: false, permissions: { permission3: false, permission4: false } },
  });

  const handleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    setCategories((prev) => {
      const updatedCategories: typeof categories = {} as typeof categories;
      Object.keys(prev).forEach((category) => {
        updatedCategories[category] = {
          selectAll: newState,
          permissions: Object.keys(prev[category].permissions).reduce((acc, key) => {
            acc[key] = newState;
            return acc;
          }, {}),
        };
      });
      return updatedCategories;
    });
  };

  const handleCategorySelectAll = (category) => {
    setCategories((prev) => {
      const newState = !prev[category].selectAll;
      return {
        ...prev,
        [category]: {
          selectAll: newState,
          permissions: Object.keys(prev[category].permissions).reduce((acc, key) => {
            acc[key] = newState;
            return acc;
          }, {}),
        },
      };
    });
  };

  const handlePermissionChange = (category, key) => {
    setCategories((prev) => {
      const newPermissions = {
        ...prev[category].permissions,
        [key]: !prev[category].permissions[key],
      };
      const allSelected = Object.values(newPermissions).every(Boolean);
      return {
        ...prev,
        [category]: { selectAll: allSelected, permissions: newPermissions },
      };
    });
  };

  return (
    <div className="p-6">
      <Input placeholder="Role Name" className="text-3xl font-bold" />
      <Input placeholder="Role Description" className="text-gray-600 mt-2" />
      
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-semibold">Role Permissions</h2>
        <label className="ml-2 flex items-center">
          <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
          <span className="ml-2">Select All</span>
        </label>
      </div>

      {Object.entries(categories).map(([category, data]) => (
        <Card key={category} className="bg-gray-200 p-4 mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)} Management</h3>
            <label className="ml-2 flex items-center">
              <Checkbox checked={data.selectAll} onCheckedChange={() => handleCategorySelectAll(category)} />
              <span className="ml-2">Select All</span>
            </label>
          </div>
          <CardContent className="flex gap-4 mt-4">
            {Object.entries(data.permissions).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <Checkbox id={key} checked={value} onCheckedChange={() => handlePermissionChange(category, key)} />
                <label htmlFor={key} className="text-gray-700">{key.replace("permission", "Permission ")}</label>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
