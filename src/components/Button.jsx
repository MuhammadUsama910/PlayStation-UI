import { twMerge } from "tailwind-merge"

const Button = ({ text, classes }) => {
  return (
    <>
    <button 
      className={twMerge('font-semibold rounded-full', classes)}>
      {text}
    </button>
    </>
  )
}

export default Button