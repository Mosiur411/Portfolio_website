import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([])
    const [portfolioClickId, setPortfolioClickId] = useState({})
    useEffect(() => {
        fetch('https://secure-sierra-03514.herokuapp.com/service')
            .then(res => res.json())
            .then(data =>setPortfolio(data))

    })
    const Description = (ClickId) => {
        if (ClickId) {
            const found = portfolio.find(element => element.id === ClickId);
            if (found) {
                setPortfolioClickId(found)
            }
        }
    }

    return (
        <div data-aos="fade-down" className='bg-[#051b34] h-[100%] lg:h-[100vh] text-white md:px-16'>
            <h1 className='text-5xl uppercase font-bold text-center py-10'>MY<span className='text-yellow-500'>Portfolio</span></h1>
            <div className='px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ' >
                    {
                        portfolio.map(port => <div
                            key={port._id}
                        >
                            <label for="my-modal-3" onClick={() => Description(port.id)}>
                                <img className='w-full h-[200px] rounded-md' src={port.images} alt="portfolio Images" />
                            </label>
                        </div>)
                    }
                </div>

                {/* ============================ */}

                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box md:w-7/12  max-w-5xl bg-[#051b34]  ">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div>
                            <h1 className='text-4xl uppercase font-bold text-center py-3 text-yellow-500'>{portfolioClickId.name}</h1>
                            <div className='md:flex justify-between items-center py-5'>
                                <div>
                                    <h1 className='text-xl font-bold '>Technology</h1>
                                    <p className='text-yellow-500'>{portfolioClickId.Technology}</p>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold '>Website</h1>
                                    <a className='text-lime-400' href={portfolioClickId.LiveSite}>
                                        {portfolioClickId.LiveSite}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img className='w-full md:h-[400px]' src={portfolioClickId.images} alt="portfolio Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================ */}
            </div>
            <div className='w-full h-20 bg-[#051b34]'>
                
            </div>
        </div >
    );
};

export default Portfolio;