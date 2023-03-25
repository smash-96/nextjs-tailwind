import React from 'react'
import Image from "next/image";
import QuesIcon from '../../public/question-icon.svg'
import CheckBox from './components/checkBox';
import RangeSlider from './components/RangeSlider';

type Props = { modalClose: () => void, isModal: boolean }
function Modalcomponent(props: Props) {
    return (
        <div className={`${props.isModal ? 'modalcomponent_main modalcomponent_main_open md:px-[15px]' : 'modalcomponent_main md:px-[15px]'}`}>
            <div className='modalcomponent_bg absolute top-0 left-0 w-[100%] h-[100%] bg-dark-opacity_25'></div>
            <div className='modalcomponent_content delay-300 relative max-w-[700px] p-[24px] mx-[auto] my-[60px] bg-white z-10 rounded-16'>
                <h3 className='modal_heading text-3xl font-semibold text-black'>Create a new scrape</h3>
                <p className='modal_desc text-[#7F848D] text-lg mt-[12px] font-medium mb-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='input_otr flex items-start flex-col gap-[12px] mb-[24px]'>
                    <label className="text-sm font-semibold text-black">Name</label>
                    <input
                        className="theme_input"
                        type="text"
                        name="name"
                        placeholder="Enter a Name"
                    />
                </div>
                <div className='input_otr flex items-start flex-col gap-[12px]'>
                    <label className="text-sm font-semibold text-black flex items-center gap-[8px]">
                        Upwork RSS feed URL
                        <Image
                            className="ques_icon w-[20px] h-[20px] object-contain object-center"
                            src={QuesIcon}
                            alt="icon"
                        />
                    </label>
                    <input
                        className="theme_input"
                        type="text"
                        name="name"
                        placeholder="Enter a Name"
                    />
                </div>
                <div className='flex items-start flex-col gap-[16px] my-[24px]'>
                    <p className="text-sm font-semibold text-black flex items-center gap-[8px]">
                        Scrape interval
                        <Image
                            className="ques_icon w-[20px] h-[20px] object-contain object-center"
                            src={QuesIcon}
                            alt="icon"
                        />
                    </p>
                    {/* <div className="h-[5px] w-full bg-[#F0F5FF]">
                        <div className="h-[5px] bg-[#3461D6] w-[50%] relative">
                            <span className='absolute right-0 top-[50%] translate-y-[-50%] border-[1px] border-white w-[16px] h-[16px] rounded-[100%] bg-[#3461D6]'></span>
                        </div>
                    </div> */}
                    <RangeSlider
                        className="w-[100%] h-[16px]"
                        defaultValue={45}
                        step={20}
                    />
                    <div className='text_otr flex items-center justify-between w-[100%]'>
                        <span className='text-sm font-semibold text-[#7F848D]'>5mins</span>
                        <span className='text-sm font-semibold text-black'>15mins</span>
                        <span className='text-sm font-semibold text-[#7F848D]'>30mins</span>
                    </div>
                </div>
                <div className='input_otr flex items-start flex-col gap-[12px] mb-[24px]'>
                    <label className="text-sm font-semibold text-black">Description</label>
                    <textarea name="message" placeholder="Enter a description"></textarea>
                </div>
                <div className='input_otr flex items-start flex-col gap-[12px]'>
                    <p className="text-sm font-semibold text-black">Notify</p>
                    <p className='modal_desc text-[#7F848D] text-sm font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                {["Email", "Discord", "Slack"].map((val, ind) => {
                    return (
                        <div key={ind} className='input_otr flex items-start flex-col gap-[16px] my-[24px]'>
                            <CheckBox
                                checkText={val}
                            />
                        </div>
                    )
                })}
                <div className='flex items-center gap-[24px]'>
                    <button className="rounded-md w-[50%] text-lg font-semibold py-[12px] px-[24px] capitalize border-[1px] border-[#ADAFB6] text-black" onClick={props.modalClose}>
                        Cancel
                    </button>
                    <button className="rounded-md w-[50%] bg-primary-default text-lg font-semibold py-[12px] px-[24px] capitalize text-white">
                        + Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modalcomponent