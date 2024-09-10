import { FC } from 'react'

export const LineShape: FC<{ small?: boolean }> = ({ small }) => {
  return (
    <div
      className={`mb-6 mt-2 h-[6px] ${small ? 'w-12' : 'w-32'} bg-[#ba96fd] `}
    />
  )
}
