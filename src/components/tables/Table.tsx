"use client";

import { GoTriangleDown } from "react-icons/go";
import { MdMoreVert } from "react-icons/md";

interface Header {
  key: string;
  label: string;
}

type Props = {
  headers: Header[];
  data: any[];
  click?: boolean;
  onView?: () => void;
};

const Table = ({ headers, data, click }: Props) => {
  return (
    <div className="w-full">
      <table className="w-full border-separate border-spacing-y-4">
        <thead className="border bg-[#1A88E11F]">
          <tr>
            {headers?.map((header) => (
              <th
                key={header?.key}
                className="text-left text-black font-normal px-4 py-3 text-sm lg:text-base"
              >
                <span className="flex items-center gap-3">
                  {header.label}
                  <GoTriangleDown />
                </span>
              </th>
            ))}
            {click && <th></th>}
          </tr>
        </thead>
        <tbody className="">
          {data?.map((dt, idx) => (
            <tr
              key={dt?.id ? dt?.id : idx}
              className="bg-white text-xs md:text-sm lg:text-base"
            >
              {headers?.map((hd, i) => (
                <td key={i} className="px-4 py-3 border-y">
                  {dt[hd.key]}
                </td>
              ))}
              <td className="border-y">
                <MdMoreVert />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
