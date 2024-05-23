import React from "react";

// Import icon
import { BiTimeFive } from 'react-icons/bi';

// Import images
import logo1 from '../../assets/huawei.png';
import logo2 from '../../assets/line.png';
import logo3 from '../../assets/shopee.jpg';
import logo4 from '../../assets/telkom.png';
import logo5 from '../../assets/tokped.png';
import logo6 from '../../assets/goggle.jpg';

const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Jakarta',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'Huawei Technologies Co.'
    },
    {
        id: 2,
        image: logo2,
        title: 'Network Eng',
        time: 'Now',
        location: 'Yogyakarya',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'NHN Corporation'
    },
    {
        id: 3,
        image: logo3,
        title: 'Sofware Eng',
        time: '9hrs',
        location: 'Bandung',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'SEA Group'
    },
    {
        id: 4,
        image: logo4,
        title: 'UI/ UX Design',
        time: '21hrs',
        location: 'Bali',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'PT Telkom Indonesia'
    },
    {
        id: 5,
        image: logo5,
        title: 'DevOps Eng',
        time: '21hrs',
        location: 'Bandung',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'PT Aplikasi Karya Anak Bangsa'
    },
    {
        id: 6,
        image: logo6,
        title: 'Cloud Eng',
        time: '23hrs',
        location: 'Jakarta Selatan',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        company: 'Alphabet Inc'
    },

];

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {Data.map(({ id, image, title, time, location, desc, company }) => (
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                        <span className="flex justify-between items-center gap-4">
                            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                                {title}
                            </h1>
                            <span className="flex items-center text-[#ccc] gap-1">
                                <BiTimeFive />{time}
                            </span>
                        </span>
                        <h6 className='text-[#ccc]'>{location}</h6>
                        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                            {desc}
                        </p>

                        <div className="company flex items-center gap-2 mt-4">
                            <img src={image} alt="Company Logo" className='w-[20%]' />
                            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                        </div>

                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor bg-transparent hover:bg-white group-hover/item:text-textColor '>
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
