import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PromptBox = ({prompt}) => {
  return (
    <div className="flex flex-wrap mt-2">
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <Link href="/prompts/[id]" as={`/prompts/${prompt.id}`}>
        <div className="mb-4 bg-white rounded-lg shadow-lg p-5 md:p-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                {prompt.title}
            </h2>
            <div className="flex">
                    <p className="text-gray-600 border border-gray-400 rounded-full px-2 py-1 text-sm mr-2">
                        {prompt.category}
                    </p>
            </div>
            <p className="text-gray-600 mb-4">
                {prompt.description}
            </p>
            <div className="flex justify-between">
                <div className="flex">
                    <Image src={prompt.authorImg} alt="logo" width={20} height={20} />
                    <p className="text-gray-600 ml-2">
                        {prompt.author}
                    </p>
                </div>
            </div>
          </div>
        </Link>
      </div>
</div>
  )
}

export default PromptBox