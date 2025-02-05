import React from 'react'

const CustomInput = ({
    variant,
    type,
    label,

}) => {
    return (
        <div className="border rounded-lg shadow flex items-center  w-[400px] lg:w-[400px] md:w-[400px]">
            <p className="px-3 py-3  min-w-[150px] text-sm text-gray-500 font-medium md:min-w-[150px]">{label}</p>
            <div className="flex items-center w-full  border-l min-h-full">
                {
                    type === 'textarea' ? (
                        <textarea
                            rows={7}
                            placeholder="Search here"
                            className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="Search here"
                            className="px-3 py-3 pl-2 outline-none bg-transparent w-full"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CustomInput