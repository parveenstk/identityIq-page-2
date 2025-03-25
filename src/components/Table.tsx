import { tableData } from "../data/helper";

function Table() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center py-4">IdentityIQ vs. Others</h1>

            <table className="table-auto border-collapse w-full">
                <tbody className="block bg-[#fafafa] px-[5px] sm:px-[20px] pt-[10px] sm:pt-[60px] pb-[8px] sm:pb-[30px]">
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="flex border-b font-semibold text-[9px] sm:text-base">
                            {row.map((data, colIndex) => (
                                typeof (data) === 'string' ? (
                                    <td key={colIndex} className={`p-1 sm:p-3 w-1/3 flex items-center ${colIndex > 0 ? 'justify-center' : 'justify-start'} ${colIndex === 1 && 'bg-[#fff]'}`}>
                                        {data}
                                    </td>
                                ) : (
                                    <td key={colIndex} className={`sm:p-3 p-0.5 w-1/3 flex flex-col justify-center ${colIndex > 0 ? 'items-center' : 'items-start'} ${colIndex === 1 && 'bg-[#fff]'}`}>
                                        {data.img && (
                                            <img src={data.img.path} alt={data.img.path} className={data.img.style} />
                                        )}
                                    </td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;
