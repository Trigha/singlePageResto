import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

function Head() {
  return (
    <div>
      <div className="bg-white pt-8 w-full  md:mx-auto shadow-sm">
        <div className="flex">
          <BiArrowBack size={40} className="mx-7" />
          <div className="flex flex-col mb-10">
            <h1 className="text-lg font-bold text-gray-400 uppercase leading-none mb-3">
              alamat pengantaran
            </h1>
            <select
              className="bg-white border-2 border-none focus:outline-none focus:border-indigo-500 text-base   rounded-full w-full"
              placeholder="Pilih Alamat"
            >
              <option value="none" disabled selected hidden>
                Pilih Alamat
              </option>
              <option>Jl. Raya Cikarang</option>
              <option>Jl. Raya Cikarang</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mx-9 mb-">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-slate-600 uppercase leading-none mb-1">
              Sen
            </h1>
            <p className="mx-auto text-lg font-bold text-slate-600 uppercase leading-none mb-7">
              10
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-slate-600 uppercase leading-none mb-1">
              Sel
            </h1>
            <p className="mx-auto text-lg font-bold text-slate-600 uppercase leading-none">
              11
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-slate-600 uppercase leading-none mb-1">
              rab
            </h1>
            <p className="mx-auto text-lg font-bold text-slate-600 uppercase leading-none">
              12
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-slate-600 uppercase leading-none mb-1">
              kam
            </h1>
            <p className="mx-auto text-lg font-bold text-slate-600 uppercase leading-none">
              13
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-slate-600 uppercase leading-none mb-1">
              jum
            </h1>
            <p className="mx-auto text-lg font-bold text-slate-600 uppercase leading-none">
              14
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-gray-300 uppercase leading-none mb-1">
              sab
            </h1>
            <p className="mx-auto text-lg font-bold text-gray-300 uppercase leading-none">
              15
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-gray-300 uppercase leading-none mb-1">
              min
            </h1>
            <p className="mx-auto text-lg font-bold text-gray-300 uppercase leading-none">
              16
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
