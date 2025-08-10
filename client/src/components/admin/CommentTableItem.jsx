import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";


function CommentTableItem({comment, fetchComments}) {

    const {blog, createdAt, _id, } = comment
    const BlogDate = new Date(createdAt)
  return (

    // comments inner data
    <tr className='order-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
            <br />
            <br />
            <b className='font-medium text-gray-600'>Name</b> : {comment.name}
            <br />
            <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            {BlogDate.toLocaleDateString()}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            <div className='inline-flex items-center gap-4'>
                {!comment.isApproved ? <TiTick className="w-5 text-2xl text-green-500 hover:scale-110 transition-all cursor-pointer"/> : <p className='text-xs border border-green-600 bg-gre-100 text-green-600 rounded-full px-3 py-1'>Approved</p>}
                <MdDelete className='w-5 text-2xl text-red-600 hover:scale-110 transition-all cursor-pointer'/>
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem