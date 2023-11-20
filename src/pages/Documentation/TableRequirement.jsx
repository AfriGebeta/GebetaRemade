import React from "react";


const TableRequirement = ({tabledata}) => {


    return (
        <div className="max-w-screen-xl ">
           
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Paramter</th>
                            <th className="py-3 px-6">Description</th>
                   
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tabledata.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                        
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default TableRequirement