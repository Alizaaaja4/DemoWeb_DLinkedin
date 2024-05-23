import React from "react";

const Value = () => {
    return(
        <div className="mb-[2rem] mt-[2rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold block">
                The value that holds us true and to account
            </h1>

            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p=[1.5rem] ">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p=[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value