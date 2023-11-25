import { createColumnHelper,
        flexRender,
        getCoreRowModel,
        getPaginationRowModel,
        useReactTable, } 
        from "@tanstack/react-table";
import { useEffect, useState } from "react";
import host from "../api";


const TanStackTable = ({token, user, setUser}) =>{
    const [contData, setcontData] = useState([])
    useEffect(() => {
        fetch(host + "/contacts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
            }).then((data) => data.json()).then((data) => {setcontData(data);console.log(data)})
            .catch((err) => console.log(err));
    }, [token]);

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor("",{
            id: "Serial No.",
            cell: (info)=> <span>{info.row.index+1}</span>,
            header: "Serial No."
        }),
        columnHelper.accessor("profile", {
            cell: (info) => (
                <img
                src={info?.getValue()}
                alt="..."
                className="rounded-full w-10 h-10 object-cover"
                />
            ),
            header: "Profile",
        }),

        columnHelper.accessor("contact_name",{
            cell: (info)=> <span>{user.name}</span>,
            header: 'Name'
        }),
        
        columnHelper.accessor("contact_phone",{
            cell: (info) => <span>{user.phone}</span>,
            header: 'Phone Number'
        }),
        
       

    ]
    const [data] = useState(()=> [user])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        
       
        <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">

            <table className=" w-full text-left">
                <thead className="bg-primaryColor">
                    {
                    table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                        {
                        headerGroup.headers.map((header) => (
                            <th key={header.id} className="capitalize px-3.5 py-2">
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            
                            )}
                            </th>
                        ))}
                        </tr>
                    ))
                    }
                </thead>
                <tbody>
                    {
                    table.getRowModel().rows.length 
                        ? (table.getRowModel().rows.map((row,i)=>(
                            <tr key = {row.id} className = {`
                             ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                            `}>
                                {
                                row.getVisibleCells().map((cell)=>(
                                    <td key={cell.id}  className="px-3.5 py-2">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        
                                        )}
                                    </td>
                                ))
                                }

                            </tr>
                        ))
                    ) : null
                    }
                </tbody>
                    
                
            </table>

            {/* pagination */}
            {/* <div className="flex items-center justify-end mt-2 gap-2">
                <button 
                    onClick = {()=> {
                        table.previousPage();
                    }}
                    disabled = {!table.getCanPreviousPage()}
                    className="p-1 border border-gray-300 px-2 disabled:opacity-30 text-black">
                        {"<"}

                </button>
                <button 
                    onClick = {()=> {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="p-1 border border-gray-300 px-2 disabled:opacity-30 text-black">
                        {">"}
                </button>

                <span className="flex items-center gap-1">
                    <div className="text-black">Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>

                
                
            </div> */}
        </div>

    )


}

export default TanStackTable;