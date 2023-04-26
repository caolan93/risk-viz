import React from "react";

type Props = {
  className?: string;
};

const Table = ({ className }: Props) => {
  return (
    <section
      className={`flex flex-wrap basis-full content-start lg:basis-1/2 lg:flex-shrink justify-start overflow-hidden hover:overflow-x-scroll rounded-md ${
        className && className
      } `}
    >
      <table className="shadow-md w-full">
        <thead className="">
          <tr className="">
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Asset Name
            </th>
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Location
            </th>
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Business Cateogory
            </th>
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Risk Rating
            </th>
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Risk Factors
            </th>
            <th className="p-3 border border-gray-50 bg-orange-300 text-white">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              McKnight
            </td>
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              Lat: 46, Long: 60
            </td>
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              Energy
            </td>
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              0.06
            </td>
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              Earthquake
            </td>
            <td className="p-3 text-center text-slate-800 border bg-gray-100 border-gray-200 ">
              1950
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
