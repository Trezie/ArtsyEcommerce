import React from 'react'
import MultiRangeSlider from '../../components/multislider/MultiRangeSlider'
import { CatTitle, CheckBox} from './CatTitle'

function SideNav() {
    return (
        <aside className='w-[244px] shrink-0 hidden md:block'>
            <div className='h-[3.75rem] w-[215px] bg-[#F4F2F2] rounded-[15px] flex items-center mb-8'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z" fill="#999999"/>
                </svg>
                <input type="text" placeholder='Search' className='bg-transparent focus:outline-0 text-[#999999]'/>
            </div>

            <div className='mb-8'>
                <div className='text-black text-xl font-medium leading-[157%] flex items-center mb-1'>
                    <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0417 14.4221C20.456 14.4221 19.8943 14.6547 19.4801 15.0689C19.066 15.483 18.8333 16.0447 18.8333 16.6304C18.8333 17.2161 19.066 17.7778 19.4801 18.1919C19.8943 18.6061 20.456 18.8387 21.0417 18.8387C21.6274 18.8387 22.1891 18.6061 22.6032 18.1919C23.0173 17.7778 23.25 17.2161 23.25 16.6304C23.25 16.0447 23.0173 15.483 22.6032 15.0689C22.1891 14.6547 21.6274 14.4221 21.0417 14.4221ZM14.7921 14.4221C15.2483 13.129 16.0944 12.0093 17.2137 11.2173C18.3331 10.4253 19.6705 10 21.0417 10C22.4128 10 23.7503 10.4253 24.8696 11.2173C25.9889 12.0093 26.835 13.129 27.2912 14.4221H43.125C43.7107 14.4221 44.2724 14.6547 44.6865 15.0689C45.1007 15.483 45.3333 16.0447 45.3333 16.6304C45.3333 17.2161 45.1007 17.7778 44.6865 18.1919C44.2724 18.6061 43.7107 18.8387 43.125 18.8387H27.2912C26.835 20.1318 25.9889 21.2515 24.8696 22.0435C23.7503 22.8355 22.4128 23.2608 21.0417 23.2608C19.6705 23.2608 18.3331 22.8355 17.2137 22.0435C16.0944 21.2515 15.2483 20.1318 14.7921 18.8387H12.2083C11.6226 18.8387 11.0609 18.6061 10.6468 18.1919C10.2327 17.7778 10 17.2161 10 16.6304C10 16.0447 10.2327 15.483 10.6468 15.0689C11.0609 14.6547 11.6226 14.4221 12.2083 14.4221H14.7921ZM34.2917 27.6721C33.706 27.6721 33.1443 27.9047 32.7301 28.3189C32.316 28.733 32.0833 29.2947 32.0833 29.8804C32.0833 30.4661 32.316 31.0278 32.7301 31.4419C33.1443 31.8561 33.706 32.0887 34.2917 32.0887C34.8774 32.0887 35.4391 31.8561 35.8532 31.4419C36.2673 31.0278 36.5 30.4661 36.5 29.8804C36.5 29.2947 36.2673 28.733 35.8532 28.3189C35.4391 27.9047 34.8774 27.6721 34.2917 27.6721ZM28.0421 27.6721C28.4983 26.379 29.3444 25.2593 30.4637 24.4673C31.5831 23.6753 32.9205 23.25 34.2917 23.25C35.6628 23.25 37.0003 23.6753 38.1196 24.4673C39.2389 25.2593 40.085 26.379 40.5412 27.6721H43.125C43.7107 27.6721 44.2724 27.9047 44.6865 28.3189C45.1007 28.733 45.3333 29.2947 45.3333 29.8804C45.3333 30.4661 45.1007 31.0278 44.6865 31.4419C44.2724 31.8561 43.7107 32.0887 43.125 32.0887H40.5412C40.085 33.3818 39.2389 34.5015 38.1196 35.2935C37.0003 36.0855 35.6628 36.5108 34.2917 36.5108C32.9205 36.5108 31.5831 36.0855 30.4637 35.2935C29.3444 34.5015 28.4983 33.3818 28.0421 32.0887H12.2083C11.6226 32.0887 11.0609 31.8561 10.6468 31.4419C10.2327 31.0278 10 30.4661 10 29.8804C10 29.2947 10.2327 28.733 10.6468 28.3189C11.0609 27.9047 11.6226 27.6721 12.2083 27.6721H28.0421ZM21.0417 40.9221C20.456 40.9221 19.8943 41.1547 19.4801 41.5689C19.066 41.983 18.8333 42.5447 18.8333 43.1304C18.8333 43.7161 19.066 44.2778 19.4801 44.6919C19.8943 45.1061 20.456 45.3387 21.0417 45.3387C21.6274 45.3387 22.1891 45.1061 22.6032 44.6919C23.0173 44.2778 23.25 43.7161 23.25 43.1304C23.25 42.5447 23.0173 41.983 22.6032 41.5689C22.1891 41.1547 21.6274 40.9221 21.0417 40.9221ZM14.7921 40.9221C15.2483 39.629 16.0944 38.5093 17.2137 37.7173C18.3331 36.9253 19.6705 36.5 21.0417 36.5C22.4128 36.5 23.7503 36.9253 24.8696 37.7173C25.9889 38.5093 26.835 39.629 27.2912 40.9221H43.125C43.7107 40.9221 44.2724 41.1547 44.6865 41.5689C45.1007 41.983 45.3333 42.5447 45.3333 43.1304C45.3333 43.7161 45.1007 44.2778 44.6865 44.6919C44.2724 45.1061 43.7107 45.3387 43.125 45.3387H27.2912C26.835 46.6318 25.9889 47.7515 24.8696 48.5435C23.7503 49.3355 22.4128 49.7608 21.0417 49.7608C19.6705 49.7608 18.3331 49.3355 17.2137 48.5435C16.0944 47.7515 15.2483 46.6318 14.7921 45.3387H12.2083C11.6226 45.3387 11.0609 45.1061 10.6468 44.6919C10.2327 44.2778 10 43.7161 10 43.1304C10 42.5447 10.2327 41.983 10.6468 41.5689C11.0609 41.1547 11.6226 40.9221 12.2083 40.9221H14.7921Z" fill="black"/>
                    </svg>
                    <span>Filter</span>
                </div>
                <div className='w-fill h-1.5 rounded-full bg-[#AFB091]'></div>
            </div>

            <div className='mb-8'>
                <CatTitle title="By Category" />
                <CheckBox id="editorial" title="Editorial" />
                <CheckBox id="fashion" title="Fashion" />
                <CheckBox id="optics" title="Optics" />
                <CheckBox id="art-meseuum" title="Art & Museum" />
                <CheckBox id="nature" title="Nature" />
            </div>

            <div className="mb-8">
                <CatTitle title="By Price" />
                <p className='my-4 mb-8 text-xl text-grey'>$100.00 - $150.00</p>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
            <div className="my-8">
                <CatTitle title="By artist" />
                <p className='underline mb-4'>All</p>
                <p className='mb-4 last:mb-0'>Below $100.00</p>
                <p className='mb-4 last:mb-0'>$100.00 - $150.00</p>
                <p className='mb-4 last:mb-0'>$150.00 - $200.00</p>
                <p className='mb-4 last:mb-0'>Above $200.00</p>
            </div>
            <div className="mb-4">
                <CatTitle title="Collection year"/>
            </div>
        </aside>
    )
}

export default SideNav
