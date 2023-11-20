import React from "react";


const TableResponse = ({tabledata}) =>{


    return (
        <div className="max-w-screen-xl  ">
           
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">name</th>
                            <th className="py-3 px-6">message</th>
                            <th className="py-3 px-6">description</th>
                    
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tabledata.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
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

export default TableResponse