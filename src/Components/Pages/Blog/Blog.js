import React from 'react';

const Blog = () => {
    return (
        <div className='bg-[#051b34] h-[100%] md:h-[100vh] text-white'>
            <h1 className='text-5xl uppercase font-bold text-center py-10'>MY <span className='text-yellow-500'>Blog</span></h1>
            <div>
                <div class="hero ">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi omnis expedita perferendis quibusdam cupiditate nisi repellat consequuntur. Voluptatum, quis totam repellendus voluptates modi deserunt, soluta laborum temporibus consectetur libero minus!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi omnis expedita perferendis quibusdam cupiditate nisi repellat consequuntur. Voluptatum, quis totam repellendus voluptates modi deserunt, soluta laborum temporibus consectetur libero minus!
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;