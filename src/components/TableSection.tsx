import * as React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const TableSection = () => {
    return (
        <div className='flex flex-1 flex-col p-4 max-width-50 h-full'>
            <Table>
                <TableCaption>A list of admins and their roles in Thelicham.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Admins</TableHead>
                        <TableHead>Roles</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Ajnan</TableCell>
                        <TableCell>Chief</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default TableSection
